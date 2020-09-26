<template>
	<view class="">
		<historyhead :headerOptions="headerOptions" class="headstyle"></historyhead>
		<scroll-view scroll-y="true" class="list" v-if="listOptions.length>0">
			<view v-for="(item,index) in listOptions" :key="index">
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
	// .headstyle{
	// 	padding-top: calc(100rpx + var(--status-bar-height));
	// }
	
	.list{
		width: 100%;
		height: calc(100vh); 
		background: #F8F8F8;
		padding-top: calc(120rpx + var(--status-bar-height));
		box-sizing: border-box;
	}
	// .item{
	// 	padding-top: calc(100rpx + var(--status-bar-height));
	// }
	.nologimg{
		padding-top: calc(100rpx + var(--status-bar-height));
		margin-top: 500rpx;
		text-align: center;
		.img{
			width: 530rpx;
			height: 400rpx;
		}
		.nologfont{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #000000;
			margin-top: 30rpx;
		}
	}
</style>
