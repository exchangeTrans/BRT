import appHeader from '@/components/common/header.vue'
// import QRCode from 'qrcodejs2'
// import qrcodeComponents from '@/components/qrcode/qrcode'
import uniQrcode from '@/components/uqrcode/index.vue'
import {saveHeadImgFile} from "../../static/js/saveImg";

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
                text: that.choiceType.name + "收款",
                rightItem: {
                    type: "text",
                    text: "充币记录",
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
                text: that.choiceType.name + "收款",
                rightItem: {
                    type: "text",
                    text: "充币记录",
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
        this.setQrcodeStyle()
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
        },
        /*//获取相册授权
        getalbumAuth(){
            let that = this;
            uni.getSetting({
                success: function (res) {
                    if (!res.authSetting['scope.writePhotosAlbum']) {
                        uni.authorize({
                            scope: "scope.writePhotosAlbum",
                            success() {
                                that.saveImage();
                            }
                        })
                    } else {
                        that.saveImage()
                    }
                }
            })
        },*/
        saveImage() {
            // debugger
            let filePath = this.filePath;
            const bitmap = new plus.nativeObj.Bitmap("test");
            bitmap.loadBase64Data(filePath,function () {
                let timestamp = (new Date()).valueOf();
                const url = "_doc/" + timestamp + ".png";  // url为时间戳命名方式
                uni.saveImageToPhotosAlbum({
                    filePath: url,
                    success: function () {
                        // console.log('save success');
                        uni.showToast({
                            title: '图片保存成功',
                            icon: 'none',
                            duration: 2200
                        });
                    },
                    fail: function (err) {
                        console.log(err)
                        uni.showToast({
                            title: '图片保存失败',
                            icon: 'none',
                            duration: 2200
                        });
                    }
                });
            })
            /*plus.gallery.save(dataURLtoFile, function (e) {//保存到相册方法
                // plus.nativeUI.closeWaiting()
                // mui.toast('已保存到手机相册');
                // console.log('图片保存成功');
                console.log(e);
                uni.showToast({
                    title: '图片保存成功',
                    icon: 'none',
                    duration: 2200
                });
            }, function (e) {
                console.log(e)
                // plus.nativeUI.closeWaiting()
                // mui.toast('保存失败，请重试！');
                uni.showToast({
                    title: '图片保存失败',
                    icon: 'none',
                    duration: 2200
                });
            });
            uni.getImageInfo({
                src: filePath,
                success: function (image) {
                    // console.log('图片信息：', JSON.stringify(image));
                    // console.log(image.path);
                    uni.saveImageToPhotosAlbum({
                        filePath: image.path,
                        success: function () {
                            // console.log('save success');
                            uni.showToast({
                                title: '图片保存成功',
                                icon: 'none',
                                duration: 2200
                            });
                        },
                        fail: function (err) {
                            // console.log(err)
                            uni.showToast({
                            	title: '图片保存失败',
                            	icon: 'none',
                            	duration: 2200
                            });
                            /!*if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg ===
                                "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg === "saveImageToPhotosAlbum:fail auth denied") { // 没有授权，重新授权，兼容iso和Android
                                uni.showModal({
                                    title: '授权提示',
                                    content: "是否允许获取保存相册权限",
                                    success: (res) => {
                                        if (res.confirm) { // 点击确定，则调用相册授权
                                            uni.openSetting({
                                                success(settingdata) {
                                                    if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                                                        console.log("获取权限成功，再次点击图片保存到相册")
                                                        uni.showToast({
                                                            title: '授权成功，请重试哦~'
                                                        });
                                                    } else {
                                                        console.log("获取权限失败")
                                                        uni.showToast({
                                                            title: '请确定已打开保存权限',
                                                            icon: "none"
                                                        });
                                                    }
                                                }
                                            })
                                        }
                                    }
                                })
                            } else if (err.errMsg === "saveImageToPhotosAlbum:fail file not found" || err.errMsg ===
                                "saveImageToPhotosAlbum:fail file not exists" || err.errMsg ===
                                "saveImageToPhotosAlbum:fail get file data fail"
                            ) { // 无图片，则提示
                                uni.showToast({
                                    title: "暂无图片",
                                    icon: "none"
                                });
                            }*!/
                        }
                    });

                }
            });*/

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
