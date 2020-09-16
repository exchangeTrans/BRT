import appHeader from "@/components/common/header.vue"

export default {
    components: {
        appHeader,
    },
    name: "promotion",
    data() {
        return {
            totalIncomeImg: `url(${require('@/static/images/promotion/background.png')})`,
            headerOptions: {
                show: true,
                isAllowReturn: true,
                isWhiteIcon:true,
                text: "推广收益",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            recordsData: [
                {
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },{
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },{
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },{
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },{
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },{
                    name: "推广收益",
                    money: "+190.32 BRT",
                    date: "2020/09/28",
                },
            ],
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        console.log(theme);
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "推广收益",
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
                isWhiteIcon:true,
                text: "推广收益",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    methods: {
        headertap(type) {
            console.log(type)
        }
    }
}