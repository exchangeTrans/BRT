
import appHeader from "@/components/common/header.vue";
import recordAmount  from '@/static/js/recordNum.js'
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
                    text:this.$t('miningEarnings').title,
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
                text:this.$t('miningEarnings').title,
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

        this.getMiningInterest();
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

            miningEarningsData:{},

            earningsRecordData:[
                // {
                //     type:'挖矿收益',
                //     num:'+190.32',
                //     time:'2020/09/28'
                // },
                // {
                //     type:'挖矿收益',
                //     num:'+190.32',
                //     time:'2020/09/28'
                // }
            ],
            isMore:true,


        }
    },
    onLoad() {

    },

    methods: {


        //获取挖矿收益
        getMiningInterest(){
            let that =this;
            let postData={
                start:0,
                index:recordAmount.num,
            };
            this.$request({
                url: "mining/getMiningInterest",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    that.miningEarningsData=res.data;
                    that.earningsRecordData=res.data.list;
                    if (res.data.list.length<recordAmount.num){
                        that.isMore=false;
                    }
                }else{
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        },


       //获取更多挖矿收益
        getMoreMiningInterest(){
            let that =this;
            if (!this.isMore){
                return;
            }
            let postData={
                start:0,
                index:recordAmount.num,
            };
            this.$request({
                url: "mining/getMiningInterest",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    that.earningsRecordData.concat(res.data.list);
                    if (res.data.list.length<recordAmount.num){
                        that.isMore=false;
                    }
                }else{
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        },
    }
}
