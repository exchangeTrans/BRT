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
        }
    },
}
