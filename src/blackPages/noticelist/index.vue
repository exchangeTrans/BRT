<template>
	<view>
		<noticedheader :headerOptions="headerOptions" class="headstyle"></noticedheader>
		<scroll-view class="notice_list" scroll-y>
			<view v-for="(item,id) in notice_list" :key="id" @click="gonoticedetails">
				<noticeitem :noticeOptions="item"></noticeitem>
			</view>
		</scroll-view>
	</view>
</template>

<script src="@/script/noticelist/noticelist.js">
	
</script>

<style lang="less">
	*{
		background: #272A2E;
	}
	.headstyle{
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.notice_list{
		margin-top: 100rpx;
		height: calc(100vh - 100rpx - var(--status-bar-height));
		padding-top: calc(100rpx + var(--status-bar-height));
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
