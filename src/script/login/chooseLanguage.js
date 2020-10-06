import btn from "@/components/btn/index.vue"
import appHeader from "@/components/common/header.vue"
import chooseLanguage from "@/components/chooseLanguage/index.vue"

export default {
    components: {
        appHeader,
        chooseLanguage,
    },

    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: this.$t('chooseLanguage').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    // 'top': 'var(--status-bar-height)'
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: this.$t('chooseLanguage').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                style: {
                    'color': '#D9DADB',
                    // 'top': 'var(--status-bar-height)'
                },

                background: '#00001A',
                headerIsNoBoder: true,
            }
        }

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



            languageItem:{
                // name: "简体中文",
                // nameCode:"zh-CN",
                // icon: `${require('@/static/images/user/Chinese.png')}`,
            },//语言

            

        }
    },
    onLoad() {

    },
    methods: {

        chooseLanguage(languageItem) {
            // console.log(languageItem)
            // this.languageItem = languageItem;
            // if(languageItem.name==='zh-CN'){
                this.languageItem = languageItem;
            // }else{
            //     this.$toast.show({
            //         title: this.$t('setting').noOpen,
            //     })
            // }
            this.$storage.set({key:'lang',data:languageItem.name})
            this.$storage.set({key:'langMsg',data:languageItem});
            // this.$lang = this.$i18nObj.messages[JSON.parse(uni.getStorageSync('lang')).value]
            this.$i18n.locale = languageItem.name;
            this.headerOptions.text=this.$t('chooseLanguage').title;
            // if(languageItem.name==='zh-CN'){
            //     this.languageItem = languageItem;
            // }else{
            //     this.$toast.show({
            //         title: this.$t('setting').noOpen,
            //     })
            // }


        },
    }
}
