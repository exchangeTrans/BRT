<template>
	<view class="" id="historylist">
		<historyhead :headerOptions="headerOptions"></historyhead>
		<scroll-view scroll-y="true" class="list" v-if="listOptions.length>0">
			<view v-for="(item,index) in listOptions" :key="index" class="historylist">
				<historylist :listOptions="item" class="historylist-item"></historylist>
			</view>
		</scroll-view>
		<view class="setcenter" v-else>
			<view class="nologimg">
				<image src="../../static/images/nohistorylog/nohistorylog.png" mode="" class="img"></image>
				<view class="nologfont">{{$t('noData')}}</view>
			</view>
		</view>
	</view>
</template>

<script src="@/script/historylist/historylist.js">
	
</script>

<style lang="less" scoped>
	#historylist{
		.list {
			width: 100%;
			height: calc(100vh);
			background: #F8F8F8;
			padding-top: calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;
			.historylist{
				// height: 220rpx;
				// width: 100%;
				// padding-top: calc(100rpx + var(--status-bar-height));
				.historylist-item{
					// padding-top: calc(100rpx + var(--status-bar-height));
				}
			}
		}

		.setcenter{
			display: flex;
			align-items: center;
			justify-content: center;
			height: calc(100vh - 100rpx - var(--status-bar-height));
			.nologimg{
				padding-top: calc(100rpx + var(--status-bar-height));
				/*margin-top: 500rpx;*/
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
		}
	}
</style>
