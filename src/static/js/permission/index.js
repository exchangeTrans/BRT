import {getPermissionID} from './permissionID.js'
import {toast} from "@/static/js/dialog.js";

// location:{idName:"location",queryVal:"",des:"系统定位",},// location	位置
let permissionFunc={
    query:function(id,cb){
        let platform = "ios";
        // eslint-disable-next-line no-undef
        let phoneType = uni.getSystemInfoSync();
        platform = phoneType.platform==='ios'?"ios":"android";
        let permissionIDRes = getPermissionID(id);
        permissionFunc.queryPermission[platform](permissionIDRes,cb);

    },
    queryPermission:{
        ios:function(res,cb){
            queryIosPerssion[res.idName](res,cb);
        },
        android:function(res,cb){
            queryAndroidPerssion(res,cb)
        }
    },
    askPermission:function(permissionObj){
        let content ='“'+permissionObj.des+'”'+' 权限没有开启，是否去开启？未开启将无法使用此功能'
        // eslint-disable-next-line no-undef
        uni.showModal({
            title:'',	//String
            content:content,
            showCancel:true,	//String,
            cancelText:'取消',
            cancelColor:'',
            confirmText:'去开启',
            confirmColor:'',
            success:function(res){//Function	否	接口调用成功的回调函数
                // console.log(res)
                if (res.confirm){
                    permissionFunc.jump()
                }
                // else{
                //     toast.show({title:'拒绝开启 ' + permissionObj.des + ' 权限，将不能使用此功能！'});
                // }
            },
            fail:function(){//Function	否	接口调用失败的回调函数

            }
        });
    },
    jump:function(id){//ios 跳转到设置页面
         //确认，打开当前应用权限设置页面
         // eslint-disable-next-line no-undef
         var UIApplication = plus.ios.import('UIApplication');
         var application2 = UIApplication.sharedApplication();
         // eslint-disable-next-line no-undef
         var NSURL2 = plus.ios.import('NSURL');
         var setting2 = NSURL2.URLWithString('app-settings:');
         application2.openURL(setting2);
        // eslint-disable-next-line no-undef
         plus.ios.deleteObject(setting2);
         // eslint-disable-next-line no-undef
         plus.ios.deleteObject(NSURL2);
         // eslint-disable-next-line no-undef
         plus.ios.deleteObject(application2)
    },
};
let queryIosPerssion={
    camera:function(id,cb){
        let status = false;
        // eslint-disable-next-line no-undef
        let AVCaptureDevice = plus.ios.import("AVCaptureDevice");

        let authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');
        // console.log("authStatus:" + authStatus);
        if (authStatus == 3) {
            status = true;
            // console.log("相机权限已经开启");
        }
        // else {
        //     status = false;
        //     // console.log("相机权限没有开启");
        //     permissionFunc.askPermission(id)
        // }
        else if(authStatus == 0) {
            status = true;
            // console.log("相机权限没有开启");
            // permissionFunc.askPermission(id)

        }else{
            status = false;
            // console.log("相机权限没有开启");
            permissionFunc.askPermission(id)
        }
        // eslint-disable-next-line no-undef
        plus.ios.deleteObject(AVCaptureDevice);
        let result={
            status:status
        }
        if(cb&&status){
            cb(result)
        }
    },
    photoLibrary:function(id,cb){
        let status = false;
        // eslint-disable-next-line no-undef
        let PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
        let authStatus = PHPhotoLibrary.authorizationStatus();
        // console.log("authStatus:" + authStatus);

        //0   shouci1
        if (authStatus == 3) {
            status = true;
            // console.log("相册权限已经开启");
        } else if(authStatus == 0) {
            status = true;
            // console.log("相册权限没有开启");
            // permissionFunc.askPermission(id)

        }else{
            status = false;
            // console.log("相册权限没有开启");
            permissionFunc.askPermission(id)
        }
        // eslint-disable-next-line no-undef
        plus.ios.deleteObject(PHPhotoLibrary);
        let result={
            status:status
        }
        if(cb&&status){
            cb(result)
        }
    },
    record:function(id,cb){
        let status = false;
        // eslint-disable-next-line no-undef
        let avaudiosession = plus.ios.import("AVAudioSession");
        let avaudio = avaudiosession.sharedInstance();
        let permissionStatus = avaudio.recordPermission();
        // console.log("permissionStatus:" + permissionStatus);
        if (permissionStatus == 1684369017 ) {
            //1970168948 首次
            status = false;
            // console.log("麦克风权限没有开启");
            permissionFunc.askPermission(id)

        } else if(permissionStatus == 1970168948){
            status = true;
            // console.log("麦克风权限没有开启");
        }
         else {
            status = true;
            // console.log("麦克风权限已经开启");

        }
        // eslint-disable-next-line no-undef
        plus.ios.deleteObject(avaudiosession);
        let result={
            status:status
        }
        if(cb&&status){
            cb(result)
        }
    }
};
// camera	摄像头
// photoLibrary	相册
// record	麦克风
let queryAndroidPerssion = function(permissionObj,cb){
	// return new Promise((resolve, reject) => {
		// eslint-disable-next-line no-undef
		plus.android.requestPermissions(
			[permissionObj.idName], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
			function(resultObj) {
				let status = false;
				for (let i = 0; i < resultObj.granted.length; i++) {
					// let grantedPermission = resultObj.granted[i];
					// // console.log('已获取的权限：' + grantedPermission);
					status = true
				}
				for (let i = 0; i < resultObj.deniedPresent.length; i++) {
					// let deniedPresentPermission = resultObj.deniedPresent[i];
					// // console.log('拒绝本次申请的权限：' + deniedPresentPermission);
					status = false
				}
				for (let i = 0; i < resultObj.deniedAlways.length; i++) {
					// let deniedAlwaysPermission = resultObj.deniedAlways[i];
					// // console.log('永久拒绝申请的权限：' + deniedAlwaysPermission);
					status = false
                }
                let result={
                    status:status
                }
                if(cb&&status){
                    cb(result)
                }
				// resolve(result);
				// 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限
				// if (result != 1) {
				// gotoAppPermissionSetting()
				// }
			},
			function(error) {
                toast.show({title:"申请权限错误："+ error.message});
			}
		);
	// });
}


export default permissionFunc
