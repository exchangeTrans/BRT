<template>
    <view class="setIndex1" id="setIndex1">
        <app-header :headerOptions="headerOptions"
                    class="appHeader"></app-header>

        <view class="content">
            <view class="model">
                <view class="modelText">
                    <view class="line" :style="{'background-image':'url('+titleLine+')'}"></view>
                    {{$t('setting').modelText}}
                </view>
                <view class="chooseModel">
                    <view :class="modelFlag==='day'?'chooseItem active':'chooseItem'"
                          @tap="chooseModel('day')">{{$t('setting').day}}
                    </view>
                    <view :class="modelFlag==='night'?'chooseItem active night':'chooseItem night'"
                          @tap="chooseModel('night')">{{$t('setting').night}}
                    </view>
                </view>
                <view class="clearfix"></view>
            </view>

            <view class="currency">
                <view class="currencyTitle">
                    <view class="line" :style="{'background-image':'url('+titleLine+')'}"></view>
                    {{$t('setting').showCurrency}}
                </view>

            </view>

            <view class="currencyItem"
                  v-for="(item,index) in currencyData"
                  :key="index"
                  @tap="chooseCurrencyData(item)">
                <view class="currencyIcon"
                      :style="{'background-image':'url('+item.img+')'}"></view>
                <view class="currencyText">{{$t('currency')[item.code]}}（{{item.code}}）</view>
                <view class="selected"
                      :style="{'background-image':'url('+selectedIcon+')'}"
                      v-if="selectedObj.name===item.name">
                </view>
            </view>

            <view class="currency">
                <view class="currencyTitle">
                    <view class="line" :style="{'background-image':'url('+titleLine+')'}"></view>
                    {{$t('setting').showLang}}
                </view>

            </view>

            <chooseLanguage @chooseItem="chooseLanguage"></chooseLanguage>

            <view class="confirmBtn">
                <btn :background="background"
                    :btnText="btnText"
                     :borderRadius="borderRadius"
                     @btnClick="btnClick"></btn>
            </view>


        </view>


    </view>
</template>

<script src="@/script/set/set.js"></script>

<style lang="less">
    .setIndex1 {
        width: 100%;
        height: 100%;
        background: #fff !important;

        .appHeader {
            top: var(--status-bar-height);
        }

        .content {
            margin-top: calc(100rpx + var(--status-bar-height));
            font-family: PingFangSC-Semibold, PingFang SC;

            .model {
                padding: 0 30rpx;
                height: 120rpx;
                box-sizing: border-box;
                font-size: 32rpx;
                font-weight: 400;
                color: #1A1A1A;
                box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1), 0px -1px 0px 0px rgba(0, 0, 0, 0.1);

                .modelText {
                    .line {
                        display: inline-block;
                        width: 4rpx;
                        height: 30rpx;
                        background-size: cover;
                        margin-right: 12rpx;
                        transform: translateY(15%);
                    }

                    float: left;
                    line-height: 120rpx;
                }

                .chooseModel {
                    float: right;
                    padding: 22rpx 0;
                    box-sizing: border-box;

                    .chooseItem {
                        display: inline-block;
                        width: 172rpx;
                        height: 76rpx;
                        font-size: 28rpx;
                        color: #835DFF;
                        text-align: center;
                        line-height: 76rpx;
                        background: #EFF3F9;
                        border-radius: 16rpx 0rpx 0rpx 16rpx;
                    }

                    .night {
                        border-radius: 0rpx 16rpx 16rpx 0rpx;
                    }

                    .chooseItem.active {
                        color: #FFFFFF;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                    }
                }
            }

            .currency {
                padding: 0 30rpx;
                margin-top: 20rpx;
                height: 84rpx;
                box-sizing: border-box;
                font-size: 32rpx;
                font-weight: 600;
                color: #1A1A1A;
                line-height: 84rpx;
                border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);

                .currencyTitle {
                    .line {
                        display: inline-block;
                        width: 4rpx;
                        height: 30rpx;
                        background-size: cover;
                        margin-right: 12rpx;
                        transform: translateY(15%);
                    }

                }

            }

            .currencyItem {
                padding: 0 30rpx;
                box-sizing: border-box;
                height: 100rpx;
                line-height: 100rpx;
                border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
                position: relative;

                .currencyIcon {
                    display: inline-block;
                    width: 48rpx;
                    height: 48rpx;
                    //background: #D8D8D8;
                    border-radius: 4rpx;
                    background-size: cover;
                    transform: translateY(30%);
                }

                .currencyText {
                    display: inline-block;
                    font-size: 28rpx;
                    font-weight: 400;
                    color: #1A1A1A;
                    margin-left: 16rpx;
                }

                .selected {
                    width: 38rpx;
                    height: 32rpx;
                    background-size: cover;
                    position: absolute;
                    right: 30rpx;
                    top: 32rpx;
                }
            }

            .confirmBtn {
                margin-top: 80rpx;
            }
        }

    }

</style>
