<template>
    <view class="personalInfo" id="personalInfo">
        <app-header :headerOptions="headerOptions" class="addHeader"></app-header>
        <view class="personalInfo-wrap">
            <view class="avatarBar">
                <view class="avatarBar-wrap">
                    <view class="avatarText">
                        {{$t('personInfo').avatarText}}
                    </view>
                    <view class="avatarWrap">
                        <view class="avatar">
                            <image :src="avatar"></image>
                        </view>
                        <view class="modify"
                              @tap="ChooseImage">
                            <image :src="modifyUrl"></image>
                        </view>
                    </view>
                </view>
            </view>
            <view class="nicknameBar">
                <view class="nicknameBar-wrap">
                    <view class="nicknameText">
                        {{$t('personInfo').nicknameText}}
                    </view>
                    <view class="nicknameWrap">
                        <input class="nickname"
                               :focus="nicknameInput"
                               :name="userMsgData.nickname"
                               @blur="nicknameMoveOut"
                               v-model="userMsgData.nickname"/>

                        <view class="modify"
                              @tap="nicknameClick">
                            <image :src="modifyUrl"></image>
                        </view>

                    </view>
                </view>
            </view>

            <view class="personalInfoBtn"
                  @tap="saveBtnClick">
                {{$t('personInfo').saveBtn}}
            </view>
        </view>


    </view>

</template>

<script src="@/script/user/personalInfo.js"></script>

<style lang="less">
    .personalInfo {
        width: 100%;
        height: 100%;
        background: #F8F8F8;

        .addHeader {
            top: var(--status-bar-height);
        }

        .personalInfo-wrap {
            padding-top: calc(100rpx + var(--status-bar-height));

            .avatarBar {
                width: 100%;
                height: 160rpx;
                background: #FFFFFF;
                box-shadow: 0rpx 2rpx 0rpx 0rpx #EDEDED;
                /*padding-top: 88rpx;*/
                /*position: relative;*/

                .avatarBar-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0 30rpx;
                    line-height: 160rpx;

                    .avatarText {
                        /*width: 20%;*/
                        /*margin: auto 0 auto 30rpx;*/
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #333333;
                        /*line-height: 44rpx;*/
                    }

                    .avatarWrap {
                        /*position: relative;*/
                        /*width: 80%;*/
                        /*height: 100%;*/
                        display: flex;
                        align-items: center;

                        .avatar {
                            width: 120rpx;
                            height: 120rpx;

                            /*background-size: 100% 100%;*/
                            /*!*position: absolute;*!*/
                            /*top: 50%;*/
                            /*transform: translateY(-50%);*/
                            /*right: 98rpx;*/

                            image {
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                            }
                        }

                        .modify {
                            margin-left: 40rpx;
                            /*position: absolute;*/
                            /*top: 50%;*/
                            /*transform: translateY(-50%);*/
                            /*right: 30rpx;*/
                            height: 120rpx;
                            width: 28rpx;
                            display: flex;
                            align-items: center;
                            /*background-size: 100% 100%;*/

                            image {
                                width: 28rpx;
                                height: 28rpx;
                            }
                        }
                    }
                }


            }

            .nicknameBar {
                width: 100%;
                height: 100rpx;
                background: #FFFFFF;
                box-shadow: 0rpx 2rpx 0rpx 0rpx #EDEDED;
                /*position: relative;*/

                .nicknameBar-wrap {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0 30rpx;

                    .nicknameText {
                        /*margin: auto 0 auto 30rpx;*/
                        /*width: 20%;*/
                        font-size: 32rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #333333;
                        line-height: 100rpx;
                    }

                    .nicknameWrap {
                        /*position: relative;*/
                        /*width: 80%;*/
                        height: 100%;
                        display: flex;


                        .nickname {
                            font-size: 32rpx;
                            height: 100rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #333333;
                            text-align: right;
                        }

                        .modify {
                            /*position: absolute;*/
                            /*top: 50%;*/
                            /*transform: translateY(-50%);*/
                            /*right: 30rpx;*/
                            display: flex;
                            align-items: center;
                            height: 100rpx;
                            margin-left: 98rpx;
                            width: 28rpx;

                            /*background-size: 100% 100%;*/

                            image {
                                width: 28rpx;
                                height: 28rpx;
                            }
                        }
                    }
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


    }

</style>
