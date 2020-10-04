<template>
    <view class="receiptIndex" id="receiptIndex">

        <appHeader :headerOptions="headerOptions" @headertap="rechargeRecord"></appHeader>

        <view class="content">
            <view class="qrCode">
                <view class="nameItem">
                    <view class="name">{{choiceType.name}}</view>
                    <!-- <view class="intro">币种名称</view> -->
					<view class="intro" v-if="choiceType.name&&choiceType.name==='USDT'"> ERC20-USDT</view>
                    <!-- <view class="rightIcon" :style="{'background-image':'url('+rightIcon+')'}"></view> -->
                    <view class="clearfix"></view>
                </view>

                <!-- <view class="qrImg" ref="qrImg">
                    <div class="QRcode-content">
                        <div id="qrcode" ref="qrcode"></div>
                    </div>-->
<!--                    <qrcodeComponents :url="data.userWalletAddress"-->
<!--                                      :qrCodeStyle="qrCodeStyle"-->
<!--                                      ref="qrcodeComponents"></qrcodeComponents>-->
                <!-- </view> -->
                <view class="qrcodeBox">
                    <uni-qrcode cid="qrcode2243" @makeComplete="makeComplete" ref="qrcode2233" :text="data.userWalletAddress" :size="size" backgroundColor="rgba(255,255,255,0)" />
                </view>

                <view class="rechargeTitle">{{$t('receipt').address}}</view>
                <view class="rechargeTitle">{{data.userWalletAddress}}</view>
                <view class="btnGroup">
                    <view class="btnItem" @tap='saveImage'>{{$t('receipt').saveCode}}</view>
                    <view class="btnItem  copy" @tap='copy'>{{$t('receipt').copyAddress}}</view>

                </view>
            </view>
            <view class="remark">
                {{$t('receipt').remark1}}{{choiceType.name}}{{$t('receipt').remark2}}
            </view>
        </view>
    </view>
</template>

<script src="@/script/receipt/receipt.js"></script>

<style lang="less">
    .receiptIndex{
        width: 100%;
        height: 100%;

        .content {
            width: 100%;
            height: 100%;
            padding-top: calc(100rpx + var(--status-bar-height));
            background-color: #F9FAFA;

            .qrCode {
                width: 690rpx;
                height: 934rpx;
                border-radius: 20rpx;
                padding: 40rpx 0 60rpx;
                box-sizing: border-box;
                margin: 20rpx auto 40rpx;
                background-color: #ffffff;
                .qrcodeBox{
                    width: 406rpx;
                    height: 406rpx;
                    margin: 60rpx auto 0;
                    display: flex;
                    justify-content: center;
                    border: 6rpx solid #EFFBFE;
                    align-items: center;
                }

                .nameItem {
                    margin: 0 auto;
                    width: 634rpx;
                    height: 100rpx;
                    padding: 0 32rpx 0 40rpx;
                    box-sizing: border-box;
                    border-radius: 4rpx;
                    border: 2rpx solid #E5E9EA;
                    line-height: 100rpx;
                    font-size: 32rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #000000;
                    position: relative;


                    .name {

                    }

                    .intro {
                        position: absolute;
                        right: 28rpx;
                        top: 0;
                        color: #B6B6B6;
                    }

                    .rightIcon {
                        position: absolute;
                        right: 32rpx;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 32rpx;
                        height: 32rpx;
                        background-size: cover;
                    }

                }

                .qrImg {
                    width: 406rpx;
                    height: 406rpx;
                    /*background: #333333;*/
                    /*border: 6rpx solid #EFFBFE;*/

                    /*background-size: cover;*/
                    margin: 60rpx auto 30rpx;
                }

                .rechargeTitle {

                    font-size: 28rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #B6B6B6;
                    text-align: center;


                }

                .rechargeTitle {
                    margin-top: 20rpx;
                    padding: 0 10rpx;
                    box-sizing: border-box;
                    font-size: 28rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    text-align: center;
                }

                .btnGroup {
                    width: 100%;
                    text-align: center;
                    margin-top: 30rpx;

                    .btnItem {
                        display: inline-block;
                        width: 280rpx;
                        height: 100rpx;
                        background: rgba(21, 21, 21, 0.16);
                        border-radius: 50rpx;
                        border: 2rpx solid #FFFFFF;
                        background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                        text-align: center;
                        line-height: 100rpx;
                        font-size: 32rpx;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #FFFFFF;
                    }

                    .copy {
                        margin-left: 22rpx;
                    }
                }
            }

            .remark {
                width: 690rpx;
                margin: auto;
                font-size: 24rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #098FE0;
                line-height: 34rpx;

            }

        }


    }

</style>
