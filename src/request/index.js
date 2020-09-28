import api from './api.js';
import datastorage from '@/static/js/datastorage.js';
import jumpPage from '@/static/js/jumpPage.js';
// import monitorFunc from '@/static/js/monitorFunc.js';
// import {gloabeData} from '@/static/common.js';
// import toast from "../static/dialog";


// 请求头
const formatHeaders = (acHeaders) => {
    // debugger
    let headers = {};
    // headers['exchange-token'] = getCookie('token') || 'c5fa97c1140aafea1ef1e84b67503d5e0db18d0ca0ff4819a0ca3f24722407df';
    // headers['exchange-client'] = 'pc';
    // headers['exchange-language'] = getCookie('lan') || 'zh_CN';
    // headers['Content-type'] = 'application/x-www-form-urlencoded';

    headers['Content-type'] = "application/x-www-form-urlencoded";
    // eslint-disable-next-line no-undef
    // headers["__token"] = uni.getStorageSync("tooken");
    // headers["Security"] = datastorage.getSync({key:"userToken"})
    // headers["Authorization"] = "Bearer "+datastorage.getSync({key:"userToken"});
    // headers["AuthorizationType"] = "tool"
    // headers['Content-type'] = "multipart/form-data";

    // headers["__token"] = getCookie("tooken");
    // headers['Accept'] = 'application/msword'

    // headers['exchange-time'] = formatTime(new Date().getTime()) Access-Control-Allow-Origin

    if (acHeaders) {
        headers = {...headers, ...acHeaders};
    }
    return headers;
};
const getParams = (params) => {
    // debugger
    // let postData = {
    //     appPackage:"com.xinshenkj.mm",//App 包名
    //     appChannel :"vivo",//App 渠道
    //     appVersion :"v1.0.5",//App 版本
    //     deviceToken:"423423",//App 设备应用 Token
    //     operatingSystem :"ANDROID",//App 操作系统: ANDROID(Android), IOS(苹果)可用值:ANDROID,IOSg
    // }
    // eslint-disable-next-line no-undef
    // let postData = uni.getStorageSync("mobileMsg");
    let postData = datastorage.getSync({key: "mobileMsg"});
    let appKey = 'f86e1df48f4d825aaeb689eea124190b';
    let loginMsg = datastorage.getSync({key: "loginMsg"});
    let langMsg = datastorage.getSync({key: "langMsg"});
    //
    let userLoginId = loginMsg ? loginMsg.userLoginId : '';
    let userLoginToken = loginMsg ? loginMsg.userLoginToken : '';
    let devicePlatformLanguage = langMsg ? langMsg.code : 1;
    let pageRepeatCode = (new Date()).valueOf();
    postData = {
        userLoginId,
        userLoginToken,
        appKey,
        devicePlatformLanguage,
        pageRepeatCode,
        ...postData,
        ...params,
    };
    if (params) {
        postData = {
            ...postData,
            ...params
        };
        // console.log(postData);
    }
    // // console.log(postData);
    // let phoneMsg = uni.getSystemInfoSync();
    // 		// console.log(JSON.parse(plus))
    // // console.log(phoneMsg);

    // // console.log(plus.device.uuid)
    // // console.log(plus.push.getClientInfo())

    return postData;
};
const http = ({
                  url, headers, params, method, dataType, responseType,hostType
              }) => {
    let timestamp = (new Date()).valueOf();
    let prefix = '';
    if(hostType){
        prefix = api[hostType];
    }else{
        prefix = api.commApi;
    }
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        uni.request({
            url: `${prefix}/${url}?&&t=${timestamp}`, //
            data: getParams(params),
            method: method || 'post',
            header: formatHeaders(headers),
            responseType: responseType || '',
            dataType: dataType || 'json',
        }).then((res) => {
                // debugger
                // eslint-disable-next-line no-undef
                // uni.showToast({
                //     title: '标题',
                //     duration: 2000,
                //     position:"center"
                // });
                // if (url.indexOf('login') !== -1) {
                //     gloabeData.set({otherLoginFlag: 0});
                // }
                // let otherLoginFlag = gloabeData.get( 'otherLoginFlag');

                // if (res[1].data.errorCode.toString() === '1001010'||res[1].data.errorCode.toString() === '1001001') {
                //     // if (otherLoginFlag === 0) {
                //     //     gloabeData.set({otherLoginFlag:1});
                //     //     monitorFunc.emit('devicesNotificationOffLine');
                //     // }
                // }
                if (res[1].statusCode&&res[1].statusCode.toString() === "200") {
                    // debugger
                    if(res[1].data&&res[1].data.result&&res[1].data.result.returnCode&&(res[1].data.result.returnCode.toString()==='10032'||res[1].data.result.returnCode.toString()==="10031")){
                        let loginMsg = {
                            isLogin:false,
                            userLoginId:'',
                            userLoginToken:''
                        }
                        // datastorage.getSync({key: "loginMsg",data: loginMsg});
                        // jumpPage.jump({
                        //     type: 'reLaunch',
                        //     url: 'login/login',
                        // })
                    }else{
                        resolve(res[1].data);
                    }
                    
                } else{
                    
                }
            }
        ).catch((response) => {
                reject(response)
            }
        )

    });

};
export default http;
