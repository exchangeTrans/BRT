<template>
    <view>
        <header :headerOptions="headerOptions"></header>
        <view class="item"></view>
        <scroll-view class="record-wrap" :scroll-y="true">
            <view
                    v-for="(item,index) in recordData_list"
                    :key="index">
                <record :recordData="item"></record>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import header from '../../components/common/header';
    import record from '../../components/record/recordItem'

    export default {
        components: {
            header,
            record
        },
        data() {
            return {
                headerOptions: {
                    show: true,
                    text: "USTU充币记录",
                    isAllowReturn: true,
                    fontfamily: "PingFangSC-Regular, PingFang SC",
                    fontSize: '34',
                    style: {
                        color: "#333333",

                    },
                    isColor: true,
                    rightItem: {
                        type: "text",
                        text: "ID:AVV491",
                        style: {
                            color: "#000000"
                        }
                    },
                },
                recordData_list: [
                    {
                        titleName: "充币",
                        number: "1798.1561657",
                        status: "fail",
                        date: "19:28 08/16"
                    },
                    {
                        titleName: "提币",
                        number: "1798.1561657",
                        status: "success",
                        date: "19:28 08/16"
                    },
                    {
                        titleName: "提币",
                        number: "1798.1561657",
                        status: "inTheReview",
                        date: "19:28 08/16"
                    },
                    {
                        titleName: "充币",
                        number: "1798.1561657",
                        status: "fail",
                        date: "19:28 08/16"
                    },
                    {
                        titleName: "提币",
                        number: "1798.1561657",
                        status: "success",
                        date: "19:28 08/16"
                    },
                    {
                        titleName: "提币",
                        number: "1798.1561657",
                        status: "inTheReview",
                        date: "19:28 08/16"
                    },
                ]
            }
        }
    }
</script>

<style lang="less">
    .item {
        height: 30rpx;
        width: 100%;
        background: #F8F8F8;
        margin-top: 90rpx;
    }

    .record-wrap {
        height: calc(100vh - var(--status-bar-height) - 100rpx);
    }
</style>
