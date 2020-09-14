import pako from 'pako'
import socketMain from './index.js'


let Socket = false;
let setIntervalWesocketPush = null;
// let socketUrl = 'wss://api-aws.huobi.pro/ws';
let ping = '1492420473027';

export const socketFunc={
    onopen:function(res){
        Socket = res;
        socketFunc.sendPing();
//         window.dispatchEvent(new CustomEvent('onmessageWS', {
//     detail: {
//       data: e.data
//     }
//   }))
        socketFunc.subscribe();
        
    },
    /**打开WS之后发送心跳 */
    sendPing:function(){
        clearInterval(setIntervalWesocketPush)
        socketFunc.send(ping);
        setIntervalWesocketPush = setInterval(() => {
            socketFunc.send(ping)
          }, 5000)
    },
    //订阅主题
    subscribe:function(data){
        let subK = { // 订阅数据
            sub: "market.btcusdt.kline.1min",
            id: "btcusdt"
        };
        subK = data?data:subK;
        // let requestK = { // 请求对应信息的数据
        //     req: "market.btcusdt.kline.1min",
        //     id: "btcusdt",
        //     // period:"1min"
        //     from: Math.round(new Date().getTime()/1000) - 60,
        //     to: Math.round(new Date().getTime()/1000)
        // };
        socketFunc.send(subK);
    },
    /**连接失败重连 */
    onerrorWS:function(){
        Socket.close()
        clearInterval(setIntervalWesocketPush)
        console.log('连接失败重连中')
        if (Socket.readyState !== 3) {
            Socket = null
            socketMain.createSocket()
        }
    },
    /**断开重连 */
    oncloseWS:function(){
        clearInterval(setIntervalWesocketPush)
        console.log('websocket已断开....正在尝试重连')
        if (Socket.readyState !== 2) {
            Socket = null
            socketMain.createSocket()
        }
    },
    //收到消息
    onmessageWS:function(event){
        let blob = event.data;
        let reader = new FileReader();
        reader.onload = function (e) {
            let ploydata = new Uint8Array(e.target.result);
            let msg = pako.inflate(ploydata, {to: 'string'});
            socketFunc.handleData(msg);
        };
        reader.readAsArrayBuffer(blob, "utf-8");
    },
    //处理消息
    handleData:function(msg){
        let data = JSON.parse(msg);
        if (data.ping) {
            // 如果是 ping 消息
            socketFunc.sendHeartMessage(data.ping);
        } else if (data.status === 'ok') {
            // 响应数据
            socketFunc.handleReponseData(data);
        } else {
            // 实时数据体
            console.log(data)
        }
    },
    handleReponseData(data){
        console.log(data)
    },
    //发送响应信息
    sendHeartMessage:function(ping){
        socketFunc.send({"pong": ping});
    },
    //发送消息
    send:function(message){
        if (Socket !== null && Socket.readyState === 3) {
            Socket.close()
            socketMain.createSocket()
          } else if (Socket.readyState === 1) {
            socketFunc.send(message)
          } else if (Socket.readyState === 0) {
            socketFunc.connecting(message)
          }
    },
    //发送数据但连接未建立时进行处理等待重发
    connecting:function(message){
        setTimeout(() => {
            if (Socket.readyState === 0) {
                socketFunc.connecting(message)
            } else {
                socketFunc.send(message)
            }
          }, 1000)
    },
    
}
export default socketFunc