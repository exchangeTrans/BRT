import appHead from '@/components/common/header.vue'
import earningsRecordList from "@/components/earningsRecordList/index.vue"
import noData from "@/components/noData/index.vue"
import recordAmount  from '@/static/js/recordNum.js'
export default {
    name: "promoteBonus",
    components: {
        appHead,
        earningsRecordList,
        noData
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: this.$t('promoteBonus').title,
                isWhiteIcon: true,
                style: {
                    'fontSize': '36rpx',
                    'fontFamily': 'PingFangSC-Semibold, PingFang SC',
                    'fontWeight': '600',
                    'color': '#FFFFFF',
                },
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            earningsRecordData: [/*{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            },{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            },{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            },{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            },{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            },{
                type: "推广算力收益",
                num: "190.32",
                time: "2020/09/28"
            }*/],

            promoteBonusData:{},


            // avatarUrl: `url(${require('@/static/images/user/avatar.png')})`,
            inviteBonusRecordIcon: `url(${require('@/static/images/earning/promteBonusRecordIcon.png')})`,
            // nickname: "CSIji7833",
            // id: "893432",
            // vipLevel: 1,
            // bonusTotalNums: "1343.32万",
            // bonusNowNums: "643.32万",
            // bonusLastDayNums: "423万",
            haveNext:true,
        }
    },
    mounted() {
        this.getShareInterest();
    },
    methods: {

        //获取推广收益
        getShareInterest(isMore){
            if (this.haveNext){
                let postData={
                    start:0,
                    index:recordAmount.num,
                };
                this.request(postData,isMore);
            }

        },

        request(postData,isMore){
            let that =this;
            this.$request({
                url: "mining/getShareInterest",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    //判断是否还有数据
                    if (res.data.list.length<recordAmount.num){
                        this.haveNext=true;
                    }
                    //判断是第一次加载还是加载更多
                    if (isMore){
                        that.earningsRecordData.concat(res.data.list);
                    }else {
                        that.promoteBonusData=res.data;
                        that.earningsRecordData=res.data.list;
                    }

                }else{
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        }



    },
}