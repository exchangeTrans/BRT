// 生产环境
// let commonIp='https://www.brt.today';
// let qiniuApi='http://sida-tj.com/';
// let socketUrl = "ws://3.35.47.120:8188/ws/market"
// // let socketUrl = "ws://13.124.107.69:8188/ws/market"
// let api={
//     commApi:commonIp,
//     klineApi:'http://3.35.47.120:8100',
//     // klineApi:'http://13.124.107.69:8100',
//     socketUrl:socketUrl,
//     qiniuApi:qiniuApi,
// };

let commonIp='https://www.brt.today';
let qiniuApi='http://sida-tj.com/';
let socketUrl = "ws://ws.brt-finance.com/ws/market"
let api={
    commApi:commonIp,
    klineApi:'http://k-line.brt-finance.com/kline/list',
    socketUrl:socketUrl,
    qiniuApi:qiniuApi,
};















//测试环境
// let commonIp='http://www.aespayment.info'
// let qiniuApi='http://sida-tj.com/';
// let socketUrl = "ws://ws.aespayment.info:8188/ws/market"

// let api={
//     commApi:commonIp,
//     socketUrl:socketUrl,
//     klineApi:'http://ws.aespayment.info:8100',
//     qiniuApi:qiniuApi,
// };
export default api;