<template>
	<view class="earnings" id="earnings">
		<app-header :headerOptions="headerOptions"></app-header>
		<scroll-view class="contentEarnings" :scroll-y="true">
			<view class="contentEarningsPadding">
				<view class="earningsTop" :style="{'background-image':'url('+topBg+')'}">
					<view class="left">
						<view class="balance">{{$t('earnings').balance}}</view>
						<view class="balanceNum"><span>{{userdata.usdtBalance}}</span>USDT</view>
					</view>
					<!-- <view class="right">
						<view class="idCode">ID 19029008</view>
						<view class="appraisement">
							<view class="img" :style="{'background-image':'url('+moneyIcon+')'}"></view>
							≈32.0$
						</view>
					</view> -->
				</view>

				<view class="yield">
					<view class="yieldText">
						<view class="yieldPercent">{{interestrate.left}}<span>.{{interestrate.right}}%</span></view>
						<view class="addUp">{{$t('earnings').yield}}</view>
					</view>
					<!--<view class="slider">-->
					<!--<slider :value="sliderValue"-->
					<!--@changing="sliderChange"-->
					<!--min="0"-->
					<!--max="100"-->
					<!--/>-->
					<!--</view>-->
					<!--<view class="percent">≈ {{sliderValue}}%</view>-->
				</view>

				<view class="tab">
					<view :class="selectedTab==='earningInfo'?'tabItem active earningInfo':'tabItem earningInfo'" @tap="chooseTab('earningInfo')">{{$t('earnings').profitDetail}}</view>
					<view :class="selectedTab==='data'?'tabItem active data':'tabItem data'" @tap="chooseTab('data')">{{$t('earnings').earningsData}}</view>
				</view>

				<view class="info">
					<view class="dataInfo">
						<view class="logoIcon" :style="{'background-image':'url('+logoIcon+')'}"></view>
						<view class="dataList" v-if="showincome_earing" >
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').investment}}</view>
								<view class="itemText">{{userdata.loan}} USDT</view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').quantBalance}}</view>
								<view class="itemText">{{userdata.financeBalance}} USDT</view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').lastYield}}</view>
								<view class="itemText">{{userdata.interestRateDay}}</view>
							</view>
						</view>
						<view class="dataList" v-if="showdata_earing" >
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').stopRatio}}</view>
								<input class="itemInput" v-model="userdata.stopWinRate"/>
								<view class="itemSet" @tap="setincomerate">{{$t('earnings').set}}</view>
								<view class="clearfix"></view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').stopRate}}</view>
								<input class="itemInput" v-model="userdata.stopLoseRate"/>
								<view class="itemSet" @tap="setlossrate">{{$t('earnings').set}}</view>
								<view class="clearfix"></view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">{{$t('earnings').maxReturn}}</view>
								<view class="itemText">{{userdata.maxDawndown}}</view>
								<view class="clearfix"></view>
							</view>
						</view>
						<view class="clearfix"></view>
					</view>
					<view class="ruler">
						<view class="line"></view>
						{{$t('earnings').rule}}
					</view>
					<view class="rulerInfo">{{$t('earnings').rulerText}}</view>
					<!--<view class="btnGroup">-->
					<!--&lt;!&ndash;<view class="btnItem">转入</view>&ndash;&gt;-->
					<!--&lt;!&ndash;<view class="btnItem export">转出</view>&ndash;&gt;-->


					<!--</view>-->

				</view>
			</view>
			<view class="btnGroup">
				<earningBtn :background="background" :borderRadius="borderRadius" :btnText="$t('earnings').join" v-if="selectedTab==='earningInfo'"
							@btnClick="transferInAmount"></earningBtn>
				<earningBtn :background="background" :borderRadius="borderRadius" :btnText="$t('earnings').downLoad" v-if="selectedTab==='data'"
							@btnClick="downloadAPP"></earningBtn>
			</view>
		</scroll-view>
		<financierInAmount ref="financierInAmount"
						   @transferInAmountSuccess="transferInAmountSuccess"
						   :availableCounts="userdata.usdtBalance"></financierInAmount>
		<subRuler ref="subRuler"></subRuler>
	</view>
</template>

<script src="@/script/earnings/earning.js">

</script>

