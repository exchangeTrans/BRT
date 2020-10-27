<template>
	<view :class="'logitem '+theme">
		<view class="oneline">
			<view class="buyitem" v-if="String(historylogdata.orderType)==='1'">
                <text class="buyitin buy" >{{$t('tradePage').orderBuy}}</text>{{KLineTradingPair.name}}/{{KLineTradingPair.type}}
			</view>
			<view class="buyitem" v-if="String(historylogdata.orderType)==='2'">          
				<text class="buyitin sell"  >{{$t('tradePage').orderSell}}</text>{{KLineTradingPair.name}}/{{KLineTradingPair.type}}
			</view>
			<view class="cancelitem" @tap='cancelTrade(historylogdata)'>{{$t('tradePage').orderReturn}}</view>
		</view>
		<view class="twoline" >
			<view class="item-tr-left">{{$t('tradePage').orderPrice}}({{KLineTradingPair.type}})</view>
			<view class="item-tr-right">{{$t('tradePage').orderNumber}}({{KLineTradingPair.name}})</view>
		</view>
		<view class="threeline">
			<view class="itemcharge">{{Number(historylogdata.price).toFixed(5)}}</view>
			<view class="itemnum">{{historylogdata.amountSum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data(){
			return{
				
			}
		},
		props:{
			historylogdata:{
				type:Object,
				default:()=>{},
			}
// 			amountExecuted: "0"
// amountSum: "44"
// createTime: "2020-09-26 11:53:10"
// orderType: 1
// price: "1"
// symbolType: 1
// tradeOrderId: "1309702526571905024"
        },
        computed:{
            footerArray(){
				return this.$store.state.defaultData.footerArray;
            },
            footerSelected(){
                return this.$store.state.defaultData.footerSelected;
            },
            theme(){
                return this.$storage.getSync({key:'theme'});
			},
			KLineTradingPair(){
				return this.$store.state.tradeData.KLineTradingPair;
			},

		},
		methods:{
			cancelTrade(item){
				this.$emit('cancelTrade',item)
			}
		}
	}
</script>

<style lang="less">
	.logitem{
		clear: both;
		width: 690rpx;
		height: 220rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
        margin: 10rpx auto ;
        box-sizing: border-box;
        padding: 30rpx 20rpx 0;
		.oneline{
			// margin-left: 20rpx;
            // margin-right: 20rpx;
            height: 44rpx;
            line-height: 44rpx;
			.buyitin{
				color: #FC3C5A;
                margin-right: 5rpx;
                
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FC3C5A;
			}
			.buyitem{
				font-size: 32rpx;
				color: #1A1A1A;
				float: left;
			}
			.buyitin.buy{
				color: #5BC788;
			}
			.buyitin.sell{
				color: #FC3C5A;
			}
			.cancelitem{
				float: right;
				width: 88rpx;
                height: 44rpx;
                box-sizing: border-box;
				border-radius: 8rpx;
				border: 2rpx solid #FC3C5A;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FC3C5A;
				line-height: 40rpx;
				text-align: center;
				// margin-top: 15rpx;
			}
		}
		.twoline{
			// margin-left: 20rpx;
			// margin-right: 10rpx;
			clear: both;
			margin-top: 20rpx;
            height: 40rpx;
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #8D989E;
            line-height: 40rpx;
            margin: 20rpx 0;
			.item-tr-left{
				float: left;
			}
			.item-tr-right{
                float: right;
                text-align: right;
			}
		}
		.threeline{
			clear: both;
			
            height: 40rpx;
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #00001A;
            line-height: 40rpx;
			.itemcharge{
				float: left;
			}
			.itemnum{
				float: right;
			}
		}
    }
    .logitem.black{
		background: #272A2E;
		.oneline{
			.buyitin{
				color: #FC3C5A;
			}
			.buyitem{
				color:#D9DADB;
			}
			.cancelitem{
				border: 2rpx solid #FC3C5A;
				color: #FC3C5A;
				// margin-top: 15rpx;
			}
		}
		.twoline{
			// margin-left: 20rpx;
			// margin-right: 10rpx;
            color: #D9DADB;
		}
		.threeline{
            color: #D9DADB; 
		}
	}
</style>
