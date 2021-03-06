import appHeader from "@/components/common/header.vue"
import {chooseImage} from "../../static/js/chooseImage";
import {uploadFile} from "../../static/js/uploadFile";
import {checkDataFunc} from "../../static/js/common";

export default {
    name: "auth",
    components: {
        appHeader,
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: this.$t('authL').authentication,
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: this.$t('authL').authentication,
                rightItem: {
                    type: "text",
                    path: '',
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            }
        }
        ;

        this.getAuthStatus();
    },
    data() {
        return {
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                text: "实名认证",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,*/
            },
            authStatusImg: "",
            authStatusAwaitImg: `${require('@/static/images/auth/certify.png')}`,
            authStatusCheckImg: `${require('@/static/images/auth/check.png')}`,
            example: `${require('@/static/images/auth/example.png')}`,

            postData: {
                name: "",
                idCard: "",
            },
            filePath: "",
            upToken: "",

            checkArray: [
                {
                    name: this.$t('authL').checkArray[0],
                    checkKey: "cardName",
                },
                {
                    name: this.$t('authL').checkArray[1],
                    checkKey: "cardNo",
                    // checkType: ["isIdcard"],
                },
                {
                    name: this.$t('authL').checkArray[2],
                    checkKey: "cardImage",
                },
            ],

            authStatusData: {
                kyc1: "",
                cardType: "",
                cardName: "",
                cardNo: "",
                disabled: null,
            },
            isAllowClick:true,

        }
    },
    methods: {
        getAuthStatus() {
            // kyc/getKycState

            this.$request({
                url: "kyc/getKycState",
                method: "post",
            }).then((res) => {
                // debugger
                /*data: {cardType: 0, cardName: "", cardNo: "", kyc1: 0}
                    cardName: ""
                    cardNo: ""
                    cardType: 0//1身份证 2护照
                    kyc1: 0//0待实名 1已实名 2待审核（未审核） 3待审核（审核失败）
                result: {returnCode: "0", returnUserMessage: "成功", returnMessage: "成功"}
                    returnCode: "0"
                    returnMessage: "成功"
                    returnUserMessage: "成功"*/
                // console.log(res);
                if (res.result.returnCode.toString() === "0") {
                    this.authStatusData = {
                        kyc1: res.data.kyc1,//0待实名 1已实名 2待审核（未审核） 3待审核（审核失败）
                        cardType: res.data.cardType,//1身份证 2护照
                        cardName: res.data.kyc1 === 3 ? '' : res.data.cardName,
                        cardNo: res.data.kyc1 === 3 ? '' : res.data.cardNo,
                        disabled: res.data.kyc1 === 0 || res.data.kyc1 === 3 ? false : true,
                    }
                    // console.log(res);
                } else {
                    this.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
            })
        },

        uplaodaImg() {
            let that = this;
            let num = 1;
            chooseImage(num, function (res) {
                that.filePath = res[0];
            })
        },

        commitAuth() {
            // debugger
            let that = this;
            let filePath = this.filePath;
            if(!this.isAllowClick){
                return
            }
            this.getUploadToken(function (upToken) {
                that.isAllowClick = false;
                // debugger
                uploadFile(filePath, upToken, function (res) {
                    // debugger
                    // console.log(res);
                    that.getAuth(res)

                },function(){
                    that.isAllowClick=true
                })
            })

        },

        getAuth(cardImage) {
            // debugger
            let that = this;
            let postData = this.getAuthPostData(cardImage);
            if (postData) {
                uni.showLoading({
                    title: this.$t('authL').loading
                })
                this.$request({
                    url: "kyc/kyc1",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {
                        setTimeout(() => {
                            this.$toast.show({
                                title: res.result.returnUserMessage,
                            });
                            this.getAuthStatus()
                            // // 服务端响应的 message 提示
                            // this.$jumpPage.jump({
                            //     type: 'navigateBack',
                            // })
                            //延时关闭  加载中的 loading框
                            uni.hideLoading()
                        }, 2000)
                    } else {
                        that.isAllowClick = true;
                        setTimeout(() => {
                            this.$toast.show({
                                title: res.result.returnUserMessage,
                            })
                            uni.hideLoading()
                        }, 2000)
                    }
                })
            }else{
                this.isAllowClick = true
            }

        },
        getAuthPostData(cardImage) {
            let cardName = this.authStatusData.cardName;
            let cardNo = this.authStatusData.cardNo;

            let postData = {
                cardName,
                cardNo,
                cardImage,
            };

            if (checkDataFunc.checkBasics(postData, this.checkArray)) {
                return postData
            } else {
                return false
            }
        },

        getUploadToken(cb) {
            let that = this;
            this.$request({
                url: "upload/getUploadToken",
                method: "post",
            }).then((res) => {
                if (res.result.returnCode.toString() === "0") {
                    cb(res.data.uptoken)
                } else {
                    this.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
                // console.log(res)
            })
        }
    }
}