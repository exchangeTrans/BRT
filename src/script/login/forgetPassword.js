import appHeader from '@/components/common/header.vue'
import loginHead from '@/components/login/loginHead.vue'
import loginBtn from '@/components/login/btn.vue'
import loginInput from "@/components/input/loginInput.vue";

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
        jumpRegs() {
            this.$jumpPage.jump({
                type: "navigateTo",
                url: "regs/regs",
            })
        }
    },
}
