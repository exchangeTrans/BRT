<template>
	<view>
		<noticehead :headerOptions="headerOptions" class="headstyle"></noticehead>
		<scroll-view class="notice_list" scroll-y>
			<!-- <view class="item">
				<view class="notice_content">BRT关于调整USDT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view> -->
			<view v-for="(item,id) in notice_list" :key="item.id" @click="gonoticedetails(id)">
				<noticeitem :noticeOptions="item"></noticeitem>
			</view>
		</scroll-view>
	</view>
</template>

<script src="@/script/noticelist/noticelist.js">
	
</script>

<style lang="less">
	.headstyle{
		padding-top:calc(100rpx + var(--status-bar-height));
	}
	.notice_list{
		margin-top: 100rpx;
		padding-top:calc(100rpx + var(--status-bar-height));
		height: calc(100vh - 100rpx - var(--status-bar-height));
	}
</style>
