<template>
    <view class="regs" id="regs" :style="{'background': mode !== 'DARK' ? '#F9FAFA' : '#22252A'}">
        <app-header :headerOptions="headerOptions"></app-header>
        <view class="wrap">
            <loginHead :defaultChoice="defaultChoice" :leftText="leftText" :rightText="rightText"
                       @typeChange="typeChange"></loginHead>
            <view v-show="type === 'PHONE'" class="phoneRegsFlag">
                <view class="countryChoice" :style="{'background': mode !== 'DARK' ? '#FFFFFF' : '#272A2E'}">
                    <view class="chountryChoiceIcon" :style="{'background-image': countryIcon}"></view>
                    <view class="countryText" :style="{'color': mode !== 'DARK' ? '#1A1A1A' : '#D9DADB'}">{{country}}</view>
                    <view class="lastCountryIcon" :style="{'background-image': lastCountryIcon}"></view>
                </view>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="phoneIcon" :firstTextShow="true"
                            :firstText="countryNumber"
                            :firstTextStyle="phoneFirstTextStyle"
                            :placeHolder="'请输入手机号码'" @inputChange="inputChange('phone', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="smsVerifyCode" :placeHolder="'请输入手机验证码'"
                            :lastTextShow="true"
                            :lastText="'发送验证码'"
                            :lastTextStyle="phoneLastTextStyle" @lastTextClick="sendSmsVerify"
                            @inputChange="inputChange('smsVerifyCode', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请输入6-20位登录密码'"
                            @inputChange="inputChange('passsword', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请再次输入6-20位登录密码'"
                            @inputChange="inputChange('surePassword', $event)"></loginInput>
                <loginInput :mode="mode" :wrapStyle="inviteWrapStyle" :iconShow="true" :iconSrc="inviteCode"
                            :placeHolder="'请输入推广码'"
                            @inputChange="inputChange('inviteCode', $event)"></loginInput>
            </view>
            <view v-show="type === 'EMAIL'" class="emailRegsFlag">
                <loginInput :mode="mode" :wrapStyle="emailStyle" :iconShow="true" :iconSrc="emailIcon"
                            :placeHolder="'请填写邮箱'"
                            @inputChange="inputChange('email', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="smsVerifyCode" :lastTextShow="true"
                            :lastText="'发送验证码'"
                            :placeHolder="'请输入邮箱验证码'" @inputChange="inputChange('emailVerify', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请输入6-20位登录密码'"
                            @inputChange="inputChange('emailPassword', $event)"></loginInput>
                <loginInput :mode="mode" :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请再次输入6-20位登录密码'"
                            @inputChange="inputChange('emailSurePassword', $event)"></loginInput>
                <loginInput :mode="mode" :wrapStyle="inviteWrapStyle" :iconShow="true" :iconSrc="inviteCode"
                            :placeHolder="'请输入推广码'"
                            @inputChange="inputChange('emailInviteCode', $event)"></loginInput>
            </view>
            <loginBtn :btnText="btnText" :btnStyle="btnStyle" @btnClick="btnClick"></loginBtn>
            <view class="loginTouch" @tap="loginTouch">已有账号，立即登录</view>
        </view>
    </view>
</template>

<script src="@/script/regs/regs.js">
    // import appHeader from "@/components/common/header.vue"
    // import loginHead from '@/components/login/loginHead.vue'
    // import loginBtn from '@/components/login/btn.vue'
    // import loginInput from '@/components/input/loginInput.vue'
    //
    // export default {
    //     name: "regs",
    //     components: {
    //         loginHead,
    //         loginBtn,
    //         loginInput,
    //         appHeader
    //     },
    //     data() {
    //         return {
    //             defaultChoice: "PHONE",
    //             leftText: "手机号注册",
    //             rightText: "邮箱注册",
    //             btnText: "下一步",
    //             country: "中国",
    //             countryNumber: "+86",
    //             countryIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
    //             lastCountryIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
    //             phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
    //             smsVerifyCode: `url(${require('@/static/images/login/smsVerifyCode.png')})`,
    //             passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
    //             inviteCode: `url(${require('@/static/images/login/inviteCode.png')})`,
    //             emailIcon: `url(${require('@/static/images/login/emailChoice.png')})`,
    //             btnStyle: {
    //                 'background': 'linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%)',
    //                 'border-radius': '50rpx',
    //                 'margin-top': '60rpx',
    //             },
    //             phoneFirstTextStyle: {
    //                 'font-size': '32rpx',
    //                 'font-family': 'PingFangSC-Regular, PingFang SC',
    //                 'font-weight': '400',
    //                 'color': '#1A1A1A',
    //                 'line-height': '120rpx',
    //                 'margin': 'auto 60rpx auto 20rpx',
    //             },
    //             inviteWrapStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
    //                 'border-radius': '0rpx 0rpx 16rpx 16rpx',
    //             },
    //             phoneLastTextStyle: {},
    //             emailStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)',
    //                 'border-radius': '16rpx 16rpx 0rpx 0rpx',
    //
    //             },
    //             headerOptions: {
    //                 show: true,
    //                 isAllowReturn: true,
    //                 text: "",
    //                 rightItem: {
    //                     type: "text",
    //                     text: "",
    //                 },
    //                 bodyPadding: {"padding": '0,0,0,0'},
    //                 headerIsNoBoder: true,
    //             },
    //             type: "PHONE",
    //         }
    //     },
    //     mounted() {
    //
    //     },
    //     methods: {
    //         typeChange(type) {
    //             this.type = type
    //         },
    //         btnClick() {
    //             console.log("下一步")
    //         },
    //         inputChange(key, value) {
    //             console.log(key)
    //             console.log(value)
    //         },
    //         sendSmsVerify() {
    //             console.log("发送验证码")
    //         },
    //         loginTouch() {
    //             this.jumPage.jump({
    //                 type: 'navigateTo',
    //                 name: 'login'
    //             })
    //         }
    //     },
    // }
</script>

<style lang="less">
    .regs {
        width: 100%;
        height: 100%;
        background: #22252A;

        .wrap {
            display: block;

            .phoneRegsFlag {
                margin-top: -120rpx;

                .countryChoice {
                    position: relative;
                    display: flex;
                    margin: 0 auto;

                    width: 690rpx;
                    height: 120rpx;
                    background: #FFFFFF;
                    box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1);
                    border-radius: 16rpx 16rpx 0px 0px;

                    .chountryChoiceIcon {
                        width: 48rpx;
                        height: 48rpx;
                        margin: auto 0 auto 30rpx;
                        background: no-repeat center center;
                        background-size: 100% 100%;
                    }

                    .countryText {
                        margin: auto 0 auto 20rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 44rpx;
                    }

                    .lastCountryIcon {
                        background: no-repeat center center;
                        background-size: 100% 100%;
                        width: 48rpx;
                        height: 48rpx;
                        position: absolute;
                        right: 30rpx;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }

            .emailRegsFlag {
                margin-top: -120rpx;
            }

            .loginTouch {
                margin: 40rpx;
                text-align: center;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #098FE0;
                line-height: 44rpx;

            }
        }
    }
</style>
