<template>
    <view id="directPush">
        <app-header :headerOptions="headerOptions"
                    @headertap=headertap></app-header>
        <scroll-view class="directPush-wrap" :scroll-y="true">
            <view class="directPush-wrap-nav">
                <view class="directPush-wrap-nav-container">
                    <view class="directPush-wrap-nav-text inviteAccount">
                        <span class="">邀请帐户</span>
                    </view>
                    <view class="directPush-wrap-nav-text ID">
                        <span class="">ID</span>
                    </view>
                    <view class="directPush-wrap-nav-text computing">
                        <span class="">团队算力</span>
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

        </scroll-view>
    </view>
</template>

<script src="@/script/directPush/directPush.js">
    /*import appHeader from "@/components/common/header.vue"

    export default {
        name: "directPush",
        components: {
            appHeader,
        },
        data() {
            return {
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    isWhiteIcon: true,
                    text: "直推明细",
                    rightItem: {
                        type: "text",
                        text: "",
                        style: {
                            fontSize: "28rpx",
                            color: "#098FE0",
                        },
                    },
                    style: {
                        'color': '#D9DADB'
                    },
                    background: '#00001A',
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                },
                inviteData: [
                    {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    }, {
                        inviteTime: "+86 17362511772",
                        inviteId: "19034532",
                        invitePerformance: "1000 BRT",
                    },
                ]
            }
        },
        mounted() {
            let theme = this.$storage.getSync({key:'theme'});// console.log(theme);
            if(theme === 'white'){
                headerOptions = {
                    show: true,
                        isAllowReturn: true,
                        text: "直推明细",
                        rightItem: {
                        type: "text",
                            text: "",
                            style: {
                            fontSize: "28rpx",
                                color: "#098FE0",
                        },
                    },
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                }
            } else {
                headerOptions = {
                    show: true,
                        isAllowReturn: true,
                        isWhiteIcon: true,
                        text: "直推明细",
                        rightItem: {
                        type: "text",
                            text: "",
                            style: {
                            fontSize: "28rpx",
                                color: "#098FE0",
                        },
                    },
                    style: {
                        'color': '#D9DADB'
                    },
                    background: '#00001A',
                        bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                }
            }
        },
        methods: {
            
        }
    }*/
</script>

<style scoped lang="less">
    #directPush {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));

        .directPush-wrap {
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);

            .directPush-wrap-nav {
                width: 100%;
                height: 90rpx;
                background: #22252A;
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
                            color: #D9DADB;
                            line-height: 90rpx;
                        }

                    }

                    .inviteAccount {
                        width: 230rpx;
                    }

                    .ID {
                        width: 140rpx;
                        margin-left: 90rpx;
                    }

                    .computing {
                        width: 140rpx;
                        margin-left: 90rpx;
                    }
                }

            }

            .directPush-wrap-list {
                .directPush-wrap-content {
                    height: 100rpx;
                    padding: 0 30rpx;
                    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
                    background: #272A2E;

                    .directPush-wrap-content-text {
                        float: left;

                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #D9DADB;
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