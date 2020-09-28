const saveImg = {
    //获取相册授权
    getPhoneAuth: function (imgUrl) {
        debugger
        uni.getSetting({
                success(res) {
                    debugger
                    if (!res.authSetting['scope.writePhotosAlbum']) {
                        uni.authorize({
                            scope: 'scope.writePhotosAlbum',
                            success() {
                                debugger
                                //这里是用户同意授权后的回调
                                saveImgToLocal(imgUrl);
                            },
                            fail() {//这里是用户拒绝授权后的回调
                                // _self.openSettingBtnHidden=false
                            }
                        })
                    } else {//用户已经授权过了
                        saveImgToLocal(imgUrl);
                    }
                }
            },
        )

        function saveImgToLocal(imgUrl) {
            debugger
            uni.downloadFile({
                url: imgUrl,
                success: (res) => {
                    debugger
                    if (res.statusCode === 200) {
                        uni.saveImageToPhotosAlbum({
                            filePath: res.tempFilePath,
                            success: function () {
                                uni.showToast({
                                    title: "保存成功",
                                    icon: "none"
                                });
                            },
                            fail: function () {
                                uni.showToast({
                                    title: "保存失败",
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            })
        }
    },
}

export default saveImg