<style lang="less">
	.earnings {
		width: 100vw;
		height: 100vh;
		background: #22252A;

		.contentEarnings {
			width: 100%;
			height: 100%;
			padding-top: calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;

			.contentEarningsPadding {
				padding: 0 30rpx;
				box-sizing: border-box;

				.earningsTop {
					margin-top: 30rpx;
					width: 690rpx;
					height: 224rpx;
					padding: 30rpx;
					box-sizing: border-box;
					background-size: cover;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;

					.left {
						float: left;
						width: 70%;
						font-size: 32rpx;

						.balanceNum {
							margin-top: 40rpx;

							span {
								margin-right: 10rpx;
								font-size: 60rpx;
								font-weight: normal;
							}
						}
					}

					.right {
						width: 30%;
						float: left;
						font-size: 28rpx;

						.idCode {
							margin-top: 5rpx;
						}

						.appraisement {
							margin-top: 60rpx;

							.img {
								margin-right: 10rpx;
								display: inline-block;
								width: 48rpx;
								height: 40rpx;
								background-size: cover;
							}
						}
					}
				}

				.yield {
					margin: 40rpx auto;
					width: 220rpx;
					height: 220rpx;
					border-radius: 50%;
					position: relative;
					background: linear-gradient(135deg, rgba(0, 79, 168, 1), rgba(0, 124, 211, 1), rgba(37, 212, 237, 1));
					/*margin: 56rpx 0 30rpx;*/
					/*width: 690rpx;*/
					/*height: 214rpx;*/
					/*background: #FFFFFF;*/
					/*border-radius: 10rpx;*/
					/*padding: 30rpx 44rpx 20rpx 44rpx;*/
					/*box-sizing: border-box;*/
					/*font-size: 28rpx;*/
					font-family: PingFangSC-Regular, PingFang SC;

					/*font-weight: 400;*/
					/*color: #1A1A1A;*/
					.yieldText {
						width: 188rpx;
						height: 188rpx;
						border-radius: 50%;
						background: white;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						text-align: center;

						.yieldPercent {
							margin-top: 30rpx;
							font-size: 56rpx;
							font-weight: 600;
							color: #098FE0;

							span {
								font-size: 36rpx;
							}

						}

						.addUp {
							font-size: 24rpx;
							font-weight: 400;
							color: #000000;
							opacity: 0.5;

						}
					}
				}

				/*.slider{*/
				/*margin: 38rpx 0 24rpx;*/
				/*}*/
				/*.percent{*/
				/*text-align: center;*/
				/*color: #098FE0;*/
				/*}*/
			}

			.tab {
				.tabItem {
					display: inline-block;
					text-align: center;
					width: 345rpx;
					height: 88rpx;
					background: #E4EBF7;
					line-height: 88rpx;
					font-size: 32rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #098FE0;
				}

				.tabItem.active {

					color: #FFFFFF;
					background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
				}

				.earningInfo {
					border-radius: 40rpx 0rpx 0rpx 40rpx;
				}

				.data {
					border-radius: 0rpx 40rpx 40rpx 0rpx;
				}
			}

			.info {
				margin: 30rpx 0 30rpx;
				width: 690rpx;
				background: #272A2E;
				border-radius: 10rpx;
				padding: 42rpx 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #D9DADB;
				box-sizing: border-box;

				.dataInfo {
					border-bottom: 2rpx solid rgba(255,255,255,0.1);
					padding-bottom: 40rpx;
					box-sizing: border-box;

					.logoIcon {
						float: left;
						margin: 0 24rpx;
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						background-size: cover;
					}

					.dataList {
						float: left;
						font-size: 28rpx;

						.dataItem {
							height: 80rpx;
							

							.itemTitle {
								line-height: 80rpx;
								width: 196rpx;
								line-height: 80rpx;
								height: 80rpx;
								// display: inline-block;
								float: left;
							}

							.itemText {
								height:80rpx;
								// display:inline-block;
								color: #098FE0;
								float: left;
								line-height: 80rpx;
							}
							.itemInput{
								float: left;
								// display: inline-block;
								color: #098FE0;
								width: 60rpx;
								height: 80rpx;
								font-size: 28rpx;
								box-sizing: border-box;
								// padding-top: 18rpx;
							}
							.itemSet{
								// width: 64rpx;
								height: 80rpx;
								line-height: 80rpx;
								font-size: 28rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #098FE0;
								// line-height: 40rpx;
								float: right;
								padding-left: 100rpx;
								// margin-top: 20rpx;
							}
						}
					}

				}

				.ruler {
					margin-top: 28rpx;
					font-size: 36rpx;

					.line {
						display: inline-block;
						width: 8rpx;
						height: 28rpx;
						background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
						border-radius: 4rpx;
						margin-right: 12rpx;
						transform: translateY(15%);
					}
				}

				.rulerInfo {
					margin-top: 24rpx;
					font-size: 24rpx;
					line-height: 40rpx;
					opacity: 0.5;
				}

				.btnGroup {
					width: 100%;
					text-align: center;
					margin-top: 30rpx;

					.btnItem {
						display: inline-block;
						width: 290rpx;
						height: 88rpx;
						border-radius: 48rpx;
						border: 2rpx solid #FFFFFF;
						text-align: center;
						background: linear-gradient(135deg, #8C939B 0%, #B4BBC0 49%, #C5C5C5 100%);
						line-height: 88rpx;
						font-size: 34rpx;
						color: #FFFFFF;
					}

					.export {
						margin-left: 22rpx;
						background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);

					}
				}

			}

			.btnGroup {
				padding-bottom: 30rpx;
			}
		}
	}
</style>
