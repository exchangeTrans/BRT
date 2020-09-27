<template>
    <view class="login" id="login">
        <app-header :headerOptions="headerOptions" class="addHeader"></app-header>
        <scroll-view class="scrollWrap" :scroll-y="true">
            <view class="wrap">
                <loginHead :defaultChoice="defaultType"
                           :leftText="leftText"
                           :rightText="rightText"
                           @typeChange="typeChange"/>
                <view class="phoneLoginFlag"
                      v-show="type === 'PHONE'">
                    <view class="lastInput" @tap="toChooseCountry">
                        <view class="icon"
                              :style="{'background-image': cityChoiceIcon}"></view>
                        <view class="cityChoice">{{chooseCountry.titleCN}}</view>
                        <view class="lastIcon"
                              :style="{'background-image': cityChoiceLastIcon}"></view>
                    </view>
                    <loginInput :mode="'DARK'"
                                :wrapStyle="wrapStyle"
                                :iconShow="true" :iconSrc="phoneIcon"
                                :firstTextShow="true"
                                :firstText="chooseCountry.dialingCode"
                                :firstTextStyle="phoneFirstText"
                                :placeHolder="$t('login').inputPhone"
                                :inputStyle="inputPhoneStyle"
                                :inputData="postData.phone"
                                @inputChange="inputChange('phone', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :wrapStyle="lastWrapStyle"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('login').inputPassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.password"
                                @inputChange="inputChange('password', $event)"></loginInput>
                </view>
                <view class="emailLoginFlag"
                      v-show="type === 'EMAIL'">
                    <loginInput :mode="'DARK'"
                                :wrapStyle="emailStyle"
                                :iconShow="true"
                                :iconSrc="emailChoice"
                                :placeHolder="$t('login').inputEmail"
                                :inputStyle="passwordStyle"
                                :inputData="postData.email"
                                @inputChange="inputChange('email', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :wrapStyle="lastWrapStyle"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('login').inputEmailPassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.password"
                                @inputChange="inputChange('password', $event)"></loginInput>
                </view>
                <loginBtn :btnStyle="btnStyle"
                          :btnText="btnText"
                          @btnClick="loginClick"></loginBtn>
                <view class="touchFunc">
                    <view class="forgetPasswordTouch"
                          @tap="jumpForgetPassword">
                        {{$t('login').forgetPasswordJump}}
                    </view>
                    <view class="regsTouch"
                          @tap="jumpRegs">
                        {{$t('login').regsJump}}
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/login/login.js">
    // import appHeader from '@/components/common/header.vue'
    // import loginHead from '@/components/login/loginHead.vue'
    // import loginInput from '@/components/input/loginInput.vue'
    // import loginBtn from '@/components/login/btn.vue'
    //
    // export default {
    //     name: "login",
    //     components: {
    //         loginHead,
    //         loginInput,
    //         loginBtn,
    //         appHeader
    //     },
    //     data() {
    //         return {
    //             type: "PHONE",
    //             cityChoiceIcon: `url(${require('@/static/images/login/phoneHead.png')})`,
    //             cityChoiceLastIcon: `url(${require('@/static/images/login/cityChoice.png')})`,
    //             emailChoice: `url(${require('@/static/images/login/emailChoice.png')})`,
    //             phoneIcon: `url(${require('@/static/images/login/phoneNumber.png')})`,
    //             passwordIcon: `url(${require('@/static/images/login/passwordIcon.png')})`,
    //             leftText: "手机登录",
    //             rightText: "邮箱登录",
    //             defaultType: "PHONE",
    //             country: "中国",
    //             wrapStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': ' 0px -1px 0px 0px rgba(0, 0, 0, 0.1)',
    //             },
    //             lastWrapStyle: {
    //                 'background': '#FFFFFF',
    //                 'box-shadow': '0px -1px 0px 0px rgba(0, 0, 0, 0.1)',
    //                 'border-radius': '0px 0px 16px 16px',
    //             },
    //             phoneFirstText: {
    //                 'font-size': '32rpx',
    //                 'font-family': 'PingFangSC-Regular, PingFang SC',
    //                 'font-weight': '400',
    //                 'color': '#1A1A1A',
    //                 'line-height': '120rpx',
    //
    //                 'margin': 'auto 60rpx auto 20rpx',
    //             },
    //             btnStyle: {
    //                 'margin-top': '60rpx'
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
    //             countryNumber: "+86",
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
    //         },
    //         jumpForgetPassword() {
    //             this.jumpPage.jump({
    //                 type: 'navigateTo',
    //                 name: 'forgetPassword'
    //             })
    //         },
    //         jumpRegs() {
    //             this.jumpPage.jump({
    //                 type: 'navigateTo',
    //                 name: 'regs'
    //             })
    //         },
    //         loginClick() {
    //             console.log("登录")
    //         }
    //     },
    // }
</script>

<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: #22252A;

        .addHeader {
            top: var(--status-bar-height);
        }

        .scrollWrap {
            width: 100%;
            box-sizing: border-box;
            height: 100%;

            .wrap {
                display: block;

                .lastInput {
                    position: relative;
                    display: flex;
                    width: 690rpx;
                    height: 120rpx;
                    background: #272A2E;
                    box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(255, 255, 255, 0.1);
                    border-radius: 16rpx 16rpx 0rpx 0rpx;
                    margin: 40rpx auto 0;

                    .icon {
                        width: 48rpx;
                        height: 48rpx;
                        margin: auto 0 auto 30rpx;
                        background: no-repeat center center;
                        background-size: 100% 100%;
                    }

                    .cityChoice {
                        margin: auto 0 auto 20rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #D9DADB;
                        line-height: 120rpx;

                    }

                    .emailInput {
                        margin: auto 0 auto 20rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 120rpx;
                    }

                    .lastIcon {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 30rpx;
                        float: right;
                        width: 48rpx;
                        height: 48rpx;
                        background: no-repeat center center;
                        background-size: cover;
                    }
                }

                .phoneLoginFlag {
                    margin-top: -160rpx;
                }

                .emailLoginFlag {
                    margin-top: -160rpx;
                }

                .touchFunc {
                    margin-top: 40rpx;
                    position: relative;

                    .forgetPasswordTouch {
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #098FE0;
                        line-height: 44rpx;
                        display: inline-block;
                        position: absolute;
                        left: 40rpx;
                    }

                    .regsTouch {
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #098FE0;
                        line-height: 44rpx;
                        display: inline-block;
                        position: absolute;
                        right: 40rpx;
                    }
                }
            }

        }
    }
</style>
