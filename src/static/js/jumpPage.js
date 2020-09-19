
import datastorage from "@/static/js/datastorage.js";


let jumpPage={
    jump:function (options,success,fail) {


        // let option={
        //     url:"",
        //     type:""
        //     animationDuration:300,
        //     animationType:"pop-in",
        //     delta:""
        //      data:{}
        // }
        let type = options.type;
        let theme = datastorage.getSync({key:'theme'});
        // "blackPages/index/index"
        //只需要传递后边那部分
        let pageUrl=options.url;
        pageUrl = theme==='black'?('/blackPages/'+pageUrl):('/pages/'+pageUrl);
        options.url = pageUrl;



        switch(type){
            case "navigateTo"://保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
                // eslint-disable-next-line no-undef
                uni.navigateTo({
                    animationDuration:500,
                    animationType:"slide-in-left",
                    url:pageUrl,
                    success:function(){
                        if(success){
                            success();
                        }
                    },
                    fail:function(){
                        if(fail){
                            fail();
                        }
                    },
                    ...options,
                });
                break;
            case "redirectTo"://关闭当前页面，跳转到应用内的某个页面。
                // eslint-disable-next-line no-undef
                uni.redirectTo({
                    animationDuration:500,
                    animationType:"zoom-fade-out",
                    url:pageUrl,
                    success:function(){
                        if(success){
                            success();
                        }
                    },
                    fail:function(){
                        if(fail){
                            fail();
                        }
                    },
                    ...options,
                });
                break;
            case "reLaunch"://关闭所有页面，打开到应用内的某个页面。
                // eslint-disable-next-line no-undef
                uni.reLaunch({
                    // animationDuration:300,
                    // animationType:"pop-in",
                    url:pageUrl,
                    success:function(){
                        if(success){
                            success();
                        }
                    },
                    fail:function(){
                        if(fail){
                            fail();
                        }
                    },
                    ...options,
                });
                break;
            case "switchTab"://跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
                // eslint-disable-next-line no-undef
                uni.switchTab({
                    // animationDuration:300,
                    // animationType:"pop-in",
                    url:pageUrl,
                    success:function(){
                        if(success){
                            success();
                        }
                    },
                    fail:function(){
                        if(fail){
                            fail();
                        }
                    },
                    ...options,
                });
                break;
            case "navigateBack"://关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
                // eslint-disable-next-line no-undef
                uni.navigateBack({
                    animationDuration:300,
                    animationType:"pop-out",
                    delta:1,//返回多少级
                    // url:pageUrl,
                    success:function(){
                        if(success){
                            success();
                        }
                    },
                    fail:function(){
                        if(fail){
                            fail();
                        }
                    },
                    ...options,
                });
                break;
            default:
              break;
          }


    }
};
export default jumpPage
