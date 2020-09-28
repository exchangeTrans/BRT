<template>
    <view class="changePhone" id="changePhone">
        <app-header :headerOptions="headerOptions"></app-header>
        <view class="wrap">
            <view class="changePhoneTop" :style="{'background-image':topBg}">


                <view class="nowPhone">
                    <view class="nowPhoneTitle">当前绑定手机号码：</view>
                    <view class="phoneNum">{{userInfo.tel}}</view>
                </view>

                <view class="oldPhone">
                    <loginInput :mode="'DARK'"
                                :iconShow="true"
                                :iconSrc="smsVerifyCode"
                                :placeHolder="'请输入当前手机验证码'"
                                :lastTextShow="true"
                                :lastText="spanNameOld"
                                :inputData="postData.verifyCode"
                                :lastTextStyle="phoneLastTextStyle"
                                @lastTextClick="sendSmsVerify(4)"
                                @inputChange="inputChange('verifyCode', $event)"></loginInput>

                </view>

            </view>
            <view class="phoneRegsFlag">
                <view class="changePhoneText">
                    <view class="line"></view>
                    新绑定手机号码
                </view>
                <view class="countryChoice" @tap="toChooseCountry">
                    <view class="chountryChoiceIcon"
                          :style="{'background-image': countryIcon}"></view>
                    <view class="countryText">{{chooseCountry.titleCN}}</view>
                    <view class="lastCountryIcon"
                          :style="{'background-image': lastCountryIcon}"></view>
                </view>
                <loginInput :mode="'DARK'"
                            :iconShow="true"
                            :iconSrc="phoneIcon"
                            :firstTextShow="true"
                            :firstText="'+'+chooseCountry.dialingCode"
                            :firstTextStyle="phoneFirstTextStyle"
                            :placeHolder="'请输入新绑定手机号码'"
                            :inputData="postData.tel"
                            @inputChange="inputChange('tel', $event)"></loginInput>
                <loginInput :mode="'DARK'"
                            :iconShow="true"
                            :iconSrc="smsVerifyCode"
                            :placeHolder="'请输入新手机验证码'"
                            :lastTextShow="true"
                            :lastText="spanNameNew"
                            :inputData="postData.verifyCodeNew"
                            :lastTextStyle="phoneLastTextStyle"
                            @lastTextClick="sendSmsVerify(5)"
                            @inputChange="inputChange('verifyCodeNew', $event)"></loginInput>
                <!--<loginInput :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请输入6-20位登录密码'" @inputChange="inputChange('passsword', $event)"></loginInput>-->
                <!--<loginInput :iconShow="true" :iconSrc="passwordIcon" :placeHolder="'请再次输入6-20位登录密码'" @inputChange="inputChange('surePassword', $event)"></loginInput>-->
                <!--<loginInput :wrapStyle="inviteWrapStyle" :iconShow="true" :iconSrc="inviteCode" :placeHolder="'请填写邀请码（选填）'"-->
                <!--@inputChange="inputChange('inviteCode', $event)"></loginInput>-->
            </view>

            <loginBtn :btnText="btnText"
                      :btnStyle="btnStyle"
                      @btnClick="btnClick"></loginBtn>
            <!--<view class="loginTouch" @tap="loginTouch">已有账号，立即登录</view>-->
        </view>
    </view>
</template>

<script src="@/script/changePhone/changePhone.js"></script>

<style lang="less">
    .changePhone {
        width: 100%;
        height: 100%;
        background: #22252A;

        .wrap {
            display: block;

            .changePhoneTop {
                padding: calc(150rpx + var(--status-bar-height)) 30rpx 0;
                box-sizing: border-box;
                width: 750rpx;
                height: 440rpx;
                background-size: cover;
                position: relative;

                .nowPhone {
                    position: absolute;
                    bottom: 100rpx;
                    color: #FFFFFF;

                    .nowPhoneTitle {
                        height: 44rpx;
                        line-height: 44rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                    }

                    .phoneNum {
                        margin-top: 8rpx;
                        height: 74rpx;
                        line-height: 74rpx;
                        font-size: 52rpx;
                        font-family: PingFangSC-, PingFang SC;
                        font-weight: normal;
                    }

                }

                .oldPhone {
                    overflow: hidden;
                    border-radius: 16rpx;
                    position: absolute;
                    bottom: -40rpx;
                }

            }

            .phoneRegsFlag {
                margin-top: 112rpx;

                .changePhoneText {
                    padding-left: 40rpx;
                    margin-bottom: 36rpx;
                    box-sizing: border-box;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #D9DADB;
                    font-size: 32rpx;

                    .line {
                        display: inline-block;
                        width: 8rpx;
                        height: 28rpx;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                        border-radius: 4rpx;
                        margin-right: 12rpx;
                        transform: translateY(15%);

                    }
                }

                .countryChoice {
                    position: relative;
                    display: flex;
                    margin: 0 auto;

                    width: 690rpx;
                    height: 120rpx;
                    background: #272A2E;
                    box-shadow: 0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1);
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

                        color: #D9DADB;
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
