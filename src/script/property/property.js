import pageHeader from '@/components/common/header.vue'
import PropertyCard from "../../components/property/propertyCard";
import pageFooter from '@/components/common/footer.vue';
import {getMoney} from "../../static/js/changeMoney";
export default {
    name: "property",
    components: {
        PropertyCard,
        pageHeader,
        pageFooter,
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        let that = this;
        // console.log(theme);
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: false,
                text:that.$t('property').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                headerIsNoBoder: true,
            };
            this.isBlack = false;
        } else {
            this.headerOptions = {
                /*show: true,
                isAllowReturn: false,
                text: "资产",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,*/

                show: true,
                isAllowReturn: false,
                text: that.$t('property').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A !important',
                headerIsNoBoder: true,
            };
            this.isBlack = true;
        }
        this.getHome()
    },
    data() {
        return {
            balanceTotal: 0,
            freezeTotal: 0,
            amountTotal: 0,
            amountTotalRMB: 0,
            propertyCardData: [],
            headerOptions: {
                show: true,
                isAllowReturn: false,
                text: this.$t('property').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            },
            propertyOption: [
                {
                    url:"receipt/index",
                    text:this.$t('property').receipt,
                },
                {
                    url:"withdrawal/withdrawal",
                    text:this.$t('property').withdrawal,
                },
            ],
            isBlack: false,
            drawSymbol: {
                "drawList": [
                    "XRP",
                    "BCH",
                    "LTC",
                    "XMR",
                    "EOS",
                    "DASH",
                ],
            }
        }
    },
    watch: {
        balanceTotal(val) {

            let res = val.replace(/,/g,"");
            let freezeTotal = this.freezeTotal.replace(/,/g,"");
            let amountTotal = Number(freezeTotal) + Number(res);
            this.amountTotal = amountTotal.toFixed(2);
        },
        freezeTotal(val) {
            let res = val.replace(/,/g,"");
            let balanceTotal = this.balanceTotal.replace(/,/g,"");
            let amountTotal = Number(balanceTotal) + Number(res);
            this.amountTotal = amountTotal.toFixed(2);
            // this.amountTotal = parseInt(this.balanceTotal) + parseInt(val)
        },
        amountTotal(val) {
            // let rate = this.$store.state.wallet.rate["USDTRMB"]
            // let amountTotalRMB = Number(val.replace(/,/g,"")) * Number(rate);
            this.amountTotalRMB = getMoney(val,'USDT').price
            // this.amountTotalRMB =amountTotalRMB.toFixed(2)
            // let amountIndex = this.amountTotalRMB.toString().indexOf(".")
            // if (amountIndex > 0) {
            //     this.amountTotalRMB = this.amountTotalRMB.toString().substring(0, amountIndex) + "." + this.amountTotalRMB.toString().substring(amountIndex + 1, amountIndex + 3)
            // } else {
            //     this.amountTotalRMB = this.amountTotalRMB
            // }
        },
        tradePairData(res){
            // console.log(res)
            this.getDataList(this.propertyCardData)
        }
    },
    computed:{

		selectedCurrency(){
            return this.$store.state.defaultData.selectedCurrency;
        },
        // tradingSymol(){
        //     return this.$store.state.tradeData.tradingSymol;
        // },
        tradePairData(){
            return this.$store.state.tradeData.tradePairData;
        }

    },
    methods: {
        stopPenetrate(){
            return;
        },
        getHome() {
            let that = this
            this.$request({
                url: "wallet/getHome",
                method: "post"
            }).then((res) => {
                    if (res.result.returnCode === "0") {
                        let data = res.data;
                        let frozenIndex = data.totalUsdtFrozen.toString().indexOf(".")
                        if (frozenIndex > 0) {
                            that.freezeTotal = data.totalUsdtFrozen.toString().substring(0, frozenIndex) + "." + data.totalUsdtFrozen.toString().substring(frozenIndex + 1, frozenIndex + 3)
                        } else {
                            that.freezeTotal = data.totalUsdtFrozen
                        }

                        let balanceIndex = data.totalUsdtBalance.toString().indexOf(".")
                        if (balanceIndex > 0) {
                            that.balanceTotal = data.totalUsdtBalance.toString().substring(0, balanceIndex) + "." + data.totalUsdtBalance.toString().substring(balanceIndex + 1, balanceIndex + 3)
                        } else {
                            that.balanceTotal = data.totalUsdtBalance
                        }
                        that.getDataList(data.list)
                        
                    } else {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                    }
                }
            )
        },
        getDataList(data){
            // console.log(data)
            let tradingSymol= this.$store.state.tradeData.tradingSymol;
            this.propertyCardData = data.map(function (item) {
                item.asset = item.asset.replace(/,/g,"");
                let symbolTitle = item.symbolTitle.toUpperCase();
                let nowData = tradingSymol[symbolTitle].nowData
                // console.log(item)
                let price = nowData===null?1:nowData.close;
                price = Number(price)*Number(item.asset)
                let aboutMoney = getMoney(price,'USDT')
                let res = {
                    ...item,
                    name: item.symbolTitle.toUpperCase(),
                    money: item.asset,
                    aboutMoney: aboutMoney.price,
                    availableBalance: item.balance,
                    lockBalance: item.frozen,
                    symbolType: item.symbolType,
                }
                return res
            })
        }
    }
}
