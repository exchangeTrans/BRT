export const scanCode = (cb) => {
    uni.scanCode({
        success: function (res) {
            if (cb) {
                cb(res);
            }
        }
    });

}