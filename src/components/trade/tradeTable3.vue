<template>
	<view class="tradeTable3" id="tradeTable3">
		
        <view class="tableTr tableTr1">
            <view class="tableLi tableLi1">{{KLineTradingPair.name}}</view>
        </view>
        <view class="tableTr tableTr2">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[0]}}</view>
            <view class="tableLi tableLi2">{{KLineTradingPair.introduction[langMsg].issueDate}}</view>
        </view>
        <view class="tableTr tableTr3">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[1]}}</view>
            <view class="tableLi tableLi2">{{KLineTradingPair.introduction[langMsg].issueNum}}</view>
        </view>
        <view class="tableTr tableTr3">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[2]}}</view>
            <view class="tableLi tableLi2">{{KLineTradingPair.introduction[langMsg].webSite}}</view>
        </view>
        <view class="intorduceTitle">{{$t('trade').tableHeadTr3[3]}}</view>
        <view class="intorduceText">{{KLineTradingPair.introduction[langMsg].text}}</view>
        
        <!-- <view class="tableTr tableTr3">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[3]}}</view>
            <view class="tableLi tableLi2">1000{{$t('trade').unit}}</view>
        </view> -->
	</view>
</template>

<script>
    export default {
	    components:{
		},
        data() {
            return {
                

            }
        },
        onLoad() {

        },
        computed:{
			KLineTradingPair(){
				return this.$store.state.tradeData.KLineTradingPair;
            },
            langMsg(){
                let langMsg = this.$storage.getSync({key:'langMsg'});
                return langMsg.name
            }
		},
        methods: {
        }
    }
</script>

<style lang="less">
	.tradeTable3{
		width: 100vw;
        height: auto;
        
        .tableTr{
            width: 100%;
            height: 88rpx;
            box-sizing: border-box;
            padding: 0 20rpx;
            display: flex;
            justify-content:space-between;
            border-bottom: 2rpx solid #EDEDED;
            .tableLi{      
                height: 88rpx;      
                font-size: 24rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #1A1A1A;
                line-height: 88rpx;
                text-align: center;
            }
            .tableLi1{
                text-align: left;
            }
            .tableLi2{
                text-align: right;
            }
        }
        .tableTr1{
           .tableLi{              
            font-size: 32rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
           } 
        }
        .intorduceTitle{
            width: 100%;
            height: 44rpx;
            font-size: 32rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #1A1A1A;
            line-height: 44rpx;
            margin: 30rpx 0 10rpx;
            box-sizing: border-box;
            padding: 0 20rpx;
        }
        .intorduceText{
            width: 100%;
            height: auto;
            font-size: 26rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #1A1A1A;
            line-height: 44rpx;
            opacity: 0.5;
            box-sizing: border-box;
            padding: 0 20rpx;
            margin-bottom: 22rpx;
        }
		

	}

</style>
