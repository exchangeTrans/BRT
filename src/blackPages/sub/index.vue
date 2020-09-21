<template>
	<view class="sub" id="sub">
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
					<view class="circleBtn" :style="{'background-image':'url('+circleBg3+')'}" @tap="transferInAmount">
						<view class="pledgeTitle">{{$t('sub').pledgeNow}} BRT</view>
						<view class="pledgeText">{{subData.holdAmount}}</view>
					</view>
					<view class="circleText  releasePledge">{{$t('sub').will}} {{subData.holdExpiresIn}} {{$t('sub').releasePledge}}</view>
					<view class="closePledge" @tap="cancelMining">{{$t('sub').closePledge}}</view>
				</view>

				<view class="earningsText" :style="{'transform':subData.holdStateType===0?'translateY(-160rpx)':'translateY(-120rpx)'}">
					<view class="line" ></view>
					{{$t('sub').pledgeRecord}}
				</view>

				<view class="earningsList" v-if="!isNoDataFlag" :style="{'transform':subData.holdStateType===0?'translateY(-120rpx)':'translateY(-80rpx)'}">
					<view class="earningsItem" v-for="(item,index) in subData.list" :key="index">
						<view class="accruedIncome">
							{{$t('sub').accumulatedIncome}}：<span>{{item.bounsAmount}}  BRt</span>
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
					<noData :positionTop="positionTop"></noData>
				</view>
			</view>
		</scroll-view>


		<transferInAmount ref="transferInAmount" :mode="'night'"></transferInAmount>
		<subRuler ref="subRuler"></subRuler>

	</view>
</template>

<script src="@/script/sub/sub.js">
    import transferInAmount from "@/components/popup/transferInAmount/index.vue"
//    import appHeader from "@/components/common/header.vue";

//    export default {
//	    components:{
//            appHeader,
//            transferInAmount
//		},
//        data() {
//            return {
//                headerOptions:{
//                    show:true,
//                    isAllowReturn:true,
//					isWhiteIcon:true,
//                    text:"挖矿",
//                    rightItem:{
//                        type:"text",
//                        text:"",
//                    },
//					style:{
//
//                        'color': '#D9DADB'
//					},
//                    bodyPadding:{"padding":'0,0,0,0'},
//                    headerIsNoBoder: true,
//                },
//
//				subBg:`${require('@/static/images/sub/subBg.png')}`,
//                circleBg:`${require('@/static/images/sub/circleBg.png')}`,
//                circleBg2:`${require('@/static/images/sub/circleBg2.png')}`,
//
//            }
//        },
//        onLoad() {
//
//        },
//        methods: {
//            transferInAmount(){
//                this.$refs.transferInAmount.open();
//			}
//        }
//    }
</script>

<style lang="less">
	.sub{
		width: 100%;
		height: 100%;

		background: #22252A;
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
					position: relative;
					box-sizing: border-box;
					background-size: cover;
					font-family: PingFangSC-, PingFang SC;
					color: #FFFFFF;
					font-weight: normal;
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
					.releasePledge{
						color: #8D989E;
					}
					.closePledge{
						position: absolute;
						bottom: 80rpx;
						left: 50%;
						transform: translateX(-50%);
						margin: 16rpx auto 0;
						width: 160rpx;
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
				}
				.earningsText{
					transform: translateY(-160rpx);
					font-weight: 500;
					color: #D9DADB;
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
					transform: translateY(-120rpx);
					font-family: PingFangSC-Medium, PingFang SC;
					.earningsItem{
						margin-top: 20rpx;
						background: #272A2E;
						padding: 30rpx;
						box-sizing: border-box;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;

						color: #D9DADB;
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
