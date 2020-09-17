import btn from "@/components/btn/index.vue"
import appHeader from "@/components/common/header.vue"
import chooseLanguage from "@/components/chooseLanguage/index.vue"
export default {
    components:{
        appHeader,
        btn,
        chooseLanguage,
    },

    mounted(){
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                text:"设置",
                rightItem:{
                    type:"text",
                    text:"",
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }else {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:"设置",
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{
                    'color':'#D9DADB'
                },

                background: '#00001A',
                headerIsNoBoder: true,
            }
        }
    },
    data() {
        return {
            headerOptions:{

            },
            currencyData:[
                {
                    name:'人民币（RMB）',
                    img:`${require('@/static/images/set/rmb.png')}`,
                },
                {
                    name:'美元（USD）',
                    img:`${require('@/static/images/set/dollar.png')}`,
                },
                {
                    name:'韩元（KRW）',
                    img:`${require('@/static/images/set/yen.png')}`,
                }
            ],
            titleLine:`${require('@/static/images/set/titleLine.png')}`,

            background:'linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%)',
            borderRadius:'50rpx',
            modelFlag:'day',//day 白天模式；night 黑夜模式
        }
    },
    onLoad() {

    },
    methods: {
        chooseModel(item){
            this.modelFlag=item;
        }
    }
}
