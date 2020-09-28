<template>
	<view class="index">
		<appHeader :headerOptions="headerOptions"></appHeader>
<!--		<view class="item"></view>-->
		<scroll-view class="record-wrap" :scroll-y="true" v-if="recordData_list.length > 0">
		<view
			v-for="(item,index) in recordData_list"
			:key="index">
			<record :recordData="item"
					:isBlack="isBlack"></record>
		</view>
		</scroll-view>
		<view class="listcontent" v-else>
			<view class="datacontent">
				<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
				<view class="item">暂无数据</view>
			</view>
		</view>
	</view>
</template>

<script src="@/script/addrecord/addrecord.js">
</script>

<style lang="less">
	*{
		background: #272A2E;
	}
	.index {
		width: 100%;
		height: 100%;
		background: #F8F8F8;
	}
	.item{
		height: 30rpx;
		width: 100%;
		/*background: #22252A;*/
		margin-top: 42rpx;
	}
	.record-wrap{
		background: #22252A;
		height: calc(100vh - var(--status-bar-height) - 100rpx);
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.record{
		background: #272A2E;
		width: 100%;
		height: calc(100vh);
		padding-top: 100rpx;
	}
	.listcontent{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: calc(100vh - var(--status-bar-height));
		.datacontent{
			padding-top: calc(100rpx + var(--status-bar-height));
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
			color:#D9DADB;
			line-height: 40rpx;
			text-align: center;
		}
	}
</style>
