import {getMoney} from "@/static/js/changeMoney";
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
        klineShowFlag:'0',
        buyFlag:'0',
        sellFlag:'0',
        closeRefresh:false,
        brtPriceObj:{
            price:0,
            priceRate:0,
            range:0
        },
        isAllowCancle:true,
        tapeData:{
            asks:[
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
            ],
            bids:[
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
                {
                    size:0.00,
                    price:0.00,
                    all:0.00,
                    percent:100,
                    depth:0.00
                },
            ],
        }
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
        let res = this.$store.state.tradeData.KLineTradingPair.tape;
        let tradesOptions_list = this.tradesOptions_list;
        let defult = {
            asks:tradesOptions_list,
            bids:tradesOptions_list
        }
        res = res&&res!==null?res:defult
        return res

    },
    tradingSymol(){
        return this.$store.state.tradeData.tradingSymol
    },

  },
  watch:{
    tradePrice(res){

        let {tradePrice,tradeNum} = this;
        if(tradePrice!==''&&tradePrice!==null&&tradeNum!==''&&tradeNum!==null){
            this.tradeAll = Number(tradePrice)*Number(tradeNum)
        }else{
            this.tradeAll=0;
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
  beforeDestroy(){
    this.closeRefresh = true;
  },
  methods:{
    toKline(){
        this.$store.dispatch('getKline',{
            period:'5min',
        });
        let that = this;
        let klineShowFlag = this.klineShowFlag;
        if(klineShowFlag===0||klineShowFlag==="0"){
            this.$toast.show({
                title: that.$t('maintain'),
            })
        }else{
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'trade/index'
            })
        }
        
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
        let tradeNum = 0;
        if(selectedTradeName.code==='buy'){
            tradeNum = (Number(pr)/Number(tradePrice))*item.val
        }else{
            tradeNum =  Number(pr)*item.val
        }

        let symbolType = this.KLineTradingPair.name;
        // if(symbolType==='BRT'){
            tradeNum = Math.ceil(tradeNum)
        // }
        tradeNum = Math.floor(tradeNum)
        
        this.tradeNum = tradeNum;
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
        // this.getTradeInfo(symbolCode);
        this.$mySocket.subscribeDepth(item);
        this.$mySocket.subscribeDetail();
        this.$mySocket.subscribeTape(item);
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
        if(this.closeRefresh) return
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
                let usdtBalance = res.data.usdtBalance.replace(/,/g,"")
                let symbolBalance = res.data.symbolBalance.replace(/,/g,"")
                let data = {
                    ...res.data,
                    usdtBalanceNum:Number(usdtBalance),
                    symbolBalanceNum:Number(symbolBalance),
                }
                that.tradeInfo = data;
                that.historylogdata_list = data&&data.orderList?data.orderList:[];
                let klineShowFlag = data.klineShowFlag?res.data.klineShowFlag:'0';
                that.klineShowFlag = klineShowFlag;
                let buyFlag = data.buyFlag?res.data.buyFlag:'0';
                that.buyFlag = buyFlag;
                let sellFlag = data.sellFlag?res.data.sellFlag:'0';
                that.sellFlag = sellFlag;
                // that.creatTapeData(data);
                // that.createBrtPrice(data);
                // let symbolPrice = data.symbolPrice?res.data.symbolPrice:0;
                // that.upDataRange_BRT(symbolPrice)
                setTimeout(() => {
                    that.getTradeInfo()
                }, 1000);
                // console.log(Number(usdtBalance)) 
                // this.$emit('transferInAmountSuccess')
            }else{
                // this.$toast.show({
                // 	title: res.result.returnUserMessage,
                // })
            }
        })
    },
    createBrtPrice(data){
        let symbolPrice = Number(data.symbolPrice);
        let priceRate = getMoney(symbolPrice,"USDT").price;
        let range = 0;
        let KLineTradingPair = this.KLineTradingPair;
        let tradingSymol = this.tradingSymol;
        let nowData = tradingSymol[KLineTradingPair.name].nowData;
        let open = nowData===null?0:nowData.open;
        range = (((symbolPrice-open)/open).toFixed(4))*100;
        let brtPriceObj={
            price:symbolPrice,
            priceRate:priceRate,
            range:range
        }
        this.brtPriceObj =brtPriceObj;
        
        
    },
    creatTapeData(data){
        let asks = this.handleTapeData(data.sellList);
        let bids = this.handleTapeData(data.buyList);
        this.tapeData={
            asks,
            bids
        }
    },
    handleTapeData(data){
        // if(data.length===0){
        //     return []
        // }
        let all = 0;
        let depth = 0;
        let NewData = []
        for (let index = 0; index < 5; index++) {
            let item = data[index];
            let obj = {
                size:0.00,
                price:0.00,
                all:all,
                percent:100,
                depth:depth
            }
            if(item){
                all = all+item.amountSum;
                depth=depth+item.amountSum;
                let percent=(depth/all)*2
                percent = percent>1?1:percent;
                percent = percent*100;
                let price = String(item.price).replace(/,/g,"");
                let size = String(item.amountSum).replace(/,/g,"");
                obj = {
                    size:Math.round(size),
                    price:Number(price).toFixed(3),
                    all:all,
                    percent:percent,
                    depth:depth
                }
            }
            NewData.push(obj)
            
        }
        return NewData
    },
    // upDataRange_BRT(symbolPrice){
        
    // },
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
                let klineShowFlag = data.klineShowFlag?res.data.klineShowFlag:'0';
                that.klineShowFlag = klineShowFlag;
                let buyFlag = data.buyFlag?res.data.buyFlag:'0';
                that.buyFlag = buyFlag;
                let sellFlag = data.sellFlag?res.data.sellFlag:'0';
                that.sellFlag = sellFlag;
                // let symbolPrice = data.symbolPrice?res.data.symbolPrice:0;
                // that.upDataRange_BRT(symbolPrice)
                setTimeout(() => {
                    that.refreshHistory()
                }, 1000);
            }else{
            }
        })
    },
    tradeFunc(){



        if(!this.isAllowTrade){
            return
        }
        let that = this;
        let symbolType = this.KLineTradingPair.name;
        let {buyFlag,sellFlag,selectedTradeName} = this;
        if(symbolType==='BRT'){
            if(selectedTradeName.code==='buy'&&(buyFlag==='0'||buyFlag===0)){
                this.$toast.show({
                    title: that.$t('tradePage').tradeFlgTip,
                })
                return
            }
            if(selectedTradeName.code==='sale'&&(sellFlag==='0'||sellFlag===0)){
                this.$toast.show({
                    title: that.$t('tradePage').tradeFlgTip,
                })
                return
            }
        }

        // let buyFlag = data.buyFlag?res.data.buyFlag:'0';
        // that.buyFlag = buyFlag;
        // let sellFlag = data.sellFlag?res.data.sellFlag:'0';
        // that.sellFlag = sellFlag;





        this.isAllowTrade = false;
        let postData = this.getPostData();
        if(postData){
            this.$request({
                url:'trade/trade',
                method:'post',
                params:postData
            }).then((res)=>{
                
                if (res.result.returnCode.toString() === "0") {
                    that.tradeNum='';
                    that.tradePrice='';
                    that.isAllowTrade = true;
                    // that.getTradeInfo();
                    that.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                    that.$store.dispatch('getUserMsg');
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
                    that.isAllowTrade = true;
                    that.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
            })
        }else{
            that.isAllowTrade = true;
        }
    },
    cancelTrade(item){
        let that = this;
        let symbolType = this.KLineTradingPair.name;
        let symbolCode = String(this.symbolDefaultData[symbolType])
        // this.getTradeInfo(symbolCode);
        if(!this.isAllowCancle){
            return
        }
        this.isAllowCancle = false;
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
                setTimeout(() => {
                    that.isAllowCancle=true;
                }, 1000);
            }else{
                this.$toast.show({
                    title: res.result.returnUserMessage,
                })
                setTimeout(() => {
                    that.isAllowCancle=true;
                }, 1000);
            }
        })
    },
    
    inputChange(e,type){
        let KLineTradingPair = this.$store.state.tradeData.KLineTradingPair;
        let value = e.detail.value;
        if(KLineTradingPair.name==='BRT'){
            
            if(type==='tradePrice'){
                // value = value.to;
                // value = String(value);
                value = value.substring(0,value.indexOf(".") + 4);
                // value = Math.round(value*1000)/1000
                // var a = "23.456322";
                
                // var re = /([0-9]+.[0-9]{3})*/;
                // aNew = value.replace(re,"$1");
                // alert(aNew);
                // console.log(aNew)
                this.tradePrice= value;
            }else if(type==='tradeNum'){
                value = value.replace(/[^0-9]/g,"")
                this.tradeNum= Number(value);
            }
        }else{
            this[type] = Number(value);
        }
        // if()
        
    },
    blur(){
        let KLineTradingPair = this.$store.state.tradeData.KLineTradingPair;
        if(KLineTradingPair.name==='BRT'){
                let value = String(this.tradePrice);
                value = value.substring(0,value.indexOf(".") + 4);
                this.tradePrice= Number(value);
        }
        
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
