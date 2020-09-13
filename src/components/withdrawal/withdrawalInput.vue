<template>
    <view id="withdrawalInput">
        <view class="withdrawalInput-wrap">
            <view class="withdrawalInput-wrap-content">
                <view class="withdrawalInput-item">
                    <view class="withdrawalInput-item-title">
                        <span>{{inputData.textTitle}}</span>
                    </view>
                    <view class="withdrawalInput-item-content">
                        <input type="text" :placeholder="inputData.placeholder">
                        <view class="withdrawalInput-item-rightItem">
                            <view class="isText" v-if="inputData.rightItem.type === 'isText'">
                                <span>{{inputData.rightItem.text}}</span>
                            </view>
                            <view class="isIcon" v-if="inputData.rightItem.type === 'isIcon'">
                                <image :src="scan"></image>
                            </view>
                            <view class="isBtn" v-if="inputData.rightItem.type === 'isBtn'">
                                <span>{{inputData.rightItem.text}}</span>
                            </view>
                        </view>
                    </view>
                    <view class="withdrawalInput-item-tip" v-if="inputData.haveTip">
                        <span>{{inputData.haveTip}}</span>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "withdrawalInput",
        props: {
            inputData: {
                type: Object,
                default: () => {
                },
            }
        },
        data() {
            return {
                scan: `${require('@/static/images/withdrawal/scan.png')}`,
            }
        },
    }
</script>

<style scoped lang="less">
    #withdrawalInput {
        width: 100%;
        height: auto;

        .withdrawalInput-wrap {
            .withdrawalInput-wrap-content {
                .withdrawalInput-item {

                    .withdrawalInput-item-title {
                        span {
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }
                    }

                    .withdrawalInput-item-content {
                        width: 100%;
                        height: 112rpx;
                        border-bottom: 1rpx solid #EDEDED;
                        position: relative;

                        input {
                            height: 112rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #000000;
                            .uni-input-input {
                                text-indent: 0;
                            }
                        }

                        .uni-input-placeholder {
                            text-indent: 0;
                        }


                        .withdrawalInput-item-rightItem {
                            height: 112rpx;
                            position: absolute;
                            right: 0;
                            top: 0;
                            .isText, .isIcon, .isBtn {
                                height: 100%;
                                display: flex;
                                align-items: center;
                            }

                            .isText {
                                span {
                                    font-size: 32rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #000000;
                                }
                            }

                            .isIcon {
                                image {
                                    height: 48rpx;
                                    width: 48rpx;
                                }
                            }

                            .isBtn {
                                span {
                                    font-size: 32rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #098FE0;
                                }
                            }
                        }
                    }



                    .withdrawalInput-item-tip {
                        height: 50rpx;
                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.5);
                            line-height: 50rpx;
                        }
                        .blue {
                            color: #098FE0 !important;
                        }
                    }
                }
            }
        }
    }
</style>