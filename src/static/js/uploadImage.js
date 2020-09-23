import request from '../../request/index.js';
import api from "../../request/api";

export const uploadImage = (num, callback) => {
    uni.chooseImage({
        count: num,
        success: (res) => {
            let tempFilePaths = res.tempFilePaths
            console.log(tempFilePaths);
            request({
                url: "upload/getUploadToken",
                method: "post",
            }).then((res) => {
                console.log(res);
                if (res.result.returnCode.toString() === "0") {
                    for (let i = 0; i < tempFilePaths.length; i++) {
                        uni.uploadFile({
                            /*
                                 上传到华东区的域名为up.qiniup.com、up-z0.qiniup.com和upload.qiniup.com
                                 上传到华北区的域名为up-z1.qiniup.com和upload-z1.qiniup.com
                                 上传到华南区的域名为up-z2.qiniup.com和upload-z2.qiniup.com
                                 上传到北美区的域名为up-na0.qiniup.com和upload-na0.qiniup.com
                                 上传到东南亚区的域名为up-as0.qiniup.com和upload-as0.qiniup.com
                            */
                            url: 'https://up-z2.qiniup.com',//华南
                            filePath: tempFilePaths[i],
                            name: 'file',
                            formData: {
                                'key': res.result.key,
                                'token': res.data.uptoken,
                            },
                            success: (uploadFileRes) => {
                                console.log(uploadFileRes)
                                //qiniuUrl是自己七牛的前缀
                                callback(api.qiniuApi + JSON.parse(uploadFileRes.data).key);
                            },
                            fail: (error) => {
                                if (error && error.response) {
                                    this.$toast.show({
                                        title: error.response,
                                    })
                                }
                            },
                            complete: () => {
                                // setTimeout(function () {
                                //     uni.hideLoading();
                                // }, 250);
                            },
                        });

                    }
                } else {
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }

            })

        }
    });
}