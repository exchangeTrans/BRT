<template>
	<view class="index" id="index">
		<scroll-view class="content" :scroll-y="true">
			<view class="indexTop">
				<view class="iconGroup">
					<view class="logo"></view>
					<view class="fucIcon"></view>
				</view>

				<view class="earning">
					<view>矿池收益(HDU)</view>
					<view class="earningNumber">
						<span>0</span>
						<span>≈￥0</span>
					</view>
				</view>

			</view>
			<view class="gird">
				<view class="girdItem" v-for="item in girdData">
					<view class="girdIcon"></view>
					<view class="text">{{item.text}}</view>
				</view>
				<view class="clearfix"></view>
			</view>
			<view class="notice">
				<view class="noticeIcon"></view>
				<view class="noticeText">关于BRT上线的公告</view>
				<view class="more">···</view>
				<view class="clearfix"></view>
			</view>
			<view class="advertising">
				广告位
			</view>

			<view class="performer">
				<view class="performerTitle">24H <span>涨幅榜</span></view>

				<view class="performerTab">
					<view>币种</view>
					<view class="newest">最新价</view>
					<view class="upAndDown">24H涨跌</view>
				</view>

				<view class="performerItem" v-for="item in 8">
					<view class="currency">
						<view class="currencyTitle"> <span>LED</span>/HDU</view>
						<view class="currencyData">24H量85661.9866</view>
					</view>
					<view class="newest">
						<view class="newestPercentage">0.0544</view>
						<view class="newestMoney">￥6.75</view>
					</view>
					<view class="upAndDown">
						<view class="upAndDownItem">+2.00%</view>
					</view>
				</view>
			</view>

		</scroll-view>



	</view>
</template>

<script>
    export default {
        data() {
            return {
                girdData:[
					{
					    text:'转账'
					},
                    {
                        text:'邀请激活'
                    },
                    {
                        text:'矿池'
                    },
                    {
                        text:'账本'
                    },
                    {
                        text:'投票上币'
                    },
                    {
                        text:'募集'
                    },
                    {
                        text:'社区'
                    },
                    {
                        text:'收款'
                    }
				]
            }
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style lang="less">
	.index{
		width: 100%;
		height: 100%;
		background: #EEEFEF;
		.content{
			width: 100%;
			height: 100%;
			font-family: PingFangSC-Regular, PingFang SC;
			.indexTop{
				width: 100%;
				height: 420rpx;
				padding-top:80rpx;
				box-sizing: border-box;
				background: #1A1A1A;
				.iconGroup{
					height: 100rpx;
					position: relative;
					.fucIcon{
						position: absolute;
						right: 30rpx;
						top: 50%;
						transform: translateY(-50%);
						width: 48rpx;
						height: 48rpx;
						background: #D8D8D8;
						border-radius: 4rpx;

					}
				}
				.earning{
					margin-top: 30rpx;
					padding: 0 30rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
					box-sizing: border-box;
					.earningNumber{
						margin-top: 20rpx;
						span:nth-of-type(1){
							font-size: 60rpx;
							margin-right: 10rpx;
						}
					}
				}
			}
			.gird{
				width: 690rpx;
				height: 290rpx;
				padding: 20rpx 0 10rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 8rpx;
				margin: 0 auto;
				transform: translateY(-20%);

				.girdItem{
					width: 172.5rpx;
					height: 130rpx;
					float: left;
					text-align: center;
					.girdIcon{
						width: 60rpx;
						height: 60rpx;
						background: #D8D8D8;
						border-radius: 4rpx;
						margin: 14rpx auto 6rpx;
					}
					.text{
						font-size: 24rpx;
						color: #000000;
					}

				}
			}

			.notice{
				margin:0 auto;
				padding: 0 30rpx 0 20rpx;
				box-sizing: border-box;
				width: 690rpx;
				height: 80rpx;
				background: #FFFFFF;
				border-radius: 8rpx;
				line-height: 80rpx;
				transform: translateY(-35%);
				.noticeIcon{
					float: left;
					margin-top: 20rpx;
					width: 40rpx;
					height: 40rpx;
					background: #D8D8D8;
					border-radius: 3rpx;
				}
				.noticeText{
					float: left;
					margin-left: 20rpx;
					font-size: 24rpx;
					color: #1A1A1A;
				}
				.more{
					float: right;
				}

			}

			.advertising{
				margin: 0 auto;
				width: 690rpx;
				height: 146rpx;
				background: #1A1A1A;
				border-radius: 16rpx;
				line-height: 146rpx;
				color: #ffffff;
				text-align: center;

			}

			.performer{
				margin-top: 20rpx;
				width: 100%;
				height: auto;
				padding: 20rpx 30rpx 0 30rpx;
				box-sizing: border-box;
				background-color: #ffffff;
				.performerTitle{
					font-size: 28rpx;
					color: #1A1A1A;
					span{
						color: #835DFF;
						margin-left: 10rpx;
					}
				}
				.performerTab{
					margin-top: 20rpx;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					font-size: 24rpx;
					color: #1A1A1A;
					view{
						flex: 1;
					}
					.newest{
						text-align: center;
					}
					.upAndDown{
						text-align: right;
					}
				}
				.performerItem{
					width: 690rpx;
					height: 120rpx;
					border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					font-size: 24rpx;
					color: #1A1A1A;
					view{
						flex: 1;
					}
					.currency{
						padding: 20rpx 0;
						box-sizing: border-box;
						font-size: 24rpx;
						color: #1A1A1A;
						font-weight: 400;
						.currencyTitle{
							span{
								font-size: 28rpx;
								font-weight: 600;
							}
						}
						.currencyData{
							margin-top: 10rpx;
							line-height: 34rpx;
						}
					}
					.newest{
						padding: 20rpx 0;
						box-sizing: border-box;
						text-align: center;
						font-size: 24rpx;
						color: #1A1A1A;
						.newestPercentage{
							font-size: 28rpx;
							font-weight: 600;
						}
						.newestMoney{
							margin-top: 10rpx;
							font-weight: 400;
						}
					}
					.upAndDown{
						text-align: right;
						position: relative;
						.upAndDownItem{
							position: absolute;
							right: 0;
							top: 50%;
							transform: translateY(-50%);
							width: 136rpx;
							height: 48rpx;
							line-height: 48rpx;
							background: #FC3C5A;
							border-radius: 4rpx;
							text-align: center;
							color: #FFFFFF;
						}
						.upAndDownItem.active{
							background: #5BC788;
						}
					}
				}
			}
		}
	}
</style>
