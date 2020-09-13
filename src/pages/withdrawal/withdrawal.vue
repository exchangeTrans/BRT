<template>
    <view id="withdrawal">
        <app-header :headerOptions="headerOptions" @headertap=headertap></app-header>
        <view class="withdrawal-wrap">
            <scroll-view class="withdrawal-wrap-container" scroll-y="true">
                <view class="withdrawal-wrap-container-list">
                    <view class="withdrawal-wrap-container-item"
                          v-for="(item, index) in inputDatas"
                          :key="index">
                        <WithdrawalInput :inputData="item"></WithdrawalInput>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-text">
                    <view class="text">
                        <span>到账数量</span>
                    </view>
                    <view class="text">
                        <span class="blue">0 BRT</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-phoneInput">
                    <WithdrawalInput :inputData="phoneInput"></WithdrawalInput>
                </view>
                <view class="withdrawal-wrap-container-tip">
                    <view class="withdrawal-wrap-container-tip-content">
                        <span class="tipTitle">最小提币数量：10.0（BRT）</span>
                        <span class="tipContent">为保障资金安全，当您账户安全策略变更、密码修改、我们会对提币进行人工审核、请耐心等待工作人员电话或邮件联系。</span>
                        <span class="tipContent mgt">请务必确认电脑及浏览器安全，防止信息被篡改或泄露</span>
                    </view>
                </view>
                <view class="withdrawal-wrap-container-btn">
                    <Btn :btnText="btnText"
                         fontColor="#FFFFFF"
                         :backgroundColor="BtnackgroundColor"
                         width="690rpx"
                         borderRadius="50rpx"></Btn>
                </view>

            </scroll-view>
        </view>
    </view>
</template>

<script>
    import appHeader from "@/components/common/header.vue"
    import WithdrawalInput from "../../components/withdrawal/withdrawalInput";
    import Btn from "../../components/btn/index";

    export default {
        components: {
            Btn,
            WithdrawalInput,
            appHeader,
        },
        name: "withdrawal",
        data() {
            return {
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    text: "BRT 提币",
                    rightItem: {
                        type: "text",
                        text: "提现记录",
                        style: {
                            fontSize: "28rpx",
                            color: "#098FE0",
                        },
                    },
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                },
                btnText: "提币",
                BtnackgroundColor: "#B4BBC0",

                inputDatas: [
                    {
                        textTitle: "提币地址",
                        placeholder: "输入或长按粘贴地址",
                        rightItem: {
                            type: "isIcon",//isText isBtn isIcon
                            text: "BRT",
                        },
                    },
                    {
                        textTitle: "数量",
                        placeholder: "最小提币数量10.00000000",
                        rightItem: {
                            type: "isText",//isText isBtn isIcon
                            text: "BRT",
                        },
                        haveTip: "余额：0.562 BRT"
                    },
                    {
                        textTitle: "手续费",
                        placeholder: "1.00000000",
                        rightItem: {
                            type: "isText",//isText isBtn isIcon
                            text: "BRT",
                        },
                        haveTip: "余额：0.562 BRT"
                    }
                ],
                phoneInput: {
                    textTitle: "手机验证码",
                    placeholder: "输入手机验证码",
                    rightItem: {
                        type: "isBtn",//isText isBtn isIcon
                        text: "获取验证码",
                    },
                }
            }
        },
        methods: {
            headertap(type) {
                console.log(type)
            }
        }
    }
</script>

<style scoped lang="less">
    #withdrawal {
        width: 750rpx;

        .withdrawal-wrap {
            /*height: 100%;*/
            width: 100%;
            padding-top: calc(100rpx + var(--status-bar-height));
            box-sizing: border-box;

            .withdrawal-wrap-container {
                width: 100%;
                height: calc(100vh - var(--status-bar-height));
                box-sizing: border-box;

                .withdrawal-wrap-container-list {
                    margin: 0 30rpx;

                    .withdrawal-wrap-container-item {
                        margin-top: 30rpx;
                    }
                }

                .withdrawal-wrap-container-text {
                    box-sizing: border-box;
                    margin: 0 30rpx;
                    height: 112rpx;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1rpx solid #EDEDED;

                    .text {
                        span {
                            line-height: 112rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }
                    }
                }

                .withdrawal-wrap-container-phoneInput {
                    margin: 0 30rpx;
                }

                .withdrawal-wrap-container-tip {

                    margin: 30rpx 30rpx 0;

                    .withdrawal-wrap-container-tip-content {
                        padding: 30rpx;
                        height: 254rpx;
                        background: #F5F8FC;
                        border-radius: 8px;

                        span {
                            display: block;
                            font-size: 24rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #098FE0;
                        }

                        .tipContent {
                            margin-top: 20rpx;
                        }

                        .mgt {
                            margin-top: 50rpx;
                        }
                    }
                }

                .withdrawal-wrap-container-btn {
                    margin-top: 40rpx;

                }
            }
        }
    }
</style>