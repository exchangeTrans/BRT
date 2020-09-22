<template>
    <view id="record">
        <app-header :headerOptions="headerOptions" @headertap=headertap></app-header>
        <scroll-view class="record-wrap" :scroll-y="true">
            <view class="record-wrap-list">
                <view class="record-wrap-item" v-for="(item, index) in recordDataList"
                      :key="index">
                    <RecordItem :recordData="item"></RecordItem>
                </view>

            </view>

        </scroll-view>
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
            background-color: #F8F8F8;

            .record-wrap-list {
                margin-top: 30rpx !important;
            }
        }
    }
</style>