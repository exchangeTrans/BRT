<template>
	<view class="">
		<view class="item" :style="noticeOptions.isBlack?'isblack':''">
			<view class="notice_content">{{noticeOptions.text}}</view>
			<view class="notice_time">{{noticeOptions.date}}</view>
			<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		props:{
			noticeOptions:{
				type:Object,
				default: () => {}
			},
		}
	}
</script>

<style lang="less">
	.isblack{
		background: #22252A;
	}
	.item{
		height: 170rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
		background: #FFFFFF;
		box-shadow: 0px -2px 0px 0px #F2F2F2;
		line-height: 100rpx;
		.notice_content{
			margin-left: 20rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
		}
		.notice_time{
			margin-left: 20rpx;
			width: 300rpx;
			height: 40rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
			line-height: 40rpx;
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
