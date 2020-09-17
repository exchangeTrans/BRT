
import appHeader from "@/components/common/header.vue";
import transferInAmount from "@/components/popup/transferInAmount/index.vue";
export default {
    components:{
        appHeader,
        transferInAmount
    },
    data() {
        return {
            headerOptions:{
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:"矿池",
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{

                    'color': '#D9DADB'
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            },

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
        }
    }
}
