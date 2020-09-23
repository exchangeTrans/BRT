<template>
	<view>
		<ndheader :headerOptions="headerOptions" class="headstyle"></ndheader>
		<view class="notice_list">
			<view class="item">
				<view class="notice_content">{{details_msg_list[id].title}}</view>
				<view class="notice_time">2020-9-16 16:38</view>
			</view>
		</view>
		<scroll-view scroll-y class="notice_content_details">
			<view>尊敬的BRT用户</view>
			<view class="article">
				{{details_msg_list[id].details}}
			</view>
			<view>{{details_msg_list[id].date}}</view>
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
	.headstyle{
		padding-top:calc(100rpx + var(--status-bar-height));
	}
	.item{
		height: 150rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
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
			color: #CCCCCC;
		}
	}
	.notice_list{
		margin-top: 120rpx;
		padding-top:calc(100rpx + var(--status-bar-height));
	}
	.article{
		text-indent: 2em;
		margin-bottom: 40rpx;
		line-height: 50rpx;
		font-size: 36rpx;
	}
	.notice_content_details{
		line-height: 80rpx;
		font-size: 37rpx;
		margin-left: 20rpx;
		width: 96%;
		height: calc(100vh - 300rpx);
		padding-top:calc(100rpx + var(--status-bar-height));
	}
</style>
