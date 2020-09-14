import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
export default {
    components: {
        forcedUpdating
    },
    data() {
        return {
            girdData: [
                {
                    text: '矿池',
                    img: `${require('@/static/images/home/pool.png')}`
                },
                {
                    text: '分红',
                    img: `${require('@/static/images/home/dividend.png')}`
                },
                {
                    text: '量化交易',
                    img: `${require('@/static/images/home/deal.png')}`
                },
                {
                    text: '公告',
                    img: `${require('@/static/images/home/notice.png')}`
                },
                {
                    text: '推广链接',
                    img: `${require('@/static/images/home/link.png')}`
                },
                {
                    text: '直推列表',
                    img: `${require('@/static/images/home/list.png')}`
                },
                {
                    text: '团队收益',
                    img: `${require('@/static/images/home/team.png')}`
                },
                {
                    text: '收益明细',
                    img: `${require('@/static/images/home/detail.png')}`
                }
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
    mounted() {
        // this.$refs.update.open();
    },
    methods: {}
}
