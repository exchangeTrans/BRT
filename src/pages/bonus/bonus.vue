<template>
    <view id="bonus">
        <app-header :headerOptions="headerOptions"
                    class="appHeader"></app-header>
        <scroll-view class="bonus-wrap" scroll-y="true">
            <view class="bonus-wrap-content">
                <view class="bonus-wrap-content-card">
                    <view class="bonus-wrap-content-card-msg">
                        <view class="left">
                            <view class="grade">{{vipTypeArray[vipType].text}}</view>
                            <view class="grade-text">{{$t('bonus').vip}}</view>
                        </view>
                        <view class="right">
                            <view class="number">{{total}}</view>
                            <view class="number-text">{{$t('bonus').number}}（BRT）</view>
                        </view>
                    </view>
                    <view class="bonus-wrap-content-card-dateTitle">
                        <span class="icon">
                            <image :src="time"></image>
                        </span>
                        <span class="text">{{$t('bonus').lastTime}}</span>
                    </view>
                    <view class="bonus-wrap-content-card-date">
                        <uni-countdown
                                :showColon="false"
                                :color="'#098FE0'"
                                :splitorColor="'#ffffff'"
                                :day="dayNum"
                                :hour="hourNum"
                                :minute="minuteNum"
                        ></uni-countdown>
                        <!--<view class="date-number">-->
                            <!--<span>1</span>-->
                        <!--</view>-->
                        <!--<view class="date-number">-->
                            <!--<span>2</span>-->
                        <!--</view>-->
                        <!--<view class="date-text">天</view>-->
                        <!--<view class="date-number">-->
                            <!--<span>0</span>-->
                        <!--</view>-->
                        <!--<view class="date-number">-->
                            <!--<span>6</span>-->
                        <!--</view>-->
                        <!--<view class="date-text">时</view>-->
                        <!--<view class="date-number">-->
                            <!--<span>1</span>-->
                        <!--</view>-->
                        <!--<view class="date-number">-->
                            <!--<span>4</span>-->
                        <!--</view>-->
                        <!--<view class="date-text">分</view>-->
                    </view>
                </view>
            </view>
            <view class="list-title">
                <view class="list-title-icon">

                </view>
                <view class="list-title-text">
                    <span class="">{{$t('bonus').lastProfit}}</span>
                </view>
            </view>

            <view class="noDataBox" v-if="isNoDataFlag">
                <noData></noData>
            </view>
            <earningsRecordList
                    v-if="!isNoDataFlag"
                    :earningsRecordData="earningsRecordData">
            </earningsRecordList>
            <uni-load-more  @clickLoadMore="getVIPInterest(true)" :status="status"    v-if="!isNoDataFlag"></uni-load-more>

        </scroll-view>
    </view>
</template>

<script src="@/script/bonus/bonus.js">
    import UniCountdown from "@/components/uni-countdown/uni-countdown";
    import UniLoadMore from "@/components/uni-load-more/uni-load-more";
    
export default {
    components: {
        UniLoadMore, UniCountdown
    },
}
</script>

<style scoped lang="less">
    #bonus {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));

        .appHeader {
            top:var(--status-bar-height);
        }
        .bonus-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            background: #F8F8F8;

            .bonus-wrap-content {
                width: 690rpx;
                height: 348rpx;
                background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                border-radius: 16rpx;
                margin: 0 auto;

                .bonus-wrap-content-card {
                    padding: 30rpx;
                    color: #FFFFFF;

                    .bonus-wrap-content-card-msg {
                        // display: grid;
                        // grid-template-columns: 50% 50%;
                        width: 100%;

                        .left {
                            text-align: center;
                            width: 50%;
                            display: inline-block;
                            .grade {
                                font-size: 40rpx;
                                font-family: PingFangSC-, PingFang SC;
                                font-weight: normal;
                                color: #FFFFFF;
                            }

                            .grade-text {
                                margin-top: 4rpx;
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }

                        .right {
                            width: 50%;
                            text-align: center;
                            display: inline-block;

                            .number {
                                font-size: 40rpx;
                                font-family: PingFangSC-, PingFang SC;
                                font-weight: normal;
                                color: #FFFFFF;
                            }

                            .number-text {
                                margin-top: 4rpx;
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }

                    }

                    .bonus-wrap-content-card-dateTitle {
                        margin-top: 42rpx;

                        .icon {

                            image {
                                width: 24rpx;
                                height: 24rpx;
                            }
                        }

                        .text {
                            margin-left: 6rpx;
                            font-size: 24rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }

                    .bonus-wrap-content-card-date {
                        margin-top: 34rpx;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .date-number {
                            width: 60rpx;
                            height: 60rpx;
                            background: #FFFFFF;
                            border-radius: 7rpx;
                            margin-left: 10rpx;
                            text-align: center;

                            span {
                                text-align: center;
                                font-size: 32rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #098FE0;
                            }
                        }

                        .date-text {
                            margin-left: 10rpx;
                        }
                    }

                }
            }

            .list-title {
                margin-top: 30rpx;
                margin-left: 30rpx;
                display: flex;
                align-items: center;

                .list-title-icon {
                    width: 8rpx;
                    height: 28rpx;
                    background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                    border-radius: 4rpx;
                }

                .list-title-text {
                    margin-left: 10rpx;
                    font-size: 32rpx;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #333333;
                }
            }

            .noDataBox {
                position: relative;
            }
        }
    }
</style>
