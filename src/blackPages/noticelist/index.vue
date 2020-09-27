<template>
	<view class="noticelist">
		<noticehead :headerOptions="headerOptions" ></noticehead>
		<scroll-view class="notice_list" scroll-y v-if="notice_list.length>0">
			<view v-for="(item,id) in notice_list" :key="item.id" @click="gonoticedetails(id)">
				<noticeitem :noticeOptions="item" class="noticeitem" :isBlack="true"></noticeitem>
			</view>
		</scroll-view>
		<view class="setcenter" v-else>
			<view class="datacontent" >
				<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
				<view class="item">暂无数据</view>
			</view>
		</view>
	</view>
</template>

<script src="@/script/noticelist/noticelist.js">

</script>

<style lang="less">
	.noticelist{
		background: #272A2E;
		height: 100vh;
	}
	.headstyle{
		padding-top:calc(var(--status-bar-height));
	}
	.notice_list{
		/*background: #272A2E;*/
		padding-top:calc(100rpx + var(--status-bar-height));
		height: calc(100vh - var(--status-bar-height));
		box-sizing: border-box;
	}
	.setcenter{
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 100rpx - var(--status-bar-height));
		background: #272A2E;
		.datacontent{
			text-align: center;
			vertical-align: middle;
			.img{
				width: 530rpx;
				height: 400rpx;
				margin-left:auto;
				margin-right:auto
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
				margin-left:auto;
				margin-right:auto;
				color: #D9DADB;
			}
		}
	}

</style>
