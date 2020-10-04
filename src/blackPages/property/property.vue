<template>
    <view id="property" @touchmove.stop.prevent="stopPenetrate">
        <pageHeader :headerOptions="headerOptions"
                    class="appHeader"/>
        <scroll-view class="property-wrap" :scroll-y="true">
            <view class="property-wrap-content">
                <view class="property-wrap-content-asset">
                    <view class="property-wrap-content-asset-container">
                        <view class="totalAsset">
                            <view class="totalAsset-text">
                                <span>{{$t('property').assetAll}}(USDT)</span>
                            </view>
                            <view class="totalAsset-money">
                                <span>{{amountTotal}}</span>
                                <span class="about">≈{{amountTotalRMB}} {{selectedCurrency.code}}</span>
                            </view>
                        </view>
                        <view class="balance">
                            <view class="balance-container">
                                <view class="balance-content">
                                    <span>{{balanceTotal}}</span>
                                    <span class="balance-content-text">{{$t('property').balance}}</span>
                                </view>
                                <view class="balance-content">
                                    <span>{{freezeTotal}}</span>
                                    <span class="balance-content-text">{{$t('property').balanceUse}}</span>
                                </view>
                            </view>
                        </view>
                    </view>

                </view>
                <view class="property-wrap-content-list">
                    <view class="property-wrap-content-item"
                          v-for="(item, index) in propertyCardData"
                          :key="index">
                        <PropertyCard :propertyCardData="item"
                            :column="2"
                            :drawSymbol="drawSymbol"
                            :propertyOption="propertyOption" :isBlack="true"></PropertyCard>
                    </view>
                </view>
            </view>
        </scroll-view>
        <pageFooter/>
    </view>
</template>

<script  src="@/script/property/property.js"></script>

<style scoped lang="less">
    #property {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));

        .appHeader {
            top: 0;
            background: #00001A;
        }
        .property-wrap {
            width: 100%;
            box-sizing: border-box;
            height: calc(100vh - var(--status-bar-height) - 216rpx);
            background: #22252A;
            .property-wrap-content {
                width: 690rpx;
                margin: 0 auto;
                .property-wrap-content-asset {
                    width: 690rpx;
                    height: 232rpx;
                    background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                    border-radius: 16rpx;
                    margin-top: 60rpx;

                    .property-wrap-content-asset-container {
                        box-sizing: border-box;
                        height: 100%;
                        padding: 34rpx 30rpx;

                        .totalAsset {
                            display: flex;
                            justify-content: space-between;
                            height: 60rpx;

                            .totalAsset-text {
                                span {
                                    font-size: 24rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.7);
                                }
                            }

                            .totalAsset-money {
                                display: flex;
                                align-items: center;

                                span {
                                    font-size: 48rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    /*line-height: 60rpx;*/
                                }

                                .about {
                                    margin-left: 6rpx;
                                    font-size: 24rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.9);
                                    vertical-align: center;
                                }
                            }

                        }

                        .balance {
                            margin-top: 24rpx;
                            width: 100%;

                            .balance-container {
                                display: flex;
                                justify-content: center;

                                .balance-content {
                                    display: inline-block;
                                    text-align: center;
                                    margin-left: 32rpx;
                                    width: 264rpx;

                                    span {
                                        display: block;
                                        font-size: 36rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #FFFFFF;
                                    }

                                    .balance-content-text {
                                        font-size: 28rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #FFFFFF;
                                    }
                                }

                                .balance-content:first-child {
                                    margin-left: 0;
                                }
                            }
                        }

                    }

                }

                .property-wrap-content-list {
                    margin-top: 40rpx;

                    .property-wrap-content-item {
                        margin-bottom: 40rpx;
                    }
                }

            }
        }

    }
</style>
