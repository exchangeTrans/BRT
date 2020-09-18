<template>
    <view class="regs" id="regs">
        <app-header :headerOptions="headerOptions"></app-header>
        <view class="wrap">
            <loginHead :defaultChoice="defaultChoice" :leftText="leftText" :rightText="rightText"
                       @typeChange="typeChange"></loginHead>
            <view v-show="type === 'PHONE'" class="phoneRegsFlag">
                <view class="countryChoice">
                    <view class="chountryChoiceIcon" :style="{'background-image': countryIcon}"></view>
                    <view class="countryText">{{country}}</view>
                    <view class="lastCountryIcon" :style="{'background-image': lastCountryIcon}"></view>
                </view>
                <loginInput :iconShow="true" :iconSrc="phoneIcon" :firstTextShow="true"
                            :firstText="countryNumber"
                            :firstTextStyle="phoneFirstTextStyle"
                            :placeHolder="$t('regs').inputPhone"
                            :inputStyle="inputPhoneStyle"
                            @inputChange="inputChange('phone', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="smsVerifyCode"
                            :placeHolder="$t('regs').inputPhoneVerifyCode"
                            :inputStyle="inputVerifyCodeStyle"
                            :lastTextShow="true"
                            :lastText="$t('regs').sendVerifyCode"
                            :lastTextStyle="phoneLastTextStyle" @lastTextClick="sendSmsVerify"
                            @inputChange="inputChange('smsVerifyCode', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputPhonePassword"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('passsword', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputPhoneSurePassword"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('surePassword', $event)"></loginInput>
                <loginInput :wrapStyle="inviteWrapStyle" :iconShow="true" :iconSrc="inviteCode"
                            :placeHolder="$t('regs').inputInviteCode"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('inviteCode', $event)"></loginInput>
            </view>
            <view v-show="type === 'EMAIL'" class="emailRegsFlag">
                <loginInput :wrapStyle="emailStyle" :iconShow="true" :iconSrc="emailIcon"
                            :placeHolder="$t('regs').inputEmail"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('email', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="smsVerifyCode" :lastTextShow="true"
                            :lastText="$t('regs').sendVerifyEmailCode"
                            :placeHolder="$t('regs').inputEmail"
                            :inputStyle="inputVerifyCodeStyle"
                            @inputChange="inputChange('emailVerify', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputEmailPassword"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('emailPassword', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputEmailSurePassword"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('emailSurePassword', $event)"></loginInput>
                <loginInput :wrapStyle="inviteWrapStyle" :iconShow="true" :iconSrc="inviteCode"
                            :placeHolder="$t('regs').inputEmailInviteCode"
                            :inputStyle="passwordStyle"
                            @inputChange="inputChange('emailInviteCode', $event)"></loginInput>
            </view>
            <loginBtn :btnText="btnText" :btnStyle="btnStyle" @btnClick="btnClick"></loginBtn>
            <view class="loginTouch" @tap="loginTouch">{{$t('regs').loginJump}}</view>
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
        background: #F9FAFA;

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
                    border-radius: 16rpx 16px 0px 0px;

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
                        line-height: 44px;
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
