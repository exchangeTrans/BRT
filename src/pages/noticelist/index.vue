<template>
	<view>
		<noticehead :headerOptions="headerOptions" class="headstyle"></noticehead>
		<scroll-view class="notice_list" scroll-y v-if="notice_list.length>0">
			<view v-for="(item,id) in notice_list" :key="item.id" @click="gonoticedetails(id)">
				<noticeitem :noticeOptions="item"></noticeitem>
			</view>
		</scroll-view>
		<view class="datacontent" v-else>
			<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
			<view class="item">暂无数据</view>
		</view>
	</view>
</template>

<script src="@/script/noticelist/noticelist.js">

</script>

<style lang="less">
	.headstyle{
		padding-top:calc(var(--status-bar-height));
	}
	.notice_list{
		padding-top:calc(100rpx + var(--status-bar-height));
		height: calc(100vh - 100rpx - var(--status-bar-height));
		box-sizing: border-box;
	}
	.datacontent{
		text-align: center;
		padding-top: 384rpx;
	}
	.img{
		width: 530rpx;
		height: 400rpx;
	}
	.item{
		width: 100%;
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #000000;
		line-height: 40rpx;
		text-align: center;
	    opacity: 0.5;
	}
</style>
