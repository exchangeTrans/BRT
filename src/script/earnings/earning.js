import appHeader from "@/components/common/header.vue";
import earningBtn from "@/components/btn/index.vue";
import financierInAmount from "@/components/popup/financierInAmount/index.vue";
import subRuler from "@/components/popup/subRuler/index.vue";

export default {
	components: {
		appHeader,
		earningBtn,
		financierInAmount,
		subRuler
	},

	mounted() {
		let theme = this.$storage.getSync({
			key: 'theme'
		});
		if (theme === 'white') {
			this.headerOptions = {
				show: true,
				isAllowReturn: true,
				text: "量化理财",
				rightItem: {
					type: "text",
					text: "",
				},
                style: {
                    // 'top': 'var(--status-bar-height)'
                },
				background: '#ffffff',
				headerIsNoBoder: true,

			}
		} else {
			this.headerOptions = {
				show: true,
				isAllowReturn: true,
				isWhiteIcon: true,
				text: "量化理财",
				rightItem: {
					type: "text",
					text: "",
				},
				style: {
					'color': '#D9DADB',
					// 'top': 'var(--status-bar-height)'
				},
				//background:'#ffffff',
				headerIsNoBoder: true
			}
		}
		this.getusermsg();
		// this.useriverst();
		// this.setRate();
		// this.asset();
	},
	data() {
		return {
			headerOptions: {

			},
			background: 'linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%)',
			borderRadius: '50rpx',
			topBg: `${require('@/static/images/earning/topBg.png')}`,
			moneyIcon: `${require('@/static/images/earning/moneyIcon.png')}`,
			logoIcon: `${require('@/static/images/earning/logoIcon.png')}`,
			sliderValue: 50,
			selectedTab: 'earningInfo',
			rulerText:'量化理财运行七天后或是收益率达到止盈率或止损率时，量化馀额会自动转入可用余额。量化运行时可以转入加仓，但不可提现。最少需投入1000 USDT才可进行量化。',
			transferDate: {},
			showincome_earing: true,
			showdata_earing: false,
			userdata: {
				financeBalance: '',
				interestRatehead: '',
				interestRatefoot: '',
				loan: '',
				maxDawndown: '',
				minLimit: '',
				stopLoseRate: '',
				stopWinRate: '',
				usdtBalance: '',
				interestRateDay: '',
				interestRate:''
			},
			interestrate:{
				leftnum:'',
				rightnum:''
			}
		}
	},
	onLoad() {

	},
	methods: {
		transferInAmount() {
			this.$refs.financierInAmount.open();
		},
		sliderChange(e) {
			this.sliderValue = e.detail.value;
		},
		chooseTab(item) {
			this.selectedTab = item;
			if (item == 'earningInfo') {
				this.showincome_earing = true,
					this.showdata_earing = false
			}
			if (item == 'data') {
				this.showincome_earing = false,
					this.showdata_earing = true
			}
		},
		showNotice() {
			this.$refs.subRuler.open();
		},
		setincomerate(){
			console.log("inceom");
				this.$request({
					url: "finance/setRate",
					method: "post",
					params: {
						rateType: '1',
						rateValue: this.userdata.stopWinRate
					}
				}).then((res) => {
					this.$toast.show({
						title: '设置成功',
					})
				}).catch((err) => {
					console.log(err)
				})
		},
		setlossrate(){
			console.log("loss")
				this.$request({
					url: "finance/setRate",
					method: "post",
					params: {
						rateType: '2',
						rateValue: this.userdata.stopLoseRate
					}
				}).then((res) => {
					this.$toast.show({
						title: '设置成功',
					})
				}).catch((err) => {
					console.log(err)
				})
		},
		//数据请求
		getusermsg() {
			this.$request({
				url: "finance/getFinance",
				method: "post",
				params: '',
			}).then((res) => {
				this.userdata.financeBalance = res.data.financeBalance,
					this.userdata.loan = res.data.loan,
					this.userdata.maxDawndown = res.data.maxDawndown+'%',
					this.userdata.minLimit = res.data.minLimit,
					this.userdata.stopLoseRate = res.data.stopLoseRate+'%',
					this.userdata.stopWinRate = res.data.stopWinRate+'%',
					this.userdata.usdtBalance = res.data.usdtBalance,
					this.userdata.interestRateDay = res.data.interestRateDay,
					this.userdata.interestRate = res.data.interestRate
					if( res.data.interestRate==='0'){
						parseInt(res.data.interestRate);
						res.data.interestRate='0.00';
						let arr = res.data.interestRate.split('.');
						this.interestrate.left = parseInt(arr[0])
						this.interestrate.right = parseInt(arr[1]);
					}else {
						let arr = res.data.interestRate.split('.');
						this.interestrate.left = parseInt(arr[0]);
						this.interestrate.right = parseInt(arr[1].substring(0,2));
					}

			}).catch((err) => {
				console.log(err)
			})
		},
		//无数据
		// useriverst() {
		// 	this.$request({
		// 		url: "finance/inFinance",
		// 		method: "post",
		// 		params: {
		// 			amount: '1000'
		// 		}
		// 	}).then((res) => {
		// 		console.log(res)
		// 	}).catch((err) => {
		// 		console.log(err)
		// 	})
		// },

		//转入加仓
		addStorehouse() {

		},
		//下载app
		downloadAPP() {

		},
		transferInAmountSuccess(account){
			this.getusermsg()
			this.$jumpPage.jump({
				url:'sub/success?account='+account,
				type:'navigateTo'
			});
			page.onLoad();
		},
		//空投
		// asset(){
		//     let that = this;
		//     let postData={
		//         inviteCode:'HHP652',
		//         symbolType:9,
		//         amount:10000
		//     };
		//     this.$request({
		//         url: "wallet/asset",
		//         method: "post",
		//         params:postData
		//     }).then((res)=>{
		// 		console.log(res)
		//     })
		// },
	}

}
