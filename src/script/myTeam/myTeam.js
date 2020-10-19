import pageHeader from '@/components/common/header.vue'
import recordAmount  from '@/static/js/recordNum.js'
import UniLoadMore from "@/components/uni-load-more/uni-load-more";
import noData from "@/components/noData/index.vue";
export default{
    components:{pageHeader,UniLoadMore,noData},
    data(){
        return{
            datalist:[
                {
                    flag : require("../../static/images/myteam/chinese.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/taiwan.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/hongkong.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/korea.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/korea.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/hongkong.png"),
                    phonenumber:"13541511711",
                    memberid:"19034532",
                    grade:'1000BRT'
                },
                {
                    flag:require("../../static/images/myteam/taiwan.png"),
                    phonenumber:"15884864417",
                    memberid:"19034532",
                    grade:'1000BRT'
                }
            ],
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: this.$t('myTeam').title,
                rightItem: {
                    type: "text",
                    text: "",
                    style: {}
                },
                style:{
                    color:"#ffffff"
                },
                isWhiteIcon:true,
                headerIsNoBoder: true,
            },
            countryFlagArr:{
                'KR': `${require('@/static/images/user/Korea.png')}`,
            'CN': `${require('@/static/images/user/Chinese.png')}`,
            'JP': `${require('@/static/images/user/Japan.png')}`,
// Germany: `${require('@/static/images/user/Germany.png')}`,
            'GB': `${require('@/static/images/user/UK.png')}`,
            'TW': `${require('@/static/images/user/TW.png')}`,
            'HK': `${require('@/static/images/user/HK.png')}`,
            'FR': `${require('@/static/images/user/France.png')}`,
// Russia: `${require('@/static/images/user/Russia.png')}`,
            'US': `${require('@/static/images/user/USA.png')}`,
            'KH': `${require('@/static/images/user/KH.png')}`,
            'MY': `${require('@/static/images/user/MY.png')}`,
            'SG': `${require('@/static/images/user/SG.png')}`,
            },
            headerImgRight: `${require('@/static/images/user/head.png')}`,
            teamData:{},
            inviteRecord:[],
            haveNext:true,
            isNoDataFlag:false,
            status:'more',

        }
    },
    computed:{
        countryCode(){
            return this.$store.state.defaultData.countryCode;
        },

    },
    mounted(){

        this.getTeam()
    },
    methods:{
        //获取矿池分红（VIP收益）
        getTeam(isMore){
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
                url: "mining/getTeam",
                method: "post",
                params:postData
            }).then((res)=>{
                if (res.result.returnCode.toString() === "0") {
                    let inviteRecord = that.inviteRecord;
                    //判断是否还有数据
                    if (res.data.list.length<recordAmount.num){
                        that.haveNext=false;
                        that.status='noMore'
                    }else {
                        that.status='more'
                    }
                    //判断是第一次加载还是加载更多
                    if (isMore){
                        inviteRecord = inviteRecord.concat(res.data.list);
                        that.inviteRecord = that.getData(inviteRecord)
                    }else {
                        that.teamData=res.data;
                        inviteRecord=res.data.list;
                        that.inviteRecord = that.getData(inviteRecord)

                        //判断是否有数据
                        if (res.data.list.length===0){
                            that.isNoDataFlag=true;
                        }else {
                            that.isNoDataFlag=false;
                        }
                    }

                }else{
                    this.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
            })
        },
        getData(data){
            if(!data||data===null||data.length===0){
                return []
            }else{
                let countryCode = this.countryCode;
                let result = data.map(function (item) {
                    let countryNum = countryCode[item.countryCode]
                    let account = item.account;
                    let accountArray = account.split("");
				    let newAccount = accountArray.map(function (item,index) {
                        let minLimit  = countryNum.length+2
                        if(index<countryNum.length){
                            return ''
                        }
                        else if(index>minLimit&&index<accountArray.length-3){
                            return '*'
                        }
                        return item
                    })
                    newAccount =newAccount.join('')
                    return {
                        ...item,
                        account:'+'+countryNum + ' '+newAccount
                    }
                })
                return result
            }
            
        }
    }
}
