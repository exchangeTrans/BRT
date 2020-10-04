import appHeader from '@/components/common/header.vue'
// import QRCode from 'qrcodejs2'
// import qrcodeComponents from '@/components/qrcode/qrcode'
import uniQrcode from '@/components/uqrcode/index.vue'
import {saveHeadImgFile} from "../../static/js/saveImg";
import permissionFunc from "../../static/js/permission";
// import {saveHeadImgFile} from "../../static/js/saveImg";

export default {
    components: {
        appHeader,
        uniQrcode
        // qrcodeComponents
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'})
        let userInfo = this.$store.state.defaultData.userInfo
        let that = this
        that.choiceType = this.$store.state.wallet.symbolType
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: that.choiceType.name + that.$t('receipt').title,
                rightItem: {
                    type: "text",
                    text: that.$t('receipt').subTitle,
                    path: `${require('@/static/images/receipt/detail.png')}`,
                    style: {
                        'fontSize': '28rpx',
                        'color': '#098FE0'
                    },
                    tipText: userInfo.inviteCode,
                    haveTip: true
                },
                background: '#ffffff',

                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: that.choiceType.name + that.$t('receipt').title,
                rightItem: {
                    type: "text",
                    text: that.$t('receipt').subTitle,
                    path: `${require('@/static/images/receipt/detail.png')}`,
                    style: {
                        'fontSize': '28rpx',
                        'color': '#098FE0'
                    },
                    tipText: userInfo.inviteCode,
                    haveTip: true
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            }
        }
        this.getUserWalletAddress();
        this.setQrcodeStyle();
        this.makeComplete();
    },
    data() {
        return {
            headerOptions: {},
            rightIcon: `${require('@/static/images/receipt/rightIcon.png')}`,
            data: {
                userWalletAddress: ''
            },
            qrCodeStyle: {},
            choiceType: {},
            size: uni.upx2px(366),
            filePath: ""
        }
    },
    watch: {
        data(v) {
            // console.log(v)
            if (v.userWalletAddress) {
                // this.$refs.qrcodeComponents.qrcodeScan(v.userWalletAddress);
            }
        }

    },
    computed: {
        /*qrCodeStyle() {
            let width = 203;
            let height = 203;

            return {
                width,
                height,
            }
        }*/
    },
    onLoad() {

    },
    methods: {
        createAddress() {

        },
        importAddress() {

        },
        setQrcodeStyle() {
            //     let width = this.$refs.qrImg.$el.offsetWidth;
            //     let height = this.$refs.qrImg.$el.offsetHeight;
            //     this.qrCodeStyle = {
            //         width,
            //         height,
            //     }
        },
        getUserWalletAddress() {
            let that = this;
            let postParam = {
                "symbolType": that.choiceType.symbolType
            }
            this.$request({
                url: "wallet/getUserWalletAddress",
                method: "post",
                params: postParam,
            }).then((res) => {
                if (res.result.returnCode === "0") {
                    that.data = res.data
                    setTimeout(() => {
                        that.$refs.qrcode2233.make()
                    }, 100);


                } else {
                    this.$toast.show({
                        title: res.result.returnUserMessage
                    })
                }
            })
        },
        makeComplete(res) {
            this.filePath = res;
            // console.log(this.filePath)
        },
        /*//获取相册授权
        getalbumAuth() {
            permissionFunc.query()
        },*/
        saveImage() {
            let that = this;
            this.$permissionFunc.query("photoLibrary", function () {
                let filePath = that.filePath;
                // console.log(that.filePath)
                saveHeadImgFile(filePath).then((res) => {
                    console.log(res);
                    uni.showToast({
                        title: that.$t('receipt').saveTip,
                        mask: false,
                        duration: 1500
                    });
                }).catch((err) => {
                    console.log(err);
                });
                /*const bitmap = new plus.nativeObj.Bitmap("test");
                bitmap.loadBase64Data(filePath, function () {
                    let timestamp = (new Date()).valueOf();
                    const url = "_doc/" + timestamp + ".png";  // url为时间戳命名方式
                    bitmap.save(url, {overwrite: true, quality: 100,}, (i) => {
                        uni.saveImageToPhotosAlbum({
                            filePath: i.target,
                            success: function () {
                                bitmap.clear(); //销毁Bitmap图片
                                uni.showToast({
                                    title: '保存图片成功',
                                    mask: false,
                                    duration: 1500
                                });
                            },
                            fail: function (err) {
                                console.log(err);
                                uni.showToast({
                                    title: '图片保存失败',
                                    icon: 'none',
                                    duration: 1500
                                });
                            }
                        });
                        /!*console.log('保存图片成功：' + JSON.stringify(i.target));
                        plus.gallery.save(i.target, function () {
                            uni.showToast({
                                title: '图片保存成功',
                                icon: 'none',
                                duration: 2200
                            });
                        }, function () {
                            uni.showToast({
                                title: '图片保存失败',
                                icon: 'none',
                                duration: 2200
                            });
                        });*!/
                    }, (e) => {
                        console.log('保存图片失败：' + JSON.stringify(e));
                        uni.showToast({
                            title: e,
                            icon: 'none',
                            duration: 2200
                        });
                    });
                })*/
            });


        },
        dataURLtoFile(dataurl, filename) {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type: mime});
        },
        copy() {
            let text = this.data.userWalletAddress;
            uni.setClipboardData({
                data: text,
                success: function () {
                }
            });
        },
        rechargeRecord() {
            this.$jumpPage.jump({
                url: "addrecord/index",
                type: "navigateTo"
            })
        }
    }
}
