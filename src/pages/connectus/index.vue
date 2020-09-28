<template>
	<view class="connectus">
		<appheader :headerOptions="headerOptions"></appheader>
		<view class="aboutbrt">
			<view class="head">关于BRT</view>
			<view class="content">
				BRT 全球匿名公链，由英国贝莱特基金会（Beilette Foundation）支持， 
				致力于结合信用抵押挖矿，量化机器人，合约等打造全球最佳DEFI数字货币
				生态，将支持一切有价值的数字资产和实物资产的存托。
			</view>
		</view>
		<view class="relation">
			<view class="relationus">联系我们</view>
			<view class="main">
				<view class="email" @click="copymsg" :data-clipboard-text="this.emailadress">{{emailadress}}
				<image src="../../static/images/connectus/email.png" mode="" class="img"></image>
				</view>
			</view>
		</view>
	</view>
</template>
 
<script src="@/script/connectus/connectus.js">

</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
		background: #F8F8F8;
	}
	.connectus{
		width: 100%;
		height: 100%;
	}
	.aboutbrt{
		width: 690rpx;
		height: 296rpx;
		background: #FFFFFF;
		margin-left: 30rpx;
		padding-top: calc(100rpx + var(--status-bar-height));
		z-index: -1;
		.head{
			margin-left: 30rpx;
			margin-top: 30rpx;
			margin-bottom: 14rpx;
			width: 100%;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #333333;
			line-height: 44rpx;
			background: #FFFFFF;
		}
		.content{
			width: 628rpx;
			height: 170rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 40rpx;
			vertical-align: text-top;
			letter-spacing: -0.81rpx;
			margin-left: 30rpx;
			background: #FFFFFF;
		}
	}
	.relation{
		height: 170rpx;
		width: 690rpx;
		background: #FFFFFF;
		margin-left: 30rpx;
		margin-top: 20.01rpx;
		.relationus{
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #333333;
			line-height: 44rpx;
			background: #FFFFFF;
			margin-left: 30rpx;
			padding-top: 32rpx;
		}
		.main{
			background: #FFFFFF;
			.email{
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				background: #FFFFFF;
				margin-left: 30rpx;
				margin-top: 20rpx;
				float: left;
				width: 90%;
			}
			.img{
				width: 27.96rpx;
				height: 27.96rpx;
				float: right;
				margin-right: 32rpx;
				background: #FFFFFF;
				margin-top: 8rpx;
			}
		}
	}
	
</style>
