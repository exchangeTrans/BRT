<template>
    <view id="auth">
        <app-header :headerOptions="headerOptions"></app-header>
        <scroll-view class="auth-wrap" :scroll-y="true">
            <view class="auth-wrap-content">
                <view class="auth-status">
                    <view class="auth-status-text">
                        <span>{{$t('authL').authStatus}}</span>
                    </view>
                    <view class="auth-status-text">
                        <view class="await" v-if="authStatusData.kyc1==0">
                            <image :src="authStatusAwaitImg"></image>
                            <span class="blue">{{$t('authL').authAwait}}</span>
                        </view>
                        <view class="await" v-if="authStatusData.kyc1==1">
                            <image :src="authStatusAwaitImg"></image>
                            <span class="blue">{{$t('authL').realName}}</span>
                        </view>
                        <view class="check" v-else-if="authStatusData.kyc1==2">
                            <image :src="authStatusCheckImg"></image>
                            <span class="red">{{$t('authL').noRealName}}</span>
                        </view>
                        <view class="check" v-else-if="authStatusData.kyc1==3">
                            <image :src="authStatusCheckImg"></image>
                            <span class="red">{{$t('authL').notReviewed}}</span>
                        </view>
                    </view>
                </view>
                <view class="user-message">
                    <view class="user-name">
                        <span>{{$t('authL').realname}}</span>
                        <input type="text"
                               :placeholder="this.$t('authL').realnamePlaceholder"
                               v-model="authStatusData.cardName"
                               :disabled="authStatusData.disabled">
                    </view>
                    <view class="user-cardNumber">
                        <span>{{$t('authL').cardNumber}}</span>
                        <input type="number"
                               :placeholder="this.$t('authL').cardNumberPlaceholder"
                               v-model="authStatusData.cardNo"
                               :disabled="authStatusData.disabled">
                    </view>
                </view>
                <view class="unrealName"
                      v-if="authStatusData.kyc1 == 0 || authStatusData.kyc1 == 3">
                    <view class="upload-img">
                        <view class="upload-img-title">
                            <view class="upload-img-text">
                            <span>
                                {{$t('authL').uploadImgText}}
                            </span>
                            </view>
                            <view class="upload-img-btn"
                                  @tap="uplaodaImg">
                                <span>{{$t('authL').uploadImgBtn}}</span>
                            </view>
                        </view>
                        <view class="upload-img-content">
                            <image v-if="filePath === ''"
                                   :src="example"></image>
                            <image v-else :src="filePath"></image>
                        </view>

                    </view>
                    <view class="button"
                          @tap="commitAuth">
                        <span>{{$t('authL').button}}</span>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/auth/auth.js"></script>

<style scoped lang="less">
    #auth {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));

        .auth-wrap {
            box-sizing: border-box;
            width: 100%;
            height: calc(100vh - var(--status-bar-height) - 100rpx);
            background: #F8F8F8;

            .auth-wrap-content {
                width: 100%;

                .auth-status {
                    background: #fff;
                    width: 690rpx;
                    margin: 30rpx auto 0;
                    height: 120rpx;
                    box-sizing: border-box;
                    padding: 0 30rpx;
                    display: flex;
                    justify-content: space-between;

                    .auth-status-text {
                        height: 100%;
                        /*display: flex;
                        align-items: center;*/

                        span {
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                            line-height: 120rpx;
                        }

                        .check, .await {
                            display: flex;
                            align-items: center;

                            span {
                                font-size: 28rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #1A1A1A;
                                line-height: 120rpx;
                            }

                            image {
                                width: 30rpx;
                                height: 36rpx;
                                margin-right: 16rpx;

                            }

                            .blue {
                                color: #098FE0 !important;
                            }

                            .red {
                                color: #FC3C5A !important;
                            }
                        }
                    }
                }

                .user-message {
                    background: #fff;
                    width: 690rpx;
                    margin: 30rpx auto 0;
                    height: 240rpx;
                    box-sizing: border-box;


                    .user-name {
                        position: relative;
                        height: 120rpx;

                        span {
                            position: absolute;
                            top: 42rpx;
                            left: 30rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }

                        input {
                            height: 100%;
                            line-height: 120rpx;
                            padding-left: 162rpx;
                            width: 100%;
                            box-sizing: border-box;
                        }
                    }

                    .user-cardNumber {
                        position: relative;
                        height: 120rpx;

                        span {
                            position: absolute;
                            top: 42rpx;
                            left: 30rpx;
                            font-size: 28rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #1A1A1A;
                        }

                        input {
                            height: 100%;
                            line-height: 120rpx;
                            padding-left: 162rpx;
                            width: 100%;
                            box-sizing: border-box;
                        }
                    }
                }

                .unrealName {
                    .upload-img {
                        background: #fff;
                        width: 690rpx;
                        margin: 30rpx auto 0;
                        height: 690rpx;
                        box-sizing: border-box;
                        padding: 42rpx 30rpx;

                        .upload-img-title {

                            .upload-img-text {

                                span {
                                    font-size: 28rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #1A1A1A;
                                }
                            }

                            .upload-img-btn {
                                width: 184rpx;
                                height: 72rpx;
                                background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                                border-radius: 36rpx;
                                margin: 20rpx auto 0;
                                text-align: center;

                                span {
                                    font-size: 28rpx;
                                    font-family: PingFangSC-, PingFang SC;
                                    font-weight: normal;
                                    color: #FFFFFF;
                                    line-height: 72rpx;
                                    /*text-align: center;*/
                                }
                            }
                        }

                        .upload-img-content {
                            margin-top: 30rpx;
                            border-radius: 10rpx;

                            image {
                                width: 628rpx;
                                height: 400rpx;
                                border-radius: 10rpx;
                            }
                        }
                    }

                    .button {
                        /*background: #fff;*/
                        width: 690rpx;
                        margin: 40rpx auto 156rpx;
                        height: 100rpx;
                        box-sizing: border-box;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                        border-radius: 50px;
                        text-align: center;

                        span {
                            font-size: 32rpx;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 100rpx;
                        }
                    }
                }
            }
        }
    }
</style>