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
                    <loginInput :wrapStyle="wrapStyle"
                                :iconShow="true"
                                :iconSrc="phoneIcon"
                                :firstTextShow="true"
                                :firstText="chooseCountry.dialingCode"
                                :firstTextStyle="phoneFirstText"
                                :placeHolder="$t('login').inputPhone"
                                :inputStyle="inputPhoneStyle"
                                :inputData="postData.phone"
                                @inputChange="inputChange('phone', $event)"></loginInput>
                    <loginInput :wrapStyle="lastWrapStyle"
                                :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('login').inputPassword"
                                :inputStyle="passwordStyle"
                                :inputData="postData.password"
                                inputType="password"
                                @inputChange="inputChange('password', $event)"></loginInput>
                </view>
                <view class="emailLoginFlag" v-show="type === 'EMAIL'">
                    <loginInput :wrapStyle="emailStyle" :iconShow="true"
                                :iconSrc="emailChoice"
                                :placeHolder="$t('login').inputEmail"
                                :inputStyle="passwordStyle"
                                :inputData="postData.email"
                                @inputChange="inputChange('email', $event)"></loginInput>
                    <loginInput :wrapStyle="lastWrapStyle" :iconShow="true"
                                :iconSrc="passwordIcon"
                                :placeHolder="$t('login').inputEmailPassword"
                                :inputStyle="passwordStyle"
                                :inputData="postData.password"
                                inputType="password"
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

<script src="@/script/login/login.js"></script>

<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: #F9FAFA;

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
                    background: #FFFFFF;
                    box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1);
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
                        color: #1A1A1A;
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
