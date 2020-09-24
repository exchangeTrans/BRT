<template>
	<view>
		<view class="head">
			<view class="headleft">币币交易</view>
			<view class="headright">合约交易</view>
		</view>
		<scroll-view class="tradesContent" scroll-y>
		<view class="msg">
			<view class="msgleft">
				<image @click="showmask=true" src="../../static/images/trades/headleft.png" mode="" class="lefticon"></image>
				<text class="tradetype">LED/HDU</text>
			</view>
			<view class="msgright">
				<image src="../../static/images/trades/headright.png" mode="" class="righticon"></image>
				<view class="change">+1.46%</view>
			</view>
		</view>
		<view class="main">
			<view class="left">
				<view class="buy">
					<image src="../../static/images/trades/bluebg.png" mode=""></image>
					<view class="income">买入</view>
				</view>

				<view class="sale">
					<image src="../../static/images/trades/blackbg.png" mode=""></image>
					<view class="fonts">卖出</view>
				</view>

				<view class="charge">
					<image src="../../static/images/trades/blacksub.png" mode="" class="sub"></image>
					<input placeholder="价格(HDU)" class="charge_name" type="number" min="0">
					<image src="../../static/images/trades/blackadd.png" mode="" class="add"></image>
				</view>

				<view class="num">
					<image src="../../static/images/trades/blacksub.png" mode="" class="sub"></image>
					<input placeholder="数量(LED)" class="charge_num" type="number" min="0">
					<image src="../../static/images/trades/blackadd.png" mode="" class="add"></image>
				</view>

				<view class="hdunum">可用：0 HDU</view>
				<view class="hdupercent">
					<view class="precent">25%</view>
					<view class="precent">50%</view>
					<view class="precent">75%</view>
					<view class="precent">100%</view>
				</view>
				<text class="tradenum">交易额:</text><text class="number">1290</text>
				<view class="buyit">买入LED</view>
			</view>
			<view class="right">
				<view class="charge_and_num">
					<view class="money">价格</view>
					<view class="lednum">数量</view><br>
					<view v-for="(item,id) in tradesOptions_list" :key="id">
						<data-list :colorOptions="green" type='1' :tradesOptions="item"></data-list>
					</view>

				</view>

				<view class="charge_exchange">
					<view class="exchange_rate1">0.0653</view>
					<view class="exchange_rate2">≈6.66CNY</view>
				</view>
				<view class="charge_and_num">
					<view v-for="(item,id) in tradesOptions_list" :key="id">
						<data-list :colorOptions="red" :tradesOptions="item"></data-list>
					</view>
				</view>
				<view class="icon_list">
					<image src="../../static/images/trades/choose.png" mode="" class="icon_item"></image>
					<image src="../../static/images/trades/maichu.png" mode="" class="icon_item"></image>
					<image src="../../static/images/trades/mairu.png" mode="" class="icon_item"></image>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="footer">
			<view class="descript">当前委托</view>
			<view class="historylog">
				<image src="../../static/images/trades/historylog.png" mode="" class="clock"></image>
				<view class="fontlog">历史记录</view>
			</view>
			<view class="imgcon" v-if="shownodata">
				<image src="../../static/images/trades/footer.png" mode="" class="img"></image>
				<view class="footer_data">暂无数据</view>
			</view>
			<!-- <scroll-view scroll-y="true" class="historyloglist" v-if="showdata"> -->
				<view v-for="(item,id) in historylogdata_list" :key="id">
					<historylog :historylogdata="item"></historylog>
				</view>
			<!-- </scroll-view>/ -->

		</view>
		<view class="blackindex" v-if="showmask">
			<view class="whiteindex">
				<view class="time">9:41</view>
				<view class="whitefont">币币交易</view>
				<scroll-view scroll-y="true" class="listh">
					<view v-for="(item,id) in tradelistOptions" :key="item.id">
						<tradelist :tradelistOptions="item"></tradelist>
					</view>
				</scroll-view>
			</view>
			<view class="rightmsg" @click="showmask=false"></view>
		</view>
		</scroll-view>
		<pageFooter/>
	</view>
</template>

