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
            btnStyle: {
                'margin-top': '60rpx'
            },
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },

            postData: {
                phone:"15282148708",
                password:"111111",
                email:"1191125750@qq.com",
            },

            checkPhoneArray: [
                {
                    name: "手机号",
                    checkKey: "tel",
                    checkType:["isPhone"],
                },
                {
                    name: "密码",
                    checkKey: "password",
                    checkType:["length"],
                    minLenght:8,
                    maxLenght:16,
                },
            ],

            checkEmailArray: [
                {
                    name: "邮箱",
                    checkKey: "email",
                    checkType:["isEmail"],
                },
                {
                    name: "密码",
                    checkKey: "password",
                    checkType:["length"],
                    minLenght:8,
                    maxLenght:16,
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
            /*console.log(key)
            console.log(value)*/
            this.postData[key] = value;
            console.log(this.postData);
        },
        jumpForgetPassword() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'login/forgetPassword'
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
            debugger
            if(postData){
                console.log(111);
                console.log(this.$request);
                this.$request({
                    url: "common/login",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    debugger
                    console.log(res);
                })
            } else {
                console.log(222);
            }
        },
        getPostData() {
            let accountType = this.type === 'PHONE' ? 0 : 1;//0手机 1邮箱
            let dialingCode = this.countryNumber.slice(1);
            let tel = this.postData.phone;
            let email = this.postData.email;
            let password = this.postData.password;
            let checkArray = accountType === 0 ? this.checkPhoneArray : this.checkEmailArray;
            // console.log(checkArray);

            let postData = {
                accountType,
                dialingCode,
                tel,
                email,
                password,
            };

            if (checkDataFunc.checkBasics(postData, checkArray)) {
                return postData
            } else {
                return false
            }
        }
    },
}
