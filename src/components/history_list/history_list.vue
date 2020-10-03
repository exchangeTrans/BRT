<template>
	<view :class="'item '+theme" :style="theme==='black' ? 'background:#272A2E':''">
		<view class="oneline">
			<view class="oneline-left">
				<text class="green" v-if="String(listOptions.orderType)==='1'">买入</text>
				<text class="red" v-if="String(listOptions.orderType)==='2'">卖出</text>
				{{KLineTradingPair.name}}/{{KLineTradingPair.type}}
			</view>
			<view class="oneline-right">{{listOptions.createTime}}</view>
		</view>
		<!-- :style="{'color':listOptions.style.color}" -->
		<view class="twoline" >
			<view class="twoline_1">委托数量</view>
			<view class="twoline_2">委托价格</view>
			<view class="twoline_3">成交总额</view>
			<view class="twoline_4">成交量</view>
		</view>
	
		<view class="threeline">
			<view class="threeline_1">{{listOptions.amountSum}}</view>
			<view class="threeline_2">{{listOptions.price}}</view>
			<view class="threeline_3">{{(Number(listOptions.amountExecuted)*Number(listOptions.price)).toFixed(4)}}</view>
			<view class="threeline_4"><text>{{listOptions.amountExecuted}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			listOptions:{
				type:Object,
				default:()=>{},
			}
// 			amountExecuted: "5"
// amountSum: "5"
// createTime: "2020-09-26 11:19:24"
// orderType: 2
// price: "46.93"
// symbolType: 1
// tradeOrderId: "1309694029788610560"
		},
		computed:{
            theme(){
                return this.$storage.getSync({key:'theme'});
			},
			KLineTradingPair(){
				return this.$store.state.tradeData.KLineTradingPair;
			},

		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	.item{
		width: 690rpx;
		height: 220rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-left: 30rpx;
		// margin-bottom: 20rpx;
		margin-top: 30rpx;
		line-height: 70rpx;
	}
	.oneline{
		margin-left: 20rpx;
		margin-right: 20rpx;
		// padding-top: 28rpx;
		.oneline-left{
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			float: left;
			.red{
				color: #FC3C5A;
				margin-right: 10rpx;
			}
			.green{
				color: #5BC788;
				margin-right: 10rpx;
			}
		}
		.oneline-right{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #8D989E;
			float: right;
			margin-right: 10rpx;
		}
	}
	.twoline{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8D989E;
		clear: both;
		width: 100%;
		height: 80rpx;
		.twoline_1{
			// width: 112rpx;
			// height: 40rpx;
			float: left;
			margin-right: 70rpx;
			margin-left: 20rpx;
		}
		.twoline_2{
			// width: 112rpx;
			// height: 40rpx;
			float: left;
			margin-right: 70rpx;
		}
		.twoline_3{
			// width: 112rpx;
			// height: 40rpx;
			float: left;
			margin-right: 70rpx;
		}
		.twoline_4{
			// width: 112rpx;
			// height: 40rpx;
			float: left;
			margin-left: 12rpx;
		}
	}
	.threeline{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #00001A;
		width: 100%;
		height: 80rpx;
		.threeline_1{
			width: 112rpx;
			height: 50rpx;
			float: left;
			margin-right: 70rpx;
			margin-left: 20rpx;
			box-sizing: border-box;
		}
		.threeline_2{
			width: 112rpx;
			height: 50rpx;
			float: left;
			margin-right: 70rpx;
			box-sizing: border-box;

		}
		.threeline_3{
			width: 112rpx;
			height: 50rpx;
			float: left;
			margin-right: 70rpx;
			box-sizing: border-box;

		}
		.threeline_4{
			width: 112rpx;
			height: 50rpx;
			float: right;
			box-sizing: border-box;
			text{
				float: right;
				margin-right: 30rpx;
			}
		}
	}
	.item.black{
		background: #272A2E;
		.oneline{
			
		color: #D9DADB
		}
		.twoline{
			color: #D9DADB;
			opacity: 0.5;
		}
		.threeline{
			color: #D9DADB
		}
	}
	
</style>
