
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
			green:{
				bgc:"#DEF4E7",
				fonts_color:"#5BC788"
			},
			red:{
				bgc:"#FEEBEE",
				fonts_color:"#FC3C5A"
			},

			tradePrice:'',
			tradeNum:'',
			tradeAll:0,
			headerData:[
				{
					code:'1',
					name:'币币交易'
				},
				{
					code:'2',
					name:'合约交易'
				}
			],
			selectHeader:{
				code:'1',
				name:'币币交易'
			},
			tradeNameData:[
				{
					code:'buy',
					name:'买入',
					id:'1'
				},
				{
					code:'sale',
					name:'卖出',
					id:'2'
				}
			],
			selectedTradeName:{
				code:'buy',
				name:'买入',
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
					money:"0.0653",
					num:"500"
				},
				{
					money:"0.0653",
					num:"500"
				},
				{
					money:"0.0653",
					num:"500"
				},
				{
					money:"0.0653",
					num:"500"
				},
				{
					money:"0.0653",
					num:"500"
				},
			],
			historylogdata_list:[
				{
					charge:10,
					num:0.98
				},
				{
					charge:20,
					num:1.98
				},
				{
					charge:30,
					num:2.98
				},
			],
			tradelistOptions:[
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+3.0%",
					status:0
				},
				{
					type:"USDT/BRT",
					number:"14.5689",
					per:"+4.0%",
					status:1
				},
			],
			showmask:false,
			shownodata:true,
			showdata:true,
			tradeInfo:{},
			checkArray: [
                {
                    name: "价格",
                    checkKey: "price",
                },
                {
                    name: "数量",
                    checkKey: "amount",
                },
            ],
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
		}
		// tradeNoticeData(){
		// 	return this.$store.state.tradeData.tradeNoticeData;
		// },
		// tradeRangeData(){
		// 	return this.$store.state.tradeData.tradeRangeData;
		// }

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

	  },
	  mounted(){
		let symbolType = this.KLineTradingPair.name;
		let symbolCode = String(this.symbolDefaultData[symbolType])
		this.getTradeInfo(symbolCode);
	  },
	  methods:{
		choosePrecent(item){
			// debugger
			let num = this.selectedTradeName.code==='buy'?(this.tradeInfo.usdtBalanceNum?this.tradeInfo.usdtBalanceNum:0):(this.tradeInfo.symbolBalanceNum?this.tradeInfo.symbolBalanceNum:0)
			this.tradeNum = Number(num)*item.val
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
			this.closeDrawer()
		},
		selectTradeHeader(item){
			if(item.code==='2'){
				this.$toast.show({
					title: "暂未开放此功能",
				})
			}
		},
		getTradeInfo(symbolType){
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
					let usdtBalance = res.data.usdtBalance.replace(",","")
					let symbolBalance = res.data.symbolBalance.replace(",","")
					let data = {
						...res.data,
						usdtBalanceNum:Number(usdtBalance),
						symbolBalanceNum:Number(symbolBalance),
					}
					that.tradeInfo = data;
					// console.log(Number(usdtBalance)) 
					// this.$emit('transferInAmountSuccess')
				}else{
					// this.$toast.show({
					// 	title: res.result.returnMessage,
					// })
				}
			})
		},
		tradeFunc(){
			let postData = this.getPostData();
			if(postData){
				let that = this;
				this.$request({
					url:'trade/trade',
					method:'post',
					params:postData
				}).then((res)=>{
					if (res.result.returnCode.toString() === "0") {
						
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
