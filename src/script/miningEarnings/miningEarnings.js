
import appHeader from "@/components/common/header.vue";
import earningsRecordList from "@/components/earningsRecordList/index.vue";
import noData from "@/components/noData/index.vue";
export default {
    components:{
        appHeader,
        earningsRecordList,
        noData
    },
    mounted(){
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                    isAllowReturn:true,
                    text:"挖矿收益",
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
                text:"挖矿收益",
                rightItem:{
                    type:"text",
                    text:"",
                    style: {}
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
            headerOptions:{},



            titleLine:`${require('@/static/images/set/titleLine.png')}`,
            subBg:`${require('@/static/images/sub/subBg.png')}`,
            circleBg:`${require('@/static/images/sub/circleBg.png')}`,
            circleBg2:`${require('@/static/images/sub/circleBg2.png')}`,
            circleBg3:`${require('@/static/images/sub/circleBg3.png')}`,
            notice:`${require('@/static/images/sub/notice.png')}`,

            earningsRecordData:[
                {
                    type:'挖矿收益',
                    num:'+190.32',
                    time:'2020/09/28'
                },
                {
                    type:'挖矿收益',
                    num:'+190.32',
                    time:'2020/09/28'
                }
            ]

        }
    },
    onLoad() {

    },
    methods: {

    }
}
