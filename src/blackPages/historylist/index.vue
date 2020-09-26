<template>
	<view class="">
		<historyhead :headerOptions="headerOptions" class="headstyle"></historyhead>
		<scroll-view scroll-y="true" class="list" v-if="listOptions.length>0">
			<view v-for="(item,id) in listOptions" :key="item.id">
				<historylist :listOptions="item" class="item"></historylist>
			</view>
		</scroll-view>
		<view class="nologimg" v-if="listOptions.length===0">
			<image src="../../static/images/nohistorylog/nohistorylog.png" mode="" class="img"></image>
			<view class="nologfont">暂无数据</view>
		</view> 
	</view>
</template>

<script src="@/script/historylist/historylist.js">
	
</script>
<style lang="less">
	.list{
		width: 100%;
		height: calc(100vh); 
		background: #22252A;
		padding-top: calc(120rpx + var(--status-bar-height));
		box-sizing: border-box;
	}
	.nologimg{
		// margin-top: 500rpx;
		text-align: center;
		background: #22252A;
		height: calc(100vh - var(--status-bar-height));
		.img{
			width: 530rpx;
			height: 400rpx;
			margin-top: 500rpx;
		}
		.nologfont{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #D9DADB;
			margin-top: 30rpx;
		}
	}
</style>
