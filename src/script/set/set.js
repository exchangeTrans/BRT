import btn from "@/components/btn/index.vue"
import appHeader from "@/components/common/header.vue"
import chooseLanguage from "@/components/chooseLanguage/index.vue"

export default {
    components: {
        appHeader,
        btn,
        chooseLanguage,
    },

    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "设置",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "设置",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#D9DADB'
                },

                background: '#00001A',
                headerIsNoBoder: true,
            }
        };

        //获取语言信息
        let langMsg = this.$storage.getSync({key:'langMsg'});
        this.languageItem = langMsg;
        //获取币种信息
        let currency = this.$storage.getSync({key:'currency'})
        this.selectedObj = currency;
        // this.languageItem = langMsg;
        //获取store里面的currency列表
        let currencyList = this.$store.state.defaultData.currency;
        // let langArray = this.$store.state.defaultData.langArray;
        this.currencyData = currencyList[langMsg.name];


        this.selectedCurrency = this.$store.state.defaultData.selectedCurrency;
    },
    data() {
        return {
            headerOptions: {},
            currencyData: [
                // {
                //     name: '人民币（RMB）',
                //     img: `${require('@/static/images/set/rmb.png')}`,
                //     nameCode: "zh-CN",
                // },
                // {
                //     name: '美元（USD）',
                //     img: `${require('@/static/images/set/dollar.png')}`,
                //     nameCode:"en-US",
                // },
                // {
                //     name: '韩元（KRW）',
                //     img: `${require('@/static/images/set/yen.png')}`,
                //     nameCode: "ko-KR",
                // }
            ],
            titleLine: `${require('@/static/images/set/titleLine.png')}`,
            selectedIcon:`${require('@/static/images/user/select.png')}`,

            background: 'linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%)',
            borderRadius: '50rpx',
            modelFlag: 'day',//day 白天模式；night 黑夜模式

            languageItem:{
                // name: "简体中文",
                // nameCode:"zh-CN",
                // icon: `${require('@/static/images/user/Chinese.png')}`,
            },//语言

            selectedObj:{
                name: '人民币',
                img: `${require('@/static/images/set/rmb.png')}`,
                code: "CNY",
                unit:'¥'
            },//币种类

        }
    },
    onLoad() {

    },
    methods: {
        chooseModel(item) {
            this.modelFlag = item;
        },

        chooseLanguage(languageItem) {
            // console.log(languageItem)
            this.languageItem = languageItem;
        },

        chooseCurrencyData(item) {
            // console.log(item);
            this.selectedObj = item;
        },

        btnClick(){
            //币种
            this.$store.commit("setDefaultSync", {
                key: "selectedCurrency",//币种
                val: this.selectedObj,
            });
            this.$storage.setSync({key: "currency", data: this.selectedObj});

            //语言
            // let langData = langArray[langMsg]
            this.$storage.setSync({key: "langMsg", data: this.languageItem});

        },
    }
}
