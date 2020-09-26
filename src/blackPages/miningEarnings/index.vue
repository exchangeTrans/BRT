<template>
	<view class="miningEarnings" id="miningEarnings">
		<uni-status-bar/>
		<app-header :headerOptions="headerOptions"></app-header>
		<scroll-view class="content" :scroll-y="true">
			<view class="contentPadding">
				<view class="subTop" :style="{'background-image':'url('+subBg+')'}">
					<view class="available">{{$t('miningEarnings').availableBalance}}：{{miningEarningsData.holdAmount}} BRT</view>
					<!--<view class="notice" :style="{'background-image':'url('+notice+')'}"></view>-->
					<view class="dataGroup">
						<view class="dataGroupItem">
							<view class="dataGroupItemTitle">{{$t('miningEarnings').accumulatedIncome}}</view>
							<view class="dataGroupItemText">{{miningEarningsData.interest}}</view>
						</view>
						<view class="dataGroupItem">
							<view class="dataGroupItemTitle">{{$t('miningEarnings').interestDay}}</view>
							<view class="dataGroupItemText">{{miningEarningsData.interestDay}}</view>
						</view>
						<view class="dataGroupItem">
							<view class="dataGroupItemTitle">{{$t('miningEarnings').bestHold}}</view>
							<view class="dataGroupItemText">{{miningEarningsData.bestHold}}</view>
						</view>
					</view>
				</view>

				<view class="miningEarningsTitle"><view class="line" :style="{'background-image':'url('+titleLine+')'}"></view>{{$t('miningEarnings').pledgeEarningRecord}}</view>
				<earningsRecordList :earningsRecordData="earningsRecordData" :isBlack="true"></earningsRecordList>
				<uni-load-more  @clickLoadMore="getMiningInterest(true)" :status="status"    v-if="!isNoDataFlag"></uni-load-more>

				<view class="noDataBox"  v-if="isNoDataFlag">
					<noData></noData>
				</view>


			</view>

		</scroll-view>
	</view>
</template>

<script src="@/script/miningEarnings/miningEarnings.js">

</script>

<style lang="less">
	.miningEarnings{
		width: 100%;
		height: 100%;
		background: #22252A;
		.content {
			width: 100%;
			height: 100%;
			padding-top: calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;
			.contentPadding {
				padding: 0 30rpx;
				box-sizing: border-box;
				.subTop {
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
					.available {
						font-size: 32rpx;
					}
					.notice {
						width: 40rpx;
						height: 40rpx;
						background-size: cover;
						position: absolute;
						right: 30rpx;
						top: 30rpx;
					}
					.dataGroup {
						margin-top: 60rpx;
						width: 100%;
						display: flex;
						justify-content: space-between;
						.dataGroupItem {
							flex: 1;
							text-align: center;
							.dataGroupItemTitle {

								font-size: 24rpx;
							}
							.dataGroupItemText {
								margin-top: 10rpx;
								font-size: 40rpx;
							}
						}
					}

				}
				.miningEarningsTitle{
					margin-top: 38rpx;
					font-size: 32rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #D9DADB;
					.line{
						display: inline-block;
						width: 4rpx;
						height: 30rpx;
						background-size: cover;
						margin-right: 12rpx;
						transform: translateY(15%);
					}
				}
				.noDataBox{
					position: relative;
				}

			}
		}
	}

</style>
