export default {
    name: "loginOrRegs",
    components: {},
    data() {
        return {
            indexBackgroundImg: `url(${require('@/static/images/login/loginOrRegs.png')})`,
            languageIcon: `url(${require('@/static/images/login/chinese.png')})`,
            iconBackground: `url(${require('@/static/images/login/choiceIcon.png')})`,
            languageText: "简体中文",
            loginBtn: this.$t('loginOrRegs').loginBtn,
            regsBtn: this.$t('loginOrRegs').regsBtn,
        }
    },
    mounted() {

    },
    computed:{
        langMsg(){
            return this.$store.state.defaultData.langMsg;
        }, 


        // 		tradingSymol: [
        //     {name:'BRT',isLocal:true},
        //     {name:'USDT',isLocal:true},
        //     {name:'BTC',isLocal:false},
        //     {name:'ETH',isLocal:false},
        //     {name:'XRP',isLocal:false},
        //     {name:'BCH',isLocal:false},
        //     {name:'LTC',isLocal:false},
        //     {name:'XMR',isLocal:false},
        // ],
        // selectSymbol:{name:'USDT',isLocal:false},
        // quotationData:{},

    },
    methods: {
        jumpLogin() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'login/login'
            })
        },
        jumpRegs() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'regs/regs'
            })
        },
        toLang(){            
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'login/chooseLanguage'
            })
        }
    },
}
