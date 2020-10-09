import api from "../../request/api";
import datastorage from "./datastorage";

export const uploadFile = (FilePath, upToken, cb,failcb) => {
    let key = datastorage.getSync({key: 'loginMsg'}).userLoginId + (new Date()).valueOf();
    uni.uploadFile({
        /*
             上传到华东区的域名为up.qiniup.com、up-z0.qiniup.com和upload.qiniup.com
             上传到华北区的域名为up-z1.qiniup.com和upload-z1.qiniup.com
             上传到华南区的域名为up-z2.qiniup.com和upload-z2.qiniup.com
             上传到北美区的域名为up-na0.qiniup.com和upload-na0.qiniup.com
             上传到东南亚区的域名为up-as0.qiniup.com和upload-as0.qiniup.com
        */
        url: 'https://up-z2.qiniup.com',//华南
        filePath: FilePath,
        name: 'file',
        formData: {
            'key': key,//域名加文件名 key是文件名
            'token': upToken,
        },
        success: (uploadFileRes) => {
            console.log(uploadFileRes)
            //qiniuUrl是自己七牛的前缀
            if (uploadFileRes.statusCode === 200) {
                // console.log(JSON.parse(uploadFileRes.data));
                cb(api.qiniuApi + JSON.parse(uploadFileRes.data).key);
            } else {
                this.$toast.show({
                    title: uploadFileRes.errMsg,
                })
            }

        },
        fail: (error) => {
            if (error && error.response) {
                this.$toast.show({
                    title: error.response,
                })
            }
            if(failcb){
                failcb()
            }
        },
        complete: () => {

        },
    });
}