import appHeader from "@/components/common/header.vue";
import earningsRecordList from "@/components/earningsRecordList/index.vue";
import noData from "@/components/noData/index.vue";
import recordAmount  from '@/static/js/recordNum.js'
export default {
    components: {
        appHeader,
        earningsRecordList,
        noData
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
            haveNext:true,
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "矿池分红",
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
                    start:0,
                    index:recordAmount.num,
                };
                this.request(postData,isMore);
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
                        this.haveNext=true;
                    }
                    //判断是第一次加载还是加载更多
                    if (isMore){
                        that.earningsRecordData.concat(res.data.list);
                    }else {
                        that.total= res.data.total;
                        that.vipType= res.data.vipType;
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