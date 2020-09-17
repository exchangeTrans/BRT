<template>
	<view>
		<view class="head">
			交易
		</view>
		<view class="msg">
			<view class="msgleft">
				<image src="../../static/images/trades/headleft.png" mode="" class="lefticon"></image>
				<text class="tradetype">LED/HDU</text>
			</view>
			<view class="msgright">
				<image src="../../static/images/trades/headright.png" mode=""  class="righticon"></image>
				<view class="change">+1.46%</view>
			</view>
		</view>
		<view class="main">
			<view class="left">
				<view class="buy">
					<image src="../../static/images/trades/bluebg.png" mode=""></image>
					<view class="fonts">买入</view>
				</view>
				
				<view class="sale">
					<image src="../../static/images/trades/blackbg.png" mode=""></image>
					<view class="fonts">卖出</view>
				</view>
				
				<view class="charge">
					<image src="../../static/images/trades/sub.png" mode="" class="sub"></image>
					<text class="charge_name">价格(HDU)</text>
					<image src="../../static/images/trades/add.png" mode="" class="add"></image>
				</view>
				
				<view class="num">
					<image src="../../static/images/trades/sub.png" mode="" class="sub"></image>
					<text class="charge_num">数量(LED)</text>
					<image src="../../static/images/trades/add.png" mode="" class="add"></image>
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
					<data-list :colorOptions="green"></data-list>
				</view>
				
				<view class="charge_exchange">
					<view class="exchange_rate1">0.0653</view>
					<view class="exchange_rate2">≈6.66CNY</view>
				</view>
				<view class="charge_and_num">
					<data-list :colorOptions="red"></data-list>
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
			<view class="img">
				<image src="../../static/images/trades/footer.png" mode=""></image>
			</view>
			<view class="footer_data">暂无数据</view>
		</view>
	</view>
</template>

<script>
	import dataList from '../../components/trades/datalist.vue'
	export default {
	  components: {dataList},
	  
	  data(){
	    return{
			green:{
				bgc:"#2D453C",
				fonts_color:"#5BC788"
			},
			red:{
				bgc:"#37272E",
				fonts_color:"#FC3C5A"
			}
	    }
	  }
	};
</script>

