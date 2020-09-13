<template>
    <scroll-view id="directPush" scroll-y="true">
        <view class="directPush-wrap">
            <view class="directPush-wrap-nav">
                <view class="directPush-wrap-nav-container">
                    <view class="directPush-wrap-nav-text">
                        <span>邀请时间</span>
                    </view>
                    <view class="directPush-wrap-nav-text mgl200">
                        <span>会员ID</span>
                    </view>
                    <view class="directPush-wrap-nav-text  mgl140">
                        <span>业绩</span>
                    </view>
                    <view class="clearfix"></view>
                </view>
            </view>
            <view class="directPush-wrap-list">
                <view class="directPush-wrap-content"
                      v-for="(item, index) in inviteData"
                      :key="index">
                    <view class="directPush-wrap-content-text">
                        <span class="inviteItme">{{item.inviteTime}}</span>
                    </view>
                    <view class="directPush-wrap-content-text">
                        <span class="vipId">{{item.inviteId}}</span>
                    </view>
                    <view class="directPush-wrap-content-text">
                        <span class="performance">{{item.invitePerformance}}</span>
                    </view>
                    <view class="clearfix"></view>
                </view>
            </view>

        </view>
    </scroll-view>
</template>

<script>
    export default {
        name: "directPush",
        data () {
            return {
                inviteData: [
                    {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },{
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #directPush {
        width: 750rpx;
        height: 100vh;

        .directPush-wrap {
            padding-bottom: 50rpx;
            width: 100%;
            .directPush-wrap-nav {
                width: 100%;
                height: 90rpx;
                background: #F9FAFA;
                box-sizing: border-box;
                .directPush-wrap-nav-container {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    float: left;
                    padding: 0 30rpx;
                    .directPush-wrap-nav-text {
                        float: left;
                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                            line-height: 90rpx;
                        }
                    }

                    .mgl200 {
                        margin-left: 200rpx;
                    }

                    .mgl140 {
                        margin-left: 140rpx;
                    }
                }

            }

            .directPush-wrap-list {
                .directPush-wrap-content {
                    height: 100rpx;
                    padding: 0 30rpx;
                    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
                    .directPush-wrap-content-text {
                        float: left;
                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                            line-height: 100rpx;
                        }
                    }
                    .inviteItme {
                        max-width: 230rpx;
                    }
                    .vipId {
                        max-width: 140rpx;
                        margin-left: 62rpx;
                    }
                    .performance {
                        max-width: 130rpx;
                        margin-left: 94rpx;
                    }
                }
            }

        }

    }
</style>