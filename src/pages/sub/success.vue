<template>
    <view id="success">
        <pageHeader :headerOptions="headerOptions"/>
        <view class="success-wrap">
            <view class="success-wrap-content">
                <view class="success-wrap-item">
                    <view class="img">
                        <image :src="successImg"></image>
                    </view>
                    <view class="text">
                        <span class="text-msg">转入成功</span>
                        <span class="money">1000.00 BRT</span>
                    </view>
                    <view class="btn-container">
                        <view class="btn">
                            <span>完成</span>
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
        data() {
            return {
                successImg: `${require('@/static/images/success/sub.png')}`,
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
                    headerIsNoBoder: false,
                },
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
    }
</style>