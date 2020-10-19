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
            leftText: this.$t('changePhone').leftText,
            rightText:this.$t('changePhone').rightText,
            btnText: this.$t('changePhone').btnText,
            country: this.$t('changePhone').country,
            oldPhonePlaceholder: this.$t("changePhone").oldPhonePlaceholder,
            newPhonePlaceholder: this.$t("changePhone").newPhonePlaceholder,
            newPhoneVerifyCode: this.$t("changePhone").newPhoneVerifyCode,
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
                /*show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "更换手机号码",

                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#ffffff',
                },
                headerIsNoBoder: true,*/
            },
            type: "PHONE",
            userInfo: {},

            getCodeStatus: false,
            spanNameNew: this.$t('changePhone').spanNameNew,
            spanNameOld: this.$t('changePhone').spanNameOld,
            timeNew: 60,
            timeOld: 60,

            postData: {
                tel: "",
                dialingCode: "",
                // email: "",
                verifyKey: "",
                verifyCode: "",
                verifyKeyNew: "",
                verifyCodeNew: "",
            },

            chooseCountry: {
                countryCode: "CN",
                countryId: "37",
                dialingCode: "86",
                imagePath: "",
                titleText: "中国",
                titleEN: "CHINA",
                titleJP: "CHINA",
                titleKO: "CHINA",
            },

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
                text: this.$t('changePhone').changePhoneText,

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
                text: this.$t('changePhone').changePhoneText,

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
            // let that = this;
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
                            title: res.result.returnUserMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'navigateBack',
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                    }
                })
            }
        },
        getPostData() {
            // let type = type;//1注册 2忘记密码  3转账 4更换账号 5更换新账号
            let accountType = 0;//0手机 1邮箱
            let dialingCode = this.chooseCountry.dialingCode;
            let tel = this.postData.tel;
            let verifyKey = this.postData.verifyKey;
            let verifyCode = this.postData.verifyCode;
            let verifyKeyNew = this.postData.verifyKeyNew;
            let verifyCodeNew = this.postData.verifyCodeNew;

            let checkPhoneArray = [
                {
                    name: this.$t('changePhone').checkPhoneArray[0].name,
                    checkKey: "tel",
                    // checkType: ["isPhone"],
                },
                {
                    name: this.$t('changePhone').checkPhoneArray[1].name,
                    checkKey: "verifyCode",
                },
                {
                    name: this.$t('changePhone').checkPhoneArray[2].name,
                    checkKey: "verifyCodeNew",
                },
            ];
            let postData = {
                // type,
                accountType,
                dialingCode,
                tel,
                verifyKey,
                verifyCode,
                verifyKeyNew,
                verifyCodeNew,
            }
            if (checkDataFunc.checkBasics(postData, checkPhoneArray)) {
                if (postData.verifyKey === "") {
                    this.$toast.show({
                        title: this.$t('changePhone').getPhoneCode,
                    })
                } else if (postData.verifyKeyNew === "") {
                    this.$toast.show({
                        title: this.$t('changePhone').getNewPhoneCode,
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
            // console.log(key)
            // console.log(value)
            this.postData[key] = value;
        },
        setCountry() {
            let contury = this.$store.state.defaultData.contury;
            if (!contury.titleText) {
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
                if (type === 4) {
                    that.setIntervalFun(type, "spanNameOld")
                } else if (type === 5) {
                    that.setIntervalFun(type, "spanNameNew")
                }
                this.$request({
                    url: "common/sendCode",
                    method: "post",
                    params: sendCodeData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {
                        if (type === 4) {
                            that.postData.verifyKey = res.data.verifyKey;
                        } else if (type === 5) {
                            that.postData.verifyKeyNew = res.data.verifyKey;
                        }


                    } else {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                    }

                })
            }
        },
        getSendCodeData(type) {
            let accountType = 0;//0手机 1邮箱
            let dialingCode;
            let tel
            if (type === 4) {
                tel = this.userInfo.tel;
                dialingCode = this.userInfo.dialingCode;
            } else if (type === 5) {
                tel = this.postData.tel;
                dialingCode = this.chooseCountry.dialingCode;
            }

            let checkPhoneArray = [
                {
                    name: this.$t('changePhone').checkPhoneArray[3],
                    checkKey: "tel",
                    // checkType: ["isPhone"],
                },
            ];

            // let checkArray = accountType === 0 ? checkPhoneArray : checkEmailArray;

            let sendCodeData = {
                type,
                accountType,
                dialingCode,
                tel,
                // email,
            }
            if (checkDataFunc.checkBasics(sendCodeData, checkPhoneArray)) {
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
                that[name] = that[tempType] + that.$t('changePhone').resend1;
                --that[tempType];
                if (that[tempType] < 0) {
                    that[name] = that.$t('changePhone').resend2;
                    that[tempType] = 60;
                    that.getCodeStatus = false
                    clearInterval(interval);
                }
            }, 1000);
        },
    },
}