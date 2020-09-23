
import appHeader from "@/components/common/header.vue";
import recordAmount  from '@/static/js/recordNum.js'
import earningsRecordList from "@/components/earningsRecordList/index.vue";
import noData from "@/components/noData/index.vue";
import UniLoadMore from "@/components/uni-load-more/uni-load-more";
export default {
    components:{
        appHeader,
        earningsRecordList,
        noData,
        UniLoadMore
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
            haveNext:true,
            status:'more'

        }
    },
    onLoad() {

    },

    methods: {

        //获取挖矿收益
        getMiningInterest(isMore){
            if (this.haveNext){
                let postData={
                    start:0,
                    index:recordAmount.num,
                };
                this.request(postData,isMore);
                if (isMore){
                    this.status='loading'
                }
            }else {
                this.status='noMore'
            }

        },

        request(postData,isMore){
            let that =this;
            this.$request({
                url: "mining/getMiningInterest",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    //判断是否还有数据
                    if (res.data.list.length<recordAmount.num){
                        this.haveNext=true;
                        this.status='noMore'
                    }else {
                        that.status='more'
                    }
                    //判断是第一次加载还是加载更多
                    if (isMore){
                        that.earningsRecordData.concat(res.data.list);

                    }else {
                        that.miningEarningsData=res.data;
                        that.earningsRecordData=res.data.list;
                    }

                }else{
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        }

    }
}
