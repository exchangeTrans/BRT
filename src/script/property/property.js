import pageHeader from '@/components/common/header.vue'
import PropertyCard from "../../components/property/propertyCard";

export default {
    name: "property",
    components: {
        PropertyCard,
        pageHeader
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        // console.log(theme);
        if(theme === 'white'){
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
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            };
            this.isBlack = true;
        }
    },
    data() {
        return {
            propertyCardData: [
                {
                    name: "BRT",
                    money: "1200",
                    aboutMoney: "9000",
                    availableBalance: "400",
                    lockBalance: "800",
                },
                {
                    name: "USDT",
                    money: "",
                    aboutMoney: "",
                    availableBalance: "",
                    lockBalance: "",
                },
                {
                    name: "BTC",
                    money: "",
                    aboutMoney: "",
                    availableBalance: "",
                    lockBalance: "",
                }
            ],
            headerOptions: {
                show: true,
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
                headerIsNoBoder: true,
            },
            isBlack: false,
        }
    },
    methods: {}
}