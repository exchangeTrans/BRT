<template>
	<view>
		<view class="head">
			<view @tap="selectTradeHeader(item)" :class="selectHeader.code===item.code?'headItem active headItem'+index:'headItem headItem'+index" v-for="(item,index) in headerData" :key="item.code">{{item.name}}</view>
		</view>
		<scroll-view class="tradesContent" scroll-y>
		<view class="msg">
			<view class="msgleft">
				<image @click="showDrawer" src="../../static/images/trades/headleft.png" mode="" class="lefticon"></image>
				<text class="tradetype">{{KLineTradingPair.name}}/{{KLineTradingPair.type}}</text>
			</view>
			<view class="msgright">
				<image src="../../static/images/trades/headright.png" mode="" @tap="toKline"  class="righticon"></image>
				<!-- <block  v-if="KLineTradingPair.name==='BRT'">
					<view class="change up" v-if="brtPriceObj.range>0">+{{brtPriceObj.range.toFixed(2)}}%</view>						
					<view class="change down" v-else-if="brtPriceObj.range<0">{{brtPriceObj.range.toFixed(2)}}%</view>
					<view class="change" v-else>{{brtPriceObj.range.toFixed(2)}}%</view>
				</block> -->
				<!-- <block  v-else> -->
					<view class="change up" v-if="KLineTradingPair.range>0">+{{KLineTradingPair.range.toFixed(2)}}%</view>						
					<view class="change down" v-else-if="KLineTradingPair.range<0">{{KLineTradingPair.range.toFixed(2)}}%</view>
					<view class="change" v-else>{{KLineTradingPair.range.toFixed(2)}}%</view>
				<!-- </block> -->
				
			</view>
		</view>
		<view class="main">
			<view class="left">
				<view :class="item.code" v-for="item in tradeNameData" :key="item.code" @tap="changeTradeType(item)">
					<image class="bluebg" v-if="item.code===selectedTradeName.code" src="../../static/images/trades/bluebg.png" mode=""></image>
					<image class="whitebg" v-else src="../../static/images/trades/whitebg.png" mode=""></image>
					<view class="income active" v-if="item.code===selectedTradeName.code">{{item.name}}</view>
					<view class="income" v-else>{{item.name}}</view>
				</view>
				
				<!-- <view class="sale">
					<image src="../../static/images/trades/whitebg.png" mode=""></image>
					<view class="fonts">卖出</view>
				</view> -->
				
				<view class="charge">
					<image src="../../static/images/trades/sub.png" mode="" class="sub" @tap="reduce('tradePrice')"></image>
					<input :value="tradePrice" :placeholder="$t('tradePage').prcie+'('+KLineTradingPair.type+')'" @blur="blur" class="charge_name" type="number" min="0"  @input="inputChange($event,'tradePrice')">
					<image src="../../static/images/trades/add.png" mode="" class="add" @tap="add('tradePrice')"></image>
				</view>
				
				<view class="num">
					<image src="../../static/images/trades/sub.png" mode="" class="sub"  @tap="reduce('tradeNum')"></image>
					<!-- <text class="charge_num">数量(LED)</text> -->
					<input :placeholder="$t('tradePage').number+'('+KLineTradingPair.name+')'" class="charge_num" type="number" min="0" :value="tradeNum" @input="inputChange($event,'tradeNum')">
					<image src="../../static/images/trades/add.png" mode="" class="add" @tap="add('tradeNum')"></image>
				</view>
				
				<view class="hdunum">{{$t('tradePage').use}}{{selectedTradeName.code==='buy'?(tradeInfo.usdtBalance?tradeInfo.usdtBalance:0):(tradeInfo.symbolBalance?tradeInfo.symbolBalance:0)}} {{selectedTradeName.code==='buy'?KLineTradingPair.type:KLineTradingPair.name}}</view>
				<view class="hdupercent">
					<view class="precent" hover-class="hoverClass" @tap="choosePrecent(item)" v-for="item in precentList" :key="item.val">{{item.text}}</view>
				</view>
				<text class="tradenum">{{$t('tradePage').tradeAll}}</text><text class="number">{{tradeAll.toFixed(2)}} {{KLineTradingPair.type}}</text>
				<view class="buyit" @tap="tradeFunc" hover-class="hoverClass" v-if="selectedTradeName.code==='buy'">{{$t('tradePage').buy}} {{KLineTradingPair.name}}</view>
				<view class="buyit" @tap="tradeFunc" hover-class="hoverClass" v-else>{{$t('tradePage').sell}} {{KLineTradingPair.name}}</view>
			</view>
			<view class="right">
				<view class="charge_and_num">
					<view class="money">{{$t('tradePage').prcie}}</view>
					<view class="lednum">{{$t('tradePage').number}}</view><br>
					<!-- <block v-if="KLineTradingPair.name==='BRT'">
						<block v-for="(item,index) in tapeData.asks" :key="index">
							<view v-if="index<5">
								<data-list :colorOptions="red" :tradesOptions="item"></data-list>
							</view>
						</block>
					</block>		 -->
					<!-- <block v-else> -->
						<block v-for="(item,index) in depthData.asks" :key="index">
							<view v-if="index<5">
								<data-list :colorOptions="red" :tradesOptions="item" @itemClick="itemClick"></data-list>
							</view>
						</block>
					<!-- </block>					 -->
				</view>
				
				<!-- <view class="charge_exchange" v-if="KLineTradingPair.name==='BRT'">
					<view class="exchange_rate1">{{brtPriceObj.price===null?'0.00':brtPriceObj.price.toFixed(3)}}</view>
					<view class="exchange_rate2">≈{{brtPriceObj.priceRate}}{{selectedCurrency.code}}</view>
				</view> -->
				<!-- <view class="charge_exchange" v-else> -->
				<view class="charge_exchange">
					<view class="exchange_rate1">{{KLineTradingPair.nowData===null?'0.00':KLineTradingPair.nowData.close.toFixed(5)}}</view>
					<view class="exchange_rate2">≈{{KLineTradingPair.price}}{{selectedCurrency.code}}</view>
				</view>
				<!-- <view class="charge_and_num" v-if="KLineTradingPair.name==='BRT'">
					<block v-for="(item,index) in tapeData.bids" :key="index">
						<view v-if="index<5">
							<data-list :colorOptions="green" :tradesOptions="item"></data-list>
						</view>
					</block>
				</view> -->
				<view class="charge_and_num">
				<!-- <view class="charge_and_num" v-else> -->
					<block v-for="(item,index) in depthData.bids" :key="index">
						<view v-if="index<5">
							<data-list :colorOptions="green" :tradesOptions="item" @itemClick="itemClick"></data-list>
						</view>
					</block>
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
			<view class="descript">{{$t('tradePage').nowTrade}}</view>
			<view class="historylog" @click="gohistorylog">
				<image src="../../static/images/trades/historylog.png" mode="" class="clock"></image>
				<view class="fontlog">{{$t('tradePage').historyTrade}}</view>
			</view>
			<view class="imgcon" v-if="historylogdata_list.length===0">
				<image src="../../static/images/trades/footer.png" mode="" class="img"></image>
				<view class="footer_data">{{$t('tradePage').noData}}</view>
			</view>
			<!-- <scroll-view scroll-y="true" class="historyloglist" v-if="showdata"> -->
			<block v-if="historylogdata_list.length>0">	
				<view v-for="(item,id) in historylogdata_list" :key="id">
					<historylog :historylogdata="item" @cancelTrade="cancelTrade"></historylog>
				</view>
			</block>
			<!-- </scroll-view> -->
			
		</view>
		
		<!-- <view class="blackindex" v-if="showmask">
			<view class="whiteindex">
				<view class="whitefont">币币交易</view>
				<scroll-view scroll-y="true" class="listh">
					<view v-for="(item,index) in tradelistOptions" :key="index">
						<tradelist :tradelistOptions="item"></tradelist>
					</view>
				</scroll-view>
			</view>
			<view class="rightmsg" @click="showmask=false"></view>
		</view> -->
		</scroll-view>
		<uniDrawer ref="showLeft" mode="left" :width="280" @change="change($event,'showLeft')">
			<tradelist :data="tradeListData" @chooseTradePair="chooseTradePair" :isblack="false"></tradelist>
		</uniDrawer>
		<pageFooter/>
	</view>