<style lang="less">
	*{
		background: #272A2E;
	}
	.head{
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 40rpx;
		border-bottom: 2rpx #CCCCCC solid;
		color: #D9DADB;
		font-family: PingFangSC-Semibold, PingFang SC;
		background: #00001A;
	}
	
	.msg{
		width: 100%;
		height: 88rpx;
		
		.msgleft{
			float: left;
			margin-top: 16rpx;
			.lefticon{
				width: 40rpx;
				height: 40rpx;
				// border: 1rpx #333333 dashed;
				padding: 10rpx;
				margin-left: 10rpx;
				float: left;

			}
			.tradetype{
				height: 60rpx;
				line-height: 60rpx;
				font-weight:bold;
				margin-left: 10rpx;
				color: #D9DADB;
				font-family: PingFangSC-Semibold, PingFang SC;
			}
		}
		.msgright{
			float: right;
			margin-top: 24rpx;
			.righticon{
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;
				
			}
			.change{
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
				color: #D9DADB;
			}
		}
	}
	.main{
		margin-top: 20rpx;
		width: 100%;
		height: 704rpx;
		background: #22252A;
		z-index: -999;
		.left{
			width: 50%;
			height: 704rpx;
			float: left;
			overflow: hidden;
			position: relative;
			.buy{
				width: 173.7rpx;
				height: 76rpx;
				float: left;
				line-height: 76rpx;
				color: #FFFFFF;
				margin-left: 20rpx;
				position: absolute;
				overflow: hidden;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				image{
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					z-index: -999;
				}
				.fonts{
					text-align: center;
					font-size: 32rpx;
				}
			}
			.sale{
				width: 173.7rpx;
				height: 76rpx;
				float: left;
				line-height: 76rpx;
				color: #D9DADB;
				position: absolute;
				overflow: hidden;
				margin-left: 178.7rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				image{
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					z-index: -999;
				}
				.fonts{
					text-align: center;
					font-size: 32rpx;
				}
			}
			.charge{
				width: 332rpx;
				height: 76rpx;
				float: left;
				margin-left: 20rpx;
				margin-top: 100rpx;
				line-height: 76rpx;
				border: 2rpx solid #ccc;
				border-radius: 76rpx;
				position: absolute;
				overflow: hidden;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #1A1A1A;
				.sub{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: -999;
					margin-left: 30rpx;
					margin-top: 20rpx;
				}
				.add{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: -999;
					margin-top: 20rpx; 
					margin-left: 30rpx;
					line-height: 76rpx;
				}
				.fonts{
					margin-left: 90rpx;
				}
				.charge_name{
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-left: 100rpx;
				}
				
			}
			.num{
				width: 332rpx;
				height: 76rpx;
				float: left;
				margin-left: 20rpx;
				margin-top: 230rpx;
				line-height: 76rpx;
				color: #E3E5E6;
				border: 2rpx solid #ccc;
				border-radius: 76rpx;
				position: absolute;
				overflow: hidden;
				font-family: PingFangSC-Regular, PingFang SC;
				overflow: hidden;
				font-size: 28rpx;
				color: #E3E5E6;
				.sub{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: -999;
					margin-left: 30rpx;
					margin-top: 20rpx;
				}
				.add{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					z-index: -999;
					margin-top: 20rpx; 
					margin-left: 40rpx;
					line-height: 76rpx;
				}
				.fonts{
					margin-left: 90rpx;
				}
				.charge_num{
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-left: 100rpx;
				}
			}
			.hdunum{
				width: 50%;
				height: 34rpx;
				font-size: 24rpx;
				margin-left: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				margin-top: 320rpx;
			}
			.hdupercent{
				margin-left: 20rpx;
				display: flex;
				position: absolute;
				margin-top: -30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				.precent{
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
				}
			}
			.tradenum{
				margin-top: 90rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
				margin-left: 20rpx;
				float: left;
			}
			.number{
				margin-top: 90rpx;
				float: left;
				margin-left: 20rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
			}
			.buyit{
				margin-top: 155rpx;
				width: 348rpx;
				height: 74rpx;
				background: linear-gradient(to right,#004FA8,#007CD3,#25D4ED);
				text-align: center;
				line-height: 74rpx;
				border-radius: 74rpx;
				margin-left: 20rpx;
				color: #FFFFFF;
				font-size: 32rpx;
			}
		}
		.right{
			width: 50%;
			height: 704rpx;
			float: right;
			.charge_and_num{
				margin-left: 10rpx;
				.money{
					float: left;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-left: 20rpx;
					overflow: hidden;
				}
				.lednum{
					float: right;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
					margin-right: 20rpx;
					overflow: hidden;
				}
			}
			.charge_exchange{
				width: 100%;
				height: 100rpx;
				border-top: 2rpx solid #ccc;
				border-bottom: 2rpx solid #ccc;
				line-height: 50rpx;
				margin-left: 20rpx;
				margin-bottom: 10rpx;
				.exchange_rate1{
					font-size: 30rpx;
					color: #FC3C5A;
					font-weight: bold;
				}
				.exchange_rate2{
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #D9DADB;
				}
			}
			.icon_list{
				width: 400rpx;
				height: 51rpx;
				display: flex;
				.icon_item{
					width: 50rpx;
					height: 50rpx;
					margin-left: 60rpx;
				}
			}
		}
	}
	.line{
		width: 100%;
		height: 20rpx;
		background: #272A2E;
		
	}
	.footer{
		background: #272A2E;
		.descript{
			font-size: 32rpx;
			font-weight: bold;
			margin-left: 20rpx;
			color: #D9DADB;
			font-family: PingFangSC-Semibold, PingFang SC;
		}
		.img{
			margin-top: 44rpx;
			image{
				width: 250rpx;
				height: 250rpx;
			}
			text-align: center;
		}
		.footer_data{
			text-align: center;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #D9DADB;
			margin-top: 20rpx;
		}
	}
</style>
