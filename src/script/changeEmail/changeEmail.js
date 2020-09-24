import appHeader from "@/components/common/header.vue"
import loginHead from '@/components/login/loginHead.vue'
import loginBtn from '@/components/login/btn.vue'
import loginInput from '@/components/input/loginInput.vue'
import {checkDataFunc} from "../../static/js/common";

export default {
    name: "regs",
    components: {
        loginHead,
        loginBtn,
        loginInput,
        appHeader
    },
    data() {
        return {
            defaultChoice: "PHONE",
            leftText: "手机号注册",
            rightText: "邮箱注册",
            btnText: "更换邮箱绑定",
            country: "中国",
            countryNumber: "+86",

            topBg: `url(${require('@/static/images/changePhone/topBg.png')})`,
            countryIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
            lastCountryIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
            phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
            smsVerifyCode: `url(${require('@/static/images/login/smsVerifyCode.png')})`,
            passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
            inviteCode: `url(${require('@/static/images/login/inviteCode.png')})`,
            emailIcon: `url(${require('@/static/images/login/emailChoice.png')})`,
            btnStyle: {
                'background': 'linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%)',
                'border-radius': '50rpx',
                'margin-top': '60rpx',
            },
            phoneFirstTextStyle: {
                'font-size': '32rpx',
                'font-family': 'PingFangSC-Regular, PingFang SC',
                'font-weight': '400',
                'color': '#1A1A1A',
                'line-height': '120rpx',
                'margin': 'auto 60rpx auto 20rpx',
            },
            inviteWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '0rpx 0rpx 16rpx 16rpx',
            },
            phoneLastTextStyle: {},
            emailStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '16rpx 16rpx 0rpx 0rpx',

            },
            headerOptions: {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "更换邮箱",

                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#ffffff',
                },
                headerIsNoBoder: true,
            },
            type: "PHONE",

            userInfo: {},

            getCodeStatus: false,
            spanNameNew: '发送验证码',
            spanNameOld: '发送验证码',
            timeNew: 60,
            timeOld: 60,

            postData: {
                // tel: "",
                dialingCode: "",
                email: "11911257@qq.com",
                verifyKey: "",
                verifyCode: "123456",
                verifyKeyNew: "",
                verifyCodeNew: "123456",
            },

            /*chooseCountry: {
                countryCode: "CN",
                countryId: "37",
                dialingCode: "86",
                imagePath: "",
                titleCN: "中国",
                titleEN: "CHINA",
                titleJP: "CHINA",
                titleKO: "CHINA",
            },*/
        }
    },
    onShow() {
        this.setCountry();
        this.userInfo = this.$store.state.defaultData.userInfo;
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        // console.log(theme);
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "更换邮箱",

                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#ffffff',
                },
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "更换邮箱",

                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#ffffff',
                },
                headerIsNoBoder: true,
            }
        }
        this.userInfo = this.$store.state.defaultData.userInfo;
    },
    methods: {
        typeChange(type) {
            this.type = type
        },
        btnClick() {
            let postData = this.getPostData();
            if (postData) {
                this.$request({
                    url: "me/setUserAccount",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    // console.log(res);
                    if (res.result.returnCode.toString() === "0") {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'navigateBack',
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            }
        },
        getPostData() {
            // let type = type;//1注册 2忘记密码  3转账 4更换账号 5更换新账号
            let accountType = 1;//0手机 1邮箱
            // let dialingCode = this.chooseCountry.dialingCode;
            // let tel = this.postData.tel;
            let email = this.postData.email;
            let verifyKey = this.postData.verifyKey;
            let verifyCode = this.postData.verifyCode;
            let verifyKeyNew = this.postData.verifyKeyNew;
            let verifyCodeNew = this.postData.verifyCodeNew;

            let checkEmailArray = [
                {
                    name: "新绑定邮箱号码",
                    checkKey: "email",
                    checkType: ["isEmail"],
                },
                {
                    name: "当前邮箱验证码",
                    checkKey: "verifyCode",
                },
                {
                    name: "新邮箱验证码",
                    checkKey: "verifyCodeNew",
                },
            ];
            let postData = {
                // type,
                accountType,
                // dialingCode,
                // tel,
                email,
                verifyKey,
                verifyCode,
                verifyKeyNew,
                verifyCodeNew,
            }
            if (checkDataFunc.checkBasics(postData, checkEmailArray)) {
                if (postData.verifyKey === "") {
                    this.$toast.show({
                        title: "请获取当前邮箱验证码",
                    })
                } else if (postData.verifyKeyNew === "") {
                    this.$toast.show({
                        title: "请获取当新绑定邮箱验证码",
                    })
                } else {
                    return {
                        ...postData
                    }
                }
            } else {
                return false
            }
        },
        inputChange(key, value) {
            this.postData[key] = value;
        },

        setCountry() {
            let contury = this.$store.state.defaultData.contury;
            if (!contury.titleCN) {
            } else {
                this.chooseCountry = contury;
            }
        },
        toChooseCountry() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: "chooseCountry/chooseCountry",
            })
        },
        sendSmsVerify(type) {
            let that = this;
            let sendCodeData = this.getSendCodeData(type);
            if (sendCodeData) {
                this.$request({
                    url: "common/sendCode",
                    method: "post",
                    params: sendCodeData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {
                        if (type === 4) {
                            that.postData.verifyKey = res.data.verifyKey;
                            that.setIntervalFun(type, "spanNameOld")
                        } else if (type === 5) {
                            that.postData.verifyKeyNew = res.data.verifyKey;
                            that.setIntervalFun(type, "spanNameNew")
                        }


                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }

                })
            }
        },
        getSendCodeData(type) {
            let accountType = 1;//0手机 1邮箱
            // let dialingCode;
            let email;
            if (type === 4) {
                email = this.userInfo.email;
                // dialingCode = this.userInfo.dialingCode;
            } else if (type === 5) {
                email = this.postData.email;
                // dialingCode = this.chooseCountry.dialingCode;
            }

            let checkEmailArray = [
                {
                    name: "邮箱",
                    checkKey: "email",
                    checkType: ["isEmail"],
                },
            ];

            // let checkArray = accountType === 0 ? checkPhoneArray : checkEmailArray;

            let sendCodeData = {
                type,
                accountType,
                // dialingCode,
                email,
                // email,
            }
            if (checkDataFunc.checkBasics(sendCodeData, checkEmailArray)) {
                return sendCodeData
            } else {
                return false
            }
        },

        loginTouch() {
            this.jumPage.jump({
                type: 'navigateTo',
                name: 'login'
            })
        },

        setIntervalFun(type, name) {
            // debugger
            let that = this;
            let tempType;
            if (type === 4) {
                tempType = "timeOld";
            } else if (type === 5) {
                tempType = "timeNew";
            }
            let interval = setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that[name] = that[tempType] + '秒后重新发送';
                --that[tempType];
                if (that[tempType] < 0) {
                    that[name] = "重新发送";
                    that[tempType] = 60;
                    that.getCodeStatus = false
                    clearInterval(interval);
                }
            }, 1000);
        },
    },
}