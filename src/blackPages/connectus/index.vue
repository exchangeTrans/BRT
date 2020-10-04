<template>
    <view class="connectus">
        <appheader :headerOptions="headerOptions"></appheader>
        <view class="aboutbrt">
            <view class="head">{{$t('connectUs').aboutText}}</view>
            <view class="content">
                {{$t('connectUs').content}}
            </view>
        </view>
        <view class="relation">
            <view class="relationus">{{$t('connectUs').connectUsText}}</view>
            <view class="main">
                <view class="email">{{emailadress}}</view>
                <image src="../../static/images/connectus/email.png" mode="" class="img" @click="copymsg"></image>
            </view>
        </view>
    </view>
</template>

<script src="@/script/connectus/connectus.js">

</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
        background: #22252A;
    }
    .connectus{
        width: 100%;
        height: 100%;
    }
    .aboutbrt{
        width: 690rpx;
        height: 296rpx;
        margin-left: 30rpx;
        padding-top: calc(100rpx + var(--status-bar-height));
        z-index: -1;
        background: #272A2E;
        .head{
            margin-left: 30rpx;
            margin-top: 30rpx;
            margin-bottom: 14rpx;
            width: 100%;
            height: 44rpx;
            font-size: 32rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #D9DADB;
            line-height: 44rpx;
            background: #272A2E;
        }
        .content{
            width: 628rpx;
            height: 170rpx;
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #D9DADB;
            line-height: 40rpx;
            vertical-align: text-top;
            letter-spacing: -0.81rpx;
            margin-left: 30rpx;
            background: #272A2E;
        }
    }
    .relation{
        height: 170rpx;
        width: 690rpx;
        margin-left: 30rpx;
        margin-top: 20.01rpx;
        background: #272A2E;
        .relationus{
            font-size: 32rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #D9DADB;
            line-height: 44rpx;
            background: #272A2E;
            margin-left: 30rpx;
            padding-top: 32rpx;
        }
        .main{
            background: #272A2E;
            .email{
                font-size: 28rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #D9DADB;
                line-height: 40rpx;
                background: #272A2E;
                margin-left: 30rpx;
                margin-top: 20rpx;
                float: left;
                /*width: 90%;*/
            }
            .img{
                width: 27.96rpx;
                height: 27.96rpx;
                float: right;
                margin-right: 32rpx;
                background: #272A2E;
                margin-top: 26rpx;
            }
        }
    }

</style>
