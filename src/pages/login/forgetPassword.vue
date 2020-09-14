<template>
    <view class="forgetPassword" id="forgetPassword">
        <app-header :headerOptions="headerOptions">
        </app-header>
        <view class="wrap">
            <loginHead :defaultType="defaultType" :leftText="leftText" :rightText="rightText"
                       @typeChange="typeChange"></loginHead>
            <view class="phoneForgetFlag" v-show="type === 'PHONE'">
                <view class="countryChoice">
                    <view class="countryChoiceIcon" :style="{'background-image': countryChoiceIcon}"></view>
                    <view class="countryText">{{country}}</view>
                    <view class="lastCountryIcon" :style="{'background-image': countryChoiceLastIcon}"></view>
                </view>
                <loginInput :iconShow="true" :iconSrc="phoneIcon" :firstTextShow="true" :firstText="countryNumber"
                            :firstTextStyle="phoneFirstStyle" :placeHolder="'请输入注册手机号码'"
                            @inputChange="inputChange('phone', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="verifyCodeIcon" :lastTextShow="true" :lastText="'发送验证码'"
                            :placeHolder="'请输入手机验证码'" @inputChange="inputChange('smsVerifyCode', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请输入新登录密码'"
                            @inputChange="inputChange('password', $event)"></loginInput>
                <loginInput :wrapStyle="lastWrapStyle" :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="'请确认新登录密码'"
                            @inputChange="inputChange('surePassword', $event)"></loginInput>
            </view>
            <view class="emailForgetFlag" v-show="type === 'EMAIL'">
                <loginInput :iconShow="true" :iconSrc="emailIcon" :iconStyle="emailIconStyle"
                            :wrapStyle="emailWrapStyle"
                            :placeHolder="'请输入注册邮箱'" @inputChange="inputChange('email', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="verifyCodeIcon" :lastTextShow="true" :lastText="'发送验证码'"
                            :placeHolder="'请输入邮箱验证码'" @inputChange="inputChange('emailVerifyCode', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请输入新登录密码'"
                            @inputChange="inputChange('emailPassword', $event)"></loginInput>
                <loginInput :wrapStyle="lastWrapStyle" :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请确认新登录密码'"
                            @inputChange="inputChange('emailSurePassword', $event)"></loginInput>
            </view>
            <loginBtn :btnText="'重置密码'" :btnStyle="btnStyle"></loginBtn>
            <view class="regsTouch">
                没有账号？立即注册
            </view>
        </view>

    </view>
</template>

<script src="@/script/login/forgetPassword.js">
    // import appHeader from '@/components/common/header.vue'
    // import loginHead from '@/components/login/loginHead.vue'
    // import loginBtn from '@/components/login/btn.vue'
    // import loginInput from "@/components/input/loginInput.vue";
    //
    // export default {
    //     name: "forgetPassword",
    //     components: {
    //         appHeader,
    //         loginHead,
    //         loginBtn,
    //         loginInput,
    //     },
    //     data() {
    //         return {
    //             headerOptions: {
    //                 show: true,
    //                 isAllowReturn: true,
    //                 text: "",
    //                 isWhiteIcon: true,
    //                 style: {
    //                     'font-size': '36rpx',
    //                     'font-family': 'PingFangSC-Semibold, PingFang SC',
    //                     'font-weight': '600',
    //                     'color': '#FFFFFF',
    //                     'line-height': '50rpx',
    //
    //                 },
    //                 rightItem: {
    //                     type: "text",
    //                     text: "",
    //                 },
    //                 headerIsNoBoder: true,
    //             },
    //             defaultType: "PHONE",
    //             leftText: "手机号找回",
    //             rightText: "邮箱找回",
    //             type: "PHONE",
    //             phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
    //             countryChoiceIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
    //             countryChoiceLastIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
    //             verifyCodeIcon: `url(${require('@/static/images/login/smsVerifyCode.png')})`,
    //             passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
    //             emailIcon: `url(${require('@/static/images/login/emailChoice.png')})`,
    //             country: "中国",
    //             countryNumber: "+86",
    //             btnStyle: {
    //                 "margin-top": "60rpx"
    //             },
    //             phoneFirstStyle: {
    //                 "margin": "auto 60rpx auto 20rpx",
    //                 'font-size': '32rpx',
    //                 'font-family': 'PingFangSC-Regular, PingFang SC',
    //                 'font-weight': '400',
    //                 'color': '#1A1A1A',
    //                 'line-height': '120rpx',
    //
    //             },
    //             emailIconStyle: {
    //                 'margin-right': '20rpx'
    //             },
    //             emailWrapStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
    //                 'border-radius': '16rpx 16rpx 0rpx 0rpx',
    //             },
    //             lastWrapStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
    //                 'border-radius': '0rpx 0rpx 16rpx 16rpx',
    //
    //             }
    //         }
    //     },
    //     mounted() {
    //
    //     },
    //     methods: {
    //         typeChange(type) {
    //             this.type = type
    //         },
    //         inputChange(key, value) {
    //             console.log(key)
    //             console.log(value)
    //         }
    //     },
    // }
</script>

<style lang="less">
    .forgetPassword {
        width: 100%;
        height: 100%;
        background: #F9FAFA;

        .wrap {
            display: block;
            text-align: center;

            .phoneForgetFlag {
                margin-top: -120rpx;

                .countryChoice {
                    display: flex;
                    position: relative;
                    margin: 0 auto;

                    width: 690rpx;
                    height: 120rpx;
                    background: #FFFFFF;
                    box-shadow: 0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1);
                    border-radius: 16rpx 16rpx 0rpx 0rpx;

                    .countryChoiceIcon {
                        width: 48rpx;
                        height: 48rpx;
                        background: center center no-repeat;
                        background-size: 100% 100%;
                        margin: auto 0 auto 30rpx;
                    }

                    .countryText {
                        margin: auto 0 auto 20rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 120rpx;

                    }

                    .lastCountryIcon {
                        position: absolute;
                        right: 30rpx;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 48rpx;
                        height: 48rpx;
                        background: center center no-repeat;
                        background-size: 100% 100%;
                        margin: auto 0 auto 30rpx;
                    }
                }
            }

            .emailForgetFlag {
                margin-top: -120rpx;
            }

            .regsTouch {
                margin-top: 40rpx;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #098FE0;
                line-height: 44rpx;

            }
        }
    }
</style>
