<template>
	<view class="index" id="index">
		<scroll-view class="content" :scroll-y="true">
			<view class="indexTop" :style="{'background-image':'url('+topBg+')'}">
				<view class="iconGroup">
					<view class="logo" :style="{'background-image':'url('+logo+')'}"></view>
					<!--<view class="fucIcon" :style="{'background-image':'url('+qr+')'}"></view>-->
				</view>

				<view class="earning">
					<view class="earningTitle " v-if="changeMoneyData.asset">资产总额</view>
					<view class="earningNumber" v-if="changeMoneyData.asset">
						<span>{{changeMoneyData.asset}} {{changeMoneyData.firstCode}}</span>
						<span>≈ {{changeMoneyData.price==="NaN" ? 0.00 : changeMoneyData.price}} {{changeMoneyData.lastCode}}</span>
					</view>
				</view>

			</view>
			<view class="gird">
				<view class="girdItem" v-for="(item,index) in girdData" :key="index" @tap="toInfo(item)">
					<view class="girdIcon" :style="{'background-image':'url('+item.img+')'}"></view>
					<view class="text">{{item.text}}</view>
				</view>
				<view class="clearfix"></view>
			</view>
			<view class="notice" @click="gonoticelist">
				<view class="noticeIcon" :style="{'background-image':'url('+notice2+')'}"></view>
				<view class="noticeText" @click="gonoticelist">关于BRT上线的公告</view>
				<view class="more" :style="{'background-image':'url('+more+')'}" @click.self.stop="gonoticelist"></view>
				<view class="clearfix"></view>
			</view>
			<view class="advertising" :style="{'background-image':'url('+advertising+')'}">
				<!-- 广告位 -->
			</view>

			<view class="performer">
				<view class="performerTitle">24H <span>币价行情</span></view>

				<view class="performerTab">
					<view class="cate">币种</view>
					<view class="newest">最新价</view>
					<view class="upAndDown">24H涨跌</view>
				</view>

				<view class="performerItem" v-for="(item,index) in tradePairData" :key="index" @tap="toKline(item)">
					<view class="currency">
						<view class="currencyTitle"> <span>{{item.name}}</span>/{{item.type}}</view>
						<view class="currencyData">24H量{{item.nowData===null?'0.00':item.nowData.amount.toFixed(2)}}</view>
					</view>
					<view class="newest">
						<view class="newestPercentage">{{item.nowData===null?'0.00':item.nowData.close.toFixed(2)}}</view>
						<view class="newestMoney">{{selectedCurrency.unit}}{{item.price}}</view>
					</view>
					<view class="upAndDown">
						<view v-if="item.range>0" class="upAndDownItem up">+{{item.range.toFixed(2)}}%</view>
						<view v-else-if="item.range<0" class="upAndDownItem down">{{item.range.toFixed(2)}}%</view>
						<view v-else class="upAndDownItem">{{item.range.toFixed(2)}}%</view>
					</view>
				</view>
			</view>

		</scroll-view>
		<pageFooter/>
		<forcedUpdating ref="update" name="update"></forcedUpdating>
	</view>
</template>

