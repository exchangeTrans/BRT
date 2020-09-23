import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
export default {
    components: {
        forcedUpdating
    },
    data() {
        return {
            girdData: [
                {
                    text: '质押挖矿',
                    img: `${require('@/static/images/home/detail.png')}`,
                    url:'sub/index'
                },
                {
                    text: '挖矿收益',
                    img: `${require('@/static/images/home/dividend.png')}`,
                    url:'miningEarnings/index'
                },
                {
                    text: '量化理财',
                    img: `${require('@/static/images/home/deal.png')}`,
                    url:'earnings/index'
                },
                {
                    text: '公告列表',
                    img: `${require('@/static/images/home/notice.png')}`,
                    url:'noticelist/index'
                },
                {
                    text: '节点矿池',
                    img: `${require('@/static/images/home/pool.png')}`,
                    url:'bonus/bonus'
                },

                {
                    text: '团队详情',
                    img: `${require('@/static/images/home/team.png')}`,
                    url:'myteam/index'
                },
                {
                    text: '推广收益',
                    img: `${require('@/static/images/home/list.png')}`,
                    url:'bonus/promoteBonus'
                },
                {
                    text: '上币申请',
                    img: `${require('@/static/images/home/apply.png')}`,
                    url:'sub/index'
                },

            ],
            logo: `${require('@/static/images/home/logo.png')}`,//logo
            qr: `${require('@/static/images/home/qr.png')}`,//二维码
            topBg: `${require('@/static/images/home/topBg.png')}`,//背景
            advertising: `${require('@/static/images/home/advertising.png')}`,//广告牌
            notice2: `${require('@/static/images/home/notice2.png')}`,//公告
            more: `${require('@/static/images/home/more.png')}`//公告

        }
    },
    onLoad() {

    },
    computed:{
        tradePairData(){
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
        langMsg(){
            let langMsg = this.$storage.getSync({key:'langMsg'});
            return langMsg.name
        }
    },
    mounted() {
     //   this.$refs.update.open();
    },
    methods: {
        toInfo(item){
            this.$jumpPage.jump({
                type:'navigateTo',
                url:item.url
            })
        }
    }
}
