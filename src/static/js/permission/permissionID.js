// location	位置
// push	推送（限iOS，注意Android上推送并不是一个权限）
// camera	摄像头
// photoLibrary	相册
// record	麦克风
// contact	通讯录
// calendar	日历
// memo	备忘录


// android.permission.ACCESS_FINE_LOCATION	位置权限
// android.permission.ACCESS_COARSE_LOCATION	模糊位置权限(蓝牙\ble依赖)
// android.permission.CAMERA	摄像头权限
// android.permission.READ_EXTERNAL_STORAGE	外部存储(含相册)读取权限
// android.permission.WRITE_EXTERNAL_STORAGE	外部存储(含相册)写入权限
// android.permission.RECORD_AUDIO	麦克风权限
// android.permission.READ_CONTACTS	通讯录读取权限
// android.permission.WRITE_CONTACTS	通讯录写入权限
// android.permission.READ_CALENDAR	日历读取权限
// android.permission.WRITE_CALENDAR	日历写入权限
// android.permission.READ_SMS	短信读取权限
// android.permission.SEND_SMS	短信发送权限
// android.permission.RECEIVE_SMS	接收新短信权限
// android.permission.READ_PHONE_STATE	获取手机识别码等信息的权限
// android.permission.CALL_PHONE	拨打电话权限
// android.permission.READ_CALL_LOG	获取通话记录权限


let data={
    android:{
        location:{idName:"android.permission.ACCESS_FINE_LOCATION",queryVal:"",des:"系统定位"},// location	位置
        camera:{idName:"android.permission.CAMERA",queryVal:"",des:"手机摄像头"},// camera	摄像头
        photoLibrary:{idName:"android.permission.READ_EXTERNAL_STORAGE",queryVal:"",des:"手机相册"},// photoLibrary	相册
        record:{idName:"android.permission.RECORD_AUDIO",queryVal:"",des:"麦克风"},// record	麦克风
    },
    ios:{
        location:{idName:"location",queryVal:"",des:"系统定位",},// location	位置
        camera:{idName:"camera",queryVal:"",des:"手机摄像头"},// camera	摄像头
        photoLibrary:{idName:"photoLibrary",queryVal:"",des:"手机相册"},// photoLibrary	相册
        record:{idName:"record",queryVal:"",des:"麦克风"},// record	麦克风
    }
    
}

export const getPermissionID=function(key){
    let platform = "ios";
    // #ifdef APP-PLUS
    // eslint-disable-next-line no-undef
    let phoneType = uni.getSystemInfoSync();
    platform = phoneType.platform==='ios'?"ios":"android";
    // #endif
    let result= data[platform][key];
    return result;
}