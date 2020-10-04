
	import dataList from '../../components/trades/datalist.vue'
	import historylog from '../../components/trades/historylog.vue'
	import tradelist from '@/components/trades/tradeList.vue'
	import pageFooter from '@/components/common/footer.vue'
	import uniDrawer from '@/components/uniComponents/uni-drawer/uni-drawer.vue'
	import {
		checkDataFunc,
	} from "../../static/js/common.js";
	export default {
	  components: {dataList,historylog,tradelist,pageFooter,uniDrawer},
	  
	  created(){
	  		  this.judgedata();
	  },
	  data(){
	    return{
			isAllowTrade:true,
			green:{
				bgc:"#DEF4E7",
				fonts_color:"#5BC788"
			},
			red:{
				bgc:"#FEEBEE",
				fonts_color:"#FC3C5A"
			},
			blackgreen:{
				bgc:"#2D453C",
				fonts_color:"#5BC788"
			},
			blackred:{
				bgc:"rgba(252, 60, 90,0.1)",
				fonts_color:"#FC3C5A"
			},

			tradePrice:'',
			tradeNum:'',
			tradeAll:0,
			headerData:[
				{
					code:'1',
					name:this.$t('tradePage').headerTab[0]
				},
				{
					code:'2',
					name:this.$t('tradePage').headerTab[1]
				}
			],
			selectHeader:{
				code:'1',
				name:this.$t('tradePage').headerTab[0]
			},
			tradeNameData:[
				{
					code:'buy',
					name:this.$t('tradePage').buy,
					id:'1'
				},
				{
					code:'sale',
					name:this.$t('tradePage').sell,
					id:'2'
				}
			],
			selectedTradeName:{
				code:'buy',
				name:this.$t('tradePage').buy,
				id:'1'
			},
			precentList:[
				{val:0.25,text:'25%'},
				{val:0.50,text:'50%'},
				{val:0.75,text:'75%'},
				{val:1,text:'100%'},
			],
			tradesOptions_list:[
				{
					price:"0.00",
					size:0,
					all:0,
					percent:100,
					depth:0,
				},
				{
					price:"0.00",
					size:0,
					all:0,
					percent:100,
					depth:0,
				},
				{
					price:"0.00",
					size:0,
					all:0,
					percent:100,
					depth:0,
				},
				{
					price:"0.00",
					size:0,
					all:0,
					percent:100,
					depth:0,
				},
				{
					price:"0.00",
					size:0,
					all:0,
					percent:100,
					depth:0,
				},
			],
			historylogdata_list:[],
			tradelistOptions:[
				
			],
			showmask:false,
			shownodata:true,
			showdata:true,
			tradeInfo:{},
			checkArray: [
                {
                    name: this.$t('tradePage').prcie,
                    checkKey: "price",
                },
                {
                    name: this.$t('tradePage').number,
                    checkKey: "amount",
                },
            ],
		}
	  },
	  
		props: {
			tradeCode: {
				type: String,
				default: 'buy',
			},
		},
	  
	  onLoad(options) {
		  if(options.code){
			  this.selectedTradeName={
				  code:options.code
			  }
		  }
		// this.details_msg_list = JSON.parse(options.details_list).reverse();
		// console.log(details_msg_list);
		// this.id = options.id
		// console.log(this.details_msg_list);
		// console.log(this.id)
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
		depthData(){
			let res = this.$store.state.tradeData.KLineTradingPair.depth;
			let tradesOptions_list = this.tradesOptions_list;
			let defult = {
				asks:tradesOptions_list,
				bids:tradesOptions_list
			}
			res = res&&res!==null?res:defult
			return res

		}

	  },
	  watch:{
		tradePrice(res){
			let {tradePrice,tradeNum} = this;
			if(tradePrice!==''&&tradePrice!==null&&tradeNum!==''&&tradeNum!==null){
				this.tradeAll = Number(tradePrice)*Number(tradeNum)
			}
		},
		tradeNum(res){
			let {tradePrice,tradeNum} = this;
			if(tradePrice!==''&&tradePrice!==null&&tradeNum!==''&&tradeNum!==null){
				this.tradeAll = Number(tradePrice)*Number(tradeNum)
			}else{
				this.tradeAll = 0;
			}
		},
		tradeInfo(res){
			// this.historylogdata_list = res&&res.orderList?res.orderList:[];
		},
		tradeCode(res){
			this.selectedTradeName={
				code:res&&res!==''&&res!==null?res:'buy'
			}
		}

	  },
	  mounted(){
		let {tradeCode} = this.$props;
		let code = tradeCode&&tradeCode!==''&&tradeCode!==null?tradeCode:'buy'
		this.selectedTradeName={
			code,
			id:code==='buy'?'1':'2',
		}
		let symbolType = this.KLineTradingPair.name;
		let symbolCode = String(this.symbolDefaultData[symbolType])
		this.getTradeInfo(symbolCode);
	  },
	  methods:{
		toKline(){
            this.$store.dispatch('getKline',{
                period:'5min',
            });
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'trade/index'
            })
		},
		changeTradeType(item){
			this.selectedTradeName = item;
		},
		choosePrecent(item){
			let that = this;
			let {tradePrice,selectedTradeName,tradeInfo} = this;
			let pr = selectedTradeName.code==='buy'?(tradeInfo.usdtBalanceNum?tradeInfo.usdtBalanceNum:0):(tradeInfo.symbolBalanceNum?tradeInfo.symbolBalanceNum:0);
			pr = String(pr).replace(/,/g,"");
			if(String(tradePrice).trim()===''||Number(tradePrice)===0){
				this.$toast.show({
					title: that.$t('tradePage').tip1,
				})
				return
			}
			if(selectedTradeName.code==='buy'){
				this.tradeNum = (Number(pr)/Number(tradePrice))*item.val
			}else{
				this.tradeNum =  Number(pr)*item.val
			}
			
			// 可用馀额/用户上方填写的价格 * 用户选择的百分比。如果用户没有填写价格
		},
		reduce(code){
			let data = this[code];
			data = (data===''||data===null||data===0||data==='0')?0:(Number(data)-1)
			this[code]  =data;
		},
		add(code){
			let data = this[code];
			data = (data===''||data===null)?1:(Number(data)+1);
			this[code]  =data;
		},
		chooseTradePair(item){
			this.$store.commit("setTredDataSync",{key:"KLineTradingPair", val: item,})
			this.closeDrawer();
			let symbolType = item.name;
			let symbolCode = String(this.symbolDefaultData[symbolType])
			this.getTradeInfo(symbolCode);
			this.$mySocket.subscribeDepth(item);
			this.$mySocket.subscribeDetail();
		},
		selectTradeHeader(item){
			let that = this;
			if(item.code==='2'){
				this.$toast.show({
					title: that.$t('tradePage').tip2
				})
			}
		},
		getTradeInfo(symbolType){
			if(!symbolType){
				symbolType = this.KLineTradingPair.name;
				symbolType = String(this.symbolDefaultData[symbolType])
			}
			
			let postData={
				symbolType: symbolType
			};
			let that = this;
			this.$request({
				url:'trade/getTradeInfo',
				method:'post',
				params:postData
			}).then((res)=>{
				if (res.result.returnCode.toString() === "0") {
					
					// this.close();
					let usdtBalance = res.data.usdtBalance.replace(/,/g,"")
					let symbolBalance = res.data.symbolBalance.replace(/,/g,"")
					let data = {
						...res.data,
						usdtBalanceNum:Number(usdtBalance),
						symbolBalanceNum:Number(symbolBalance),
					}
					that.tradeInfo = data;
					that.historylogdata_list = data&&data.orderList?data.orderList:[];
					setTimeout(() => {
						that.getTradeInfo()
					}, 3000);
					// console.log(Number(usdtBalance)) 
					// this.$emit('transferInAmountSuccess')
				}else{
					// this.$toast.show({
					// 	title: res.result.returnMessage,
					// })
				}
			})
		},
		refreshHistory(){
			let symbolType =  this.KLineTradingPair.name;
			symbolType = String(this.symbolDefaultData[symbolType])			
			let postData={
				symbolType: symbolType
			};
			let that = this;
			this.$request({
				url:'trade/getTradeInfo',
				method:'post',
				params:postData
			}).then((res)=>{
				if (res.result.returnCode.toString() === "0") {
					that.historylogdata_list = res.data&&res.data.orderList?res.data.orderList:[];
					setTimeout(() => {
						that.refreshHistory()
					}, 3000);
				}else{
				}
			})
		},
		tradeFunc(){
			if(!this.isAllowTrade){
				return
			}
			this.isAllowTrade = false;
			let postData = this.getPostData();
			if(postData){
				let that = this;
				this.$request({
					url:'trade/trade',
					method:'post',
					params:postData
				}).then((res)=>{
					that.isAllowTrade = true;
					if (res.result.returnCode.toString() === "0") {
						this.getTradeInfo();
						this.$toast.show({
							title: res.result.returnUserMessage,
						})
						this.$store.dispatch('getUserMsg');
						// // this.close();
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
						this.$toast.show({
							title: res.result.returnMessage,
						})
					}
				})
			}
		},
		cancelTrade(item){
			let that = this;
			let symbolType = this.KLineTradingPair.name;
			let symbolCode = String(this.symbolDefaultData[symbolType])
			// this.getTradeInfo(symbolCode);
			let postData={
				orderId: item.tradeOrderId,
				symbolType:item.symbolType
			};
			this.$request({
				url:'trade/cancel',
				method:'post',
				params:postData
			}).then((res)=>{
				if (res.result.returnCode.toString() === "0") {
					
					this.$toast.show({
						title: res.result.returnUserMessage,
					})
					this.getTradeInfo();
				}else{
					this.$toast.show({
						title: res.result.returnMessage,
					})
				}
			})
		},
		
		inputChange(e,type){
			let value = e.detail.value;
            this[type] = e.detail.value;
		},
		getPostData() {
            // debugger
            let orderType = this.selectedTradeName.id;
            let amount = this.tradeNum;
            let price = this.tradePrice;
            let symbolType = String(this.symbolDefaultData[this.KLineTradingPair.name])
            let checkArray= this.checkArray;
            // console.log(checkArray);

            let postData = {
                orderType,
                amount,
                price,
                symbolType,
            };

            if (checkDataFunc.checkBasics(postData, checkArray)) {
                return postData = {
                    ...postData,
                }
            } else {
                return false
            }
        },
		// /trade/getTradeInfo
		judgedata(){
					if(this.showdata){
						this.showdata=true,
						this.shownodata=false
					}
		},
		gohistorylog(){
			this.$jumpPage.jump({
				type:'navigateTo',
				url:'historylist/index'
			})
		},
		change(){

		},
		// 打开窗口
		showDrawer() {
		  this.$refs.showLeft.open()
		  
		},
		// 关闭窗口
		closeDrawer() {
			this.$refs.showLeft.close()
		},
	  },
	  
	};
