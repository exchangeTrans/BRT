let commonIp='http://www.port.xinshengxl.com/';
let api={
    commApi:commonIp+"xlzx/api/app",//（服务器）

    userCenter:commonIp+"user-center/api/app",//用户中心100(user-center)
    wallet:commonIp+"wallet/api/app",//钱包(user-center)
    member:commonIp+"member/api/app",//钱包(user-center)
    xlzx:commonIp+"xlzx/api/app",//api/app后端服务101（xlzx）
    message:commonIp+"message/api/app",//消息服务103(message)
    push:commonIp+"push/api/app",//推送服务104(push)
    payCenter:commonIp+"pay-center/api/app",//支付中心105(pay-center)

    // cms:commonIp+":7102/api/app",//内容服务102(cms本地)
    cms:commonIp+"cms/api/app",//内容服务102(cms服务器)

    // cms:commonIp+"xlzx/api/app",//会员服务106
    // cms:commonIp+"xlzx/api/app",//全局网关107
    oss:"http://oss-cn-qingdao.aliyuncs.com"
};
export default api;