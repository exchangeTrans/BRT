<template>
    <view id="quotes">
        <!--<view class="quotes-nav">
            <view class="quotes-nav-wrap">
                <view class="quotes-nav-wrap-content" @click="switchTab(1)">
                    <span :class="active=== 1 ? 'span active':'span'">我的关注</span>
                </view>
                <view class="quotes-nav-wrap-content" @click="switchTab(2)">
                    <span :class="active=== 2 ? 'span active':'span'">法定货币</span>
                </view>
                <view class="quotes-nav-wrap-content" @click="switchTab(3)">
                    <span :class="active=== 3 ? 'span active':'span'">数字货币</span>
                </view>
            </view>
        </view>-->
        <pageHeader :headerOptions="headerOptions" class="appHeader"/>
        <view class="quotes-content">
            <view class="quotes-content-wrap">
                <view class="quotes-content-wrap-title">
                    <view class="quotes-content-wrap-title-container">
                        <view class="currency">
                            <span>{{$t('quotes').currency}}</span>
                            <span>USTD</span>
                            <!-- <view class="icon">
                                <image :src="currencyIcon"></image>
                            </view> -->
                        </view>
                        <view class="price">
                            <span>{{$t('quotes').price}}</span>
                        </view>
                        <view class="upsAndDowns">
                            <span>24H{{$t('quotes').addAndDown}}</span>
                            <!-- <view class="icon">
                                <image :src="upsAndDownsIcon"></image>
                            </view> -->
                        </view>
                    </view>
                </view>
                <scroll-view class="quotes-content-wrap-container" :scroll-y="true">
                    <view class="quotes-content-wrap-container-list"
                          v-for="(item, index) in quotesData"
                          :key="index">
                        <QuotesItem :quotesData="item"
                                    :isBlack="true"></QuotesItem>
                    </view>
                </scroll-view>
            </view>
        </view>
        <pageFooter/>
    </view>
</template>

<script src="@/script/quotes/quotes.js"></script>

<style scoped lang="less">
    #quotes {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));
        .appHeader {
            top: 0;
            background: #00001A;
        }

        .quotes-content {
            /*height: calc(100vh - var(--status-bar-height) - 100rpx);*/
            background: #22252A;

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
                            color: #D9DADB;
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
                            margin-left: 112rpx;
                            flex-grow: 2;
                            /*margin-left: 110rpx;*/
                        }

                        .upsAndDowns {
                            /*margin-left: 180rpx;*/
                        }
                    }
                }

                .quotes-content-wrap-container {
                    height: calc(100vh - var(--status-bar-height) - 278rpx);

                    .quotes-content-wrap-container-list {
                        margin: 0 30rpx;
                    }
                }
            }
        }
    }
</style>