<script src="@/script/index/index.js">

	// import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
    // export default {
	//     components:{
    //         forcedUpdating
	// 	},
    //     data() {
    //         return {
    //             girdData:[
	// 				{
	// 				    text:'矿池',
	// 					img:`${require('@/static/images/home/pool.png')}`
	// 				},
    //                 {
    //                     text:'分红',
    //                     img:`${require('@/static/images/home/dividend.png')}`
    //                 },
    //                 {
    //                     text:'量化交易',
    //                     img:`${require('@/static/images/home/deal.png')}`
    //                 },
    //                 {
    //                     text:'公告',
    //                     img:`${require('@/static/images/home/notice.png')}`
    //                 },
    //                 {
    //                     text:'推广链接',
    //                     img:`${require('@/static/images/home/link.png')}`
    //                 },
    //                 {
    //                     text:'直推列表',
    //                     img:`${require('@/static/images/home/list.png')}`
    //                 },
    //                 {
    //                     text:'团队收益',
    //                     img:`${require('@/static/images/home/team.png')}`
    //                 },
    //                 {
    //                     text:'收益明细',
    //                     img:`${require('@/static/images/home/detail.png')}`
    //                 }
	// 			],
    //             logo:`${require('@/static/images/home/logo.png')}`,//logo
	// 			qr:`${require('@/static/images/home/qr.png')}`,//二维码
    //             topBg:`${require('@/static/images/home/topBg.png')}`,//背景
    //             advertising:`${require('@/static/images/home/advertising.png')}`,//广告牌
    //             notice2:`${require('@/static/images/home/notice2.png')}`,//公告
    //             more:`${require('@/static/images/home/more.png')}`//公告
	//
    //         }
    //     },
    //     onLoad() {
	//
    //     },
	// 	mounted(){
    //      // this.$refs.update.open();
	// 	},
    //     methods: {
	//
    //     }
    // }
</script>

<style lang="less">
	.index{
		width: 100vw;
		height: 100vh;
		background: #EEEFEF;
		.content{
			width: 100%;
			height: 100%;
			font-family: PingFangSC-Regular, PingFang SC;
			.indexTop{
				width: 100%;
				height: 420rpx;
				padding-top:70rpx;
				box-sizing: border-box;
				//background: #1A1A1A;
				background-size: cover;
				.iconGroup{
					height: 100rpx;
					position: relative;
					.logo{
						width: 98rpx;
						height: 60rpx;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-50%);
						background-size: cover;
					}
					.fucIcon{
						position: absolute;
						right: 30rpx;
						top: 50%;
						transform: translateY(-50%);
						width: 48rpx;
						height: 48rpx;
						//background: #D8D8D8;
						border-radius: 4rpx;
						background-size: cover;

					}
				}
				.earning{
					margin-top: 30rpx;
					padding: 0 30rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
					box-sizing: border-box;
                    .earningTitle{
                        opacity: 0.64;
                    }
					.earningNumber{
						margin-top: 20rpx;
						span:nth-of-type(1){
							font-size: 48rpx;
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
						//background: #D8D8D8;
						border-radius: 4rpx;
						margin: 14rpx auto 6rpx;
						background-size: cover;
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
					//background: #D8D8D8;
					border-radius: 3rpx;
					background-size: cover;
				}
				.noticeText{
					float: left;
					margin-left: 20rpx;
					font-size: 24rpx;
					color: #1A1A1A;
				}
				.more{
					float: right;
					width: 32rpx;
					height: 8rpx;
					margin-top:36rpx;
					background-size: cover;
				}

			}

			.advertising{
				margin: 0 auto;
				width: 690rpx;
				height: 146rpx;
		//		background: #1A1A1A;
				border-radius: 16rpx;
				//line-height: 146rpx;
				//color: #ffffff;
				//text-align: center;
				background-size: cover;

			}

			.performer{
				margin-top: 20rpx;
				width: 100%;
				height: auto;
				padding: 20rpx 30rpx 100rpx 30rpx;
				box-sizing: border-box;
				background-color: #ffffff;
				.performerTitle{
					font-size: 28rpx;
					color: #1A1A1A;
					span{
						color: #098FE0;
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
                    opacity: 0.5;

					.cate{
						flex: 2;
					}
					.newest{
						flex: 1.8;
						text-align: center;
					}
					.upAndDown{
						flex: 1.5;
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

					.currency{
						flex: 2;
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
							opacity: 0.5;
						}
					}
					.newest{
						flex: 1.8;
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
							opacity: 0.5;
						}
					}
					.upAndDown{
						flex: 1.5;
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
							border-radius: 4rpx;
							text-align: center;
							color: #FFFFFF;
							background: #CBCCCD;
						}
						.upAndDownItem.up{
							background: #FC3C5A;
						}
						.upAndDownItem.down{
							background: #5BC788;
						}
					}
				}
			}
		}
	}
</style>
