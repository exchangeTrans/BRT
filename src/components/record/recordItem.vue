<template>
    <view id="recordItem" :class="isBlack?'blackBg':''">
        <view class="recordItem-wrap">
            <view class="recordItem-wrap-container">
                <view :class="isBlack?'recordItem-wrap-container-title black':'recordItem-wrap-container-title'">
                    <span>{{recordData.titleName}}</span>
                </view>
                <view class="recordItem-wrap-container-content">
                    <view :class="isBlack ? 'recordItem-wrap-container-content-title black' : 'recordItem-wrap-container-content-title'">
                        <view class="text">数量</view>
                        <view class="text">状态</view>
                        <view class="text end">时间</view>
                    </view>
                    <view :class="isBlack?'recordItem-wrap-container-content-text blackText':'recordItem-wrap-container-content-text'">
                        <view class="text">{{recordData.number}}</view>
                        <view class="text blue" v-if="recordData.status === 'inTheReview'">审核中</view>
                        <view class="text red" v-else-if="recordData.status === 'fail'">审核失败</view>
                        <view class="text" v-else="recordData.status === 'success'">已完成</view>
                        <view class="text end">{{recordData.date}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "recordItem",
        data () {
            return {
                
            }
        },
        props:{
            recordData: {
                type: Object,
                default: () => {}
            },
            isBlack: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="less">
    #recordItem {
        background: #fff;
        width: 100%;
        height: 240rpx;
        box-sizing: border-box;
        border-bottom: 1rpx solid #EDEDED;
        
        .recordItem-wrap {
            padding: 30rpx;
            box-sizing: border-box;
            .recordItem-wrap-container {
                .recordItem-wrap-container-title {
                    span {
                        font-size: 32rpx;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #1A1A1A;
                    }
                }

                .recordItem-wrap-container-content {
                    margin-top: 30rpx;
                    .recordItem-wrap-container-content-title {
                        display: grid;
                        grid-template-columns: 45% 20% 35%;
                        
                        .text {
                            font-size: 24rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: rgba(26, 26, 26, 0.6);
                            
                        }
                        .end {
                            justify-self: end;
                        }
                    }

                    .recordItem-wrap-container-content-text {
                        margin-top: 10rpx;
                        display: grid;
                        grid-template-columns: 45% 20% 35%;
                        
                        .text {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }
                        
                    }
                    .center {
                        justify-self: center;
                    }
                    .end {
                        justify-self: end;
                    }
                    .red {
                        color: #FC3C5A !important;
                    }
                    .blue {
                        color: #098FE0 !important;
                    }
                    .black {
                        .text {
                            color: rgba(217, 218, 219, 0.6);
                        }
                    }
                    .blackText {
                        .text {
                            color: rgba(217, 218, 219, 1);
                        }
                    }
                }

                .black {
                    span {
                        color: #D9DADB;
                    }
                }
            }
        }
    }
    .blackBg {
        background: #272A2E !important;
        border-bottom: 1rpx solid rgba(255, 255, 255, 0.1) !important;
    }
</style>