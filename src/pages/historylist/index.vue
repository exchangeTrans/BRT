<template>
	<view class="" id="historylist">
		<historyhead :headerOptions="headerOptions" class="headstyle"></historyhead>
		<scroll-view scroll-y="true" class="list" v-if="showdata">
			<view v-for="(item,id) in listOptions" :key="item.id" class="historylist">
				<historylist :listOptions="item" class="historylist-item"></historylist>
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

<style lang="less" scoped>
	#historylist{
		.list{
			width: 100%;
			height: calc(100vh - var(--status-bar-height) - 100rpx); 
			background: #F8F8F8;
			padding-top: 135rpx;
			padding-top: calc(100rpx + var(--status-bar-height));
	.list{
		width: 100%;
		height: calc(100vh); 
		background: #F8F8F8;
		padding-top: calc(120rpx + var(--status-bar-height));
		box-sizing: border-box;
	}
	.nologimg{
		padding-top: calc(100rpx + var(--status-bar-height));
		margin-top: 500rpx;
		text-align: center;
		.img{
			width: 530rpx;
			height: 400rpx;
		}
		.historylist{
			// height: 220rpx;
			// width: 100%;
			// padding-top: calc(100rpx + var(--status-bar-height));
			.historylist-item{
				// padding-top: calc(100rpx + var(--status-bar-height));
			}
		}
		// .historylist{
		// 	// height: 220rpx;
		// 	// width: 100%;
		// 	// padding-top: calc(100rpx + var(--status-bar-height));
		// 	.historylist-item{
		// 		// padding-top: calc(100rpx + var(--status-bar-height));
		// 	}
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
				text-align: center;
			}
		}
	}}}
</style>
