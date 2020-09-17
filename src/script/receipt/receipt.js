import appHeader from '@/components/common/header.vue'
export default {
    components:{
        appHeader
    },
    mounted(){
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                text:"USTD收款",
                rightItem:{
                    type:"text",
                    text:"充币记录",
                    path:`${require('@/static/images/receipt/detail.png')}`,
                    style:{
                        'fontSize':'28rpx',
                        'color':'#098FE0'
                    },
                    tipText:'ID:AVV491',
                    haveTip:true
                },
                background:'#ffffff',

                headerIsNoBoder: true,
            }
        }else{
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:"USTD收款",
                rightItem:{
                    type:"text",
                    text:"充币记录",
                    path:`${require('@/static/images/receipt/detail.png')}`,
                    style:{
                        'fontSize':'28rpx',
                        'color':'#098FE0'
                    },
                    tipText:'ID:AVV491',
                    haveTip:true
                },
                style:{
                    'color':'#D9DADB'
                },
                background:'#00001A',

                headerIsNoBoder: true,
            }
        }
    },
    data() {
        return {
            headerOptions:{},
            rightIcon:`${require('@/static/images/receipt/rightIcon.png')}`

        }
    },
    onLoad() {

    },
    methods: {
        createAddress(){

        },
        importAddress(){

        }
    }
}