</template>

<script src="@/script/trades/index.js"/>
<style lang="less">
	.head{
		width: 100%;
		height: calc(100rpx + var(--status-bar-height));
		text-align: center;
		line-height: 100rpx;
		font-size: 40rpx;
		border-bottom: 1rpx #F9FAFA solid;
		color: #1A1A1A;
		font-family: PingFangSC-Semibold, PingFang SC;
		padding-top: calc(20rpx + var(--status-bar-height));
		display: flex;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;

	}
	.headItem{
		width: 172rpx;
		height: 60rpx;
		background: #EFF3F9;
		color: #098FE0;
		font-size: 24rpx;
		line-height: 60rpx;
		// border-radius: 16rpx 0px 0px 16rpx;
		// float: left;
	}
	.headItem.active{
		width: 172rpx;
		height: 60rpx;
		background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
		color: #EFF3F9;
		font-size: 24rpx;
		line-height: 60rpx;
		
	}
	.headItem0{
		border-radius: 16rpx 0px 0px 16rpx;
	}
	.headItem1{
		border-radius: 0px 16rpx 16rpx 0px;
	}
	// .headleft{
		
	// }
	// .headright{
	// 	width: 172rpx;
	// 	height: 60rpx;
	// 	background: #EFF3F9;
	// 	border-radius: 0px 16rpx 16rpx 0px;
	// 	color: #098FE0;
	// 	font-size: 24rpx;
	// 	line-height: 60rpx;
	// 	float: left;
	// 	margin-top: 20rpx;
	// }
	.tradesContent{
		width: 100vw;
		height: calc(100vh - 100rpx - 116rpx - var(--status-bar-height));
	}
	.msg{
		width: 100%;
		height: 88rpx;
		.msgleft{
			float: left;
			margin-top: 16rpx;
			display: flex;
    align-items: center;

			.lefticon{
				width: 56rpx;
				height: 56rpx;
				// border: 1rpx #333333 dashed;
				margin-left: 10rpx;
				float: left;
				    
			}
			.tradetype{
				height: 60rpx;
				line-height: 60rpx;
				font-weight:bold;
				margin-left: 10rpx;
				color: #1A1A1A;
				font-family: PingFangSC-Semibold, PingFang SC;
			}
		}
		.msgright{
			float: right;
			// margin-top: 24rpx;
			.righticon{
				width: 40rpx;
				height: 40rpx;
				padding: 24rpx 10rpx 0 50rpx;
				position: relative;
				
			}
			.change{
				margin-top: 24rpx;
				// width: 116rpx;
				height: 40rpx;
				padding:0 16rpx;
				line-height: 40rpx;
				background-color: #8D989E;
				float: right;
				font-size: 24rpx;
				color: #FFFFFF;
				text-align: center;
				margin-right: 20rpx;
				border-radius: 5rpx;
			}
			.change.up{
				background-color: #5BC788;
			}
			.change.down{
				
				background-color: #FC3C5A;
			}
		}
	}
	.main{
		margin-top: 20rpx;
		width: 100%;
		height: 654rpx;
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
				color: #1A1A1A;
				image{
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					// z-index: -999;
				}
				.income{
					text-align: center;
					font-family: PingFangSC-Regular, PingFang SC;
					font-size: 32rpx;
					color: #1A1A1A;
					position: relative;
					z-index: 1;
				}
				.income.active{
					color: #FFFFFF;
				}
				.whitebg{
					transform: rotate(180deg);
				}
			}
			.sale{
				width: 174rpx;
				height: 76rpx;
				float: left;
				line-height: 76rpx;
				color: #000000;
				position: absolute;
				overflow: hidden;
				margin-left: 178.7rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				image{
					width: 174rpx;
					height: 76rpx;
					position: absolute;
					// z-index: -999;
				}
				.income{
					text-align: center;
					font-family: PingFangSC-Regular, PingFang SC;
					font-size: 32rpx;
					color: #1A1A1A;
					position: relative;
					z-index: 1;
				}
				.income.active{
					color: #FFFFFF;
				}
				.bluebg{
					transform: rotate(180deg);
				}
			}
			.charge{
				width: 332rpx;
				height: 76rpx;
				float: left;
				margin-left: 20rpx;
				margin-top: 100rpx;
				line-height: 76rpx;
				border: 2rpx solid #E3E5E6;
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
					// z-index: -999;
					top: 50%;
					transform: translateY(-50%);
					left: 30rpx;
					// margin-left: 30rpx;
					// margin-top: 20rpx;
				}
				.add{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					// z-index: -999;
					// margin-top: 20rpx; 
					// margin-left: 30rpx;
					top: 50%;
					transform: translateY(-50%);
					right: 30rpx;
					line-height: 76rpx;
				}
				.fonts{
					margin-left: 90rpx;
				}
				.charge_name{
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #1A1A1A;
					// margin-left: 100rpx;
					// background: darkblue;
					width: 170rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					text-align: center;
					transform: translateX(-50%) translateY(-50%);
					
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
				border: 2rpx solid #E3E5E6;
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
					// z-index: -999;
					top: 50%;
					transform: translateY(-50%);
					left: 30rpx;
				}
				.add{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					// z-index: -999;
					top: 50%;
					transform: translateY(-50%);
					right: 30rpx;
					line-height: 76rpx;
				}
				.fonts{
					margin-left: 90rpx;
				}
				.charge_num{
					text-align: center;
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #1A1A1A;
					// margin-left: 100rpx;
					// background: darkblue;
					width: 170rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translateX(-50%) translateY(-50%);
				}
			}
			.hdunum{
				// width: 50%;
				height: 34rpx;
				font-size: 24rpx;
				margin-left: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #1A1A1A;
				margin-top: 320rpx;
				opacity: 0.5;
			}
			.hdupercent{
				margin-left: 20rpx;
				display: flex;
				position: absolute;
				margin-top: -30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #1A1A1A;
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
					color: #1A1A1A;
					opacity: 0.5;
				}
			}
			.tradenum{
				margin-top: 90rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #1A1A1A;
				margin-left: 20rpx;
				float: left;
				opacity: 0.5;
				text{
					opacity: 1;
				}
			}
			.number{
				margin-top: 90rpx;
				float: left;
				margin-left: 20rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #1A1A1A;
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
					color: #1A1A1A;
					margin-left: 20rpx;
					overflow: hidden;
					opacity: 0.5;
				}
				.lednum{
					float: right;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #1A1A1A;
					margin-right: 20rpx;
					overflow: hidden;
					opacity: 0.5;
				}
			}
			.charge_exchange{
				width: 100%;
				height: 100rpx;
				border-top: 2rpx solid #F9FAFA;
				border-bottom: 2rpx solid #F9FAFA;
				line-height: 50rpx;
				margin-left: 20rpx;
				margin-bottom: 10rpx;
				margin-top: 10rpx;
				.exchange_rate1{
					font-size: 30rpx;
					color: #FC3C5A;
					font-weight: bold;
				}
				.exchange_rate2{
					opacity: 0.5;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					color: #1A1A1A;
				}
			}
			.icon_list{
				width: 400rpx;
				height: 51rpx;
				display: flex;
				margin-top: 10rpx;
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
		background-color: #F9FAFA;
		margin-top: 20rpx;
	}
	.footer{
		padding-top: 20rpx;
		background: #F9FAFA;
		width: 100%;
		height: auto;
		.descript{
			font-size: 32rpx;
			font-weight: bold;
			margin-left: 20rpx;
			color: #1A1A1A;
			font-family: PingFangSC-Semibold, PingFang SC;
			// padding-top: calc(100rpx+var(--status-bar-height));
			// height: calc(100vh-var(--status-bar-height)-100rpx);
			float: left;
		}
		.img{
			width: 250rpx;
			height: 250rpx;
			margin-top:60rpx;
			margin-left: 100rpx;
		}
		.footer_data{
			width: 100%;
			text-align: center;
			font-size: 24rpx;
			color:#BEBEBE ;
			padding-bottom: 50rpx;
		}
		.historylog{
			float: right;
			margin-right: 20rpx;
			height: 40rpx;
			margin-bottom: 20rpx;
			.clock{
				width: 32rpx;
				height: 30rpx;
				float: left;
				line-height: 40rpx;
				margin-right: 10rpx;
			}
			.fontlog{
				width: 112rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #1A1A1A;
				line-height: 30rpx;
				float: left;
				opacity: 0.5;
			}
		}
		.historyloglist{
			height: calc(100vh - var(--status-bar-height) - 1050rpx);
			// height: 250rpx;
		}
	}
	.blackindex{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100vh);
		background: rgba(0,0,0,0.6);
		z-index: 10;
		overflow: hidden;
		.whiteindex{
			position: fixed;
			top: 0;
			left: 0;
			background: #FFFFFF;
			box-shadow: 0px -2rpx 0px 0px rgba(0, 0, 0, 0.05);
			width: 80%;
			height: calc(100vh);
			z-index: 20;
			opacity: 1;
			.time{
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
			.whitefont{
				width: 136rpx;
				height: 48rpx;
				font-size: 34rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #1A1A1A;
				line-height: 48rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				margin-bottom: 30rpx;
			}
			.listh{
				width: 100%;
				height: calc(100vh - 100rpx);
			}
		}
		.rightmsg{
			width: 20%;
			height: 100%;
			float: right;
		}
	}
</style>
