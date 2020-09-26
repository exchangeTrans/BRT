<template>
	<view class="">
		<view class="item" :class="isBlack==true?'isblack':'iswhite'">
			<view class="notice_content" :class="isBlack==true?'isblack':'iswhite'">{{noticeOptions.text}}</view>
			<view class="notice_time" :class="isBlack==true?'isblack':'iswhite'">{{noticeOptions.date}}</view>
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
			isBlack:{
				type:Boolean,
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.isblack{
		background: #22252A;
		color: #D9DADB;
	}
	.iswhite{
		color: #1A1A1A;
		background: #ffffff;
	}
	.item{
		height: 170rpx;
		width: 100%;
		border-bottom: 0.2rpx solid #F9FAFA;
		line-height: 100rpx;
		.notice_content{
			margin-left: 20rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			/*color: #1A1A1A;*/
		}
		.notice_time{
			margin-left: 20rpx;
			width: 300rpx;
			height: 40rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			/*color: #1A1A1A;*/
			line-height: 40rpx;
			opacity: 0.5;
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
