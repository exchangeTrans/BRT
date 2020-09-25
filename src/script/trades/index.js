
	import dataList from '../../components/trades/datalist.vue'
	import historylog from '../../components/trades/historylog.vue'
	import tradelist from '@/components/trades/tradeList.vue'
	import pageFooter from '@/components/common/footer.vue'
	import uniDrawer from '@/components/uniComponents/uni-drawer/uni-drawer.vue'
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
			// headerData:[
			// 	{
			// 		code:'buy',
			// 		name:'买'
			// 	},
			// 	{
			// 		code:'sell',
			// 		name:'卖'
			// 	}
			// ],
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
			showdata:true
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
	  mounted(){
		let symbolType = this.KLineTradingPair.name;
		let symbolCode = String(this.symbolDefaultData[symbolType])
		this.getTradeInfo(symbolCode);
	  },
	  methods:{
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
			this.$request({
				url:'trade/getTradeInfo',
				method:'post',
				params:postData
			}).then((res)=>{
				if (res.result.returnCode.toString() === "0") {
					// this.close();
					// this.$emit('transferInAmountSuccess')
				}else{
					// this.$toast.show({
					// 	title: res.result.returnMessage,
					// })
				}
			})
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
