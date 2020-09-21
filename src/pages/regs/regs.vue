<template>
    <view class="regs" id="regs">
        <app-header :headerOptions="headerOptions"></app-header>
        <view class="wrap">
            <loginHead :defaultChoice="defaultChoice" :leftText="leftText" :rightText="rightText"
                       @typeChange="typeChange"></loginHead>
            <view v-show="type === 'PHONE'" class="phoneRegsFlag">
                <view class="countryChoice"
                      @tap="toChooseCountry">
                    <view class="chountryChoiceIcon" :style="{'background-image': countryIcon}"></view>
                    <view class="countryText">{{chooseCountry.titleCN}}</view>
                    <view class="lastCountryIcon" :style="{'background-image': lastCountryIcon}"></view>
                </view>
                <loginInput :iconShow="true"
                            :iconSrc="phoneIcon"
                            :firstTextShow="true"
                            :firstText="chooseCountry.dialingCode"
                            :firstTextStyle="phoneFirstTextStyle"
                            :placeHolder="$t('regs').inputPhone"
                            :inputStyle="inputPhoneStyle"
                            :inputData="postData.tel"
                            @inputChange="inputChange('tel', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="smsVerifyCode"
                            :placeHolder="$t('regs').inputPhoneVerifyCode"
                            :inputStyle="inputVerifyCodeStyle"
                            :lastTextShow="true"
                            :lastText="spanName"
                            :lastTextStyle="phoneLastTextStyle"
                            :inputData="postData.verifyCode"
                            @lastTextClick="sendSmsVerify"
                            @inputChange="inputChange('verifyCode', $event)"></loginInput>
                <loginInput :iconShow="true"
                            :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputPhonePassword"
                            :inputStyle="passwordStyle"
                            :inputData="postData.password"
                            inputType="password"
                            @inputChange="inputChange('password', $event)"></loginInput>
                <loginInput :iconShow="true"
                            :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputPhoneSurePassword"
                            :inputStyle="passwordStyle"
                            :inputData="postData.passwordConfirm"
                            inputType="password"
                            @inputChange="inputChange('passwordConfirm', $event)"></loginInput>
                <loginInput :wrapStyle="inviteWrapStyle" :iconShow="true"
                            :iconSrc="inviteCode"
                            :placeHolder="$t('regs').inputInviteCode"
                            :inputStyle="passwordStyle"
                            :inputData="postData.inviteCode"
                            @inputChange="inputChange('inviteCode', $event)"></loginInput>
            </view>
            <view v-show="type === 'EMAIL'" class="emailRegsFlag">
                <loginInput :wrapStyle="emailStyle"
                            :iconShow="true"
                            :iconSrc="emailIcon"
                            :placeHolder="$t('regs').inputEmail"
                            :inputStyle="passwordStyle"
                            :inputData="postData.email"
                            @inputChange="inputChange('email', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="smsVerifyCode"
                            :lastTextShow="true"
                            :lastText="spanName"
                            @lastTextClick="sendSmsVerify"
                            :placeHolder="$t('regs').inputEmailVerifyCode"
                            :inputStyle="inputVerifyCodeStyle"
                            :inputData="postData.verifyCode"
                            @inputChange="inputChange('verifyCode', $event)"></loginInput>
                <loginInput :iconShow="true" :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputEmailPassword"
                            :inputStyle="passwordStyle"
                            :inputData="postData.password"
                            inputType="password"
                            @inputChange="inputChange('password', $event)"></loginInput>
                <loginInput :iconShow="true" 
                            :iconSrc="passwordIcon"
                            :placeHolder="$t('regs').inputEmailSurePassword"
                            :inputStyle="passwordStyle"
                            :inputData="postData.passwordConfirm"
                            inputType="password"
                            @inputChange="inputChange('passwordConfirm', $event)"></loginInput>
                <loginInput :wrapStyle="inviteWrapStyle"
                            :iconShow="true"
                            :iconSrc="inviteCode"
                            :placeHolder="$t('regs').inputEmailInviteCode"
                            :inputStyle="passwordStyle"
                            :inputData="postData.inviteCode"
                            @inputChange="inputChange('inviteCode', $event)"></loginInput>
            </view>
            <loginBtn :btnText="btnText"
                      :btnStyle="btnStyle"
                      @btnClick="btnClick"></loginBtn>
            <view class="loginTouch"
                  @tap="loginTouch">{{$t('regs').loginJump}}</view>
        </view>
    </view>
</template>

<script src="@/script/regs/regs.js"></script>

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
