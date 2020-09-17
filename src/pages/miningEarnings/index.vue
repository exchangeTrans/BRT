<template>
	<view class="miningEarnings" id="miningEarnings">
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
							<view class="dataGroupItemTitle">昨日最佳持币</view>
							<view class="dataGroupItemText">3</view>
						</view>
					</view>
				</view>

				<view class="miningEarningsTitle"><view class="line" :style="{'background-image':'url('+titleLine+')'}"></view>质押收益纪录</view>
				<earningsRecordList :earningsRecordData="earningsRecordData"></earningsRecordList>

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
		background: #F9FAFA;
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
					color: #333333;
					.line{
						display: inline-block;
						width: 4rpx;
						height: 30rpx;
						background-size: cover;
						margin-right: 12rpx;
						transform: translateY(15%);
					}
				}

			}
		}
	}

</style>
