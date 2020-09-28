 <template>
    <view id="user">
        <scroll-view class="user-wrap" :scroll-y="true">
            <view class="bgimg">
                <image :src="backgroundImage"></image>
            </view>
            <view class="user-wrap-content">
                <view class="user-wrap-container">
                    <view class="user-wrap-userMassage" @tap="toPage('user/personalInfo')">
                        <view class="user-wrap-headerImg">
                            <view class="img">
                                <image :src="homeMsgData.avatar===''?headerImg:homeMsgData.avatar"></image>
                            </view>
                        </view>
                        <view class="userMassage">
                            <span class="name">{{homeMsgData.nickname}}</span>
                            <span class="id">ID:{{homeMsgData.inviteCode}}</span>
                            <!--<span class="signature">
                                个性签名：Ta很懒，什么也没说
                            </span>-->
                        </view>
                        <view class="icon">
                            <image :src="headerImgRight"></image>
                        </view>
                    </view>
                    <view class="user-wrap-asset" :style="{'backgroundImage':assetBackgroundImage}">
                        <view class="user-wrap-asset-container">
                            <view class="asset-massage">
                                <view class="my-asset">
                                    <view class="icon">
                                        <image :src="wallet"></image>
                                    </view>
                                    <span>总资产</span>
                                </view>
                                <view class="valuation">
                                    <!--<view class="icon">
                                        <image :src="eyesIcon"></image>
                                    </view>-->
                                    <!--<span>总资产估值</span>-->
                                    <view class="balance">
                                        <span>{{homeMsgData.asset}} {{changeMoneyData.firstCode}}≈{{changeMoneyData.price}} {{changeMoneyData.lastCode}}</span>
                                    </view>
                                </view>

                            </view>
                            <!--<view class="asset-btn">
                                <view class="recharge">
                                    <view class="icon"></view>
                                    <span>充值</span>
                                </view>
                                <view class="reflect">
                                    <view class="icon"></view>
                                    <span>提币</span>
                                </view>
                            </view>-->
                        </view>
                    </view>
                    <view class="user-wrap-list">
                        <view class="set">
                            <view class="user-wrap-list-item"
                                  v-for="(item, index) in listItemData"
                                  :key="index"
                                  @tap="toPage(item.path)">
                                <view class="icon">
                                    <image :src="item.img"></image>
                                </view>
                                <view class="itemType">{{item.name}}</view>
                                <view class="icon iconRight">
                                    <image :src="rightIcon"></image>
                                </view>
                                <view class="clearfix"></view>
                            </view>
                        </view>
                        <view class="about">
                            <view class="user-wrap-list-item"
                                  v-for="(item, index) in aboutItemData"
                                  :key="index"
                                  @tap="toPage(item.path)">
                                <view class="icon">
                                    <image :src="item.img"></image>
                                </view>
                                <view class="itemType">{{item.name}}</view>
                                <view class="icon iconRight" >
                                    <image :src="rightIcon" v-if="!item.isNoImg"></image>
                                </view>
                                <view class="urlText">
                                    <span>{{item.url}}</span>
                                </view>
                                <view class="clearfix"></view>
                            </view>
                        </view>
                    </view>
                    <view class="user-wrap-btn">
                        <Btn :btnText="btnText"
                             fontColor="rgba(217, 218, 219, 0.5)"
                             backgroundColor="#272A2E"
                             width="690rpx"
                             @btnClick="btnClick"
                             borderRadius="20rpx"></Btn>
                    </view>
                </view>

            </view>
        </scroll-view>
        <pageFooter/>
    </view>
</template>

<script src="@/script/user/user.js"></script>

