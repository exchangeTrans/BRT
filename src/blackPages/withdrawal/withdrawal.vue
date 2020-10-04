<template>
    <view id="withdrawal">
        <app-header :headerOptions="headerOptions"
                    @headertap=headertap
                    class="appHeader"></app-header>
        <scroll-view class="withdrawal-wrap" :scroll-y="true" @touchmove.stop.prevent="moveHandle">
            <view class="withdrawal-wrap-container">
                <view class="withdrawal-wrap-container-list">
                    <view class="withdrawal-wrap-container-item">
                         <!-- @btnClick="toScanCode" -->
                        <WithdrawalInput :isBlack="true" :inputData="address" inputType="text" @inputChange="inputChange(address.name, $event)" :inputValue="addressUrl" :inputType="'text'"></WithdrawalInput>
                    </view>
                    <view class="withdrawal-wrap-container-item">
                        <WithdrawalInput :isBlack="true" :inputData="amount" @inputChange="inputChange(amount.name, $event)" :inputValue="amountInputValue"></WithdrawalInput>
                    </view>
                    <view class="withdrawal-wrap-container-item">
                        <WithdrawalInput :isBlack="true" :inputData="commission"  @inputChange="inputChange(commission.name, $event)" :inputValue="commissionAmount"></WithdrawalInput>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-text black">
                    <view class="text">
                        <span>{{$t('withdrawal').number}}</span>
                    </view>
                    <view class="text">
                        <span class="blue">{{receiveAmount}}</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-phoneInput">
                    <WithdrawalInput :isBlack="true" :inputData="phoneInput" @inputChange="inputChange(phoneInput.name, $event)" @btnClick="sendVerifyCode"></WithdrawalInput>
                </view>
                <view class="withdrawal-wrap-container-tip">
                    <view class="withdrawal-wrap-container-tip-content black">
                        <span class="tipTitle">{{$t('withdrawal').tipArray[0]}}{{minDrawTip}}</span>
                        <span class="tipContent">{{$t('withdrawal').tipArray[1]}}</span>
                        
                        <span class="tipContent">{{$t('withdrawal').tipArray[2]}}</span>
                        <span class="tipContent mgt">{{$t('withdrawal').tipArray[3]}}</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-btn">
                    <!--<Btn :btnText="btnText"
                         fontColor="#FFFFFF"
                         :backgroundColor="BtnackgroundColor"
                         width="690rpx"
                         borderRadius="50rpx"></Btn>-->
                    <view class="btn-wrap" :class="{'canClick': btnCanClick, 'cannotClick': !btnCanClick}" @tap="transfer">
                        <span>{{$t('withdrawal').btnText}}</span>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/withdrawal/withdrawal.js"></script>

<style scoped lang="less">
    #withdrawal {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));
        box-sizing: border-box;

        // .appHeader {
        //     top: var(--status-bar-height);
        // }

        .withdrawal-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            background: #22252A;

            .withdrawal-wrap-container {
                /*box-sizing: border-box;*/

                .withdrawal-wrap-container-list {
                    margin: 0 30rpx;

                    .withdrawal-wrap-container-item {
                        margin-top: 30rpx;
                        overflow: hidden;
                    }
                }

                .withdrawal-wrap-container-text {
                    box-sizing: border-box;
                    margin: 0 30rpx;
                    height: 112rpx;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1rpx solid #EDEDED;

                    .text {
                        span {
                            line-height: 112rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }
                    }
                }
                .black {
                    border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);
                    .text {
                        span {
                            color: #D9DADB;
                        }
                    }
                }

                .withdrawal-wrap-container-phoneInput {
                    margin: 0 30rpx;
                }

                .withdrawal-wrap-container-tip {

                    margin: 30rpx auto 0;

                    .withdrawal-wrap-container-tip-content {
                        width: 690rpx;
                        box-sizing: border-box;
                        padding:20rpx;
                        height: auto;
                        background: #F5F8FC;
                        border-radius: 8px;
                        margin: 0 auto;

                        span {
                            display: block;
                            font-size: 24rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #098FE0;
                        }

                        .tipContent {
                            margin-top: 20rpx;
                        }

                        .mgt {
                            margin-top: 40rpx;
                        }
                    }
                    .black {
                        background: #272A2E;
                    }
                }

                .withdrawal-wrap-container-btn {
                    margin-top: 40rpx;
                    padding-bottom: 80rpx;
                    width: 100%;
                    .btn-wrap {
                        width: 710rpx;
                        height: 100rpx;
                        background: linear-gradient(135deg, #8C939B 0%, #B4BBC0 50%, #C5C5C5 100%);
                        border-radius: 50rpx;
                        opacity: 0.4;
                        margin: 0 auto;
                        span {
                            display: block;
                            line-height: 100rpx;
                            text-align: center;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
    }
</style>
