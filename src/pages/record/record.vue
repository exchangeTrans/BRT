<template>
    <view id="record">
        <app-header :headerOptions="headerOptions"></app-header>
        <scroll-view class="record-wrap" :scroll-y="true">
            <view class="record-wrap-list">
                <view class="record-wrap-item" v-for="(item, index) in recordDataList"
                      :key="index">
                    <RecordItem :recordData="item"></RecordItem>
                </view>

            </view>

        </scroll-view>
    </view>
</template>

<script>
    import appHeader from "@/components/common/header.vue";
    import RecordItem from "../../components/record/recordItem";
    
    export default {
        components: {RecordItem},
        comments: {
            appHeader,
        },
        name: "record",
        data () {
            return {
                headerOptions:{
                    show: true,
                    isAllowReturn: true,
                    text: "量化收益",
                    rightItem: {
                        type: "text",
                        text: "",
                    },
                    background: '#ffffff',
                    headerIsNoBoder: true,
                },
                recordDataList:[
                    {
                        titleName:"提币",
                        number:1798.8876987,
                        status:"success",
                        date:"19:28 08/16",
                    },
                    {
                        titleName:"提币",
                        number:1798.8876987,
                        status:"inTheReview",
                        date:"19:28 08/16",
                    },
                    {
                        titleName:"提币",
                        number:1798.8876987,
                        status:"fail",
                        date:"19:28 08/16",
                    },
                ],
            }
        },
        methods: {
            headertap(){
                
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
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
        }
    }
</style>