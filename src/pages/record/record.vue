<template>
    <view id="record">
        <app-header :headerOptions="headerOptions" @headertap='headertap' ></app-header>
        <scroll-view class="record-wrap" :scroll-y="true" v-if="recordDataList.length > 0">
            <view class="record-wrap-list">
                <view class="record-wrap-item" v-for="(item, index) in recordDataList"
                      :key="index">
                    <RecordItem :recordData="item"></RecordItem>
                </view>

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

<script src="@/script/record/record.js"></script>

<style scoped lang="less">
	.headstyle{
		padding-top: calc( var(--status-bar-height));
	}
    #record {
        width: 100%;
        height: 100%;
        padding-top: calc(100rpx + var(--status-bar-height));

        .record-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            background-color: #F8F8F8;
			padding-top: calc(100rpx + var(--status-bar-height));
            .record-wrap-list {
                margin-top: 30rpx !important;
            }
        }
        .setcenter{
            display: flex;
            align-items: center;
            justify-content: center;
            height: calc(100vh - 100rpx - var(--status-bar-height));
            margin-top: -100rpx;
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
                    margin-right:auto
                }
            }
        }
    }
</style>
