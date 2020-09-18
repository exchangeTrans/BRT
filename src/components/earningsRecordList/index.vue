<template>
    <view class="earningsRecordList" id="earningsRecordList">
        <view :class="isBlack?'earningsRecordItem black':'earningsRecordItem'" v-for="(item,index) in earningsRecordData" :key="index">
            <view class="itemTop">
                <view :class="isBlack?'earningsType blackFont':'earningsType'">{{item.type}}</view>
                <view class="earningsNum">{{item.num}} BRT</view>
                <view class="clearfix"></view>
            </view>

            <view :class="isBlack?'itemBottom blackFont':'itemBottom'">
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
            isBlack: {
                type: Boolean,
                default: false,
            }
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
                .blackFont {
                    color: #D9DADB !important;
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
            .blackFont {
                color: rgba(217, 218, 219, 0.5) !important;
            }
        }
        .black {
            background: #272A2E;
        }
    }
</style>
