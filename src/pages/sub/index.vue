<template>
	<view class="sub" id="sub">
		<uni-status-bar/>
		<app-header :headerOptions="headerOptions"></app-header>
		<scroll-view class="content" :scroll-y="true">
			<view class="contentPadding">
			<view class="subTop" :style="{'background-image':'url('+subBg+')'}">
				<view class="available">{{$t('sub').availableBalance}}：{{subData.brtBalance}} BRT</view>
				<view class="notice" :style="{'background-image':'url('+notice+')'}" @tap="showNotice"></view>
				<view class="dataGroup">
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">{{$t('sub').accumulatedIncome}}</view>
						<view class="dataGroupItemText">{{subData.interest}}</view>
					</view>
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">{{$t('sub').interestDay}}</view>
						<view class="dataGroupItemText">{{subData.interestDay}}</view>
					</view>
					<view class="dataGroupItem">
						<view class="dataGroupItemTitle">{{$t('sub').bestHold}}</view>
						<view class="dataGroupItemText">{{subData.bestHold}}</view>
					</view>
				</view>
			</view>

				<view class="circle" :style="{'background-image':'url('+circleBg+')'}" v-if="subData.holdStateType===0">
				<view class="circleBtn" :style="{'background-image':'url('+circleBg2+')'}" @tap="transferInAmount">
					{{$t('sub').BeganToDig}}
				</view>
				<view class="circleText">{{$t('sub').minLimit}}：{{subData.minLimit}} BRT</view>
			</view>

				<view class="circle pledge" :style="{'background-image':'url('+circleBg+')'}" v-if="subData.holdStateType===1">
					<view class="circleBtn" :style="{'background-image':'url('+circleBg3+')'}" >
						<view class="pledgeTitle">{{$t('sub').pledgeNow}} BRT</view>
							<view class="pledgeText">{{subData.holdAmount}}</view>
					</view>
					<view class="circleText">{{$t('sub').will}} {{subData.holdExpiresIn}} {{$t('sub').releasePledge}}</view>

					<view class="pledgeGroup">
						<view class="closePledge" @tap="cancelMining">{{$t('sub').closePledge}}</view>
						<view class="closePledge addBtn" @tap="transferInAmount">{{$t('sub').addPledge}}</view>
						<view class="clearfix"></view>
					</view>

				</view>

				<view class="earningsText" :style="{'transform':subData.holdStateType===0?'translateY(-160rpx)':'translateY(-120rpx)'}">
					<view class="line" ></view>
					{{$t('sub').pledgeRecord}}
				</view>

				<view class="earningsList" v-if="!isNoDataFlag" :style="{'transform':subData.holdStateType===0?'translateY(-120rpx)':'translateY(-80rpx)'}">

				<view class="earningsItem" v-for="(item,index) in subRecord" :key="index">
					<view class="accruedIncome">
						{{$t('sub').accumulatedIncome}}：<span>{{item.bounsAmount}}  BRT</span>
					</view>
					<view class="nums">
						{{$t('sub').pledgeNumber}}：{{item.holdAmount}} BRT
					</view>
					<view class="times">
						<view class="timeItem startTime">{{$t('sub').createTime}}：{{item.createTime}}</view>
						<view class="timeItem endTime">{{$t('sub').expiresIn}}：{{item.expiresIn}}</view>
					</view>
				</view>
			</view>
				<view class="noDataBox" v-if="isNoDataFlag">
					<noData :positionTop="positionTop" :isGrey="true"></noData>
				</view>
			</view>
		</scroll-view>


		<transferInAmount ref="transferInAmount"  :availableCount="subData.brtBalance" @transferInAmountSuccess="transferInAmountSuccess"></transferInAmount>
		<subRuler ref="subRuler"></subRuler>

		<cancelPledge ref="cancelPledge"  :pledgeCount="subData.holdAmount" @cancelPledgeSuccess="cancelPledgeSuccess"></cancelPledge>

	</view>
</template>

<script src="@/script/sub/sub.js">

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
						width: 100%;
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
				.pledge{
					position: relative;
					.circleBtn{
						line-height: 120rpx;
						.pledgeTitle{
							margin-top: 50rpx;
							font-size: 24rpx;
						}
						.pledgeText{
							width: 100%;
							text-align: center;
							position: absolute;
							left: 0;
							top: 100rpx;
						}
					}
					.pledgeGroup{
						width: 100%;
						position: absolute;
						bottom: 80rpx;
						left: 50%;
						transform: translateX(-50%);
						text-align: center;

						.closePledge{
							display: inline-block;
							padding: 0 24rpx;
							box-sizing: border-box;
							height: 56rpx;
							border-radius: 30rpx;
							border: 2rpx solid #098FE0;
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #098FE0;
							line-height: 56rpx;
							text-align: center;
						}
						.addBtn{
							margin-left: 20rpx;
						}
					}

				}
				.earningsText{
					//transform: translateY(-160rpx);
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
				.earningsList{
					//transform: translateY(-120rpx);
					font-family: PingFangSC-Medium, PingFang SC;
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
							opacity: 0.5;
							.timeItem{
								display: inline-block;
							}
							.endTime{
								margin-left: 30rpx;
							}
						}
					}
				}
				.noDataBox{
					position: relative;
				}
			}


		}


	}

</style>