<script src="@/script/trades/index.js"/>
<style lang="less">
	.head {
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 40rpx;
		// border-bottom: 2rpx #E3E5E6 solid;
		color: #1A1A1A;
		font-family: PingFangSC-Semibold, PingFang SC;
		background: #00001A;
	}

	.headleft {
		width: 172rpx;
		height: 60rpx;
		background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
		border-radius: 16rpx 0px 0px 16rpx;
		color: #EFF3F9;
		font-size: 24rpx;
		line-height: 60rpx;
		float: left;
		margin-left: 200rpx;
		margin-top: 20rpx;
	}

	.headright {
		width: 172rpx;
		height: 60rpx;
		background: #EFF3F9;
		border-radius: 0px 16rpx 16rpx 0px;
		color: #098FE0;
		font-size: 24rpx;
		line-height: 60rpx;
		float: left;
		margin-top: 20rpx;
	}
	.tradesContent{
		width: 100vw;
		height: calc(100vh - 100rpx - 116rpx - var(--status-bar-height));
	}

	.msg {
		width: 100%;
		height: 88rpx;
		background: #272A2E;
		margin-top: -2rpx;
		.msgleft {
			float: left;
			margin-top: 16rpx;

			.lefticon {
				width: 40rpx;
				height: 40rpx;
				// border: 1rpx #333333 dashed;
				padding: 10rpx;
				margin-left: 10rpx;
				float: left;

			}

			.tradetype {
				height: 60rpx;
				line-height: 60rpx;
				font-weight: bold;
				margin-left: 10rpx;
				color: #D9DADB;
				font-family: PingFangSC-Semibold, PingFang SC;

			}
		}

		.msgright {
			float: right;
			margin-top: 24rpx;
			color: #FFFFFF;

			.righticon {
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;

			}

			.change {
				width: 116rpx;
				height: 40rpx;
				line-height: 40rpx;
				background-color: #FC3C5A;
				float: right;
				font-size: 24rpx;
				color: #FFFFFF;
				text-align: center;
				margin-right: 20rpx;
				border-radius: 5rpx;
				color: #FFFFFF;
			}
		}
	}

	.main {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		width: 100%;
		height: 654rpx;
		background: #272A2E;
		margin-top: -2rpx;
		background: #22252A;
		.left {
			width: 50%;
			height: 704rpx;
			float: left;
			overflow: hidden;
			position: relative;

			.buy {
				width: 173.7rpx;
				height: 76rpx;
				float: left;
				line-height: 76rpx;
				color: #FFFFFF;
				margin-left: 20rpx;
				position: absolute;
				overflow: hidden;
				font-family: PingFangSC-Regular, PingFang SC;

				image {
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					z-index: 1;
				}

				.income {
					margin-left: 60rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-size: 32rpx;
					position: absolute;
					z-index: 2;

				}
			}

			.sale {
				width: 173.7rpx;
				height: 76rpx;
				float: left;
				line-height: 76rpx;
				color: #E3E5E6;
				position: absolute;
				overflow: hidden;
				margin-left: 178.7rpx;
				font-family: PingFangSC-Regular, PingFang SC;

				image {
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					z-index: 1;
				}

				.fonts {
					text-align: center;
					font-family: PingFangSC-Regular, PingFang SC;
					font-size: 32rpx;
				}
			}

			.charge {
				width: 332rpx;
				height: 76rpx;
				float: left;
				margin-left: 20rpx;
				margin-top: 100rpx;
				line-height: 76rpx;
				border-radius: 76rpx;
				position: absolute;
				overflow: hidden;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				background: #3C3E49;

				.sub {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: 1;
					top: 50%;
					transform: translateY(-50%);
					left: 30rpx;
				}

				.add {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: 1;
					top: 50%;
					transform: translateY(-50%);
					right: 30rpx;
					line-height: 76rpx;
				}
				.charge_name {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #E3E5E6;
					position: absolute;
					z-index: 2;
					width: 150rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					text-align: center;
					transform: translateX(-50%) translateY(-50%);
				}

			}

			.num {
				width: 332rpx;
				height: 76rpx;
				float: left;
				margin-left: 20rpx;
				margin-top: 230rpx;
				line-height: 76rpx;
				border-radius: 76rpx;
				position: absolute;
				overflow: hidden;
				font-family: PingFangSC-Regular, PingFang SC;
				overflow: hidden;
				font-size: 28rpx;
				color: #FFFFFF;
				background: #3C3E49;
				.sub {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: 1;
					top: 50%;
					transform: translateY(-50%);
					left: 30rpx;
				}

				.add {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: 1;
					top: 50%;
					transform: translateY(-50%);
					right: 30rpx;
					line-height: 76rpx;
				}

				.fonts {
					margin-left: 90rpx;
				}

				.charge_num {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					// margin-left: 100rpx;
					width: 150rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					text-align: center;
					transform: translateX(-50%) translateY(-50%);
				}
			}

			.hdunum {
				width: 50%;
				height: 34rpx;
				font-size: 24rpx;
				margin-left: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				margin-top: 320rpx;
				opacity: 0.5;
			}

			.hdupercent {
				margin-left: 20rpx;
				display: flex;
				position: absolute;
				margin-top: -30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;

				.precent {
					margin-right: 12rpx;
					margin-top: 50rpx;
					width: 76rpx;
					height: 38rpx;
					border: 2rpx #E6E6E6 solid;
					border-radius: 10rpx;
					text-align: center;
					line-height: 38rpx;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					opacity: 0.5;
				}
			}

			.tradenum {
				margin-top: 90rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				margin-left: 20rpx;
				float: left;
				opacity: 0.5;
				text{
					opacity: 1;
				}
			}

			.number {
				margin-top: 90rpx;
				float: left;
				margin-left: 20rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
			}

			.buyit {
				margin-top: 155rpx;
				width: 348rpx;
				height: 74rpx;
				background: linear-gradient(to right, #004FA8, #007CD3, #25D4ED);
				text-align: center;
				line-height: 74rpx;
				border-radius: 74rpx;
				margin-left: 20rpx;
				color: #FFFFFF;
				font-size: 32rpx;
			}
		}

		.right {
			width: 50%;
			height: 704rpx;
			float: right;

			.charge_and_num {
				margin-left: 10rpx;

				.money {
					opacity: 0.5;
					float: left;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-left: 20rpx;
					overflow: hidden;
				}

				.lednum {
					opacity: 0.5;
					float: right;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-right: 20rpx;
					overflow: hidden;
				}
			}

			.charge_exchange {
				width: 100%;
				height: 100rpx;
				// border-top: 2rpx solid #E3E5E6;
				// border-bottom: 2rpx solid #E3E5E6;
				
				box-shadow: 0px 1rpx 0px 0px rgba(255, 255, 255, 0.1), 0px -1rpx 0px 0px rgba(255, 255, 255, 0.1);
				line-height: 50rpx;
				margin-left: 20rpx;
				margin-bottom: 10rpx;
				margin-top: 10rpx;

				.exchange_rate1 {
					font-size: 30rpx;
					color: #FC3C5A;
					font-weight: bold;
					
				}

				.exchange_rate2 {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					opacity: 0.5;
				}
			}

			.icon_list {
				width: 400rpx;
				height: 51rpx;
				display: flex;
				margin-top: 10rpx;

				.icon_item {
					width: 50rpx;
					height: 50rpx;
					margin-left: 60rpx;
				}
			}
		}
	}

	.line {
		width: 100%;
		height: 20rpx;
		
		background: #22252A;
		margin-top: -2rpx;
	}

	.footer {
		margin-top: -2rpx;
		padding-top: 20rpx;
		background: #F9FAFA;
		width: 100%;
		// height: calc(100vh - 638rpx);
		background: #22252A;
		.descript {
			font-size: 32rpx;
			font-weight: bold;
			margin-left: 20rpx;
			color: #D9DADB;
			font-family: PingFangSC-Semibold, PingFang SC;
			// padding-top: calc(100rpx+var(--status-bar-height));
			// height: calc(100vh-var(--status-bar-height)-100rpx);
			float: left;
		}

		.img {
			width: 250rpx;
			height: 250rpx;
			margin-top: 60rpx;
			margin-left: 100rpx;
		}

		.footer_data {
			width: 100%;
			text-align: center;
			font-size: 24rpx;
			color: #BEBEBE;
		}

		.historylog {
			float: right;
			margin-right: 20rpx;
			height: 40rpx;
			margin-bottom: 20rpx;

			.clock {
				width: 32rpx;
				height: 30rpx;
				float: left;
				line-height: 40rpx;
				margin-right: 10rpx;
			}
			.fontlog {
				width: 112rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;		
				color: #D9DADB;
				line-height: 30rpx;
				float: left;
				opacity: 0.5;
			}
		}

		.historyloglist {
			height: calc(100vh - var(--status-bar-height) - 1050rpx );
		}
	}

	.blackindex {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100vh);
		background: rgba(0, 0, 0, 0.6);
		z-index: 10;
		overflow: hidden;

		.whiteindex {
			position: fixed;
			top: 0;
			left: 0;
			background: #272A2E;
			box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.05);
			width: 80%;
			height: calc(100vh);
			z-index: 20;
			opacity: 1;

			.time {
				width: 108rpx;
				height: 36rpx;
				font-size: 30rpx;
				font-family: Helvetica;
				color: #000000;
				line-height: 36rpx;
				margin-left: 42rpx;
				margin-top: 42rpx;
				text-align: center;
			}

			.whitefont {
				width: 136rpx;
				height: 48rpx;
				font-size: 34rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #D9DADB;
				line-height: 48rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				margin-bottom: 30rpx;
			}

			.listh {
				width: 100%;
				height: calc(100vh - 100rpx);
			}
		}

		.rightmsg {
			width: 20%;
			height: 100%;
			float: right;
		}
	}
</style>
