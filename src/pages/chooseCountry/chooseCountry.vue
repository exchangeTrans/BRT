<template>
    <view id="chooseCountry">
        <app-header :headerOptions="headerOptions"
                    @headertap=headertap></app-header>
        <scroll-view class="chooseCountry-wrap" :scroll-y="true">
            <view class="chooseCountry-wrap-content">
                <view class="chooseCountry-wrap-list">
                    <view class="chooseCountry-wrap-item"
                          v-for="(item,index) in countryData"
                          :key="index"
                          @tap="chooseItem(item)">
                        <image :src=item.icon alt=""/>
                        <view class="name">
                            {{item.titleCN}}
                        </view>
                        <view class="selected"
                              :style="{'background-image':'url('+selectedIcon+')'}"
                              v-if="selectedItem.countryCode === item.countryCode">
                        </view>
                        <view class="areaCode">
                            (+{{item.dialingCode}})
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/chooseCountry/chooseCountry.js"></script>

<style scoped lang="less">
    #chooseCountry {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));

        .chooseCountry-wrap {
            width: 100%;
            height: 100%;

            .chooseCountry-wrap-content {
                /*margin: 0 1.5rpx;*/

                .chooseCountry-wrap-list {


                    .chooseCountry-wrap-item {
                        margin-bottom: 20rpx;
                        padding: 0 40rpx;
                        width: 690rpx;
                        height: 110rpx;
                        display: flex;
                        align-items: center;
                        border-bottom: 1rpx solid #F2F2F2;


                        image {
                            width: 64rpx;
                            height: 44rpx;
                        }

                        .name, .areaCode {
                            margin-left: 30rpx;
                            font-size: 28rpx;
                            font-family: "PingFang";
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                        }

                        .selected {
                            width: 38rpx;
                            height: 32rpx;
                            background-size: cover;
                            position: absolute;
                            right: 30rpx;
                        }
                    }
                }

            }

        }
    }
</style>
