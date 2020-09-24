<template>
    <view class="index">
        <appHeader :headerOptions="headerOptions"></appHeader>
<!--        <view class="item"></view>-->
        <scroll-view class="record-wrap" :scroll-y="true" v-if="recordData_list.length > 0">
            <view
                    v-for="(item,index) in recordData_list"
                    :key="index">
                <record :recordData="item"></record>
            </view>
        </scroll-view>
		<view class="datacontent" v-else>
			<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
			<view class="item">暂无数据</view>
		</view>
    </view>
</template>

<script src="@/script/addrecord/addrecord.js">

</script>

<style lang="less">
    .index {
        width: 100%;
        height: 100%;
        background: #F8F8F8;
    }
    .item {
        height: 30rpx;
        width: 100%;
        background: #F8F8F8;
        margin-top: 90rpx;
    }
    .record-wrap {
        height: calc(100vh - var(--status-bar-height) - 100rpx);
		padding-top: calc(100rpx + var(--status-bar-height));
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
	}
</style>
