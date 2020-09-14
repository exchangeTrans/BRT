<template>
	<view class="sub" id="sub">
		<app-header :headerOptions="headerOptions"></app-header>
		<scroll-view class="content" :scroll-y="true">
			<view class="contentPadding">
			<view class="subTop" :style="{'background-image':'url('+subBg+')'}">
				<view class="available">可用余额：1200 BRT</view>
				<view class="notice" :style="{'background-image':'url('+notice+')'}"></view>
				<view class="dataGroup">
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">累计收益</view>
						<view class="dataGroupItemText">1298.87</view>
					</view>
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">昨日收益</view>
						<view class="dataGroupItemText">123</view>
					</view>
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">最佳持币</view>
						<view class="dataGroupItemText">3</view>
					</view>
				</view>
			</view>
			<view class="circle" :style="{'background-image':'url('+circleBg+')'}">
				<view class="circleBtn" :style="{'background-image':'url('+circleBg2+')'}" @tap="transferInAmount">
                    开始挖矿
				</view>
				<view class="circleText">最小持币：1000 BRT</view>
			</view>
			<view class="earningsList" v-for="(item,index) in 3" :key="index">
				<view class="earningsText">
					<view class="line" ></view>
					质押挖矿记录
				</view>

				<view class="earningsItem">
					<view class="accruedIncome">
						累计收益：<span>30  BRt</span>
					</view>
					<view class="nums">
						质押数量：1000 BRT
					</view>
					<view class="times">
						<view class="timeItem startTime">起始时间：2020/09/28</view>
						<view class="timeItem endTime">结束时间：2020/09/30</view>
					</view>
				</view>
			</view>
			</view>
		</scroll-view>


		<transferInAmount ref="transferInAmount"></transferInAmount>

	</view>
</template>

<script src="@/script/sub.js">

    // import appHeader from "@/components/common/header.vue";
   // import transferInAmount from "@/components/popup/transferInAmount/index.vue"
    // export default {
	//     components:{
    //         appHeader,
    //         transferInAmount
	// 	},
    //     data() {
    //         return {
    //             headerOptions:{
    //                 show:true,
    //                 isAllowReturn:true,
    //                 text:"挖矿",
    //                 rightItem:{
    //                     type:"text",
    //                     text:"",
    //                 },
    //                 bodyPadding:{"padding":'0,0,0,0'},
    //                 headerIsNoBoder: true,
    //             },
    //
	// 			subBg:`${require('@/static/images/sub/subBg.png')}`,
    //             circleBg:`${require('@/static/images/sub/circleBg.png')}`,
    //             circleBg2:`${require('@/static/images/sub/circleBg2.png')}`,
    //
    //         }
    //     },
    //     onLoad() {
    //
    //     },
    //     methods: {
    //         transferInAmount(){
    //             this.$refs.transferInAmount.open();
	// 		}
    //     }
    // }
</script>

<style lang="less">
	.sub{
		width: 100%;
		height: 100%;
		background: #F9FAFA;
		.content{
			width: 100%;
			height: 100%;
			padding-top: calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;
			.contentPadding{
				padding: 0 30rpx;
				box-sizing: border-box;
				.subTop{
					z-index: 2;
					margin-top: 20rpx;
					width: 690rpx;
					height: 278rpx;
					padding: 30rpx;
					box-sizing: border-box;
					background-size: cover;
					font-family: PingFangSC-, PingFang SC;
					color: #FFFFFF;
					font-weight: normal;
					position: relative;
					.available{
						font-size: 32rpx;
					}
					.notice{
						width: 40rpx;
						height: 40rpx;
						background-size: cover;
						position: absolute;
						right: 30rpx;
						top: 30rpx;
					}
					.dataGroup{
						margin-top: 60rpx;
						width: 100%;
						display: flex;
						justify-content: space-between;
						.dataGroupItem{
							flex: 1;
							text-align: center;
							.dataGroupItemTitle{

								font-size: 24rpx;
							}
							.dataGroupItemText{
								margin-top: 10rpx;
								font-size: 40rpx;
							}
						}
					}





				}
				.circle{
					z-index: 1;
					transform: translateY(-10%);
					width: 690rpx;
					height: 690rpx;
					background-size: cover;
					font-family: PingFangHK-Medium, PingFangHK;
					color: #FFFFFF;
					position: relative;
					.circleBtn{
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-50%);
						text-align: center;
						width: 300rpx;
						height: 300rpx;
						background-size: cover;
						font-size: 40rpx;
						font-weight: 500;
						line-height: 300rpx;
					}
					.circleText{
						position: absolute;
						bottom: 150rpx;
						left: 50%;
						transform: translateX(-50%);
						font-size: 32rpx;
						font-weight: 400;
						color: #098FE0;
						text-align: center;
					}
				}
				.earningsList{
					transform: translateY(-160rpx);
					font-family: PingFangSC-Medium, PingFang SC;
					.earningsText{
						font-weight: 500;
						color: #333333;
						font-size: 32rpx;
						.line{
							display: inline-block;
							width: 8rpx;
							height: 28rpx;
							background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
							border-radius: 4px;
							margin-right: 12rpx;
							transform: translateY(15%);
						}


					}
					.earningsItem{
						margin-top: 20rpx;
						background: #FFFFFF;
						padding: 30rpx;
						box-sizing: border-box;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #000000;
						.accruedIncome{

							font-size: 36rpx;
							span{
								font-weight: 500;
								color: #098FE0;
								font-family: PingFangSC-Medium, PingFang SC;
							}
						}
						.nums{
							margin-top: 20rpx;
							font-size: 28rpx;

						}
						.times{
							margin-top: 10rpx;
							font-size: 28rpx;
							.timeItem{
								display: inline-block;
							}
							.endTime{
								margin-left: 50rpx;
							}
						}
					}
				}

			}


		}


	}

</style>
