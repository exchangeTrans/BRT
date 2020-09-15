<template>
    <view id="success">
        <pageHeader v-if="successData.black" :headerOptions="blackHeaderOptions"/>
        <pageHeader v-if="!successData.black" :headerOptions="headerOptions"/>
        <view :class="successData.black ? 'success-wrap' : 'black'">
            <view class="success-wrap-content">
                <view class="success-wrap-item">
                    <view class="img">
                        <image :src="successData.successImg"></image>
                    </view>
                    <view class="text">
                        <span class="text-msg">{{successData.text}}</span>
                        <span class="money">{{successData.money}} {{successData.unit}}</span>
                    </view>
                    <view class="btn-container">
                        <view class="btn">
                            <span>{{successData.BtnText}}</span>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import pageHeader from '@/components/common/header.vue'

    export default {
        name: "success",
        components: {
            pageHeader,
        },
        props: {
            successData:{
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
                successImg: `${require('@/static/images/success/sub.png')}`,
                blackHeaderOptions: {
                    show: true,
                    isAllowReturn: true,
                    text: "",
                    isWhiteIcon:true,
                    rightItem: {
                        // type: "text",
                        // text: "须知&反馈",
                        // style: {
                        //     "fontSize": '28rpx',
                        //     "fontFamily": 'Source Han Sans CN',
                        //     "fontWeight": '400',
                        //     "color": 'rgba(68,68,68,1)'
                        // }
                    },
                    style:{
                        'color':'#D9DADB'
                    },
                    background: '#00001A',
                    headerIsNoBoder: true,
                },
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    text: "",
                    rightItem: {
                        // type: "text",
                        // text: "须知&反馈",
                        // style: {
                        //     "fontSize": '28rpx',
                        //     "fontFamily": 'Source Han Sans CN',
                        //     "fontWeight": '400',
                        //     "color": 'rgba(68,68,68,1)'
                        // }
                    },
                }
            }
        },
        methods: {},
    }
</script>

<style scoped lang="less">
    #success {
        .success-wrap {
            width: 100vw;
            height: 100vh;
            padding-top: calc(100rpx + var(--status-bar-height));

            .success-wrap-content {
                margin: 0 auto;
                padding-top: 130rpx;

                .success-wrap-item {
                    width: 100%;

                    .img {
                        margin: 0 auto;
                        width: 530rpx;
                        height: 400rpx;

                        image {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .text {
                        text-align: center;

                        span {
                            display: block;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.5);
                        }

                        .text-msg {

                        }

                        .money {
                            margin-top: 2rpx;
                            font-size: 44rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #000000;
                        }
                    }

                    .btn-container {
                        margin: 82rpx auto 0;
                        width: 710rpx;
                        height: 100rpx;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                        border-radius: 50rpx;

                        .btn {
                            text-align: center;
                            line-height: 100rpx;

                            span {
                                font-size: 32rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }
                    }
                }
            }
        }
        .black {
            width: 100vw;
            height: 100vh;
            padding-top: calc(100rpx + var(--status-bar-height));
            background: #22252A;
            
            .success-wrap-content {
                margin: 0 auto;
                padding-top: 130rpx;

                .success-wrap-item {
                    width: 100%;

                    .img {
                        margin: 0 auto;
                        width: 530rpx;
                        height: 400rpx;

                        image {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .text {
                        text-align: center;

                        span {
                            display: block;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: rgba(217, 218, 219, 0.2);
                        }

                        .text-msg {

                        }

                        .money {
                            margin-top: 2rpx;
                            font-size: 44rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #D9DADB;
                        }
                    }

                    .btn-container {
                        margin: 82rpx auto 0;
                        width: 710rpx;
                        height: 100rpx;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                        border-radius: 50rpx;

                        .btn {
                            text-align: center;
                            line-height: 100rpx;

                            span {
                                font-size: 32rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }
                    }
                }
            }
        }
    }
</style>