import pageHeader from '@/components/common/header.vue'

export default {
    name: "success",
    components: {
        pageHeader,
    },
    data() {
        return {
            successImg: `${require('@/static/images/success/sub.png')}`,
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "",
                rightItem: {
                    // type: "text",
                    // text: "须知&反馈",
                    // style: {
                    //     "fontSize": '28rpx',
                    //     "fontFamily": 'Source Han Sans CN',
                    //     "fontWeight": '400',
                    //     "color": 'rgba(68,68,68,1)'
                    // }
                },

                headerIsNoBoder: false,
            },
            accounts:'',
        }
    },
    mounted(){
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show: true,
                isAllowReturn: true,
                text: "",
                rightItem: {
                    // type: "text",
                    // text: "须知&反馈",
                    // style: {
                    //     "fontSize": '28rpx',
                    //     "fontFamily": 'Source Han Sans CN',
                    //     "fontWeight": '400',
                    //     "color": 'rgba(68,68,68,1)'
                    // }
                },

                headerIsNoBoder: false,
            }
        }else {
            this.headerOptions={
                show: true,
                isAllowReturn: true,
                isWhiteIcon:true,
                text: "",
                rightItem: {
                    // type: "text",
                    // text: "须知&反馈",
                    // style: {
                    //     "fontSize": '28rpx',
                    //     "fontFamily": 'Source Han Sans CN',
                    //     "fontWeight": '400',
                    //     "color": 'rgba(68,68,68,1)'
                    // }
                },

                headerIsNoBoder: true,
            }
        }
    },
    onLoad(options) {
        this.accounts = options.account;
    },
    methods: {
        finishTransfer(){
            this.$jumpPage.jump({
                type:'navigateBack'
            })
        }
    },
}
