import QuotesItem from "../../components/quotes/quotesItem";
import pageHeader from '@/components/common/header.vue';
import pageFooter from '@/components/common/footer.vue';

export default {

    name: "quotes",
    components: {
        QuotesItem,
        pageHeader,
        pageFooter,

    },
    data() {
        return {
            active: 1,
            quotesData: [
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "unchanging",
                    img:`${require('@/static/images/quotes/TATO.png')}`,
                },{
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "down",
                    img:`${require('@/static/images/quotes/IMU.png')}`,
                },{
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },
                {
                    name: "TATO",
                    number: 1,
                    price: "1.0000",
                    rate: "0.00%",
                    status: "up",
                    img:`${require('@/static/images/quotes/HBT.png')}`,
                },

            ],
            currencyIcon: `${require('@/static/images/quotes/down.png')}`,
            upsAndDownsIcon: `${require('@/static/images/quotes/upAndDown.png')}`,
            headerOptions: {
                show:true,
                isAllowReturn:false,
                text:this.$t('quotes').title,
                rightItem:{
                    type:"text",
                    /*path: `${require('@/static/images/quotes/search.png')}`,
                    style:{
                        'width':'48rpx',
                        'height':'48rpx',
                    }*/
                },
                headerIsNoBoder: false,
            },
        };
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        let that = this;
        // console.log(theme);
        if(theme === 'white'){
            this.headerOptions = {
                show:true,
                isAllowReturn:false,
                text:that.$t('quotes').title,
                rightItem:{
                    type:"text",
                    /*path: `${require('@/static/images/quotes/search.png')}`,
                    style:{
                        'width':'48rpx',
                        'height':'48rpx',
                    }*/
                },
                headerIsNoBoder: false,
            };
        } else {
            this.headerOptions = {
                show:true,
                isAllowReturn:false,
                text:that.$t('quotes').title,
                rightItem:{
                    type:"icon",
                    path: `${require('@/static/images/quotes/blacksearch.png')}`,
                    style:{
                        'width':'48rpx',
                        'height':'48rpx',
                    }
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            };
        }
    },
    
    computed:{
        quotationData(){
            return this.$store.state.tradeData.tradePairData;
        },
        // tradeNoticeData(){
        // 	return this.$store.state.tradeData.tradeNoticeData;
        // // },
        // // tradeRangeData(){
        // // 	return this.$store.state.tradeData.tradeRangeData;
        // // }
        // tradingSymol(){
        //     return this.$store.state.tradeData.tradingSymol;
        // },
        // selectSymbol(){
        //     return this.$store.state.tradeData.selectSymbol;
        // },
        // selectedCurrency(){
        //     return this.$store.state.defaultData.selectedCurrency;
        // }
    },
    methods: {
        switchTab(index) {
            this.active = index;
        },
    },
};