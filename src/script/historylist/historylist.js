import historyhead from '../../components/common/header'
import historylist from '../../components/history_list/history_list'
export default {
	components: {
		historyhead,
		historylist
	},

	data() {
		return {
			headerOptions: {

			},
			listOptions: []
		}
	},
	computed:{
		tradeListData(){
			return this.$store.state.tradeData.tradePairData;
		},
		KLineTradingPair(){
			return this.$store.state.tradeData.KLineTradingPair;
		},
		selectedCurrency(){
            return this.$store.state.defaultData.selectedCurrency;
		},
		symbolDefaultData(){
			return this.$store.state.tradeData.symbolDefaultData
		},
		userInfo(){
			return this.$store.state.defaultData.userInfo
		}
		// tradeNoticeData(){
		// 	return this.$store.state.tradeData.tradeNoticeData;
		// },
		// tradeRangeData(){
		// 	return this.$store.state.tradeData.tradeRangeData;
		// }

	},
	watch:{
		userInfo(res){
			this.initHeader()
		}
	},
	mounted() {
		this.initHeader()
		this.getList()
	},
	methods:{
		initHeader(){
			let theme = this.$storage.getSync({
				key: 'theme'
			});
			let userInfo = this.$store.state.defaultData.userInfo
			let inviteCode = userInfo.inviteCode?userInfo.inviteCode:''
	
			if (theme === 'white') {
				this.headerOptions = {
					show: true,
					isAllowReturn: true,
					text: "历史记录",
					background: "#FFFFFF",
	
					rightItem: {
						type: "text",
						text: "ID:" + inviteCode,
						style: {
							"fontSize": '24rpx',
							"fontFamily": 'PingFangSC-Regular, PingFang SC;',
							"fontWeight": '400',
							"color": 'rgba(68,68,68,1)'
						}
					},
					style: {
						color: "#000000"
					},
					isWhiteIcon: false,
					headerIsNoBoder: false,
				}
			} else {
				this.headerOptions={
					show: true,
					isAllowReturn: true,
					text: "历史记录",
					background: "#00001A",
					isWhiteIcon: true,
					rightItem: {
						type: "text",
						text: "ID:" + inviteCode,
						style: {
							"fontSize": '24rpx',
							"fontFamily": 'PingFangSC-Regular, PingFang SC;',
							"fontWeight": '400',
							"color": 'rgba(68,68,68,1)'
						}
					},
					style: {
						color: "#D9DADB"
					},
					headerIsNoBoder: true,
				}
			}
		},
		getList(){
			let symbolType = this.KLineTradingPair.name;
			let symbolCode = String(this.symbolDefaultData[symbolType])
			let postData={
				symbolType: symbolCode
			};
			let that = this;
			this.$request({
				url:'trade/getLogTradeInfo',
				method:'post',
				params:postData
			}).then((res)=>{
				if (res.result.returnCode.toString() === "0") {
					// that.listOptions = res.data.orderList;
					that.listOptions = res.data.orderList.map(function (item) {
						return {
							...item,
							price:String(item.price).replace(/,/g,""),
							amountExecuted:String(item.amountExecuted).replace(/,/g,""),
						}
					})
					// this.close();
					// let usdtBalance = res.data.usdtBalance.replace(",","")
					// let symbolBalance = res.data.symbolBalance.replace(",","")
					// let data = {
					// 	...res.data,
					// 	usdtBalanceNum:Number(usdtBalance),
					// 	symbolBalanceNum:Number(symbolBalance),
					// }
					// that.tradeInfo = data;
					// console.log(Number(usdtBalance))
					// this.$emit('transferInAmountSuccess')
				}else{
					// this.$toast.show({
					// 	title: res.result.returnMessage,
					// })
				}
			})
		}
	}

}
