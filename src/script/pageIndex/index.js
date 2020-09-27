import pageFooter from '@/components/common/footer.vue';
import index from '@/pages/index/index.vue';
import quotes from '@/pages/quotes/quotes.vue';
import trades from '@/pages/trades/index.vue';
import property from '@/pages/property/property.vue';
import user from '@/pages/user/user.vue';
export default {
    components: {
        pageFooter,
        index,
        quotes,
        trades,
        property,
        user
    },
    data() {
        return {
            currentPage:{pagePath:''}
            // girdData: [{
            //     text: '质押挖矿',
            //     img: `${require('@/static/images/home/detail.png')}`,
            //     url: 'sub/index'
            // },
            //     {
            //         text: '挖矿收益',
            //         img: `${require('@/static/images/home/dividend.png')}`,
            //         url: 'miningEarnings/index'
            //     },
            //     {
            //         text: '量化理财',
            //         img: `${require('@/static/images/home/deal.png')}`,
            //         url: 'earnings/index'
            //     },
            //     {
            //         text: '智能合约',
            //         img: `${require('@/static/images/home/agreement.png')}`,
            //         url: '#'
            //     },
            //     {
            //         text: '节点矿池',
            //         img: `${require('@/static/images/home/pool.png')}`,
            //         url: 'bonus/bonus'
            //     },

            //     {
            //         text: '团队详情',
            //         img: `${require('@/static/images/home/team.png')}`,
            //         url: 'myteam/index'
            //     },
            //     {
            //         text: '推广收益',
            //         img: `${require('@/static/images/home/list.png')}`,
            //         url: 'bonus/promoteBonus'
            //     },
            //     {
            //         text: '上币申请',
            //         img: `${require('@/static/images/home/apply.png')}`,
            //         url: '#'
            //     },

            // ],
            // logo: `${require('@/static/images/home/logo.png')}`, //logo
            // qr: `${require('@/static/images/home/qr.png')}`, //二维码
            // topBg: `${require('@/static/images/home/topBg.png')}`, //背景
            // advertising: `${require('@/static/images/home/advertising.png')}`, //广告牌
            // notice2: `${require('@/static/images/home/notice2.png')}`, //公告
            // more: `${require('@/static/images/home/more.png')}`, //公告
            // notice_deails_list: [],

            // userMsg: {},
            // changeMoneyData: {}
        }
    },
    onLoad() {

    },
    computed: {},
    mounted() {
        //   this.$refs.update.open();
        // this.getfirst();
    },
    methods: {
        changePage(item){
            console.log(item)
            this.currentPage=item

        }
        
    }
}
