import appHeader from "@/components/common/header.vue";
import earningsRecordList from "@/components/earningsRecordList/index.vue";
import noData from "@/components/noData/index.vue";
import recordAmount  from '@/static/js/recordNum.js'
// import UniCountdown from "@/components/uni-countdown/uni-countdown";
//     import UniLoadMore from "@/components/uni-load-more/uni-load-more";
    
export default {
    components: {
        appHeader,
        earningsRecordList,
        noData,
        // UniLoadMore, UniCountdown
    },
    name: "bonus",
    data() {
        return {
            time: `${require("@/static/images/set/time.png")}`,
            noDataImg: `${require("@/static/images/set/noData.png")}`,
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "矿池分红",

                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,*/
            },
            earningsRecordData: [
                /*{
                    type: 'V1收益',
                    num: '+190.32 BRT',
                    time: '2020/09/28'
                },
                {
                    type: 'V1收益',
                    num: '+190.32 BRT',
                    time: '2020/09/28'
                },*/
            ],
            isBlack: true,
            total: "",
            vipType: 0,
            vipTypeArray:{
                0:{
                    text:this.$t('bonus').vipArray[0],
                    level:0
                },
                1:{
                    text:this.$t('bonus').vipArray[1],
                    level:0
                },
                2:{
                    text:this.$t('bonus').vipArray[2],
                    level:0
                },
                3:{
                    text:this.$t('bonus').vipArray[3],
                    level:0
                },
                4:{
                    text:this.$t('bonus').vipArray[4],
                    level:0
                },
            },
            haveNext:true,
            dayNum:0,
            hourNum:0,
            minuteNum:0,
            status:'more',
            isNoDataFlag:false,

        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        let that = this;
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: that.$t('bonus').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = false;
            this.BtnackgroundColor = "#B4BBC0";
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: that.$t('bonus').title,
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = true;
            this.BtnackgroundColor = "#8C939B";
        }
        this.getVIPInterest();

    },
    methods: {


        //获取矿池分红（VIP收益）
        getVIPInterest(isMore){
            if (this.haveNext){
                let postData={
                    start:this.earningsRecordData.length,
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
                url: "mining/getVIPInterest",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    //判断是否还有数据
                    if (res.data.list.length<recordAmount.num){
                        this.haveNext=false;
                        this.status='noMore'
                    }else {
                        that.status='more'
                    }
                    //判断是第一次加载还是加载更多
                    if (isMore){
                        that.earningsRecordData=that.earningsRecordData.concat(res.data.list);
                    }else {
                        that.total= res.data.total;
                        that.vipType= res.data.vipType;
                        that.dayNum=res.data.periodDay;
                        that.earningsRecordData=res.data.list;
                        this.getTime();

                        //判断是否有数据
                        if (res.data.list.length===0){
                            that.isNoDataFlag=true;
                        }else {
                            that.isNoDataFlag=false;
                        }
                    }
                }else{
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        },


        //获取当前时间距离23时59分的时间
        getTime(){
            let nightTime = new Date(new Date().toLocaleDateString()).getTime() +24 * 60 * 60 * 1000 -1;
            let newTime = new Date().getTime();
            let leftTime = parseInt((nightTime- newTime) / 1000);

            this.hourNum= parseInt(leftTime / (60 * 60) % 24);
            this.minuteNum = parseInt(leftTime / 60 % 60);
        }

    },

}
