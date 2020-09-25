export const chooseImage = (num,cb) => {
    uni.chooseImage({
        count: num,
        success: (res) => {
            cb(res.tempFilePaths);
        }
    });
}