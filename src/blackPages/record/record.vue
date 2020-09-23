<template>
    <view id="record">
        <app-header :headerOptions="headerOptions" @headertap=headertap class="headstyle"></app-header>
        <scroll-view class="record-wrap" :scroll-y="true" v-if="showdata">
            <view class="record-wrap-list">
                <view class="record-wrap-item" v-for="(item, index) in recordDataList"
                      :key="index">
                    <RecordItem :recordData="item"
                                :isBlack="isBlack"></RecordItem>
                </view>
            </view>
        </scroll-view>
		<view class="datacontent" v-if="nodata">
			<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
			<view class="item">暂无数据</view>
		</view>
    </view>
</template>

<script src="@/script/record/record.js"></script>

<style scoped lang="less">
    #record {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));

        .record-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            /*background-color: #F8F8F8;*/
			padding-top: calc(100rpx + var(--status-bar-height));

            .record-wrap-list {
                margin-top: 30rpx;
            }
        }
    }
	.headstyle{
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.record{
		background: #272A2E;
		width: 100%;
		height: calc(100vh);
		padding-top: 100rpx;
	}
	.datacontent{
		text-align: center;
		margin-top: 572rpx;
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
</style>