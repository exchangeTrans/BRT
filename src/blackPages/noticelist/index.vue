<template>
	<view>
		<view class="head">
			<image src="../../static/images/noticelist/blackleft.png" mode="" class="headleft"></image>
			<view class="headname">公告列表</view>
		</view>
		<scroll-view class="notice_list" scroll-y>
			<view class="item">
				<view class="notice_content">BRT关于调整USDT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT关于调整USDT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT关于手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT2222222关于手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT1111提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT444关于手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
			<view class="item">
				<view class="notice_content">BRT3333提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
</script>

<style lang="less">
	*{
		background: #272A2E;
	}
	.head{
		height: 100rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
		.headleft{
			width: 50rpx;
			height: 50rpx;
			float: left;
			margin-left: 30rpx;
			margin-top: 25rpx;
		}
		.headname{
			// text-align: center;
			padding-left: 300rpx;
			line-height: 100rpx;
			font-weight: bolder;
			font-size: 36rpx;
			background: #00001A;
			font-family: PingFangSC-Semibold, PingFang SC;
			color: #D9DADB;
		}
	}
	.notice_list{
		height: 1220rpx;
	}
	.item{
		height: 150rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
		color: #D9DADB;
		font-family: PingFangSC-Regular, PingFang SC;
		// padding-bottom: 20rpx;
		.notice_content{
			margin-left: 20rpx;
			font-size: 38rpx;
			margin-top: 30rpx;
			margin-bottom: 20rpx;
			
		}
		.notice_time{
			margin-left: 20rpx;
			font-size: 34rpx;
			color: #D9DADB;
		}
	}
	.item_right{
		width: 60rpx;
		height: 60rpx;
		float: right;
		margin-top: -80rpx;
		margin-right: 20rpx;
	}
</style>
