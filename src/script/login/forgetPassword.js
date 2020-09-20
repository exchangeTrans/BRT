import appHeader from '@/components/common/header.vue'
import loginHead from '@/components/login/loginHead.vue'
import loginBtn from '@/components/login/btn.vue'
import loginInput from "@/components/input/loginInput.vue";
import {checkDataFunc} from "../../static/js/common";

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
            country: "中国",
            countryNumber: "+86",
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

            getCodeStatus: false,
            spanName: '发送验证码',
            time: 60,
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
                    checkType: ["isPhone"],
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
        }
    },
    mounted() {

    },
    methods: {
        typeChange(type) {
            this.type = type
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
        btnClick() {
            let postData = this.getPostData();
            if (postData) {
                this.$request({
                    url: "common/forget",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    console.log(res)
                })
            }
        },
        getPostData() {
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.countryNumber.slice(1);
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
        sendSmsVerify() {
            let that = this;
            let sendCodeData = this.getSendCodeData();
            if (sendCodeData) {
                this.$request({
                    url: "common/sendCode",
                    method: "post",
                    params: sendCodeData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {
                        that.postData.verifyKey = res.data.verifyKey;
                        that.setIntervalFun()
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }

                })
            }


        },
        getSendCodeData() {
            let type = 2;//1注册 2忘记密码  3转账 4更换账号 5更换新账号
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.countryNumber.slice(1);
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
        setIntervalFun() {
            let that = this
            let interval = window.setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that.spanName = that.time + '秒后重新发送';
                --that.time;
                if (that.time < 0) {
                    that.spanName = "重新发送";
                    that.time = 60;
                    that.getCodeStatus = false
                    window.clearInterval(interval);
                }
            }, 1000);
        },
    },
}
