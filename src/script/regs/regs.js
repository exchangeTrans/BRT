import appHeader from "@/components/common/header.vue"
import loginHead from '@/components/login/loginHead.vue'
import loginBtn from '@/components/login/btn.vue'
import loginInput from '@/components/input/loginInput.vue'
import {checkDataFunc} from "@/static/js/common";

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
            mode: "",
            defaultChoice: "PHONE",
            leftText: this.$t('regs').phoneRegs,
            rightText: this.$t('regs').emailRegs,
            btnText: this.$t('regs').regsBtn,
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
                'width': "98rpx",
                'margin': 'auto 0rpx auto 20rpx',
            },
            inviteWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '0rpx 0rpx 16rpx 16rpx',
            },
            phoneLastTextStyle: {},
            inputPhoneStyle: {
                width: "444rpx",
            },
            passwordStyle: {
                width: '562rpx',
            },
            inputVerifyCodeStyle: {
                width: '390rpx'
            },
            emailStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '16rpx 16rpx 0rpx 0rpx',

            },
            headerOptions: {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            type: "PHONE",

            phoneCodeStatus: false,
            emailCodeStatus: false,
            phoneName: this.$t('regs').phoneName,
            phoneTime: 60,
            emailName: this.$t('regs').emailName,
            emailTime: 60,
            postData: {
                tel: "",
                email: "",
                password: "",
                passwordConfirm: "",
                verifyCode: "",
                verifyKey: "",
                inviteCode: "",
            },

            checkPhoneArray: [
                {
                    name: this.$t('regs').checkPhoneArray[0],
                    checkKey: "tel",
                    // checkType: ["isPhone"],
                },
                {
                    name: this.$t('regs').checkPhoneArray[1],
                    checkKey: "verifyCode",
                },
                {
                    name: this.$t('regs').checkPhoneArray[2],
                    checkKey: "password",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: this.$t('regs').checkPhoneArray[3],
                    checkKey: "passwordConfirm",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: this.$t('regs').checkPhoneArray[4],
                    checkKey: "inviteCode",
                },
            ],

            checkEmailArray: [
                {
                    name: this.$t('regs').checkPhoneArray[0],
                    checkKey: "email",
                    checkType: ["isEmail"],
                },
                {
                    name: this.$t('regs').checkPhoneArray[1],
                    checkKey: "verifyCode",
                },
                {
                    name: this.$t('regs').checkPhoneArray[2],
                    checkKey: "password",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: this.$t('regs').checkPhoneArray[3],
                    checkKey: "passwordConfirm",
                    checkType: ["length"],
                    minLength: 6,
                    maxLength: 20,
                },
                {
                    name: this.$t('regs').checkPhoneArray[4],
                    checkKey: "inviteCode",
                },
            ],

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
            isAllowClick:true,
        }
    },

    onShow() {
        this.setCountry();
    },
    watch: {
        contury(val, oldVal) {
            // console.log(val);
            // console.log(oldVal);
        }
    },
    computed: {  
        i18n () {  
          return this.$t('regs')  
        }  
      },  
    methods: {
        typeChange(type) {
            this.type = type
            //切换注册方式重置数据
            this.postData = {
                tel: "",
                email: "",
                password: "",
                passwordConfirm: "",
                verifyCode: "",
                verifyKey: "",
                inviteCode: "",
            };
        },
        inputChange(key, value) {
            this.postData[key] = value;
        },
        toChooseCountry() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: "chooseCountry/chooseCountry",
            })
        },
        setCountry() {
            let contury = this.$store.state.defaultData.contury;
            if (!contury.titleText) {

            } else {
                this.chooseCountry = contury;
            }
        },
        btnClick() {
            // console.log("下一步")
            let postData = this.getPostData();
            let that = this;
            if(!this.isAllowClick){
                return
            }
            if (postData) {
                that.isAllowClick = false;
                uni.showLoading({
                    title: that.$t('regs').showLoading
                })
                this.$request({
                    url: "common/register",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    // data: {userLoginId: "1307899918186184706", userLoginToken: "ab7036f39d831f807980b701ce0f8371"}
                    // userLoginId: "1307899918186184706"
                    // userLoginToken: "ab7036f39d831f807980b701ce0f8371"
                    // result: {returnCode: "0", returnUserMessage: "成功", returnMessage: "成功"}
                    // returnCode: "0"
                    // returnMessage: "成功"
                    // returnUserMessage: "成功"
                    if (res.result.returnCode.toString() === "0") {
                        let loginMsg = {
                            isLogin: true,
                            userLoginId: res.data.userLoginId,
                            userLoginToken: res.data.userLoginToken,
                        }
                        this.$storage.set({
                            key: "loginMsg",
                            data: loginMsg,
                        },function(){
                            that.$store.dispatch('getUserMsg');
                        });
                        this.$jumpPage.jump({
                            type: 'reLaunch',
                            url: 'index/index'
                        });
                        uni.hideLoading()
                    } else {
                        that.isAllowClick = true;
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                    }
                })
            }else{
                that.isAllowClick = true;
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
            let inviteCode = this.postData.inviteCode;
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
                inviteCode,
                verifyKey,
                verifyCode,
                countryCode,
            };
            if (checkDataFunc.checkBasics(postData, checkArray)) {
                if (postData.verifyKey === "") {
                    this.$toast.show({
                        title: this.$t('regs').verifyKey,
                    })
                } else if (postData.password !== postData.passwordConfirm) {
                    this.$toast.show({
                        title: this.$t('regs').password,
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
            let that = this;
            if (!this[name]) {
                this[name] = true;
                let sendCodeData = this.getSendCodeData();
                if (sendCodeData) {
                    // uni.showLoading({
                    //     title: "加载中..."
                    // })
                    that.setIntervalFun(sendCodeData.accountType);
                    this.$request({
                        url: "common/sendCode",
                        method: "post",
                        params: sendCodeData,
                    }).then((res) => {
                        if (res.result.returnCode.toString() === "0") {
                            that.postData.verifyKey = res.data.verifyKey;
                            uni.hideLoading()
                            
                        } else {
                            // this[name] = false;
                            that.$toast.show({
                                title: res.result.returnUserMessage,
                            })
                            // uni.hideLoading()
                            setTimeout(function () {
                                that[name] = false;
                            },3000)
                        }

                    })
                }
            }
        },
        getSendCodeData() {
            let type = 1;//1注册 2忘记密码  3转账 4更换账号 5更换新账号
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.chooseCountry.dialingCode;
            let tel = this.postData.tel;
            let email = this.postData.email;
            let tip1 = this.$t('regs').checkPhoneArray[0];
            let checkPhoneArray = [
                {
                    name: tip1,
                    checkKey: "tel",
                    // checkType: ["isPhone"],
                },
            ];
            let checkEmailArray = [
                {
                    name: this.$t('regs').checkEmailArray[0],
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
        loginTouch() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'login/login'
            })
        },
        setIntervalFun(accountType) {
            // debugger;
            let that = this;
            let resend1 = this.i18n.resend1;
            let resend2 = this.i18n.resend2;
            let tempAccountType = accountType === 0 ? 'phoneTime' : 'emailTime';//0手机 1邮箱
            let tempName = accountType === 0 ? 'phoneName' : 'emailName';//0手机 1邮箱
            let tempStauts = accountType === 0 ? 'phoneCodeStatus' : 'emailCodeStatus';
            // that[tempStauts] = true;
            let interval = setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that[tempName] = that[tempAccountType] + resend1;
                --that[tempAccountType];
                if (that[tempAccountType] < 0) {
                    that[tempName] = resend2;
                    that[tempStauts] = false;
                    that[tempAccountType] = 60;
                    clearInterval(interval);
                }
            }, 1000);
        },
    },
}
