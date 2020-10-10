import pako from 'pako'
import toast from "@/static/js/dialog.js";
import store from '@/store/index.js';
import {getMoney} from "@/static/js/changeMoney";
let Socket = false;
let socketStatus = false;
let setIntervalWesocketPush = null;
// let socketUrl = 'wss://api-aws.huobi.pro/ws';
// let socketUrl = "wss://stream.binance.com:9443"
// let socketUrl = "ws://13.124.107.69:8188/ws/market"
let socketUrl = "ws://www.brt-finance.com:8188/ws/market"
// let socketUrl = "ws://ws.aespayment.info:8188/ws/market"


let ping = 1492420473027;
let socketArray=[];
let getUint8Value=function(e, t) {
    let n="";
    var a = e;
    var i = new DataView(a);
    for (var s = 0; s < i.byteLength; s++){
        let data = new Uint8Array(i.getUint8(s))
        // n += String.fromCharCode.apply(null, data)
        n += String.fromCharCode(i.getUint8(s));
    } 
    t(n);
  }
 
export const mySocket={
    getEntity:function(){
        return Socket;
    },
    /**
     * 建立websocket连接
     * @param {string} url ws地址
     */
    createSocket:function(url,cb){

        
        // let defaultKlineData = {
        //     ch: "market.brtusdt.kline.5min",
        //     symbol: "brtusdt",
        //     tick:{
        //         amount: 0,
        //         close: 0.05,
        //         count: 32603,
        //         high: 0.05,
        //         id: 202095710586,
        //         low: 0.05,
        //         open: 0.05,
        //         ts: 0,
        //         version: 202095710586,
        //         vol: 10696585.162752753,
        //     }
        // }
        // mySocket.upDataKlineData(defaultKlineData)







        url = url?url:socketUrl;
        if(socketStatus) return;
        Socket=uni.connectSocket({
            url: socketUrl,
            header: {
                'content-type': 'application/json'
            },
            method: 'CONNECT',
            complete: (e)=> {                   
            },
        });
        uni.onSocketOpen(function (res) {
            socketStatus = true;
            // console.log('open')
            if(cb){
                cb()
            }else{
                mySocket.onopen();
            }
        });
        uni.onSocketMessage(function (res) {
            // console.log(res)
            // console.log(typeof(res.data))
            if(typeof(res.data)==="object"){
                return
            }
            let data = JSON.parse(res.data);
            mySocket.upData(data);
        });
        uni.onSocketError(function (res) {
            console.log('错误')
            socketStatus = false;
            mySocket.createSocket();
        });
        uni.onSocketClose(function (res) {
            socketStatus = false;
            console.log('关闭')
            mySocket.createSocket();
        });
        
    },
    upData(data){
        let ch = data.ch;
        if(ch.indexOf('trade.detail')>-1&&data.tick){
            mySocket.upDataDetailData(data)
        }else if(ch.indexOf('depth')>-1){
            mySocket.upDataDepthData(data)
        }else if(ch.indexOf('kline')>-1){
            mySocket.upDataKlineData(data)
        }else if(ch.indexOf('detail')>-1){
            mySocket.upDataRangeData(data)
        }
        // console.log(data)
        
    },
    //成交明细订阅
    upDataDetailData(data){
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;
        let symbol = data.symbol;
        let tick = data.tick;
        let OldDetail = KLineTradingPair.detail;
        if(KLineTradingPair.id===symbol){
            let detail = data.tick.data.concat(OldDetail);
            let newData = detail.slice(0,10)
            let KLineTradingPairObj = {
                ...KLineTradingPair,
                detail:newData
            }
            store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
        }
    },

    upDataKlineData(data){
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;
        let symbol = data.symbol;
        let tick = data.tick;
        if(KLineTradingPair.id===symbol){
            // asks = mySocket.handleDeepData(asks);
            let dataArray = KLineTradingPair.dataArray;
            if(dataArray.length>0){
                let newData = dataArray;
                let lastItem = dataArray[dataArray.length-1];
                if(lastItem.id===tick.id){
                    newData[newData.length-1] = tick;
                }else{
                    newData.push(tick)
                }
                let KLineTradingPairObj = {
                    ...KLineTradingPair,
                    dataArray:dataArray
                }
                store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
            }
            // let KLineTradingPairObj = {
            //     ...KLineTradingPair,
            //     depth:{
            //         asks, 
            //         bids
            //     }
            // }
            // console.log(asks)
            // store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
        }
    },
    upDataRangeData(data){
        let tradePairData = store.state.tradeData.tradePairData;
        let symbol = data.symbol;
        let tick = data.tick;
        let rangeList = store.state.defaultData.rangeData;
        let selectedCurrency = store.state.defaultData.selectedCurrency.code;
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;
        let newData = tradePairData.map(function (item) {
            let tradingSymol = store.state.tradeData.tradingSymol;
            
            // console.log(tradingSymol)
            
            // tradingSymol[]
            if(item.id===symbol){
                let symbolName = item.name;
                tradingSymol[symbolName].nowData=data.tick;
                store.commit("setTredDataSync",{key:"tradingSymol", val: tradingSymol,})
                let range = (((tick.close-tick.open)/tick.open).toFixed(4))*100;
                // let code = item.type+selectedCurrency
                // let price = Number(rangeList[code])*tick.close;
                // debugger
                let close  = tick.close;
                if(symbolName==="brtusdt"){
                    close = tick.close===0||tick.close==='0'?0.05:tick.close
                }
                let price = getMoney(tick.close,"USDT").price
                if(KLineTradingPair.id === item.id){
                    let KLineTradingPairObj = {
                        ...KLineTradingPair,
                        range:range,
                        nowData:data.tick,
                        price:price
                    }
                    store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
                }
                // console.log(item.type+selectedCurrency)
              return {
                ...item,
                // dataArray:data,
                range:range,
                nowData:data.tick,
                price:price
              }
            }else{
              return item
            }
              
          });
          store.commit("setTredDataSync",{key:"tradePairData", val: newData,})
        //   store.commit("setTredDataSync",{key:"tradePairData", val: newData,})
    },
    upDataDepthData(data){
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;
        let symbol = data.symbol;
        if(KLineTradingPair.id===symbol){
            let asks = data.tick.asks;
            let bids = data.tick.bids;
            asks = mySocket.handleDeepData(asks).reverse();//卖单
            bids = mySocket.handleDeepData(bids);//买单
            
            let KLineTradingPairObj = {
                ...KLineTradingPair,
                depth:{

                    asks, 
                    bids
                }
            }
            // console.log(asks)
            store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
        }
    },
    handleDeepData(data){
        
        if(data.length===0){
            return []
        }
        let all = 0;
        let depth = 0;
        let NewData = []
        for (let index = 0; index < 5; index++) {
            let item = data[index];
            let obj = {
                size:0,
                price:0,
                all:all,
                percent:0,
                depth:depth
            }
            if(item){
                all = all+item[1];
                depth=depth+item[1];
                let percent=(depth/all)*2
                percent = percent>1?1:percent;
                percent = percent*100;
                obj = {
                    size:item[1],
                    price:item[0],
                    all:all,
                    percent:percent,
                    depth:depth
                }
            }
            NewData.push(obj)
            
        }
        return NewData
        // data.forEach(item => {
        //     all = all+item[1];
        //     depth=depth+item[1];
        //     let percent=(depth/all)*2
        //     percent = percent>1?1:percent;
        //     percent = percent*100;
        //     let obj = {
        //         size:item[1],
        //         price:item[0],
        //         all:all,
        //         percent:percent,
        //         depth:depth
        //     }
        // });
        // let all = data[0][1]+data[1][1]+data[2][1]+data[3][1]+data[4][1];
        // // console.log(data)
        // let newData = data.slice(0,5)
        
        // let depth = 0;
        // let res = newData.map(function (item,index) {
        //     depth=depth+item[1];
        //     let percent=(depth/all)*2
        //     percent = percent>1?1:percent;
        //     percent = percent*100;
        //     let obj = {
        //         size:item[1],
        //         price:item[0],
        //         all:all,
        //         percent:percent,
        //         depth:depth
        //     }
        //     return obj
            
        // })

        return res
    },
    //socket 订阅行情
    onopen:function(){
        let tradePairData = store.state.tradeData.tradePairData;
        

         
        // let data = {
        //     sub:"market.all.detail",
        //     // sub:"market.all.detail",
        //     // period:"1min",
        //     id: 'notice'+1,
        //     isLocal:false
            
        // }
        // mySocket.subscribe(data);   
        // mySocket.subscribe(data); 
        let subArray = [];
        tradePairData.forEach((element,index) => {           
            let str = element.name + element.type;
            str = str.toLowerCase();
            let sub="market."+str+".detail"
            if(element.isLocal){
                let data = {
                    sub:sub,
                    // sub:"market.all.detail",
                    // period:"1min",
                    id: 'marketDetail_local',
                    isLocal:element.isLocal
                    
                } 
                mySocket.subscribe(data); 

            }else{
                subArray.push(sub)
                if(index===tradePairData.length-1){
                    let data = {
                        sub:subArray.join(','),
                        // sub:"market.all.detail",
                        // period:"1min",
                        id: 'marketDetail',
                        isLocal:element.isLocal
                        
                    } 
                    mySocket.subscribe(data); 
                }
            }
            
                                
        });
        mySocket.subscribeDepth();
        mySocket.subscribeKline('5min');
        mySocket.subscribeDetail()
        

        
    },
    subscribeDetail(item){
        let KLineTradingPair = item?item:store.state.tradeData.KLineTradingPair;

        let str = KLineTradingPair.name + KLineTradingPair.type;
        str = str.toLowerCase();
        let sub = "market."+str+".trade.detail"
        let data = {
            sub:sub,
            // sub:"market.all.detail",
            // period:"1min",
            id: 'markettradeDetail',
            isLocal:KLineTradingPair.isLocal
            
        } 
        mySocket.subscribe(data); 
    },
    subscribeDepth(item){
        let KLineTradingPair = item?item:store.state.tradeData.KLineTradingPair;

        let str = KLineTradingPair.name + KLineTradingPair.type;
        str = str.toLowerCase();
        let sub = "market."+str+".depth.step0"
        let data = {
            sub:sub,
            // sub:"market.all.detail",
            // period:"1min",
            id: 'marketdepth',
            isLocal:KLineTradingPair.isLocal
            
        } 
        mySocket.subscribe(data); 
    
    },
    subscribeKline(period){
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;

        let str = KLineTradingPair.name + KLineTradingPair.type;
        str = str.toLowerCase();
        let sub = "market."+str+".kline."+period;
        let data = {
            sub:sub,
            // sub:"market.all.detail",
            period:period,
            id: 'marketKLine',
            isLocal:KLineTradingPair.isLocal
            
        } 
        mySocket.subscribe(data); 
    
    },
    //订阅主题
    subscribe:function(data){
        if(socketStatus){
            let subK = { // 订阅数据
                sub: "market.btcusdt.kline.1min",
                id: "btcusdt",
                period:"3min"
            };
            subK = data?data:subK;
            // subK = { // 请求对应信息的数据
            //     req: "market.btcusdt.kline.5min",
            //     // sub: "market.btcusdt.kline.1min",
            //     id: "btcusdt",
            //     period:"5min",
            //     // type:'step1'
            //     // from: Math.round(new Date().getTime()/1000) - 60,
            //     // to: Math.round(new Date().getTime()/1000)
            // };
            mySocket.send(subK);
        }else{
            mySocket.createSocket(socketUrl,function(){
                let subK = { // 订阅数据
                    sub: "market.btcusdt.kline.1min",
                    id: "btcusdt",
                    period:"3min"
                };
                subK = data?data:subK;
                // subK = { // 请求对应信息的数据
                //     req: "market.btcusdt.kline.5min",
                //     // sub: "market.btcusdt.kline.1min",
                //     id: "btcusdt",
                //     period:"5min",
                //     // type:'step1'
                //     // from: Math.round(new Date().getTime()/1000) - 60,
                //     // to: Math.round(new Date().getTime()/1000)
                // };
                mySocket.send(subK);
            });
        }
        
    },
    getData:function(){

    },
    /**连接失败重连 */
    onerrorWS:function(){
        Socket.close()
        clearInterval(setIntervalWesocketPush)
        console.log('连接失败重连中')
        if (Socket.readyState !== 3) {
            Socket = null
            mySocket.createSocket()
        }
    },
    /**断开重连 */
    oncloseWS:function(){
        clearInterval(setIntervalWesocketPush)
        console.log('websocket已断开....正在尝试重连')
        if (Socket.readyState !== 2) {
            Socket = null
            mySocket.createSocket()
        }
    },
    //收到消息
    onmessageWS:function(evt){
        // console.log(data.buffer)
        console.log(evt.data)
        // console.log(evt.data[Uint8Array[evt.data.byteLength]])
        // for(var i=0;i<evt.data.length;i++){
        //     // console.log(evt.data[0])
        // }
        // for (const key in evt) {
        //     console.log(key)
        //     console.log(evt.data[key])
        //     // if (object.hasOwnProperty(key)) {
        //     //     const element = object[key];
                
        //     // }
        // }
        // var uint8_msg = new Uint8Array(evt.data);
        // // 解码成字符串
        // var decodedString = String.fromCharCode.apply(null, uint8_msg);
        // console.log(decodedString); 
        // // parse,转成json数据
        // var data = JSON.parse(decodedString);
        // console.log(data);
        // let d = uni.arrayBufferToBase64(data.data)
        // // let res = ecode(d)
        // console.log(d)
        // getUint8Value(data.data,function(res){
        //     console.log(res)
        // })
        // console.log(data.data[["Uint8Array"]])
        // // let blob = new Blob([buffer])
        let blob = new Blob([evt.data])
        let reader = new FileReader();
        reader.onload = function (e) {
            let ploydata = new Uint8Array(e.target.result);
            let msg = pako.inflate(ploydata, {to: 'string'});
            console.log(msg)
            mySocket.handleData(msg);
        };
        reader.readAsArrayBuffer(blob, "utf-8");
    },
    //处理消息
    handleData:function(msg){
        let data = JSON.parse(msg);
        // console.log(data)
        // console.log()
        
        // if (data.pong) {
        //     // 如果是 ping 消息
        //     mySocket.sendHeartMessage(data.pong);
        // } else if(data.ping){
        //     mySocket.sendHeartMessage(data.ping);
        // }
        // else if (data.status === 'ok') {
        //     // 响应数据
        //     window.dispatchEvent(new CustomEvent('onRceiveMsg',
        //         {
        //             detail: {
        //                 ...data
        //             },
        //             bubbles: true,    //是否冒泡
        //             cancelable: false //是否取消默认事件
        //         }
        //     ))
        //     // mySocket.handleReponseData(data);
        // } else {
            
        //     window.dispatchEvent(new CustomEvent('onRceiveMsg_time',
        //         {
        //             detail: {
        //                 ...data
        //             },
        //             bubbles: true,    //是否冒泡
        //             cancelable: false //是否取消默认事件
        //         }
        //     ))
        //     // 实时数据体
        //     // console.log(data)
        // }
    },
    handleReponseData(data){
        console.log(data)
    },
    //发送响应信息
    sendHeartMessage:function(ping){
        mySocket.send({pong: ping});
    },
    //发送消息
    send:function(message){
        // if (!Socket) {
        //     mySocket.createSocket()
        //   } else{
            // Socket.sendSocketMessage(JSON.stringify(message))
            uni.sendSocketMessage({
                data:JSON.stringify(message),
                complete:function(e){
                    console.log(e)
                }
            })
        //   }
    },
    //发送数据但连接未建立时进行处理等待重发
    connecting:function(message){
        setTimeout(() => {
            if (Socket.readyState === 0) {
                mySocket.connecting(message)
            } else {
                mySocket.send(message)
            }
          }, 1000)
    },
    
}

const ecode = function (input) { 
    var output = ""; 
    var chr1, chr2, chr3; 
    var enc1, enc2, enc3, enc4; 
    var i = 0; 
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); 
    while (i < input.length) { 
        enc1 = _keyStr.indexOf(input.charAt(i++)); 
        enc2 = _keyStr.indexOf(input.charAt(i++)); 
        enc3 = _keyStr.indexOf(input.charAt(i++)); 
        enc4 = _keyStr.indexOf(input.charAt(i++)); 
        chr1 = (enc1 << 2) | (enc2 >> 4); 
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); 
        chr3 = ((enc3 & 3) << 6) | enc4; 
        output = output + String.fromCharCode(chr1); 
        if (enc3 != 64) { 
            output = output + String.fromCharCode(chr2); 
        } 
        if (enc4 != 64) { 
            output = output + String.fromCharCode(chr3); 
        } 
    } 
    output = _utf8_decode(output); 
    return output; 
} 
export default mySocket