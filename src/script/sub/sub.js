import cancelPledge from "@/components/popup/cancelPledge/index.vue";
import appHeader from "@/components/common/header.vue";
import transferInAmount from "@/components/popup/transferInAmount/index.vue";
import subRuler from "@/components/popup/subRuler/index.vue";
import noData from "@/components/noData/index.vue";
import {DateFunc} from "../../static/js/common";

export default {
    components:{
        appHeader,
        subRuler,
        transferInAmount,
        noData,
        cancelPledge
    },
    mounted(){

        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                text:this.$t('sub').title,
                rightItem:{
                    type:"text",
                    text:"",
                },

                style:{
                 //   'top': 'var(--status-bar-height)'
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }else {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:this.$t('sub').title,
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{
                    'color': '#D9DADB',
                   // 'top': 'var(--status-bar-height)'
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    data() {
        return {
            positionTop:'-80rpx',
            headerOptions:{},

            subBg:`${require('@/static/images/sub/subBg.png')}`,
            circleBg:`${require('@/static/images/sub/circleBg.png')}`,
            circleBg2:`${require('@/static/images/sub/circleBg2.png')}`,
            circleBg3:`${require('@/static/images/sub/circleBg3.png')}`,
            notice:`${require('@/static/images/sub/notice.png')}`,
            subData:{},
            subRecord:[],
            isNoDataFlag:false,

        }
    },
    onLoad() {

    },
    onShow(){
        this.getMining();
        // this.asset();
    },
    methods: {
        transferInAmount(){
            this.$refs.transferInAmount.open();
        },
        showNotice(){
            this.$refs.subRuler.open();
        },

        //获取用户矿池信息
        getMining(){
            let that =this;
            this.$request({
                url: "mining/getMining",
                method: "post",
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    that.subData= res.data;
                    that.subData.holdExpiresIn=DateFunc.resetTime(that.subData.holdExpiresIn,'ymdhm');
                    that.processTime(res.data.list);
                    if (res.data.list.length===0){
                        that.isNoDataFlag=true;
                    }else {
                        that.isNoDataFlag=false;
                    }
                }else{
                    this.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
            })
        },

        //处理时间
        processTime(data){
           data.forEach(item=>{
                item.createTime=DateFunc.resetTime(item.createTime,'mdhm')
                item.expiresIn=DateFunc.resetTime(item.expiresIn,'mdhm')
            })
            this.subRecord=data;
        },


        //取消质押
            cancelMining(){
            this.$refs.cancelPledge.open();
            // let that = this;
            //     this.$request({
            //         url: "mining/cancelMining",
            //         method: "post",
            //     }).then((res)=>{
            //         if (res.result.returnCode.toString() === "0") {
            //             that.getMining();
            //
            //         }else{
            //             this.$toast.show({
            //                 title: res.result.returnUserMessage,
            //             })
            //         }
            //     })
            },
        //取消质押成功
        cancelPledgeSuccess(){
            this.getMining();
        },

        //转入成功
        transferInAmountSuccess(account){

            this.$jumpPage.jump({
                url:'sub/success?account='+account,
                type:'navigateTo'
            });
            this.getMining();
        },


        // //空投
        // asset(){
        //     let that = this;
        //     let postData={
        //         inviteCode:'MAY522',
        //         symbolType:9,
        //         amount:10000
        //     };
        //     this.$request({
        //         url: "wallet/asset",
        //         method: "post",
        //         params:postData
        //     }).then((res)=>{
        //
        //     })
        // },

    }
}
