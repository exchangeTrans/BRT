//提示层
// import jumpPage from '../static/jumpPage.js';
import monitorFunc from '@/static/js/monitorFunc.js';
const toast = {
    show:function(options,success,fail){
        let defultOptions = {
            title:'',	//String	是	提示的内容，长度与 icon 取值有关。
            icon:'none',	///String	否	图标，loading success none
            image:'',	//String	否	自定义图标的本地路径
            mask:false,	//Boolean	否	是否显示透明蒙层，防止触摸穿透，默认：false
            duration:2000,	//Number	否	提示的延迟时间，单位毫秒，默认：1500

            complete:function(){},	//Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
        }
        if(options){
            options={
                ...defultOptions,
                ...options
            }
        }
        // eslint-disable-next-line no-undef
        uni.showToast({
            ...options,
            success:function(){//Function	否	接口调用成功的回调函数
                if(success){
                    success();
                }
            },
            fail:function(){//Function	否	接口调用失败的回调函数
                if(fail){
                    fail();
                }
            }
        });
    },
    hidden:function(){
        // eslint-disable-next-line no-undef
        uni.hideToast();
    },
    showLoading:function(options,success,fail){
        let defultOptions = {
            title:'加载中',	//String	是	提示的内容
            mask:false,	//Boolean	否	是否显示透明蒙层，防止触摸穿透，默认：false
            complete:function(){},	//Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
        }
        if(options){
            options={
                ...defultOptions,
                ...options
            }
        }
        // eslint-disable-next-line no-undef
        uni.showLoading({
            ...options,
            success:function(){//Function	否	9 口调用成功的回调函数
                if(success){
                    success();
                }
            },
            fail:function(){//Function	否	接口调用失败的回调函数
                if(fail){
                    fail();
                }
            }
        });
    },
    hideLoading:function(){
        // eslint-disable-next-line no-undef
        uni.hideLoading();
    },
    showModel:function (options,success,fail) {
        // let defultOptions = {
        //     title:'提示',	//String
        //     content:'是否前往登录页登录',
        //     showCancel:true,	//String,
        //     cancelText:'取消',
        //     cancelColor:'',
        //     confirmText:'前往',
        //     confirmColor:'',
        //     //mask:false,	//Boolean	否	是否显示透明蒙层，防止触摸穿透，默认：false
        //     //duration:2000,	//Number	否	提示的延迟时间，单位毫秒，默认：1500

        //     complete:function(){},	//Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
        // }；
        let defultOptions = {
            title:'提示',	//String
            content:'需要先登录才能操作，是否前往登录?',
            //btnList:options.btnList?options.btnList:''
        }
        if(options){
            defultOptions={
                ...defultOptions,
                ...options
            }
        }
        monitorFunc.emit("modelOpen",defultOptions)
        // if(options){
        //     options={
        //         ...defultOptions,
        //         ...options
        //     }
        // }
        // // eslint-disable-next-line no-undef
        // uni.showModal({
        //     ...options,
        //     success:function(res){//Function	否	接口调用成功的回调函数
        //           if (res.confirm){
        //               jumpPage.jump({
        //                   type:'navigateTo',
        //                   name:'loginByPhone'
        //               })
        //         }
        //     },
        //     fail:function(){//Function	否	接口调用失败的回调函数
        //         if(fail){
        //             fail();
        //         }
        //     }
        // });
    }

}

export default toast
