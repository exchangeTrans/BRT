<template>
	<view class="tradelist" :style="tradelistOptions.isBlack ? 'background:#272A2E':''">
		<view class="type">{{tradelistOptions.type}}</view>
		<view class="number">{{tradelistOptions.number}}</view>
		<view class="per" :class="tradelistOptions.status===0?'red':'green'">{{tradelistOptions.per}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			tradelistOptions:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	.tradelist{
			height: 110rpx;
			width: 100%;
			background: #FFFFFF;
			// box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.05);
			border-bottom: 1rpx solid #BEBEBE;
			line-height: 110rpx;
			.type{
				width: 92rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #8D989E;
				line-height: 40rpx;
				float: left;
				margin-left: 20rpx;
				margin-right: 150rpx;
				margin-top: 35rpx;
			}
			.number{
				width: 102rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #8D989E;
				line-height: 40rpx;
				float: left;
				margin-right: 100rpx;
				margin-top: 35rpx;
			}
			.per{
				width: 102rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				line-height: 40rpx;
				float: left;
				margin-top: 35rpx;
			}
			.red{
				color: #FC3C5A;
			}
			.green{
				color: #5BC788;
			}
		}
</style>
