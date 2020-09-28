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
        // console.log(theme);
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: false,
                text: "资产",
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
                text: "资产",
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
                text: "资产",
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
                    text:"收款",
                },
                {
                    url:"withdrawal/withdrawal",
                    text:"转账",
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
                "tip": "此币只开发提现",
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
    },
    computed:{

		selectedCurrency(){
            return this.$store.state.defaultData.selectedCurrency;
		},

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
                        let data = res.data
                        var that = this
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
                        data.list.forEach(i => {
                            i.asset = i.asset.replace(/,/g,"")
                            // let aboutMoney = getMoney(i.asset,i.symbolTitle.toUpperCase())
                            // console.log(aboutMoney)deb
                            let aboutMoney = getMoney(i.asset,i.symbolTitle.toUpperCase())
                            // let aboutMoney = 0
                            let a = {
                                name: i.symbolTitle.toUpperCase(),
                                money: i.asset,
                                aboutMoney: aboutMoney.price,
                                availableBalance: i.balance,
                                lockBalance: i.frozen,
                                symbolType: i.symbolType,
                            }
                            that.propertyCardData.push(a)
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                    }
                }
            )
        }
    }
}
