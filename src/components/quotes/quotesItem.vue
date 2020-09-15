<template>
    <view id="quotesItem">
        <view class="quotesItem-wrap">
            <view class="quotesItem-content">
                <view class="quotesItem-item">
                    <view class="currency-name">
                        <view class="currency-name-img">
                            <image :src="quotesData.img"></image>
                        </view>
                        <view :class="isBlack ? 'currency-name-content black' : 'currency-name-content'">
                            <span class="name">{{quotesData.name}}币</span>
                            <span class="number">{{quotesData.number}}{{quotesData.name}}</span>
                        </view>
                    </view>
                    <view :class="isBlack ? 'price black' : 'price'">
                        <span>{{quotesData.price}}</span>
                    </view>
                    <view class="upsAndDowns">
                        <view :class="quotesDataStatus"><!--涨跌幅为0 unchanging ， 跌 down ，涨 up-->
                            <span>{{quotesData.rate}}</span>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "quotesItem",
        data() {
            return {
                quotesDataStatus: "upsAndDowns-bg unchanging",
            };
        },
        props: {
            quotesData: {
                type: Object,
                default: () => {
                }
            },
            isBlack: {
                type: Boolean,
                default: false,
            }
        },
        mounted() {
            let quotesDatathis = this.quotesData
            this.setquotesData(quotesDatathis);
        },
        onLoad() {
            // console.log()
        },
        methods: {
            setquotesData(v) {
                // debugger
                // console.log(v);
                if (v.status === "unchanging") {
                    this.quotesDataStatus = "upsAndDowns-bg unchanging";
                } else if (v.status === "down") {
                    this.quotesDataStatus = "upsAndDowns-bg down";
                } else if (v.status === "up") {
                    this.quotesDataStatus = "upsAndDowns-bg up";
                }
            }
        },
    };
</script>

<style scoped lang="less">
    #quotesItem {
        width: 100%;
        height: 120rpx;
        border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);

        .quotesItem-wrap {
            height: 100%;

            .quotesItem-content {
                height: 100%;

                .quotesItem-item {
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .currency-name {
                        display: flex;

                        .currency-name-img {
                            width: 80rpx;
                            height: 80rpx;
                            /*background: #D8D8D8;*/
                            border-radius: 50%;
                            image {
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .currency-name-content {
                            .name {
                                font-size: 28rpx;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #1A1A1A;
                            }

                            .number {
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1A1A1A;
                            }

                            span {
                                display: block;
                                margin-left: 10rpx;
                            }
                        }
                        .black {
                            color: #D9DADB;
                            .name {
                                font-size: 28rpx;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #D9DADB;
                            }

                            .number {
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: rgba(217, 218, 219, 0.5);
                            }

                            span {
                                display: block;
                                margin-left: 10rpx;
                            }
                        }

                    }

                    .price {
                        margin-left: 100rpx;
                        min-width: 45rpx;

                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }
                    }
                    .black {
                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #D9DADB;
                        }
                    }

                    .upsAndDowns {
                        margin-left: 160rpx;

                        .upsAndDowns-bg {
                            width: 136rpx;
                            height: 48rpx;
                            border-radius: 4rpx;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            span {
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }

                        }

                        .unchanging {
                            background: #CBCCCD;
                        }

                        .up {
                            background: #FC3C5A;
                        }

                        .down {
                            background: #5BC788;
                        }
                    }
                }

            }

        }
    }
</style>    