// import pako from 'pako'
// import store from '@/store'
let pako=""
let Socket = false;
let setIntervalWesocketPush = null;
let socketUrl = 'wss://api-aws.huobi.pro/ws';
let ping = 1492420473027;

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
        Socket && Socket.close();

        if(!Socket){
            uni.connectSocket({
                url: socketUrl,
                header: {
                    'content-type': 'application/json'
                },
                method: 'CONNECT',
                complete: (e)=> {
                    console.log(e)
                },
            });
            // console.log('建立websocket连接');
            // Socket = new WebSocket(url)
            // Socket.onopen = mySocket.onopen;
            // Socket.onmessage = mySocket.onmessageWS;
            // Socket.onerror = mySocket.onerrorWS;
            // Socket.onclose = mySocket.oncloseWS;
            
        }else{
            console.log('websocket已连接')
        }
        return Socket;
    },
    onopen:function(){
        mySocket.sendPing();
        
        window.dispatchEvent(new CustomEvent('onOpenWS'))
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
    onmessageWS:function(event){
        let blob = event.data;
        let reader = new FileReader();
        reader.onload = function (e) {
            let ploydata = new Uint8Array(e.target.result);
            let msg = pako.inflate(ploydata, {to: 'string'});
            mySocket.handleData(msg);
        };
        reader.readAsArrayBuffer(blob, "utf-8");
    },
    //处理消息
    handleData:function(msg){
        let data = JSON.parse(msg);
        // console.log(data)
        if (data.pong) {
            // 如果是 ping 消息
            mySocket.sendHeartMessage(data.pong);
        } else if(data.ping){
            mySocket.sendHeartMessage(data.ping);
        }
        else if (data.status === 'ok') {
            // 响应数据
            window.dispatchEvent(new CustomEvent('onRceiveMsg',
                {
                    detail: {
                        ...data
                    },
                    bubbles: true,    //是否冒泡
                    cancelable: false //是否取消默认事件
                }
            ))
            // mySocket.handleReponseData(data);
        } else {
            
            window.dispatchEvent(new CustomEvent('onRceiveMsg_time',
                {
                    detail: {
                        ...data
                    },
                    bubbles: true,    //是否冒泡
                    cancelable: false //是否取消默认事件
                }
            ))
            // 实时数据体
            // console.log(data)
        }
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
        if (Socket !== null && Socket.readyState === 3) {
            Socket.close()
            mySocket.createSocket()
          } else if (Socket.readyState === 1) {
            Socket.send( JSON.stringify(message))
          } else if (Socket.readyState === 0) {
            mySocket.connecting(message)
          }
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
export default mySocket