// import pathData from '@/pagePath/index.js';
// // let pathData = pathData;
// import {findObjByKey} from '@/static/common.js';


const datastorage={
    get:function(options,success,fail){// 从本地缓存中异步获取指定 key 对应的内容。
        // eslint-disable-next-line no-undef
        uni.getStorage({
            key:options.key,
            success:function(data){
                if(success){
                    success(data)
                }
            },
            fail:function(){
                if(fail){
                    fail()
                }
            }
        })
    },
    getSync:function(options,success,fail){// 从本地缓存中同步获取指定 key 对应的内容。
        // eslint-disable-next-line no-undef
        try {
            // eslint-disable-next-line no-undef
            let result = uni.getStorageSync(options.key);
            if(success){
                success(result);
            }else{
                return result;
            }
        } catch (e) {
            if(fail){
                fail(e)
            }
        }

    },
    set:function(options,success,fail){// 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
        // eslint-disable-next-line no-undef
        uni.setStorage({
            key:options.key,
            data:options.data,
            success:function(){
                if(success){
                    success()
                }
            },
            fail:function(){
                if(fail){
                    fail()
                }
            }
        })
    },
    setSync:function(options,success,fail){// 异步获取当前 storage 的相关信息。
        try {
            // eslint-disable-next-line no-undef
            uni.setStorageSync(options.key,options.data);
            if(success){
                success();
            }

        } catch (e) {
            if(fail){
                fail(e)
            }
        }
    },
  /*  setBykey:function(options,success,fail){// 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
        // eslint-disable-next-line no-undef
        uni.setStorage({
            key:options.key,
            data:options.data,
            success:function(){
                if(success){
                    success()
                }
            },
            fail:function(){
                if(fail){
                    fail()
                }
            }
        })
    },*/
    setSyncByKey:function(options,success,fail){// 异步获取当前 storage 的相关信息。
        try {
           // eslint-disable-next-line no-undef
           let infoData = uni.getStorageSync(options.key);
            let field = options.filed;
           infoData[field] = options.data;
           // eslint-disable-next-line no-undef
            uni.setStorageSync(options.key,infoData);

            if(success){
                success();
            }

        } catch (e) {
            if(fail){
                fail(e)
            }
        }
    },
    getInfo:function(success,fail){
        // eslint-disable-next-line no-undef
        uni.getStorageInfo({
            success: function (res) {
                if(success){
                    success(res)
                }
                // // console.log(res.keys); 当前 storage 中所有的 key
                // // console.log(res.currentSize); 当前占用的空间大小, 单位：kb
                // // console.log(res.limitSize); 限制的空间大小, 单位：kb
            },
            fail:function(){
                if(fail){
                    fail()
                }
            }
        });
    },
    getInfoSync:function(success,fail){// 同步获取当前 storage 的相关信息。。
        try {
            // eslint-disable-next-line no-undef
            let result = uni.getStorageInfoSync();
            if(success){
                success(result);
            }else{
                return result;
            }

        } catch (e) {
            if(fail){
                fail(e)
            }
        }

    },
    remove:function(options,success,fail){// 从本地缓存中异步移除指定 key。
        // eslint-disable-next-line no-undef
        uni.removeStorage({
            key:options.key,
            success:function(){
                if(success){
                    success()
                }
            },
            fail:function(){
                if(fail){
                    fail()
                }
            }
        });
    },
    removeSync:function(options,success,fail){// 从本地缓存中同步移除指定 key。
        try {
            // eslint-disable-next-line no-undef
            uni.removeStorageSync(options.key);
            if(success){
                success();
            }
        } catch (e) {
            if(fail){
                fail(e)
            }
        }
    },
    clear:function(){// 清理本地数据缓存。
        // eslint-disable-next-line no-undef
        uni.clearStorage();
    },
    clearSync:function(success,fail){// 同步清理本地数据缓存。
        try {
            // eslint-disable-next-line no-undef
            uni.clearStorageSync();
            if(success){
                success();
            }
        } catch (e) {
            if(fail){
                fail(e)
            }
        }
    },



}
export default datastorage
