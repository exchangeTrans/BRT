export const chooseImage = (num,cb) => {
    uni.chooseImage({
        count: num,
        success: (res) => {
            if(cb){
                cb(res.tempFilePaths);
            }
        }
    });
}