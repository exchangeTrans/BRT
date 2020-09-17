<template>
    <view class="earningsRecordList" id="earningsRecordList">
        <view class="earningsRecordItem" v-for="(item,index) in earningsRecordData" :key="index">
            <view class="itemTop">
                <view class="earningsType">{{item.type}}</view>
                <view class="earningsNum">{{item.num}} BRT</view>
                <view class="clearfix"></view>
            </view>

            <view class="itemBottom">
                {{item.time}}
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        name: "earningsRecordList",
        components: {},
        props: {
            earningsRecordData:{
                type:Array,
                default:()=>[]
            },

        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {

        },
    }
</script>

<style lang="less">
    .earningsRecordList {
        width: 100%;
        height: 100%;
        .earningsRecordItem{
            margin: 20rpx auto;
            padding:34rpx 30rpx;
            box-sizing: border-box;
            width: 690rpx;
            height: 184rpx;
            background: #FFFFFF;
            border-radius: 10rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            .itemTop{
                font-size: 32rpx;

                .earningsType{
                    float: left;
                    font-weight: 400;
                    color: #000000;
                }
                .earningsNum{
                    float: right;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #098FE0;
                }

            }
            .itemBottom{
                margin-top: 32rpx;
                font-size: 28rpx;
                opacity: 0.5;
                font-weight: 400;
                color: #000000;
            }
        }
    }
</style>
