import appHeader from '@/components/common/header.vue'
export default {
    name: "personalInfo",
    components: {
        appHeader
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: this.$t('personInfo').title,
                isWhiteIcon: false,
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            nickname: "CS1997",
            avatarUrl: `url(${require('@/static/images/user/avatar.png')})`,
            modifyUrl: `url(${require('@/static/images/user/modifyIcon.png')})`,
        }
    },
    mounted() {

    },
    methods: {
        saveBtnClick() {

        }
    },
}
