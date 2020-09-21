<template>
    <view class="promoteBonus" id="promoteBonus">
        <appHead :headerOptions="headerOptions"></appHead>
        <view class="promoteBonusWrap">
            <view class="contentWrap">
                <view class="userInfo">
                    <view class="avatar" :style="{'background-image': avatarUrl}">

                    </view>
                    <view class="nicknameInfo">
                        <view class="nickname">
                            {{nickname}}
                        </view>
                        <view class="nicknameId">
                            ID:{{id}}
                        </view>

                    </view>
                    <view class="vipInfo">
                        <view class="vipBack">

                        </view>
                        <view class="vipPre">
                            <view class="vipIcon">

                            </view>
                            <view class="vipLevel">
                                {{vipLevel}}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="bonusInfo">
                    <view class="bonusTotal">
                        <view class="bonusTotalText">
                            {{$t('promoteBonus').bonusTotal}}
                        </view>
                        <view class="bonusTotalNums">
                            {{bonusTotalNums}}
                        </view>
                    </view>
                    <view class="bonusNow">
                        <view class="bonusNowText">
                            {{$t('promoteBonus').bonusNow}}
                        </view>
                        <view class="bonusNowNums">
                            {{bonusNowNums}}
                        </view>
                    </view>
                    <view class="bonusLastDay">
                        <view class="bonusLastDayText">
                            {{$t('promoteBonus').bonusLastDay}}
                        </view>
                        <view class="bonusLastDayNums">
                            {{bonusLastDayNums}}
                        </view>
                    </view>
                </view>
            </view>
            <view class="inviteBonusRecord">
                <view class="inviteBonusRecordIcon" :style="{'background-image': inviteBonusRecordIcon}"></view>
                <view class="inviteBonusRecordText">{{$t('promoteBonus').inviteBonusRecords}}</view>
            </view>
            <view class="noDataBox" v-if="earningsRecordData.length===0">
                <noData></noData>
            </view>
            <earningsRecordList v-else
                                :earningsRecordData="earningsRecordData">
            </earningsRecordList>
        </view>
    </view>

</template>

<script src="@/script/bonus/promoteBonus.js">

</script>

<style lang="less">
    .promoteBonus {
        .promoteBonusWrap {
            width: 100%;
            height: 100%;
            background: #F9FAFA;

            .contentWrap {
                width: 750rpx;
                height: 506rpx;
                background: linear-gradient(141deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%);
                border-radius: 0rpx 0rpx 44rpx 44rpx;

                .userInfo {
                    padding-top: 194rpx;
                    width: 100%;
                    height: 118rpx;
                    display: flex;

                    .avatar {
                        margin-left: 40rpx;
                        width: 118rpx;
                        height: 118rpx;
                        background-size: 100% 100%;
                    }

                    .nicknameInfo {
                        margin-left: 24rpx;
                        width: 426rpx;

                        .nickname {
                            margin: 10rpx 30rpx 8rpx 24rpx;
                            height: 50rpx;
                            font-size: 36rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FFFFFF;
                            line-height: 50rpx;
                        }

                        .nicknameId {
                            opacity: 0.6;
                            margin: 0 30rpx 10rpx 24rpx;
                            height: 40rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 40rpx;
                        }
                    }

                    .vipInfo {
                        position: relative;
                        width: 116rpx;
                        height: 118rpx;
                        margin-left: 6rpx;

                        .vipBack {
                            position: absolute;
                            top: 12rpx;

                            width: 116rpx;
                            height: 48rpx;
                            background: #FFFFFF;
                            border-radius: 24rpx;
                            opacity: 0.89;
                        }

                        .vipPre {
                            width: 116rpx;
                            height: 48rpx;
                            z-index: 1;
                            position: absolute;
                            top: 12rpx;
                            display: flex;

                            .vipIcon {
                                position: absolute;
                                left: 20rpx;
                                top: 6rpx;

                                width: 40rpx;
                                height: 32rpx;
                                background: linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%);
                            }

                            .vipLevel {
                                position: absolute;
                                right: 26rpx;

                                height: 40rpx;
                                font-size: 28rpx;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #098FE0;
                                line-height: 48rpx;

                            }
                        }

                    }
                }

                .bonusInfo {
                    width: 100%;
                    height: 92rpx;
                    margin: 42rpx auto 0 auto;
                    position: relative;
                    display: flex;
                    .bonusTotal {
                        width: 222rpx;
                        height: 92rpx;
                        margin-left: 40rpx;
                        .bonusTotalText {
                            width: 100%;
                            height: 40rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 40rpx;
                            text-align: center;
                            opacity: 0.8;
                        }
                        .bonusTotalNums {
                            text-align: center;
                            margin-top: 8rpx;
                            width: 100%;
                            height: 44rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FFFFFF;
                            line-height: 44rpx;
                        }
                    }

                    .bonusNow {
                        width: 222rpx;
                        height: 92rpx;
                        .bonusNowText {
                            width: 100%;
                            height: 40rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 40rpx;
                            text-align: center;
                            opacity: 0.8;
                        }
                        .bonusNowNums {
                            width: 100%;
                            height: 44rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FFFFFF;
                            line-height: 44rpx;
                            text-align: center;
                            margin-top: 8rpx;
                        }
                    }
                    .bonusLastDay {
                        width: 222rpx;
                        height: 92rpx;
                        .bonusLastDayText {
                            width: 100%;
                            height: 40rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 40rpx;
                            text-align: center;
                            opacity: 0.8;
                        }
                        .bonusLastDayNums {
                            width: 100%;
                            height: 44rpx;
                            font-size: 32rpx;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FFFFFF;
                            line-height: 44rpx;
                            margin-top: 8rpx;
                            text-align: center;
                        }
                    }
                }

            }
            .inviteBonusRecord {
                position: relative;
                display: flex;
                margin-top: 44rpx;
                height: 50rpx;
                width: 100%;
                .inviteBonusRecordIcon {
                    margin: 8rpx 0 10rpx 24rpx;
                    width: 32rpx;
                    height: 32rpx;
                    background-size: 100% 100%;

                }
                .inviteBonusRecordText {
                    height: 50rpx;
                    font-size: 36rpx;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #262626;
                    line-height: 50rpx;

                }
            }

            .noData {
                position: relative;
            }
        }
    }

</style>
