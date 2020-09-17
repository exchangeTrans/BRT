<template>
	<view class="earnings" id="earnings">
		<app-header :headerOptions="headerOptions"></app-header>
		<scroll-view class="content" :scroll-y="true">
			<view class="contentPadding">
				<view class="earningsTop" :style="{'background-image':'url('+topBg+')'}">
					<view class="left">
						<view class="balance">可用余额</view>
						<view class="balanceNum"><span>897367.90</span>BRT</view>
					</view>
					<view class="right">
						<view class="idCode">ID 19029008</view>
						<view class="appraisement">
							<view class="img" :style="{'background-image':'url('+moneyIcon+')'}"></view>
							≈32.0$
						</view>
					</view>
				</view>

				<view class="yield">
					<view class="yieldText">
						<view class="yieldPercent">32.<span>68%</span></view>
						<view class="addUp">累计收益率</view>
					</view>
					<!--<view class="yieldTitle">量化收益率</view>-->
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
					<view :class="selectedTab==='earningInfo'?'tabItem active earningInfo':'tabItem earningInfo'" @tap="chooseTab('earningInfo')">收益详情</view>
					<view :class="selectedTab==='data'?'tabItem active data':'tabItem data'" @tap="chooseTab('data')">量化数据</view>
				</view>

				<view class="info">
					<view class="dataInfo">
						<view class="logoIcon" :style="{'background-image':'url('+logoIcon+')'}"></view>
						<view class="dataList">
							<view class="dataItem">
								<view class="itemTitle">投资金额</view>
								<view class="itemText">1000.00 USDT</view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">量化余额</view>
								<view class="itemText">1321.68 USDT</view>
							</view>
							<view class="dataItem">
								<view class="itemTitle">昨日收益率</view>
								<view class="itemText">2.68%</view>
							</view>
						</view>
						<view class="clearfix"></view>
					</view>
					<view class="ruler">
						<view class="line" ></view>
						规则
					</view>
					<view class="rulerInfo">{{rulerText}}</view>
					<view class="btnGroup">
						<view class="btnItem">转入</view>
						<view class="btnItem export">转出</view>

					</view>
				</view>

			</view>
		</scroll-view>




	</view>
</template>

<script src="@/script/earnings/earning.js">

//    import appHeader from "@/components/common/header.vue";
//    export default {
//	    components:{
//            appHeader,
//
//		},
//        data() {
//            return {
//                headerOptions:{
//                    show:true,
//                    isAllowReturn:true,
//					isWhiteIcon:true,
//                    text:"收益",
//                    rightItem:{
//                        type:"text",
//                        text:"",
//                    },
//					style:{
//                        'color':'#D9DADB'
//					},
//                   //background:'#ffffff',
//                    headerIsNoBoder: true,
//                },
//
//                topBg:`${require('@/static/images/earning/topBg.png')}`,
//                moneyIcon:`${require('@/static/images/earning/moneyIcon.png')}`,
//                logoIcon:`${require('@/static/images/earning/logoIcon.png')}`,
//				sliderValue:50,
//            }
//        },
//        onLoad() {
//
//        },
//        methods: {
//            transferInAmount(){
//                this.$refs.transferInAmount.open();
//			},
//            sliderChange(e) {
//               this.sliderValue= e.detail.value;
//            }
//        }
//    }
</script>

<style lang="less">
	.earnings{
		width: 100%;
		height: 100%;
		background: #22252A;
		.content{
			width: 100%;
			height: 100%;
			padding-top:calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;
			.contentPadding{
				padding: 0 30rpx;
				box-sizing: border-box;
				.earningsTop{
					margin-top: 30rpx;
					width: 690rpx;
					height: 224rpx;
					padding: 30rpx;
					box-sizing: border-box;
					background-size: cover;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;

					.left{
						float: left;
						width: 70%;
						font-size: 32rpx;

						.balanceNum{
							margin-top: 40rpx;
							span{
								margin-right: 10rpx;
								font-size: 60rpx;
								font-weight: normal;
							}
						}
					}
					.right{
						width: 30%;
						float: left;
						font-size: 28rpx;
						.idCode{
							margin-top: 5rpx;
						}

						.appraisement{
							margin-top: 60rpx;
							.img{
								margin-right: 10rpx;
								display: inline-block;
								width: 48rpx;
								height: 40rpx;
								background-size: cover;
							}
						}
					}
				}
				.yield{
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
					.yieldText{
						width: 188rpx;
						height: 188rpx;
						border-radius: 50%;
						background: white;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-50%);
						text-align: center;
						.yieldPercent{
							margin-top: 30rpx;
							font-size: 56rpx;
							font-weight: 600;
							color: #098FE0;
							span{
								font-size: 36rpx;
							}

						}
						.addUp{
							font-size: 24rpx;
							font-weight: 400;
							color: #000000;
							opacity: 0.5;
						}
					}
				}


				/*.yield{*/
					/*margin: 56rpx 0 30rpx;*/
					/*width: 690rpx;*/
					/*height: 214rpx;*/
					/*border-radius: 10rpx;*/
					/*padding: 30rpx 44rpx 20rpx 44rpx;*/
					/*box-sizing: border-box;*/
					/*font-size: 28rpx;*/
					/*font-family: PingFangSC-Regular, PingFang SC;*/
					/*font-weight: 400;*/
					/*color: #D9DADB;*/
					/*background: #272A2E;*/
				/*}*/

				/*.slider{*/
					/*margin: 38rpx 0 24rpx;*/
				/*}*/
				/*.percent{*/
					/*text-align: center;*/
					/*color: #098FE0;*/
				/*}*/
			}
			.tab{
				.tabItem{
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
				.tabItem.active{

					color: #FFFFFF;
					background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
				}
				.earningInfo{
					border-radius: 40rpx 0rpx 0rpx 40rpx;
				}
				.data{
					border-radius: 0rpx 40rpx 40rpx 0rpx;
				}
			}
			.info{
				margin: 30rpx 0;
				width: 690rpx;
				border-radius: 10rpx;
				padding: 42rpx 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #D9DADB;
				background: #272A2E;
				.dataInfo{
					border-bottom: 2rpx solid rgba(255,255,255,0.1);
					padding-bottom: 40rpx;
					box-sizing: border-box;
					.logoIcon{
						float: left;
						margin: 0 24rpx;
						width: 80rpx;
						height: 80rpx;
						border-radius:50%;
						background-size: cover;
					}
					.dataList{
						float: left;
						font-size: 28rpx;

						.dataItem{
							height: 80rpx;
							line-height: 80rpx;
							.itemTitle{
								width: 196rpx;
								display: inline-block;
							}
							.itemText{
								display: inline-block;

								color: #098FE0;
							}
						}
					}

				}
				.ruler{
					margin-top: 28rpx;
					font-size: 36rpx;
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
				.rulerInfo{
					margin-top: 24rpx;
					font-size: 24rpx;
					line-height: 40rpx;
				}
				.btnGroup{
					width: 100%;
					text-align: center;
					margin-top: 30rpx;
					.btnItem{
						display: inline-block;
						width: 290rpx;
						height: 88rpx;
						border-radius: 48rpx;
						//border: 2rpx solid #FFFFFF;
						text-align: center;
						background: linear-gradient(135deg, #8C939B 0%, #B4BBC0 50%, #C5C5C5 100%);
						line-height: 88rpx;
						font-size: 34rpx;
						color: #FFFFFF;
					}
					.export{
						margin-left: 22rpx;
						background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);

					}
				}

			}


		}


	}

</style>
