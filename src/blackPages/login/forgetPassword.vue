<template>
    <view class="forgetPassword" id="forgetPassword">
        <app-header :headerOptions="headerOptions">
        </app-header>
        <scroll-view class="scrollWrap" :scroll-y="true">
            <view class="wrap">
                <loginHead :defaultType="defaultType"
                           :leftText="leftText"
                           :rightText="rightText"
                           @typeChange="typeChange"></loginHead>
                <view class="phoneForgetFlag" v-show="type === 'PHONE'">
                    <view class="countryChoice" @tap="toChooseCountry">
                        <view class="countryChoiceIcon"
                              :style="{'background-image': countryChoiceIcon}"></view>
                        <view class="countryText">{{chooseCountry.titleText}}</view>
                        <view class="lastCountryIcon"
                              :style="{'background-image': countryChoiceLastIcon}"></view>
                    </view>
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="phoneIcon"
                                :firstTextShow="true"
                                :firstText="'+'+chooseCountry.dialingCode"
                                :firstTextStyle="phoneFirstStyle"
                                :placeHolder="$t('forgetPassword').inputPhone"
                                :inputStyle="inputPhoneStyle"
                                :inputData="postData.tel"
                                @inputChange="inputChange('tel', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="verifyCodeIcon"
                                :lastTextShow="true"
                                :lastText="phoneName"
                                :placeHolder="$t('forgetPassword').inputVerifyCode"
                                :inputStyle="inputVerifyCodeStyle"
                                @lastTextClick="sendSmsVerify('phoneCodeStatus')"
                                :inputData="postData.verifyCode"
                                @inputChange="inputChange('verifyCode', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('forgetPassword').inputPassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.password"
                                @inputChange="inputChange('password', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :wrapStyle="lastWrapStyle"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('forgetPassword').inputSurePassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.passwordConfirm"
                                @inputChange="inputChange('passwordConfirm', $event)"></loginInput>
                </view>
                <view class="emailForgetFlag" v-show="type === 'EMAIL'">
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="emailIcon"
                                :iconStyle="emailIconStyle"
                                :wrapStyle="emailWrapStyle"
                                :placeHolder="$t('forgetPassword').inputEmail"
                                :inputStyle="passwordStyle"
                                :inputData="postData.email"
                                @inputChange="inputChange('email', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="verifyCodeIcon"
                                :lastTextShow="true"
                                :lastText="emailName"
                                :placeHolder="$t('forgetPassword').inputEmailVerifyCode"
                                :inputStyle="inputVerifyCodeStyle"
                                @lastTextClick="sendSmsVerify('emailCodeStatus')"
                                :inputData="postData.verifyCode"
                                @inputChange="inputChange('verifyCode', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('forgetPassword').inputEmailPassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.password"
                                @inputChange="inputChange('password', $event)"></loginInput>
                    <loginInput :mode="'DARK'"
                                :wrapStyle="lastWrapStyle"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('forgetPassword').inputEmailSurePassword"
                                :inputStyle="passwordStyle"
                                inputType="password"
                                :inputData="postData.passwordConfirm"
                                @inputChange="inputChange('passwordConfirm', $event)"></loginInput>
                </view>
                <loginBtn :btnText="$t('forgetPassword').forgetBtn"
                          :btnStyle="btnStyle"
                          @btnClick="btnClick"></loginBtn>
                <view class="regsTouch"
                      @tap="jumpRegs">
                    {{$t('forgetPassword').regsJump}}
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/login/forgetPassword.js"></script>

<style lang="less">
    .forgetPassword {
        width: 100%;
        height: 100%;
        background: #22252A;

        .scrollWrap {
            width: 100%;
            box-sizing: border-box;
            height: 100%;

            .wrap {
                display: block;
                text-align: center;

                .phoneForgetFlag {
                    margin-top: -120rpx;

                    .countryChoice {
                        display: flex;
                        position: relative;
                        margin: 0 auto;
                        background: #272A2E;
                        width: 690rpx;
                        height: 120rpx;
                        box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(255, 255, 255, 0.1);
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
                            color: #D9DADB;
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
                    margin-bottom: 232rpx;
                    font-size: 32rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #098FE0;
                    line-height: 44rpx;

                }
            }
        }
    }
</style>
