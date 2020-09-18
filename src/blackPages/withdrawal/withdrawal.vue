<template>
    <view id="withdrawal">
        <app-header :headerOptions="headerOptions" @headertap=headertap></app-header>
        <scroll-view class="withdrawal-wrap" :scroll-y="true">
            <view class="withdrawal-wrap-container">
                <view class="withdrawal-wrap-container-list">
                    <view class="withdrawal-wrap-container-item"
                          v-for="(item, index) in inputDatas"
                          :key="index">
                        <WithdrawalInput :inputData="item"
                                         :isBlack="isBlack"></WithdrawalInput>
                    </view>
                </view>
                <view :class="isBlack ? 'withdrawal-wrap-container-text black':'withdrawal-wrap-container-text'">
                    <view class="text">
                        <span>到账数量</span>
                    </view>
                    <view class="text">
                        <span class="blue">0 BRT</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-phoneInput">
                    <WithdrawalInput :inputData="phoneInput"
                                     :isBlack="true"></WithdrawalInput>
                </view>
                <view class="withdrawal-wrap-container-tip">
                    <view :class="isBlack?'withdrawal-wrap-container-tip-content black': 'withdrawal-wrap-container-tip-content'">
                        <span class="tipTitle">最小提币数量：10.0（BRT）</span>
                        <span class="tipContent">为保障资金安全，当您账户安全策略变更、密码修改、我们会对提币进行人工审核、请耐心等待工作人员电话或邮件联系。</span>
                        <span class="tipContent mgt">请务必确认电脑及浏览器安全，防止信息被篡改或泄露</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-btn">
                    <!--<Btn :btnText="btnText"
                         fontColor="#FFFFFF"
                         :backgroundColor="BtnackgroundColor"
                         width="690rpx"
                         borderRadius="50rpx"></Btn>-->
                    <view class="btn-wrap">
                        <span>提币</span>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/withdrawal/withdrawal.js"></script>

<style scoped lang="less">
    #withdrawal {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));

        .withdrawal-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            background: #22252A;

            .withdrawal-wrap-container {
                box-sizing: border-box;

                .withdrawal-wrap-container-list {
                    margin: 0 30rpx;

                    .withdrawal-wrap-container-item {
                        margin-top: 30rpx;
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

                    margin: 30rpx 30rpx 0;

                    .withdrawal-wrap-container-tip-content {
                        padding: 30rpx;
                        height: 254rpx;
                        background: #F5F8FC;
                        border-radius: 8px;

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
                            margin-top: 50rpx;
                        }
                    }
                    .black {
                        background: #272A2E;
                    }
                }

                .withdrawal-wrap-container-btn {
                    margin-top: 40rpx;
                    margin-bottom: 80rpx;
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