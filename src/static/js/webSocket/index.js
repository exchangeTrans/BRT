import pako from 'pako'
import toast from "@/static/js/dialog.js";
import store from '@/store/index.js';
// let tradePairData = store.state.tradeData.tradePairData;
// import store from '@/store'
// import Socket from 'plus-websocket'
// let pako=""
let Socket = false;
let setIntervalWesocketPush = null;
// let socketUrl = 'wss://api-aws.huobi.pro/ws';
// let socketUrl = "wss://stream.binance.com:9443"

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
    createSocket:function(url){
        url = url?url:socketUrl;
            Socket=uni.connectSocket({
                url: socketUrl,
                header: {
                    'content-type': 'application/json'
                },
                method: 'CONNECT',
                complete: (e)=> {
                    // setTimeout(function () {
                    //     Socket.onOpen = mySocket.onopen;
                    // }, 2000)
                    
                },
            });
            uni.onSocketOpen(function (res) {
                // console.log(res)
                mySocket.onopen();
                // console.log(store.state)
                // toast.show({title:"WebSocket连接已打开！"});
                // console.log('WebSocket连接已打开！');
            });
            uni.onSocketMessage(function (res) {
                console.log(res.data)
                toast.show({title:"收到消息"});
                console.log('收到服务器内容：' + res.data);
              });
              uni.onSocketError(function (res) {
                console.log(res)
                // mySocket.onopen();
                toast.show({title:"WebSocket失败！"});
                console.log('WebSocket失败！');
            });
            // Socket.onOpen = mySocket.onopen;
            // Socket.onMessage = mySocket.onmessageWS;
            // Socket.onMessage = mySocket.onmessageWS;
            // // console.log('建立websocket连接');
            // // Socket = new WebSocket(url)
            // Socket.onOpen = mySocket.onopen;
            // Socket.onmessage = mySocket.onmessageWS;
            // Socket.onerror = mySocket.onerrorWS;
            // Socket.onclose = mySocket.oncloseWS;
            
        // }else{
        //     console.log('websocket已连接')
        // }
        // return Socket;
    },
    // createSocket:function(url){
    //     url = url?url:socketUrl;
    //     Socket && Socket.close();
    //     if(!Socket){
    //         // console.log('建立websocket连接');
    //         Socket = new WebSocket(url)
    //         Socket.onopen = mySocket.onopen;
    //         Socket.onmessage = mySocket.onmessageWS;
    //         Socket.onerror = mySocket.onerrorWS;
    //         Socket.onclose = mySocket.oncloseWS;
            
    //     }else{
    //         console.log('websocket已连接')
    //     }
    //     return Socket;
    // },
    //socket 走后端不需要发送心跳
    onopen:function(){
        let tradePairData = store.state.tradeData.tradePairData;
        tradePairData.forEach(element => {           
            let str = element.name + element.type;
            str = str.toLowerCase();
            let data = {
                sub:"market."+str+".kline.1min",
                period:"1min",
                id: 'notice'+str,
                isLocal:element.isLocal
                
            }
            mySocket.subscribe(data);                       
        });
        // console.log('open')
        // mySocket.sendPing();
        // toast.show({title:"发送心跳"});
        
        // window.dispatchEvent(new CustomEvent('onOpenWS'))
        // mySocket.subscribe();
        
    },
    /**打开WS之后发送心跳 */
    sendPing:function(){
        // clearInterval(setIntervalWesocketPush)
        mySocket.send({ping:ping});
        // setIntervalWesocketPush = setInterval(() => {
        //     mySocket.send(ping)
        //   }, 5000)
    },
    //获取数据
    //订阅主题
    subscribe:function(data){
        // console.log(store)
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