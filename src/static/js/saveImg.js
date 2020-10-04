// 保存图片
export function saveHeadImgFile(base64) {
    const bitmap = new plus.nativeObj.Bitmap("test");
    return new Promise((resolve, reject) => {
        // 从本地加载Bitmap图片
        bitmap.loadBase64Data(base64, function() {
            let timestamp = (new Date()).valueOf();
            const url = "_doc/" + timestamp + ".jpg";  // url为时间戳命名方式
            bitmap.save(url
                ,{}
                ,function(i) {
                uni.saveImageToPhotosAlbum({
                    filePath: i.target,
                    success: function() {
                        resolve({
                            code: 0,
                            msg: '保存成功',
                        });
                        bitmap.clear(); //销毁Bitmap图片
                    },
                    fail: function (e) {
                        reject('保存图片失败saveImageToPhotosAlbum：' + JSON.stringify(e));
                    }
                });
            }, (e) => {
                reject('保存图片失败bitmap.save：' + JSON.stringify(e));
            });
        }, (e) => {
            reject('加载图片失败bitmap.loadBase64Data：' + JSON.stringify(e));
        });
    })
}