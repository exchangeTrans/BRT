import appHeader from "@/components/common/header.vue";
import earningBtn from "@/components/btn/index.vue";
import transferInAmount from "@/components/popup/transferInAmount/index.vue";
import subRuler from "@/components/popup/subRuler/index.vue";

export default {
    components: {
        appHeader,
        earningBtn,
        transferInAmount,
        subRuler
    },

    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "量化理财",
                rightItem: {
                    type: "text",
                    text: "",
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
                    'color': '#D9DADB'
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
            headerOptions: {},
            background: 'linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%)',
            borderRadius: '50rpx',
            topBg: `${require('@/static/images/earning/topBg.png')}`,
            moneyIcon: `${require('@/static/images/earning/moneyIcon.png')}`,
            logoIcon: `${require('@/static/images/earning/logoIcon.png')}`,
            sliderValue: 50,
            selectedTab: 'earningInfo',
            rulerText: '量化理财运行七天后或是收益率达到止盈率或止损率时，量化馀额会自动转入可用馀额。量化运行时可以转入加仓，但不可提现。最少需投入1000 USDT才可进行量化。',
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
                interestRateDay: ''
            },
        }
    },
    onLoad() {

    },
    methods: {
        transferInAmount() {
            this.$refs.transferInAmount.open();
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
        //数据请求
        getusermsg() {
            this.$request({
                url: "finance/getFinance",
                method: "post",
                params: '',
            }).then((res) => {
                console.log(res)
                this.userdata.financeBalance = res.data.financeBalance,
                    this.userdata.loan = res.data.loan,
                    this.userdata.maxDawndown = res.data.maxDawndown,
                    this.userdata.minLimit = res.data.minLimit,
                    this.userdata.stopLoseRate = res.data.stopLoseRate,
                    this.userdata.stopWinRate = res.data.stopWinRate,
                    this.userdata.usdtBalance = res.data.usdtBalance,
                    this.userdata.interestRateDay = res.data.interestRateDay,
                    this.userdata.interestRate = res.data.interestRate
                // let arr = res.data.interestRate.split(".");
            }).catch((err) => {
                console.log(err)
            })
        },
        //无数据
        useriverst() {
            this.$request({
                url: "finance/inFinance",
                method: "post",
                params: {
                    amount: '1000',
                    pageRepeatCode: 'ybh'
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        //无数据
        setRate() {
            this.$request({
                url: "finance/setRate",
                method: "post",
                params: {
                    rateType: '1',
                    rateValue: '0.6'
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
        },

        //转入加仓
        addStorehouse() {

        },
        //下载app
        downloadAPP() {

        },

		transferInAmountSuccess(){
			this.$refs.transferInAmount.transfer()
		}
    }
}
