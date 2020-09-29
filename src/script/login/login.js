import appHeader from '@/components/common/header.vue';
import loginHead from '@/components/login/loginHead.vue';
import loginInput from '@/components/input/loginInput.vue';
import loginBtn from '@/components/login/btn.vue';

import {
    checkDataFunc,
} from "../../static/js/common.js";

export default {
    name: "login",
    components: {
        loginHead,
        loginInput,
        loginBtn,
        appHeader
    },
    data() {
        return {
            mode: "",
            type: "PHONE",
            cityChoiceIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
            cityChoiceLastIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
            emailChoice: `url(${require('@/static/images/login/emailChoice.png')})`,
            phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
            passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
            leftText: this.$t('login').phoneLogin,
            rightText: this.$t('login').emailLogin,
            defaultType: "PHONE",
            country: "中国",
            countryNumber: "+86",
            wrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': ' 0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
            },
            lastWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
                'border-radius': '0px 0px 16px 16px',
            },
            phoneFirstText: {
                'font-size': '32rpx',
                'font-family': 'PingFangSC-Regular, PingFang SC',
                'font-weight': '400',
                'color': '#1A1A1A',
                'line-height': '120rpx',
                'width': "98rpx",
                'margin': 'auto 0rpx auto 20rpx',
            },
            inputPhoneStyle: {
                width: "444rpx",
            },
            passwordStyle: {
                width: '562rpx',
            },
            emailStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
                'border-radius': '16rpx 16rpx 0rpx 0rpx',
                'margin-top': '40rpx',
            },
            btnText: this.$t('login').loginBtn,
            btnStyle: {
                'background': 'linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%)',
                'border-radius': '50rpx',
                'margin-top': '60rpx',
            },
            headerOptions: {
                show: true,
                isAllowReturn: true,
                isWhiteIcon:true,
                text: "",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },

            postData: {
                phone: "",
                password: "",
                email: "",
            },

            checkPhoneArray: [
                {
                    name: "手机号",
                    checkKey: "tel",
                    checkType: ["isPhone"],
                },
                {
                    name: "密码",
                    checkKey: "password",
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
                    name: "密码",
                    checkKey: "password",
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
            this.type = type
        },
        inputChange(key, value) {
            /*console.log(key)
            console.log(value)*/
            this.postData[key] = value;
            // console.log(this.postData);
        },
        jumpForgetPassword() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'login/forgetPassword',
            })
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
        jumpRegs() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'regs/regs'
            })
        },
        loginClick() {
            // console.log("登录")
            // debugger
            let postData = this.getPostData()
            // debugger
            // console.log(postData);
            if (postData) {
                this.$request({
                    url: "common/login",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    // debugger
                    // console.log(res);
                    // data: {userLoginId: "1307906608826679298", userLoginToken: "bf1c35263cb4c36d1ad4dafdd04efa85"}
                    // userLoginId: "1307906608826679298"
                    // userLoginToken: "bf1c35263cb4c36d1ad4dafdd04efa85"
                    // result: {returnCode: "0", returnUserMessage: "登录成功", returnMessage: "登录成功"}
                    // returnCode: "0"
                    // returnMessage: "登录成功"
                    // returnUserMessage: "登录成功"
                    if (res.result.returnCode.toString() === "0") {
                        // console.log(res);
                        this.$store.dispatch('getUserMsg');
                        let loginMsg = {
                            isLogin: true,
                            userLoginId: res.data.userLoginId,
                            userLoginToken: res.data.userLoginToken,
                        }
                        this.$storage.setSync({
                            key: "loginMsg",
                            data: loginMsg,
                        });
                        // switchTab
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                        this.$jumpPage.jump({
                            type:'reLaunch',
                            url: 'index/index'
                        });
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            }
        },
        getPostData() {
            // debugger
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.chooseCountry.dialingCode;
            let countryCode = this.chooseCountry.countryCode;
            let tel = this.postData.phone;
            let email = this.postData.email;
            let password = this.postData.password;
            let checkArray = accountType === 0 ? this.checkPhoneArray : this.checkEmailArray;
            // console.log(checkArray);

            let postData = {
                accountType,
                dialingCode,
                countryCode,
                tel,
                email,
                password,
            };

            if (checkDataFunc.checkBasics(postData, checkArray)) {
                return postData = {
                    ...postData,
                    password: this.$md5(postData.password),
                }
            } else {
                return false
            }
        }
    },
}
