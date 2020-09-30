<template>
    <view id="withdrawalInput">
        <view class="withdrawalInput-wrap">
            <view class="withdrawalInput-wrap-content">
                <view class="withdrawalInput-item">
                    <view :class="isBlack ? 'withdrawalInput-item-title block':'withdrawalInput-item-title'">
                        <span>{{inputData.textTitle}}</span>
                    </view>
                    <view :class="isBlack ? 'withdrawalInput-item-content withdrawalInput-item-content-block':'withdrawalInput-item-content'">
                        <input type="text"
                               :class="isBlack ? 'blackInput':'input'"
                               :placeholder="inputData.placeholder"
                               :disabled="inputData.disabled"
                               :value="inputValue"
                               @input="inputChange($event)">
                        <view :class="isBlack ? 'withdrawalInput-item-rightItem black':'withdrawalInput-item-rightItem'">
                            <view class="isText" v-if="inputData.rightItem.type === 'isText'">
                                <span>{{inputData.rightItem.text}}</span>
                            </view>
                            <view class="isIcon" v-if="inputData.rightItem.type === 'isIcon'" ><!--@tap="btnClick"-->
                                <!--<image :src="scan"></image>-->
                            </view>
                            <view class="isBtn" v-if="inputData.rightItem.type === 'isBtn'" @tap="btnClick">
                                <span>{{inputData.rightItem.text}}</span>
                            </view>
                        </view>
                    </view>
                    <view :class="isBlack?'withdrawalInput-item-tip black':'withdrawalInput-item-tip'"
                          v-if="inputData.haveTip">
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
            },
            isBlack: {
                type: Boolean,
                default: false,
            },
            inputValue: {
                type: String,
                default: "",
            },
        },
        computed:{

        },
        data() {
            return {
                scan: `${require('@/static/images/withdrawal/scan.png')}`,
            }
        },
        methods: {
            inputChange(e) {
                let value = e.detail.value;
                this.$emit('inputChange', value)
            },
            btnClick() {
                this.$emit("btnClick")
            }
        }
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

                    .block {
                        span {
                            color: #D9DADB !important;
                        }
                    }

                    .withdrawalInput-item-content {
                        width: 100%;
                        height: 112rpx;
                        border-bottom: 1rpx solid #EDEDED;
                        position: relative;

                        .input {
                            height: 112rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            /*color: #D9DADB;*/

                            .uni-input-input {
                                text-indent: 0;
                            }
                        }

                        .blackInput {
                            height: 112rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #D9DADB;
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

                        .black {
                            .isText {
                                span {
                                    color: #D9DADB;
                                }
                            }
                        }
                    }
                    .withdrawalInput-item-content-block {
                        border-bottom: 1rpx solid rgba(217, 218, 219, 0.5);
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

                    .black {
                        span {
                            color: rgba(217, 218, 219, 0.5);
                        }
                    }
                }
            }
        }
    }
</style>
