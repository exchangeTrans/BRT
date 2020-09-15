<template>
    <view id="promotion">
        <app-header :headerOptions="headerOptions"
                    @headertap=headertap></app-header>
        <scroll-view class="promotion-wrap" :scroll-y="true">
            <view class="promotion-wrap-content">
                <view class="promotion-wrap-totalIncome"
                      :style="{'backgroundImage': totalIncomeImg}">
                    <view class="promotion-wrap-totalIncome-container">
                        <view class="promotion-wrap-totalIncome-title">
                            <view class="text"><span>累积总推广收益</span></view>
                        </view>
                        <view class="promotion-wrap-totalIncome-content">
                            <span class="money">897367.9065</span>
                            <span class="unit">BRT</span>
                        </view>
                    </view>
                </view>
                <view class="promotion-wrap-records">
                    <view class="promotion-wrap-records-container">
                        <view class="promotion-wrap-records-title">
                            <view class="icon"></view>
                            <view class="text">
                                <span>推广收益记录</span>
                            </view>
                        </view>
                        <view class="promotion-wrap-records-content">
                            <view class="promotion-wrap-records-content-list">
                                <view class="promotion-wrap-records-content-item"
                                      v-for="(item, index) in recordsData"
                                      :key="index">
                                    <view class="text">
                                        <span class="text-name">{{item.name}}</span>
                                        <span class="text-money">{{item.money}}</span>
                                    </view>
                                    <view class="date">
                                        <span>{{item.date}}</span>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import appHeader from "@/components/common/header.vue"

    export default {
        components: {
            appHeader,
        },
        name: "promotion",
        data() {
            return {
                totalIncomeImg: `url(${require('@/static/images/promotion/background.png')})`,
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    isWhiteIcon:true,
                    text: "推广收益",
                    rightItem: {
                        type: "text",
                        text: "",
                    },
                    style:{
                        'color':'#D9DADB'
                    },
                    background: '#00001A',
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                },
                recordsData: [
                    {
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },{
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },{
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },{
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },{
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },{
                        name: "推广收益",
                        money: "+190.32 BRT",
                        date: "2020/09/28",
                    },
                ],
            }
        },
        methods: {
            headertap(type) {
                console.log(type)
            }
        }
    }
</script>

<style scoped lang="less">
    #promotion {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));
        
        .promotion-wrap {
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            width: 100%;
            background: #22252A;
            /*height: 100%;*/
            .promotion-wrap-content {
                width: 100%;
                /*background: #F9FAFA;*/
                height: 100vh;
                padding-top: 28rpx;

                .promotion-wrap-totalIncome {
                    width: 690rpx;
                    height: 220rpx;
                    margin: 0 auto;
                    background: no-repeat;
                    background-size: cover;

                    .promotion-wrap-totalIncome-container {
                        padding: 30rpx;
                        box-sizing: border-box;

                        .promotion-wrap-totalIncome-title {
                            .text {
                                span {
                                    font-size: 32rpx;
                                    font-family: PingFangSC-, PingFang SC;
                                    font-weight: normal;
                                    color: #FFFFFF;
                                }
                            }
                        }

                        .promotion-wrap-totalIncome-content {
                            margin-top: 26rpx;

                            span {
                                font-size: 32rpx;
                                font-family: PingFangSC-, PingFang SC;
                                font-weight: normal;
                                color: #FFFFFF;
                            }

                            .money {
                                font-size: 60rpx;
                                font-family: PingFangSC-, PingFang SC;
                                font-weight: normal;
                                color: #FFFFFF;

                            }

                            .unit {
                                margin-left: 22rpx;
                            }
                        }
                    }


                }

                .promotion-wrap-records {
                    margin-top: 40rpx;

                    .promotion-wrap-records-container {

                        .promotion-wrap-records-title {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin: 0 30rpx;

                            .icon {
                                width: 8rpx;
                                height: 28rpx;
                                background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                                border-radius: 4rpx;
                            }

                            .text {
                                margin-left: 10rpx;

                                span {
                                    color: #D9DADB;
                                    font-size: 32rpx;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                }
                            }

                        }

                        .promotion-wrap-records-content {
                            width: 690rpx;
                            margin: 0 auto;
                            box-sizing: border-box;

                            .promotion-wrap-records-content-list {
                                .promotion-wrap-records-content-item {
                                    background: #272A2E;
                                    margin-top: 20rpx;
                                    width: 690rpx;
                                    height: 184rpx;
                                    padding: 30rpx;
                                    box-sizing: border-box;

                                    .text {
                                        display: flex;
                                        justify-content: space-between;

                                        .text-name {
                                            font-size: 32rpx;
                                            font-family: PingFangSC-Regular, PingFang SC;
                                            font-weight: 400;
                                            color: #D9DADB;
                                        }

                                        .text-money {
                                            font-size: 32rpx;
                                            font-family: PingFangSC-Medium, PingFang SC;
                                            font-weight: 500;
                                            color: #098FE0;
                                        }
                                    }

                                    .date {
                                        margin-top: 30rpx;

                                        span {
                                            font-size: 28rpx;
                                            font-family: PingFangSC-Regular, PingFang SC;
                                            font-weight: 400;
                                            color: rgba(217, 218, 219, 0.5);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>