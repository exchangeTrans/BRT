import appHeader from "@/components/common/header.vue";
export default {
    components:{
        appHeader,
    },

    mounted(){
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "量化收益",
                rightItem: {
                    type: "text",
                    text: "",
                },
                background: '#ffffff',
                headerIsNoBoder: true,

            }
        }else {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:"量化收益",
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{
                    'color':'#D9DADB'
                },
                //background:'#ffffff',
                headerIsNoBoder: true
            }
        }
		this.getusermsg();
		this.useriverst();
		this.setRate();
    },
    data() {
        return {
            headerOptions:{

            },

            topBg:`${require('@/static/images/earning/topBg.png')}`,
            moneyIcon:`${require('@/static/images/earning/moneyIcon.png')}`,
            logoIcon:`${require('@/static/images/earning/logoIcon.png')}`,
            sliderValue:50,
            selectedTab:'earningInfo',
            rulerText:'量化理财运行七天后或是收益率达到止盈率或止损率时，量化馀额会自动转入可用馀额。量化运行时可以转入加仓，但不可提现。最少需投入1000 USDT才可进行量化。'
        }
    },
    onLoad() {

    },
    methods: {
        transferInAmount(){
            this.$refs.transferInAmount.open();
        },
        sliderChange(e) {
            this.sliderValue= e.detail.value;
        },
        chooseTab(item){
            this.selectedTab=item;
        },
		//数据请求
		getusermsg(){
			this.$request({
				url:"finance/getFinance",
				method:"post",
				params:'',
			}).then((res)=>{
				console.log(res)
			}).catch((err)=>{
				console.log(err)
			})
		},
		//无数据
		useriverst(){
			this.$request({
				url:"finance/inFinance",
				method:"post",
				params:{
					amount:'1000',
					pageRepeatCode:'ybh'
				}
			}).then((res)=>{
				console.log(res)
			}).catch((err)=>{
				console.log(err)
			})
		},
		//无数据
		setRate(){
			this.$request({
				url:"finance/setRate",
				method:"post",
				params:{
					rateType:'1',
					rateValue:'0.6'
				}
			}).then((res)=>{
				console.log(res);
			}).catch((err)=>{
				console.log(err)
			})
		}
    }
}
