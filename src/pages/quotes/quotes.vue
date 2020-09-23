<template>
    <view id="quotes">
        <pageHeader :headerOptions="headerOptions"/>
        <view class="quotes-content">
            <view class="quotes-content-wrap">
                <view class="quotes-content-wrap-title">
                    <view class="quotes-content-wrap-title-container">
                        <view class="currency">
                            <span>计价货币：</span>
                            <span>USTD</span>
                            <view class="icon">
                                <image :src="currencyIcon"></image>
                            </view>
                        </view>
                        <view class="price">
                            <span>价格</span>
                        </view>
                        <view class="upsAndDowns">
                            <span>24H涨跌</span>
                            <view class="icon">
                                <image :src="upsAndDownsIcon"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <scroll-view class="quotes-content-wrap-container" :scroll-y="true">
                    <view class="quotes-content-wrap-container-list"
                          v-for="(item, index) in quotesData"
                          :key="index">
                        <QuotesItem :quotesData="item"></QuotesItem>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<script src="@/script/quotes/quotes.js"></script>

<style scoped lang="less">
    #quotes {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));
        
        .quotes-content {
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            .quotes-content-wrap {
                /*margin: 0 30rpx;*/
                padding-top: 30rpx;

                .quotes-content-wrap-title {
                    margin: 0 30rpx;

                    .quotes-content-wrap-title-container {
                        display: flex;
                        justify-content: space-between;
                        text-align: center;
                        .icon {
                            width: 28rpx;
                            height: 28rpx;
                            /*background: #D8D8D8;*/
                            margin-left: 4rpx;
                        }

                        span {
                            font-size: 24rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1a1a1a;
                            opacity: .5;
                        }

                        .currency, .upsAndDowns, .price {
                            display: flex;
                            align-items: center;
                            .icon {
                                image {
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                }
                            }
                        }
                       /* .upsAndDowns {
                            .icon {
                                image {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .currency {
                            .icon {
                                image {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }*/

                        .price {
                            box-sizing: border-box;
                            margin-left: 80rpx;
                            flex-grow: 2;
                            /*margin-left: 110rpx;*/
                        }

                        .upsAndDowns {
                            /*margin-left: 180rpx;*/
                        }
                    }
                }

                .quotes-content-wrap-container {
                    height: calc(100vh - var(--status-bar-height) - 128rpx);
                    .quotes-content-wrap-container-list {
                        margin: 0 30rpx;
                    }
                }
            }
        }
    }
</style>