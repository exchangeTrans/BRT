import appHeader from '@/components/common/header.vue'
import loginHead from '@/components/login/loginHead.vue'
import loginInput from '@/components/input/loginInput.vue'
import loginBtn from '@/components/login/btn.vue'

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
            leftText: "手机登录",
            rightText: "邮箱登录",
            defaultType: "PHONE",
            country: "中国",
            wrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': ' 0px -1px 0px 0px rgba(0, 0, 0, 0.1)',
            },
            lastWrapStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0px -1px 0px 0px rgba(0, 0, 0, 0.1)',
                'border-radius': '0px 0px 16px 16px',
            },
            phoneFirstText: {
                'font-size': '32rpx',
                'font-family': 'PingFangSC-Regular, PingFang SC',
                'font-weight': '400',
                'color': '#1A1A1A',
                'line-height': '120rpx',

                'margin': 'auto 60rpx auto 20rpx',
            },
            emailStyle: {
                'background': '#FFFFFF',
                'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
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
            countryNumber: "+86",
        }
    },
    mounted() {

    },
    methods: {
        typeChange(type) {
            this.type = type
        },
        inputChange(key, value) {
            console.log(key)
            console.log(value)
        },
        jumpForgetPassword() {
            this.jumpPage.jump({
                type: 'navigateTo',
                name: 'forgetPassword'
            })
        },
        jumpRegs() {
            this.jumpPage.jump({
                type: 'navigateTo',
                name: 'regs'
            })
        },
        loginClick() {
            console.log("登录")
        }
    },
}
