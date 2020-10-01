<template>
    <view class="receiptIndex" id="receiptIndex">

        <appHeader :headerOptions="headerOptions" @headertap="rechargeRecord"></appHeader>

        <view class="content">
            <view class="qrCode">
                <view class="nameItem">
                    <view class="name">{{choiceType.name}}</view>
                    <!-- <view class="intro">币种名称</view> -->
					<view class="intro" v-if="choiceType.name&&choiceType.name==='USDT'"> ERC20版本</view>
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

                <view class="rechargeTitle">充币地址</view>
                <view class="rechargeTitle">{{data.userWalletAddress}}</view>
                <view class="btnGroup">
                    <view class="btnItem" @tap='getalbumAuth'> 保存二维码</view>
                    <view class="btnItem  copy" @tap='copy'>复制地址</view>

                </view>
            </view>
            <view class="remark">
                请勿向上述地址充值任何非{{choiceType.name}}资产，否则资产将不可找回。您充值至上述地址后，需要网络节点的确认。您的充值地址不会经常改变，可以重复充值；如果有更改我们会尽量通过网站公告或邮件通知您。
            </view>
        </view>
    </view>
</template>

<script src="@/script/receipt/receipt.js">
	// import appHeader from '@/components/common/header.vue'
    // export default {
	//     components:{
    //         appHeader
	// 	},
    //     data() {
    //         return {
    //             headerOptions:{
    //                 show:true,
    //                 isAllowReturn:true,
	// 				isWhiteIcon:true,
    //                 text:"USTD收款",
    //                 rightItem:{
    //                     type:"text",
    //                     text:"充币记录",
    //                     path:`${require('@/static/images/receipt/detail.png')}`,
    //                     style:{
    //                         'fontSize':'28rpx',
    //                         'color':'#098FE0'
    //                     },
    //                     tipText:'ID:AVV491',
    //                     haveTip:true
    //                 },
	// 				style:{
    //                   'color':'#D9DADB'
	// 				},
	// 				background:'#00001A',
	//
    //                 headerIsNoBoder: true,
    //             },
    //             rightIcon:`${require('@/static/images/receipt/rightIcon.png')}`
	//
    //         }
    //     },
    //     onLoad() {
	//
    //     },
    //     methods: {
    //         createAddress(){
	//
	// 		},
    //         importAddress(){
	//
	// 		}
    //     }
    // }
</script>

<style lang="less">
	.receipt{
		width: 100%;
		height: 100%;

		background: #22252A;
		.content{
			width: 100%;
			height: 100%;
			padding-top: calc(100rpx + var(--status-bar-height));

			.qrCode{
				width: 690rpx;
				height: 934rpx;
				border-radius: 20rpx;
				padding: 40rpx 0 60rpx;
				box-sizing: border-box;
				margin: 20rpx auto 40rpx;
				background-color: #272A2E;
				.qrcodeBox{
                    width: 406rpx;
                    height: 406rpx;
                    margin: 60rpx auto 0;
                    display: flex;
                    justify-content: center;
                    border: 6rpx solid #EFFBFE;
                    align-items: center;
                }


				.nameItem{
					margin: 0 auto;
					width: 634rpx;
					height: 100rpx;
					padding: 0 32rpx 0 40rpx;
					box-sizing: border-box;
					border-radius: 4rpx;
					border: 2rpx solid rgba(229, 233, 234, 0.2);

					line-height: 100rpx;
					font-size: 32rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #D9DADB;
					position: relative;


					.name{

					}
					.intro{
						position: absolute;
						right: 28rpx;
						top: 0;
						color: #B6B6B6;
					}
					.rightIcon{
						position: absolute;
						right: 32rpx;
						top: 50%;
						transform: translateY(-50%);
						width: 32rpx;
						height: 32rpx;
						background-size: cover;
					}

				}

				.qrImg{
					width: 406rpx;
					height: 406rpx;
					background: #333333;
					border: 6rpx solid #EFFBFE;

					background-size: cover;
					margin: 60rpx auto 30rpx;
				}
				.rechargeTitle{

					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #B6B6B6;
					text-align: center;


				}
				.rechargeTitle{
					margin-top: 20rpx;
					padding:0 10rpx;
					box-sizing: border-box;
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #666666;
					text-align: center;
				}

				.btnGroup{
					width: 100%;
					text-align: center;
					margin-top: 30rpx;
					.btnItem{
						display: inline-block;
						width: 280rpx;
						height: 100rpx;
						background: rgba(21, 21, 21, 0.16);
						border-radius: 50rpx;
						//border: 2rpx solid #FFFFFF;
						background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
						text-align: center;
						line-height: 100rpx;
						font-size: 32rpx;
						font-family: PingFangSC-Semibold, PingFang SC;
						font-weight: 600;
						color: #FFFFFF;
					}
					.copy{
						margin-left: 22rpx;
					}
				}
			}
			.remark{
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
