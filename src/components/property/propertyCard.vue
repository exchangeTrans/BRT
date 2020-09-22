<template>
    <view id="propertyCard">
        <view class="property-wrap">
            <view class="property-wrap-content">
                <view :class="isBlack ? 'property-wrap-content-asset blackBackground' : 'property-wrap-content-asset'">
                    <view class="property-wrap-content-asset-container">
                        <view class="totalAsset">
                            <view :class="isBlack ? 'totalAsset-text black' : 'totalAsset-text'">
                                <view class="icon">
                                    <image :src="nameIcon"></image>
                                </view>
                                <span>{{propertyCardData.name}}</span>
                            </view>
                            <view :class="isBlack ? 'totalAsset-money black' : 'totalAsset-money'">
                                <span>{{propertyCardData.money}}</span>
                                <span class="about">≈{{propertyCardData.aboutMoney}} CNY</span>
                            </view>
                        </view>
                        <view class="balance">
                            <view class="balance-container">
                                <view :class="isBlack ? 'balance-content black':'balance-content'">
                                    <span>{{propertyCardData.availableBalance}}</span>
                                    <span class="balance-content-text">可用馀额</span>
                                </view>
                                <view :class="isBlack ? 'balance-content black':'balance-content'">
                                    <span>{{propertyCardData.lockBalance}}</span>
                                    <span class="balance-content-text">锁仓馀额</span>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="property-wrap-content-asset-option" :style="propertyStyle">
                        <view :class="isBlack? 'text black haveBorder' : 'text haveBorder'"
                              v-for="(item,index) in propertyOption"
                              :key="index"
                              @tap="click(propertyCardData.symbolType,item.url)">
                            <span>{{item.text}}</span>
                        </view>
                        <!--<view :class="isBlack? 'text black' : 'text'" @tap="transferClick">
                            <span>转账</span>
                        </view>-->
                        <!--<view :class="isBlack? 'text black' : 'text'" @tap="detailClick">
                            <span>帐本明细</span>
                        </view>-->
                    </view>
                </view>

            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "propertyCard",
        props: {
            propertyCardData: {
                type: Object,
                default: () => {
                }
            },
            isBlack: {
                type: Boolean,
                default: false,
            },
            propertyCardStyle: {
                type: Object,
                default: () => {
                },
            },
            column: {
                type: Number,
                default: 2
            },
            propertyOption: {
                type: Array,
                default: () => [],
            }
        },
        computed: {
            nameIcon() {
                let {propertyCardData} = this.$props
                return `${require('@/static/images/property/' + propertyCardData.name + '.png')}`
            },
            propertyStyle() {
                let {
                    propertyCardStyle,
                    column
                } = this.$props;
                let rate = (1/column)*100 + "%"
                console.log(column,rate);
                return {
                    gridTemplateColumns: 'repeat(' + column + ', ' +rate + ')',
                    ...propertyCardStyle,
                }

            }
        },
        data() {
            return {}
        },
        methods: {
            click(symbolType,url) {
                this.propertyCardData.symbolType
                if(url !== ''){
                    this.$jumpPage.jump({
                        url: url,
                        type: "navigateTo"
                    })
                }
            },
            // transferClick() {
            //     this.propertyCardData.symbolType
            // },
            // detailClick() {
            //     this.propertyCardData.symbolType
            // }
        }
    }
</script>

<style scoped lang="less">
    #propertyCard {
        width: 690rpx;

        .property-wrap {
            box-sizing: border-box;
            width: 690rpx;

            .property-wrap-content {

                .property-wrap-content-asset {
                    width: 690rpx;
                    height: 388rpx;
                    background: #FFFFFF;
                    border-radius: 16rpx;
                    border: 2rpx solid #E6E6E6;
                    box-sizing: border-box;

                    .property-wrap-content-asset-container {
                        box-sizing: border-box;
                        height: 300rpx;
                        padding: 34rpx 30rpx 0;

                        .totalAsset {
                            display: flex;
                            justify-content: space-between;
                            height: 60rpx;

                            .totalAsset-text {
                                display: flex;
                                align-items: center;

                                .icon {
                                    width: 40rpx;
                                    height: 40rpx;

                                    image {
                                        width: 100%;
                                        height: 100%;
                                        display: block;
                                    }

                                    display: inline-block;
                                }

                                span {
                                    margin-left: 10rpx;
                                    font-size: 32rpx;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #1A1A1A;
                                }
                            }

                            .totalAsset-money {
                                display: flex;
                                align-items: center;

                                span {
                                    font-size: 48rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #1A1A1A;
                                }

                                .about {
                                    margin-left: 6rpx;
                                    font-size: 24rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #1A1A1A;
                                    vertical-align: center;
                                }
                            }

                            .black {
                                color: #D9DADB !important;

                                .about {
                                    opacity: 0.5 !important;
                                    color: #D9DADB !important;
                                }

                                span {
                                    color: #D9DADB !important;
                                }
                            }

                        }

                        .balance {
                            margin-top: 60rpx;
                            width: 100%;

                            .balance-container {
                                display: flex;
                                justify-content: center;

                                .balance-content {
                                    display: inline-block;
                                    text-align: center;
                                    margin-left: 32rpx;
                                    width: 264rpx;

                                    span {
                                        display: block;
                                        font-size: 36rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #1A1A1A;
                                    }

                                    .balance-content-text {
                                        font-size: 28rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #A0A0A0;
                                    }
                                }

                                .balance-content:first-child {
                                    margin-left: 0;
                                }

                                .black {
                                    span {
                                        color: #D9DADB;
                                    }
                                }
                            }
                        }

                    }

                    .property-wrap-content-asset-option {
                        width: 100%;
                        border-top: 1rpx solid #E6E6E6;
                        height: 88rpx;
                        display: grid;
                        box-sizing: border-box;

                        .text {
                            /*width: auto;*/
                            height: 84rpx;
                            text-align: center;
                            box-sizing: border-box;

                            span {
                                line-height: 84rpx;
                                font-size: 28rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1A1A1A;
                            }
                        }
                        .text:last-child {
                            border-right: 0 !important;
                        }

                        .black {
                            span {
                                color: #D9DADB !important;
                            }

                        }

                        .haveBorder {
                            /*border-left: 1rpx solid #E6E6E6;*/
                            border-right: 1rpx solid #E6E6E6;
                        }
                    }

                }

                .blackBackground {
                    background: #272A2E;
                    border: 2rpx solid rgba(255, 255, 255, 0.1);

                    .property-wrap-content-asset-option {
                        border-top: 1rpx solid rgba(255, 255, 255, 0.1);
                    }

                    .haveBorder {
                        border-left: 1rpx solid rgba(255, 255, 255, 0.1) !important;
                        border-right: 1rpx solid rgba(255, 255, 255, 0.1) !important;
                    }
                }

            }
        }


    }
</style>
