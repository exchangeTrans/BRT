<template>
	<view class="logitem" :style="historylogdata.isBlack ? 'background:#272A2E':''">
		<view class="oneline">
			<view class="buyitem" ><text class="buyitin">买入</text>BRT/USDT</view>
			<view class="cancelitem">撤单</view>
		</view>
		<view class="twoline" >
			<view class="item-tr-left">委托价格（USTD）</view>
			<view class="item-tr-right">委托数量（BRT）</view>
		</view>
		<view class="threeline">
			<view class="itemcharge">{{historylogdata.charge}}</view>
			<view class="itemnum">{{historylogdata.num}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data(){
			return{
				
			}
		},
		props:{
			historylogdata:{
				type:Object,
				default:()=>{},
			}
		},
	}
</script>

<style lang="less">
	.logitem{
		clear: both;
		width: 690rpx;
		height: 220rpx;
		background: #FFFFFF;
		border-radius: 10px;
		margin-left: 30rpx;
		line-height: 70rpx;
		margin-top: 20rpx;
		.oneline{
			margin-left: 20rpx;
			margin-right: 20rpx;
			color: 32px;
			.buyitin{
				color: #FC3C5A;
				margin-right: 5rpx;
			}
			.buyitem{
				font-size: 32rpx;
				color: #1A1A1A;
				float: left;
			}
			.cancelitem{
				float: right;
				width: 88rpx;
				height: 42rpx;
				background: #FFFFFF;
				border-radius: 8rpx;
				border: 2rpx solid #FC3C5A;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FC3C5A;
				line-height: 34rpx;
				text-align: center;
				margin-top: 15rpx;
			}
		}
		.twoline{
			margin-left: 20rpx;
			// margin-right: 10rpx;
			clear: both;
			font-size: 28rpx;
			color: #8D989E;
			.item-tr-left{
				float: left;
			}
			.item-tr-right{
				float: right;
			}
		}
		.threeline{
			margin-left: 20rpx;
			margin-right: 20rpx;
			clear: both;
			color: #00001A;
			font-size: 28rpx;
			.itemcharge{
				float: left;
			}
			.itemnum{
				float: right;
			}
		}
	}
</style>
