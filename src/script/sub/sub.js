
import appHeader from "@/components/common/header.vue";
import transferInAmount from "@/components/popup/transferInAmount/index.vue";
import subRuler from "@/components/popup/subRuler/index.vue";
import noData from "@/components/noData/index.vue";
export default {
    components:{
        appHeader,
        subRuler,
        transferInAmount,
        noData
    },
    mounted(){

        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                    isAllowReturn:true,
                    text:"质押挖矿",
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
                text:"质押挖矿",
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{
                    'color': '#D9DADB'
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    data() {
        return {
            positionTop:'60rpx',
            headerOptions:{},

            subBg:`${require('@/static/images/sub/subBg.png')}`,
            circleBg:`${require('@/static/images/sub/circleBg.png')}`,
            circleBg2:`${require('@/static/images/sub/circleBg2.png')}`,
            circleBg3:`${require('@/static/images/sub/circleBg3.png')}`,
            notice:`${require('@/static/images/sub/notice.png')}`,

        }
    },
    onLoad() {

    },
    methods: {
        transferInAmount(){
            this.$refs.transferInAmount.open();
        },
        showNotice(){
            this.$refs.subRuler.open();
        }
    }
}
