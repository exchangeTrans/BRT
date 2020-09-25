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
                text: "实名认证",
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
                text: "实名认证",
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
        };

        this.getAuthStatus();
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "实名认证",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
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
            upToken:"",

            checkArray: [
                {
                    name: "姓名",
                    checkKey: "cardName",
                },
                {
                    name: "证件号码",
                    checkKey: "cardNo",
                    checkType: ["isIdcard"],
                },
                {
                    name: "手持照片",
                    checkKey: "cardImage",
                },
            ],

        }
    },
    methods: {
        getAuthStatus(){
            // kyc/getKycState

            this.$request({
                url: "kyc/getKycState",
                method: "post",
            }).then((res) => {
                // debugger
                console.log(res);
                /*if (res.result.returnCode.toString() === "0") {
                    console.log(res);
                } else {
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }*/
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
            this.getUploadToken(function (upToken) {
                // debugger
                uploadFile(filePath, upToken, function (res) {
                    // debugger
                    // console.log(res);
                    that.getAuth(res)

                })
            })

        },

        getAuth(cardImage){
            debugger
            let postData = this.getAuthPostData(cardImage);
            if (postData) {
                this.$request({
                    url: "kyc/kyc1",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {
                        console.log(res);
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            }

        },
        getAuthPostData(cardImage){
            let cardName =  this.postData.name;
            let cardNo = this.postData.idCard;

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
                        title: res.result.returnMessage,
                    })
                }
                // console.log(res)
            })
        }
    }
}