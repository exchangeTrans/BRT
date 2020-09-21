<template>
	<view class="item" :style="listOptions.isBlack ? 'background:#272A2E':''">
		<view class="oneline" :style="{'color':listOptions.style.color}">
			<view class="oneline-left">
				<text :class="listOptions.buytype.status == 0 ? 'red':'green'">{{listOptions.buytype.type}}</text>
				BRT/USDT
			</view>
			<view class="oneline-right">2020/09/20 12:00</view>
		</view>
		
		<view class="twoline" :style="{'color':listOptions.style.color}">
			<view class="twoline_1">委托数量</view>
			<view class="twoline_2">委托价格</view>
			<view class="twoline_3">成交总额</view>
			<view class="twoline_4">成交量</view>
		</view>
	
		<view class="threeline" :style="{'color':listOptions.style.color}">
			<view class="threeline_1">{{listOptions.num}}</view>
			<view class="threeline_2">{{listOptions.charge}}</view>
			<view class="threeline_3">{{listOptions.money}}</view>
			<view class="threeline_4">{{listOptions.all}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			listOptions:{
				type:Object,
				default:()=>{},
			}
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
		margin-bottom: 20rpx;
		line-height: 70rpx;
	}
	.oneline{
		margin-left: 20rpx;
		margin-right: 20rpx;
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
		}
	}
	.twoline{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8D989E;
		clear: both;
		width: 100%;
		height: 40rpx;
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
		height: 40rpx;
		.threeline_1{
			width: 112rpx;
			height: 40rpx;
			float: left;
			margin-right: 70rpx;
			margin-left: 20rpx;
		}
		.threeline_2{
			width: 112rpx;
			height: 40rpx;
			float: left;
			margin-right: 70rpx;
		}
		.threeline_3{
			width: 112rpx;
			height: 40rpx;
			float: left;
			margin-right: 70rpx;
		}
		.threeline_4{
			width: 112rpx;
			height: 40rpx;
			float: left;
			margin-left: 12rpx;
		}
	}
</style>
