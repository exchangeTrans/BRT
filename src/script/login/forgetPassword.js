import appHeader from '@/components/common/header.vue'
import loginHead from '@/components/login/loginHead.vue'
import loginBtn from '@/components/login/btn.vue'
import loginInput from "@/components/input/loginInput.vue";
import {checkDataFunc} from "../../static/js/common";
import set from "../set/set";

export default {
    name: "forgetPassword",
    components: {
        appHeader,
        loginHead,
        loginBtn,
        loginInput,
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "",
                isWhiteIcon: true,
                style: {
                    'font-size': '36rpx',
                    'font-family': 'PingFangSC-Semibold, PingFang SC',
                    'font-weight': '600',
                    'color': '#FFFFFF',
                    'line-height': '50rpx',

                },
                rightItem: {
                    type: "text",
                    text: "",
                },
                headerIsNoBoder: true,
            },
            mode: "",
            defaultType: "PHONE",
            leftText: this.$t('forgetPassword').phoneForget,
            rightText: this.$t('forgetPassword').emailForget,
            type: "PHONE",
            phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
            countryChoiceIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
            countryChoiceLastIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
            verifyCodeIcon: `url(${require('@/static/images/login/smsVerifyCode.png')})`,
            passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
            emailIcon: `url(${require('@/static/images/login/emailChoice.png')})`,
            btnStyle: {
                "margin-top": "60rpx"
            },
            phoneFirstStyle: {
                "margin": "auto 0rpx auto 20rpx",
                'font-size': '32rpx',
                'font-family': 'PingFangSC-Regular, PingFang SC',
                'font-weight': '400',
                'width': "98rpx",
                'color': '#1A1A1A',
                'line-height': '120rpx',

            },
            emailIconStyle: {
                'margin-right': '20rpx'
            },
            emailWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '16rpx 16rpx 0rpx 0rpx',
            },
            lastWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '0rpx 0rpx 16rpx 16rpx',
            },
            inputPhoneStyle: {
                width: "444rpx",
            },
            passwordStyle: {
                width: '562rpx',
            },
            inputVerifyCodeStyle: {
                width: '390rpx'
            },

            phoneCodeStatus: false,
            emailCodeStatus: false,
            phoneName: '发送验证码',
            phoneTime: 60,
            emailName: '发送验证码',
            emailTime: 60,

            postData: {
                tel: "",
                email: "",
                password: "",
                passwordConfirm: "",
                verifyCode: "",
                verifyKey: "",
            },
            checkPhoneArray: [
                {
                    name: "手机号",
                    checkKey: "tel",
                    // checkType: ["isPhone"],
                },
                {
                    name: "验证码",
                    checkKey: "verifyCode",
                },
                {
                    name: "密码",
                    checkKey: "password",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: "确认密码",
                    checkKey: "passwordConfirm",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
            ],

            checkEmailArray: [
                {
                    name: "邮箱",
                    checkKey: "email",
                    checkType: ["isEmail"],
                },
                {
                    name: "验证码",
                    checkKey: "verifyCode",
                },
                {
                    name: "密码",
                    checkKey: "password",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: "确认密码",
                    checkKey: "passwordConfirm",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
            ],

            chooseCountry: {
                countryCode: "CN",
                countryId: "37",
                dialingCode: "86",
                imagePath: "",
                titleCN: "中国",
                titleEN: "CHINA",
                titleJP: "CHINA",
                titleKO: "CHINA",
            },
        }
    },
    onShow() {
        this.setCountry();
    },
    mounted() {

    },
    methods: {
        typeChange(type) {
            this.type = type;
            //切换注册方式重置数据
            this.postData = {
                tel: "",
                email: "",
                password: "",
                passwordConfirm: "",
                verifyCode: "",
                verifyKey: "",
            };
        },
        inputChange(key, value) {
            this.postData[key] = value;
        },
        jumpRegs() {
            this.$jumpPage.jump({
                type: "navigateTo",
                url: "regs/regs",
            })
        },
        toChooseCountry() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: "chooseCountry/chooseCountry",
            })
        },
        setCountry() {
            let contury = this.$store.state.defaultData.contury;
            if (!contury.titleCN) {

            } else {
                this.chooseCountry = contury;
            }
        },
        btnClick() {
            let postData = this.getPostData();
            if (postData) {
                uni.showLoading({
                    title: "加载中..."
                })
                this.$request({
                    url: "common/forget",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    // data: {userLoginId: "1307916833663221762", userLoginToken: "399354412b4201206d057d48d7216623"}
                    // userLoginId: "1307916833663221762"
                    // userLoginToken: "399354412b4201206d057d48d7216623"
                    // result: {returnCode: "0", returnUserMessage: "成功", returnMessage: "成功"}
                    // returnCode: "0"
                    // returnMessage: "成功"
                    // returnUserMessage: "成功"
                    // console.log(res)
                    if (res.result.returnCode.toString() === "0") {
                        let loginMsg = {
                            isLogin: true,
                            userLoginId: res.data.userLoginId,
                            userLoginToken: res.data.userLoginToken,
                        }
                        this.$storage.setSync({
                            key: "loginMsg",
                            data: loginMsg,
                        });
                        this.$jumpPage.jump({
                            type: 'reLaunch',
                            url: 'index/index'
                        });
                        uni.hideLoading()
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            }
        },
        getPostData() {
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.chooseCountry.dialingCode;
            let countryCode = this.chooseCountry.countryCode;
            let tel = this.postData.tel;
            let email = this.postData.email;
            let password = this.postData.password;
            let passwordConfirm = this.postData.passwordConfirm;
            let verifyKey = this.postData.verifyKey;
            let verifyCode = this.postData.verifyCode;
            let checkArray = accountType === 0 ? this.checkPhoneArray : this.checkEmailArray;

            let postData = {
                accountType,
                dialingCode,
                countryCode,
                tel,
                email,
                password,
                passwordConfirm,
                verifyKey,
                verifyCode,
            };
            if (checkDataFunc.checkBasics(postData, checkArray)) {
                if (postData.verifyKey === "") {
                    this.$toast.show({
                        title: "请先获取验证码",
                    })
                } else if (postData.password !== postData.passwordConfirm) {
                    this.$toast.show({
                        title: "两次密码不一致，请重新输入",
                    })
                } else {
                    return postData = {
                        ...postData,
                        password: this.$md5(postData.password),
                        passwordConfirm: this.$md5(postData.passwordConfirm),
                    }
                }
            } else {
                return false
            }
        },
        sendSmsVerify(name) {
            // debugger
            let that = this;
            if (!this[name]) {
                this[name] = true;
                let sendCodeData = this.getSendCodeData();
                if (sendCodeData) {
                    uni.showLoading({
                        title: "加载中..."
                    })
                    this.$request({
                        url: "common/sendCode",
                        method: "post",
                        params: sendCodeData,
                    }).then((res) => {
                        if (res.result.returnCode.toString() === "0") {
                            that.postData.verifyKey = res.data.verifyKey;
                            uni.hideLoading();
                            that.setIntervalFun(sendCodeData.accountType);
                        } else {

                            that.$toast.show({
                                title: res.result.returnMessage,
                            });
                            uni.hideLoading();
                            setTimeout(function () {
                                that[name] = false;
                            },3000)
                        }

                    })
                }
            }
        },
        getSendCodeData() {
            let type = 2;//1注册 2忘记密码  3转账 4更换账号 5更换新账号
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.chooseCountry.dialingCode;
            let tel = this.postData.tel;
            let email = this.postData.email;

            let checkPhoneArray = [
                {
                    name: "手机号",
                    checkKey: "tel",
                    checkType: ["isPhone"],
                },
            ];
            let checkEmailArray = [
                {
                    name: "邮箱",
                    checkKey: "email",
                    checkType: ["isEmail"],
                },
            ];

            let checkArray = accountType === 0 ? checkPhoneArray : checkEmailArray;

            let sendCodeData = {
                type,
                accountType,
                dialingCode,
                tel,
                email,
            }
            if (checkDataFunc.checkBasics(sendCodeData, checkArray)) {
                return sendCodeData
            } else {
                return false
            }
        },
        setIntervalFun(accountType) {
            let that = this
            let tempAccountType = accountType === 0 ? 'phoneTime' : 'emailTime';//0手机 1邮箱
            let tempName = accountType === 0 ? 'phoneName' : 'emailName';//0手机 1邮箱
            let tempStauts = accountType === 0 ? 'phoneCodeStatus' : 'emailCodeStatus';
            // that[tempStauts] = true;

            let interval = setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that[tempName] = that[tempAccountType] + '秒后重新发送';
                --that[tempAccountType];
                if (that[tempAccountType] < 0) {
                    that[tempName] = "重新发送";
                    that[tempStauts] = false;
                    that[tempAccountType] = 60;
                    clearInterval(interval);
                }
            }, 1000);
        },
    },
}