<style scoped lang="less">
    #user {
        width: 100vw;
        height: 100vh;
        /*position: relative;*/
        /*padding-top: calc(100rpx + var(--status-bar-height));*/

        .user-wrap {
            width: 100%;
            height: calc(100vh - var(--status-bar-height));
            background: #22252A;
            position: relative;

            .bgimg {
                position: absolute;
                z-index: 1;

                image {
                    width: 750rpx;
                    height: 660rpx;
                }
            }

            .user-wrap-content {
                position: absolute;
                z-index: 2;
                box-sizing: border-box;
                width: 100%;
                /*height: 100%;*/
                margin: 0 auto;
                padding-top: calc(20rpx + var(--status-bar-height));

                .user-wrap-container {
                    width: 690rpx;
                    margin: 0 auto;

                    .user-wrap-userMassage {
                        padding-bottom: 30rpx;
                        /*height: 140rpx;*/
                        display: flex;
                        align-items: center;
                        position: relative;
                        box-sizing: border-box;

                        .user-wrap-headerImg {
                            .img {
                                width: 136rpx;
                                height: 136rpx;
                                background: #000;
                                border-radius: 50%;

                                image {
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 50%;
                                    display: block;
                                }
                            }
                        }

                        .userMassage {
                            margin-left: 20rpx;

                            span {
                                display: block;
                                font-size: 24rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.5);
                                margin-top: 4rpx;
                            }

                            .name {
                                font-size: 36rpx;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #FFFFFF;
                            }

                            .id {
                            }

                            .signature {
                            }
                        }

                        .icon {
                            /*justify-self: end;*/
                            /*margin-left: 140rpx;*/
                            position: absolute;
                            right: 0;
                            /*top: 80rpx;*/
                            float: right;
                            width: 48rpx;
                            height: 48rpx;
                            /*background: #D8D8D8;*/
                            border-radius: 5rpx;

                            image {
                                width: 100%;
                                height: 100%;
                                display: block;
                            }
                        }

                    }

                    .user-wrap-asset {
                        width: 690rpx;
                        height: 166rpx;
                        border-radius: 16rpx;
                        background-repeat: no-repeat;
                        background-size: cover;

                        .user-wrap-asset-container {
                            padding: 30rpx;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .asset-massage {
                                .my-asset {
                                    display: flex;
                                    align-items: center;

                                    .icon {
                                        width: 36rpx;
                                        height: 36rpx;
                                        /*background: #D8D8D8;*/
                                        border-radius: 5rpx;

                                        image {
                                            width: 100%;
                                            height: 100%;
                                            display: block;
                                        }
                                    }

                                    span {
                                        line-height: 36rpx;
                                        font-size: 28rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: rgba(255, 255, 255, 0.5);
                                        margin-left: 16rpx;
                                    }

                                }

                                .valuation {
                                    display: flex;
                                    align-items: center;
                                    margin-top: 24rpx;

                                    span {
                                        font-size: 24rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: rgba(255, 255, 255, 0.5);
                                        /*margin-left: 16rpx;*/
                                    }

                                    .icon {
                                        width: 36rpx;
                                        height: 24rpx;
                                        /*background: #D8D8D8;*/

                                        image {
                                            width: 100%;
                                            height: 100%;
                                            display: block;
                                        }
                                    }
                                }

                                .balance {
                                    /*margin-top: 20rpx;*/

                                    span {
                                        font-size: 36rpx;
                                        font-family: PingFangSC-Medium, PingFang SC;
                                        font-weight: 500;
                                        color: #FFFFFF;
                                    }

                                }
                            }

                            .asset-btn {
                                height: 110rpx;
                                display: flex;

                                .recharge, .reflect {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;

                                    .icon {
                                        width: 64rpx;
                                        height: 64rpx;
                                        background: #D8D8D8;
                                        border-radius: 5rpx;
                                    }

                                    span {
                                        font-size: 24rpx;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #FFFFFF;
                                        margin-top: 4rpx;
                                    }
                                }

                                .recharge {
                                    padding-right: 40rpx;
                                }

                                .reflect {
                                    padding-left: 40rpx;
                                    border-left: 2rpx solid rgba(255, 255, 255, 0.2);
                                }

                            }
                        }

                    }

                    .user-wrap-list {
                        margin-top: 20rpx;
                        /*border-radius: 16rpx;*/
                        /*background: #fff;*/
                        box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
                        box-sizing: border-box;

                        .set {
                            border-radius: 16rpx;
                        }

                        .about {
                            margin-top: 20rpx;
                            border-radius: 16rpx;
                        }


                        .user-wrap-list-item {
                            padding: 0 20rpx;
                            width: 690rpx;
                            height: 100rpx;
                            background: #272A2E;
                            border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);
                            box-sizing: border-box;

                            .icon {
                                width: 48rpx;
                                height: 48rpx;
                                /*background: #D8D8D8;*/
                                border-radius: 6rpx;
                                float: left;
                                margin: 26rpx 0 0 0;

                                image {
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                }
                            }

                            .itemType {
                                float: left;
                                font-size: 32rpx;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #D9DADB;
                                line-height: 100rpx;
                                margin-left: 20rpx;
                            }

                            .iconRight {
                                float: right;
                                width: 48rpx;
                                height: 48rpx;

                                image {
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                }
                            }

                            .urlText {
                                max-width: 260rpx;
                                float: right;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                                color: #098FE0;

                                span {
                                    font-size: 24rpx;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #098FE0;
                                    line-height: 100rpx;
                                }
                            }
                        }

                        .user-wrap-list-item:first-child {
                            border-radius: 16rpx 16rpx 0rpx 0rpx;
                        }

                        .user-wrap-list-item:last-child {
                            border-radius: 0rpx 0rpx 16rpx 16rpx;
                        }
                    }

                    .user-wrap-btn {
                        width: 690rpx;
                        box-sizing: border-box;
                        margin-top: 40rpx;
                        margin-bottom:116rpx;
                    }
                }


            }
        }
    }
</style>
