import pako from 'pako'
import toast from "@/static/js/dialog.js";
import store from '@/store/index.js';
let Socket = false;
let socketStatus = false;
let setIntervalWesocketPush = null;
// let socketUrl = 'wss://api-aws.huobi.pro/ws';
// let socketUrl = "wss://stream.binance.com:9443"
// let socketUrl = "ws://13.125.88.118:8188/ws/market"
let socketUrl = "ws://52.78.213.185:8188/ws/market"

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
            if(cb){
                cb()
            }else{
                mySocket.onopen();
            }
            // // console.log(res)
            // // setTimeout(function () {
            
            //     // }, 2000)    
            // // console.log(store.state)
            // toast.show({title:"WebSocket连接已打开！"});
            // console.log('WebSocket连接已打开！');
        });
        uni.onSocketMessage(function (res) {
            let data = JSON.parse(res.data);
            mySocket.upData(data);
            // console.log(JSON.parse(res.data))
            //             ch: "market.ethusdt.detail"
            // symbol: "ethusdt"
            // tick:
            // amount: 797466.8367888945
            // close: 335.3
            // count: 418752
            // high: 343.45
            // id: 219018751981
            // low: 313.41
            // open: 341.68
            // ts: 0
            // version: 219018751981
            // vol: 262151886.003173
            // __proto__: Object
            // ts: 1600953565024
            // toast.show({title:"收到消息"});
            // console.log('收到服务器内容：' + res.data);
        });
        uni.onSocketError(function (res) {
            mySocket.createSocket();
        });
    },
    upData(data){
        let ch = data.ch;
        if(ch.indexOf('detail')>-1&&data.tick){
            mySocket.upDataRangeData(data)
        }else if(ch.indexOf('depth')>-1){
            mySocket.upDataDepthData(data)
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
            
            if(item.id===symbol){
                let range = (((tick.close-tick.open)/tick.open).toFixed(4))*100;
                let code = item.type+selectedCurrency
                let price = Number(rangeList[code])*tick.close; 
                if(KLineTradingPair.id === item.id){
                    let KLineTradingPairObj = {
                        ...KLineTradingPair,
                        range:range,
                        nowData:data.tick,
                        price:price.toFixed(6)
                    }
                    store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
                }
                // console.log(item.type+selectedCurrency)
              return {
                ...item,
                // dataArray:data,
                range:range,
                nowData:data.tick,
                price:price.toFixed(6)
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
        if(tradePairData.id===symbol){
            let KLineTradingPairObj = {
                ...KLineTradingPair,
                depth:data.tick
            }
            store.commit("setTredDataSync",{key:"KLineTradingPair", val: KLineTradingPairObj,})
        }
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
                // console.log()
                // mySocket.subscribe(data);   
                // mySocket.subscribe(data); 
        let subArray = [];
        // tradePairData.forEach((element,index) => {           
        //     let str = element.name + element.type;
        //     str = str.toLowerCase();
        //     let sub="market."+str+".detail"
        //     if(element.isLocal){
        //         let data = {
        //             sub:sub,
        //             // sub:"market.all.detail",
        //             // period:"1min",
        //             id: 'marketDetail_local',
        //             isLocal:element.isLocal
                    
        //         } 
        //         mySocket.subscribe(data); 

        //     }else{
        //         subArray.push(sub)
        //         if(index===tradePairData.length-1){
        //             let data = {
        //                 sub:subArray.join(','),
        //                 // sub:"market.all.detail",
        //                 // period:"1min",
        //                 id: 'marketDetail',
        //                 isLocal:element.isLocal
                        
        //             } 
        //             mySocket.subscribe(data); 
        //         }
        //     }
            
                                
        // });
        mySocket.subscribeDepth()
        
    },
    subscribeDepth(){
        let KLineTradingPair = store.state.tradeData.KLineTradingPair;
        let str = KLineTradingPair.name + KLineTradingPair.type;
        str = str.toLowerCase();
        let sub = "market."+str+".depth.step1"
        let data = {
            sub:sub,
            // sub:"market.all.detail",
            // period:"1min",
            id: 'marketdepth',
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