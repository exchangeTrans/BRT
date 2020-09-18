<template>
    <view id="record">
        <app-header :headerOptions="headerOptions" @headertap=headertap></app-header>
        <scroll-view class="record-wrap" :scroll-y="true">
            <view class="record-wrap-list">
                <view class="record-wrap-item" v-for="(item, index) in recordDataList"
                      :key="index">
                    <RecordItem :recordData="item"
                                :isBlack="isBlack"></RecordItem>
                </view>

            </view>

        </scroll-view>
    </view>
</template>

<script>
    import appHeader from "@/components/common/header.vue";
    import RecordItem from "../../components/record/recordItem";
    
    export default {
        components: {RecordItem,appHeader},
        name: "record",
        data() {
            return {
                isBlack: true,
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    isWhiteIcon: true,
                    text: "USDT提币记录",
                    rightItem: {
                        type: "text",
                        text: "",
                        style: {
                            fontSize: "28rpx",
                            color: "#098FE0",
                        },
                        tipText:"AVV491",
                        haveTip:true,
                        tipTextStyle: {
                            color: "#D9DADB",
                            opacity: 0.5,
                        }
                    },
                    style: {
                        'color': '#D9DADB'
                    },
                    background: '#00001A',
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                },
                recordDataList: [
                    {
                        titleName: "提币",
                        number: 1798.8876987,
                        status: "success",
                        date: "19:28 08/16",
                    },
                    {
                        titleName: "提币",
                        number: 1798.8876987,
                        status: "inTheReview",
                        date: "19:28 08/16",
                    },
                    {
                        titleName: "提币",
                        number: 1798.8876987,
                        status: "fail",
                        date: "19:28 08/16",
                    },
                ],
            }
        },
        methods: {
            headertap() {

            }
        },
    }
</script>

<style scoped lang="less">
    #record {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));

        .record-wrap {
            background: #22252A;
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
        }
    }
</style>