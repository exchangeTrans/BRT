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
                text: this.$t('setting').settingText,
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
                text: this.$t('setting').settingText,
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

        if(theme === 'white'){
            this.modelFlag = 'day'//day 白天模式；night 黑夜模式
        }else if(theme === 'black') {
            this.modelFlag = 'night'
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
                code: "RMB",
                unit:'¥'
            },//币种类

        }
    },
    onLoad() {

    },
    methods: {
        chooseModel(item) {
            // if(item==='day'){
            //     this.$storage.setSync({key: "theme", data: "white"});
            // }else{
            //     this.$storage.setSync({key: "theme", data: "black"});
                
            // }
            // let that = this;
            // setTimeout(() => {
            //     that.$jumpPage.jump({
            //         type: 'reLaunch',
            //         url: 'set/index'
            //     }) 
            // }, 100);
            if(item==='day'){
                this.modelFlag = item;
            }else if(item==='night'){
                this.$toast.show({
                    title: this.$t('setting').noOpen,
                })
            }

        },

        chooseLanguage(languageItem) {
            // console.log(languageItem)
            this.languageItem = languageItem;
            // if(languageItem.name==='zh-CN'){
            //     this.languageItem = languageItem;
            // }else{
            //     this.$toast.show({
            //         title: this.$t('setting').noOpen,
            //     })
            // }
            this.$storage.set({key:'lang',data:languageItem.name})
            this.$lang = this.$i18nObj.messages[JSON.parse(uni.getStorageSync('lang')).value]

            // if(languageItem.name==='zh-CN'){
            //     this.languageItem = languageItem;
            // }else{
            //     this.$toast.show({
            //         title: this.$t('setting').noOpen,
            //     })
            // }


        },

        chooseCurrencyData(item) {
            if(item.code==='"RMB"'){
                this.selectedObj = item;
            }else{
                this.$toast.show({
                    title: this.$t('setting').noOpen,
                })
            }
            
        },

        btnClick(){
            let modelFlag = this.modelFlag
            if(modelFlag === 'night'){
                this.$storage.setSync({key: "theme", data: "black"});
            }else if(modelFlag === 'day') {
                this.$storage.setSync({key: "theme", data: "white"});
            }
            //币种

            this.$store.commit("setDefaultSync", {
                key: "selectedCurrency",//币种
                val: this.selectedObj,
            });
            this.$storage.setSync({key: "currency", data: this.selectedObj});

            //语言
            // let langData = langArray[langMsg]
            this.$storage.setSync({key: "langMsg", data: this.languageItem});

            this.$jumpPage.jump({
                type: 'reLaunch',
                url: 'user/user',
            })

        },
    }
}
