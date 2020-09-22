import pageHeader from '@/components/common/header.vue'
import PropertyCard from "../../components/property/propertyCard";

export default {
    name: "property",
    components: {
        PropertyCard,
        pageHeader
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
                headerIsNoBoder: false,
            };
            this.isBlack = false;
        } else {
            this.headerOptions = {
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
                    url:"",
                    text:"转账",
                },
            ],
            isBlack: false,
        }
    },
    methods: {
        getHome() {
            let that = this
            this.$request({
                url: "wallet/getHome",
                method: "post"
            }).then((res) => {
                    if (res.result.returnCode === "0") {
                        let data = res.data
                        data.list.forEach(i => {
                            let obj = {
                                name: i.symbolTitle.toUpperCase(),
                                money: i.asset,
                                aboutMoney: i.asset / i.usdt,
                                availableBalance: i.balance,
                                lockBalance: i.frozen,
                                symbolType: i.symbolType,
                            }
                            that.propertyCardData.push(obj)
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
