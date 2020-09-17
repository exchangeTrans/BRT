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
        <pageHeader :headerOptions="headerOptions"/>
        <scroll-view class="quotes-content" :scroll-y="true">
            <view class="quotes-content-wrap">
                <view class="quotes-content-wrap-title">
                    <view class="quotes-content-wrap-title-container">
                        <view class="currency">
                            <span>计价货币：</span>
                            <span>USTD</span>
                            <view class="icon">
                                <image :src="currencyIcon"></image>
                            </view>
                        </view>
                        <view class="price">
                            <span>价格</span>
                        </view>
                        <view class="upsAndDowns">
                            <span>24H涨跌</span>
                            <view class="icon">
                                <image :src="upsAndDownsIcon"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="quotes-content-wrap-container">
                    <view class=""
                          v-for="(item, index) in quotesData"
                          :key="index">
                        <QuotesItem :quotesData="item"></QuotesItem>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/quotes/quotes.js">
    /*import QuotesItem from "../../components/quotes/quotesItem";
    import pageHeader from '@/components/common/header.vue'
    export default {

        name: "quotes",
        components: {
            QuotesItem,
            pageHeader,
        },
        data() {
            return {
                active: 1,
                quotesData: [
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "unchanging",
                        img:`${require('@/static/images/quotes/TATO.png')}`,
                    },{
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "down",
                        img:`${require('@/static/images/quotes/IMU.png')}`,
                    },{
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },
                    {
                        name: "TATO",
                        number: 1,
                        price: "1.0000",
                        rate: "0.00%",
                        status: "up",
                        img:`${require('@/static/images/quotes/HBT.png')}`,
                    },

                ],
                currencyIcon: `${require('@/static/images/quotes/down.png')}`,
                upsAndDownsIcon: `${require('@/static/images/quotes/upAndDown.png')}`,
                headerOptions: {
                    show:true,
                    isAllowReturn:false,
                    text:"行情",
                    rightItem:{
                        type:"icon",
                        path: `${require('@/static/images/quotes/search.png')}`,
                        style:{
                            'width':'48rpx',
                            'height':'48rpx',
                        }
                    },
                    headerIsNoBoder: false,
                },
            };
        },
        mounted() {
            let theme = this.$storage.getSync({key:'theme'});
            // console.log(theme);
            if(theme === 'white'){
                this.headerOptions = {
                    show:true,
                    isAllowReturn:false,
                    text:"行情",
                    rightItem:{
                        type:"icon",
                        path: `${require('@/static/images/quotes/search.png')}`,
                        style:{
                            'width':'48rpx',
                            'height':'48rpx',
                        }
                    },
                    headerIsNoBoder: false,
                };
            } else {
                this.headerOptions = {
                    show:true,
                    isAllowReturn:false,
                    text:"行情",
                    rightItem:{
                        type:"icon",
                        path: `${require('@/static/images/quotes/blacksearch.png')}`,
                        style:{
                            'width':'48rpx',
                            'height':'48rpx',
                        }
                    },
                    style:{
                        'color':'#D9DADB'
                    },
                    background: '#00001A',
                    headerIsNoBoder: true,
                };
            }
        },
        methods: {
            switchTab(index) {
                this.active = index;
            },
        },
    };*/
</script>

<style scoped lang="less">
    #quotes {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));
        /*padding-bottom: calc(var(--window-bottom));*/
        /*box-sizing: border-box;*/

        /*.quotes-nav {*/
        /*    width: 100%;*/
        /*    height: 100%;*/
        /*    background: #eeefef;*/

        /*    .quotes-nav-wrap {*/
        /*        height: 100%;*/
        /*        margin: 0 30rpx;*/
        /*        display: flex;*/
        /*        justify-content: flex-start;*/
        /*        align-items: center;*/

        /*        .quotes-nav-wrap-content {*/
        /*            margin-left: 56rpx;*/
        /*            height: 50rpx;*/

        /*            .span {*/
        /*                font-size: 28rpx;*/
        /*                font-family: PingFangSC-Regular, PingFang SC;*/
        /*                font-weight: 400;*/
        /*                color: #1a1a1a;*/
        /*                line-height: 50rpx;*/
        /*            }*/

        /*            .active {*/
        /*                font-size: 36rpx;*/
        /*                font-family: PingFangSC-Semibold, PingFang SC;*/
        /*                font-weight: 600;*/
        /*                color: #835dff;*/
        /*            }*/
        /*        }*/

        /*        .quotes-nav-wrap-content:first-child {*/
        /*            margin-left: 0;*/
        /*        }*/
        /*    }*/
        /*}*/

        .quotes-content {
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            .quotes-content-wrap {
                margin: 0 30rpx;
                padding-top: 30rpx;

                .quotes-content-wrap-title {
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
                            color: #1a1a1a;
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
                            margin-left: 80rpx;
                            flex-grow: 2;
                            /*margin-left: 110rpx;*/
                        }

                        .upsAndDowns {
                            /*margin-left: 180rpx;*/
                        }
                    }
                }

                .quotes-content-wrap-container {

                }
            }
        }
    }
</style>