<template>
    <view class="personalInfo" id="personalInfo">
        <app-header :headerOptions="headerOptions"></app-header>
        <view class="headerOption">
        </view>
        <view class="avatarBar">
            <view class="avatarText">
                {{$t('personInfo').avatarText}}
            </view>
            <view class="avatar" :style="{'background-image': avatarUrl}">

            </view>
            <view class="modify" :style="{'background-image': modifyUrl}">

            </view>
        </view>
        <view class="nicknameBar">
            <view class="nicknameText">
                {{$t('personInfo').nicknameText}}
            </view>
            <view class="nickname">
                {{nickname}}
            </view>
            <view class="modify" :style="{'background-image': modifyUrl}">

            </view>
        </view>
        <view class="personalInfoBtn" @tap="saveBtnClick">
            {{$t('personInfo').saveBtn}}
        </view>
    </view>

</template>

<script src="@/script/user/personalInfo.js">
    // import appHeader from '@/components/common/header.vue'
    // export default {
    //     name: "personalInfo",
    //     components: {
    //         appHeader
    //     },
    //     data() {
    //         return {
    //             headerOptions: {
    //                 show: true,
    //                 isAllowReturn: true,
    //                 text: this.$t('personInfo').title,
    //                 isWhiteIcon: false,
    //                 rightItem: {
    //                     type: "text",
    //                     text: "",
    //                 },
    //                 bodyPadding: {"padding": '0,0,0,0'},
    //                 headerIsNoBoder: true,
    //             },
    //             nickname: "CS1997",
    //             avatarUrl: `url(${require('@/static/images/user/avatar.png')})`,
    //             modifyUrl: `url(${require('@/static/images/user/modifyIcon.png')})`,
    //         }
    //     },
    //     mounted() {
    //
    //     },
    //     methods: {
    //         saveBtnClick() {
    //
    //         }
    //     },
    // }
</script>

<style lang="less">
    .personalInfo {
        width: 100%;
        height: 100%;
        background: #F8F8F8;

        .avatarBar{
            width: 750rpx;
            height: 160rpx;
            background: #FFFFFF;
            box-shadow: 0rpx 2rpx 0rpx 0rpx #EDEDED;
            margin-top: 176rpx;
            position: relative;
            display: flex;
            .avatarText{
                margin: auto 0 auto 30rpx;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                line-height: 44rpx;
            }
            .avatar{
                width: 120rpx;
                height: 120rpx;
                background-size: 100% 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 98rpx;
                border-radius: 50%;
            }
            .modify{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 30rpx;
                width: 28rpx;
                height: 28rpx;
                background-size: 100% 100%;
            }

        }
        .nicknameBar{
            width: 750rpx;
            height: 100rpx;
            background: #FFFFFF;
            box-shadow: 0rpx 2rpx 0rpx 0rpx #EDEDED;
            position: relative;
            display: flex;
            .nicknameText{
                margin: auto 0 auto 30rpx;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                line-height: 100rpx;
            }
            .nickname{
                position: absolute;
                right: 98rpx;
                top: 50%;
                transform: translateY(-50%);

                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                line-height: 100rpx;
            }
            .modify{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 30rpx;
                width: 28rpx;
                height: 28rpx;
                background-size: 100% 100%;
            }
        }
        .personalInfoBtn {
            margin: 60rpx auto 0 auto;
            width: 710rpx;
            height: 100rpx;
            background: linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%);
            border-radius: 50rpx;

            text-align: center;
            font-size: 32rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 100rpx;

        }

    }

</style>
