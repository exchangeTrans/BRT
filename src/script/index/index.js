// import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
import pageFooter from '@/components/common/footer.vue'
import {
    DateFunc
} from '../../static/js/common.js';
import {changeMoney, getMoney} from "../../static/js/changeMoney";

export default {
    components: {
        // forcedUpdating,
        pageFooter
    },
    data() {
        return {
            girdData: [{
                text: this.$t('index').gridData[0],
                img: `${require('@/static/images/home/detail.png')}`,
                url: 'sub/index'
            },
                {
                    text: this.$t('index').gridData[1],
                    img: `${require('@/static/images/home/dividend.png')}`,
                    url: 'miningEarnings/index'
                },
                {
                    text: this.$t('index').gridData[2],
                    img: `${require('@/static/images/home/deal.png')}`,
                    url: 'earnings/index'
                },
                {
                    text: this.$t('index').gridData[3],
                    img: `${require('@/static/images/home/agreement.png')}`,
                    url: '#'
                },
                {
                    text: this.$t('index').gridData[4],
                    img: `${require('@/static/images/home/pool.png')}`,
                    url: 'bonus/bonus'
                },

                {
                    text: this.$t('index').gridData[5],
                    img: `${require('@/static/images/home/team.png')}`,
                    url: 'myteam/index'
                },
                {
                    text: this.$t('index').gridData[6],
                    img: `${require('@/static/images/home/list.png')}`,
                    url: 'bonus/promoteBonus'
                },
                {
                    text: this.$t('index').gridData[7],
                    img: `${require('@/static/images/home/apply.png')}`,
                    url: '#'
                },

            ],
            logo: `${require('@/static/images/home/logo.png')}`, //logo
            qr: `${require('@/static/images/home/qr.png')}`, //二维码
            topBg: `${require('@/static/images/home/topBg.png')}`, //背景
            advertising: `${require('@/static/images/home/advertising.png')}`, //广告牌
            notice2: `${require('@/static/images/home/notice2.png')}`, //公告
            more: `${require('@/static/images/home/more.png')}`, //公告
            notice_deails_list: [],

            userMsg: {},
            changeMoneyData: {},
            discovery:[],
            
            // changeMoneyData: {}

        }
    },
    onLoad() {

    },
    computed: {
        tradePairData() {
            return this.$store.state.tradeData.tradePairData;
            //             id	integer	unix时间，同时作为K线ID
            // amount	float	成交量
            // count	integer	成交笔数
            // open	float	开盘价
            // close	float	收盘价（当K线为最晚的一根时，是最新成交价）
            // low	float	最低价
            // high	float	最高价
            // vol	float	成交额, 即 sum(每一笔成交价 * 该笔的成交量)
        },
        selectedCurrency() {
            return this.$store.state.defaultData.selectedCurrency;
            //             id	integer	unix时间，同时作为K线ID
            // amount	float	成交量
            // count	integer	成交笔数
            // open	float	开盘价
            // close	float	收盘价（当K线为最晚的一根时，是最新成交价）
            // low	float	最低价
            // high	float	最高价
            // vol	float	成交额, 即 sum(每一笔成交价 * 该笔的成交量)
        },
        langMsg() {
            let langMsg = this.$storage.getSync({
                key: 'langMsg'
            });
            return langMsg.name
        },
        // changeMoneyData() {
        //     // debugger
        //     // debugger
        //     let userMsg = this.$store.state.defaultData.userMsg;
        //     let asset = userMsg.asset.toString().replace(/,/g, '');
        //     // 46,730,157.7127
        //     let changeObj = this.getChangeObj(asset);
        //     let money = getMoney(asset,'USDT');
        //     return {
        //         ...money
        //     };
        // },
        userInfo() {
            return this.$store.state.defaultData.userInfo
        }
    },
    mounted() {
        this.getChangeMoneyData();
        this.getDiscoveryData()
        //   this.$refs.update.open();
        // this.getfirst();
    },
    watch: {
        userInfo(res) {
            this.getChangeMoneyData();
        }
    },
    methods: {
        getChangeMoneyData() {
            let userMsg = this.$store.state.defaultData.userMsg;
            let asset = userMsg.asset.toString().replace(/,/g, '');
            // 46,730,157.7127
            let changeObj = this.getChangeObj(asset);
            let money = getMoney(asset, 'USDT');
            console.log(money)
            this.changeMoneyData = money;
        },
        toKline(item) {
            this.$store.commit("setTredDataSync", {key: "KLineTradingPair", val: item,})
            this.$store.dispatch('getKline', {
                period: '5min',
            });

            this.$mySocket.subscribeDepth();
            this.$mySocket.subscribeDetail();
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'trade/index'
            })
        },
        toInfo(item) {
            // debugger
            let that = this;
            if (item.url === "#") {
                this.$toast.show({
                    title: that.$t('index').noOpen,
                })
            } else {
                this.$jumpPage.jump({
                    type: 'navigateTo',
                    url: item.url
                })
            }
        },
        gonoticelist() {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'noticelist/index'
            })
        },
        goNoticeDetail(){
            var that = this;
            var obj = JSON.stringify(that.discovery);
            console.log(that.discovery)
			this.$jumpPage.jump({
				type: "navigateTo",
				url: 'noticedetails/index?details_list=' + obj+'&id=0'
			})
        },
        getDiscoveryData() {
            let postData = {
                infoType: '1',
                start: '0',
                index: "1",
            };
            let that = this;
            this.$request({
                url: "discovery/getInfo",
                method: "post",
                params: postData
            }).then((res) => {
                if (res.result.returnCode.toString() === "0") {
                    let list = res.data.list;
                    let discovery = [];
                    for (var i = 0; i < list.length; i++){
                        var item = {
                            title: list[i].title,
                            date: DateFunc.resetTime(parseInt(list[i].createTime), 'ymdhm'),
                            details: list[i].detail
                        }
                        discovery.push(item)
                    }
                    that.discovery = discovery;
                    
                } 
            }).catch(err => {
                console.log(err);
            })

        },

        /*getuserInfo(){
            // debugger
            let userMsg = this.$store.state.defaultData.userMsg;
            // console.log(userMsg)
            let changeObj = this.getChangeObj(userMsg.asset)
            // debugger
            // console.log(changeMoney(changeObj))
            this.changeMoneyData = {
                ...changeMoney(changeObj),
            };
        },*/
        getChangeObj(asset) {
            let firstCode = "USDT"//第一个单位
            let lastCode = this.$store.state.defaultData.selectedCurrency.code//第二个单位
            // asset//用户的钱 USDT
            let changeObj = {
                firstCode,//第一个单位
                lastCode,//第二个单位
                asset,//用户的钱 USDT
            }
            return changeObj
        },
    }
}
