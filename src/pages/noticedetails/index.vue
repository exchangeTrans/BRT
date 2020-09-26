<template>
	<view>
		<ndheader :headerOptions="headerOptions" class="headstyle"></ndheader>
		<view class="notice_list">
			<view class="item">
				<view class="notice_content">{{details_msg_list[id].title}}</view>
				<view class="notice_time">{{details_msg_list[id].date}}</view>
			</view>
		</view>
		<scroll-view scroll-y class="notice_content_details">
			<view class="user">尊敬的BRT用户</view>
			<view class="article">
				{{details_msg_list[id].details}}
			</view>
			<view class="brt">BRT 实验室</view>
			<view class="date">{{details_msg_list[id].date}}</view>
		</scroll-view>
	</view>
</template>

<script src="@/script/noticedetails/noticedetails.js">
	
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	// .headstyle{
	// 	padding-top:calc(100rpx + var(--status-bar-height));
	// }
	.item{
		height: 170rpx;
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1rpx solid #F9FAFA;
		.notice_content{
			margin-left: 20rpx;
			// margin-top: 40rpx;
			margin-bottom: 20rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
			// margin-top: 40rpx;
			// margin-bottom: 10rpx;
			padding-top: 40rpx;
		}
		.notice_time{
			margin-left: 20rpx;
			// width: 74rpx;
			height: 40rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
			line-height: 40rpx;
			opacity: 0.5;
			// margin-top: 40rpx;
		}
	}
	.notice_list{
		// margin-top: 120rpx;
		padding-top:calc(100rpx + var(--status-bar-height));
	}
	.article{
		padding-top: 20rpx;
		padding-bottom: 30rpx;
		text-indent: 2em;
		font-size: 36rpx;
		width: 684rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Light, PingFang SC;
		font-weight: 300;
		color: #1A1A1A;
		line-height: 44rpx;
	}
	.notice_content_details{
		line-height: 80rpx;
		margin-left: 20rpx;
		width: 96%;
		height: calc(100vh - 300rpx);
		width: 534rpx;
		// height: 44rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #1A1A1A;
		line-height: 44rpx;
		.user{
			width: 244rpx;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Light, PingFang SC;
			font-weight: 300;
			color: #1A1A1A;
			line-height: 44rpx;
			padding-top: 30rpx;
		}
		.brt{
			width: 684rpx;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Light, PingFang SC;
			font-weight: 300;
			color: #1A1A1A;
			line-height: 44rpx;
			padding-bottom: 16rpx;
		}
		.date{
			width: 684rpx;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Light, PingFang SC;
			font-weight: 300;
			color: #1A1A1A;
			line-height: 44rpx;
		}
	}
</style>
