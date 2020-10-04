<template>
    <view class="index">
        <appHeader :headerOptions="headerOptions"></appHeader>
        <scroll-view class="record-wrap" :scroll-y="true" v-if="recordData_list.length > 0">
            <view class="record-wrap-list">
            <view
                    v-for="(item,index) in recordData_list"
                    :key="index">
                <record :recordData="item"></record>
            </view>
        </view>
        </scroll-view>
        <view class="setcenter" v-else>
            <view class="datacontent" >
                <image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
                <view class="item">{{$t('addRecord').noData}}</view>
            </view>
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
    .record-wrap {
        height: calc(100vh - var(--status-bar-height) - 100rpx);
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
        .datacontent{
            text-align: center;
            // padding-top: 384rpx;
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
</style>
