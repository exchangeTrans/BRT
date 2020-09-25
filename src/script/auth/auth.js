import appHeader from "@/components/common/header.vue"
export default {
    name: "auth",
    components: {
        appHeader,
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        /*if (theme === 'white') {
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
        }*/
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "实名认证",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            authStatusImg:"",
            authStatusAwaitImg:`${require('@/static/images/auth/certify.png')}`,
            authStatusCheckImg:`${require('@/static/images/auth/check.png')}`,
            example:`${require('@/static/images/auth/example.png')}`,

        }
    }
}