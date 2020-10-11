<template>
    <view id="orderDetail" class="orderDetail">
        <!-- @headertap="headertap" -->
        <pageHeader :headerOptions="headerOptions"
                    
                    class="appHeader"></pageHeader>
        <scroll-view class="orderDetail-wrap" :scroll-y="true" @touchmove.stop.prevent="moveHandle">
            <view class="orderDetailContent">
                <view class="detailItem detailItem1">
                    <view class="number">{{amount}} {{symbolTypeText}}</view>
                </view>
                <view class="detailItem detailItem2">
                    <view class="detailItem_left">{{$t('orderDetail').type}}</view>
                    <view class="detailItem_right">{{operationTypeText}}</view>
                </view>
                <view class="detailItem detailItem3">
                    <view class="detailItem_left">{{$t('orderDetail').state}}</view>
                    <view class="detailItem_right">{{stateTypeText}}</view>
                </view>
                <view class="detailItem detailItem4">
                    <view class="detailItem_left">{{$t('orderDetail').serviceCharge}}</view>
                    <view class="detailItem_right">{{fee}} {{symbolTypeText}}</view>
                </view>
                <view class="detailItem detailItem5">
                    <view class="detailItem_left">{{$t('orderDetail').withdrawAddress}}</view>
                    <view class="detailItem_right">{{memo}}</view>
                </view>
                <view class="detailItem detailItem6">
                    <view class="detailItem_left">{{$t('orderDetail').time}}</view>
                    <view class="detailItem_right">{{createTime}}</view>
                </view>
            </view>
            
            
            
        </scroll-view>
    </view>
</template>

<script >
// src="@/script/orderDetail/orderDetail.js"
    import pageHeader from '@/components/common/header.vue'
    import {
        DateFunc
    } from '@/static/js/common.js';
        export default {
            name: "success",
            components:{
                pageHeader,
            },
            data () {
                return {
                    successImg:`${require('@/static/images/success/witchdrawal.png')}`,
                    headerOptions: {
                        show: true,
                        isAllowReturn: true,
                        text: this.$t('orderDetail').title,
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
                        headerIsNoBoder: true,

                    },
                    amount: "",
                    balance: "",
                    createTime: "",
                    fee: "",
                    memo: "",
                    operationType: "",
                    operationTypeText: "",
                    stateType: 1,
                    stateTypeText: "",
                    symbolTypeText:''
                }
            },
            mounted(){
                
            },
            onLoad(options) {
                this.transactionId = options.transactionId;
                // console.log(details_msg_list);
                this.getDetail(options.transactionId)
            },
            methods: {
                getDetail(transactionId){
                   let postData={
                    transactionId: transactionId
                };
                let that = this;
                this.$request({
                    url:'wallet/getSymbolTransactionDetail',
                    method:'post',
                    params:postData
                }).then((res)=>{
                    if (res.result.returnCode.toString() === "0"&&res.data.amount) {
                        that.amount = res.data.amount;
                        that.balance = res.data.balance;
                        that.createTime = DateFunc.resetTime(parseInt(res.data.createTime));
                        that.fee = res.data.fee;
                        that.memo = res.data.memo;
                        that.operationType = res.data.operationType;
                        that.operationTypeText = res.data.operationTypeText;
                        that.stateTypeText = res.data.stateTypeText;
                        that.symbolTypeText = res.data.symbolTypeText?res.data.symbolTypeText:''
                        // this.$emit('transferInAmountSuccess')
                    }else{
                        // this.$toast.show({
                        // 	title: res.result.returnMessage,
                        // })
                    }
                }) 
                }

            },
        }
</script>

<style scoped lang="less">
    .orderDetail {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));
        box-sizing: border-box;

        .orderDetail-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            .orderDetailContent{
                width: 100vw;
                height: auto;
                padding: 20rpx 30rpx 0;
                box-sizing: border-box;
                .detailItem{
                    width: 100%;
                    height: 112rpx;
                    background: #FFFFFF;
                    // box-shadow: 0px -2rpx 0px 0px #EDEDED;
                    border-bottom: 2rpx solid #EDEDED;
                    .detailItem_left{
                        display: inline-block;
                        float: left;
                        // width: 64px;
                        height: 112rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #000000;
                        line-height: 112rpx;
                        opacity: 0.5;
                    }
                    .detailItem_right{
                        display: inline-block;
                        // width: 64px;
                        height: 112rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #000000;
                        line-height: 112rpx;
                        float: right;
                    }
                    .number{
                        width: 100%;
                        height: 66rpx;
                        font-size: 48rpx;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #098FE0;
                        line-height: 66rpx;
                        margin-top: 18rpx;
                    }
                }
                .detailItem5{
                    height: auto;
                    min-height: 112rpx;
                    overflow: hidden;
                    .detailItem_right{
                        max-width: 400rpx;
                        height: auto;
                        opacity: 0.5;
                        word-wrap:break-word;
                        line-height: 44rpx;
                        padding:  30rpx 0;
                    }
                }
            }
        }
    }
</style>
