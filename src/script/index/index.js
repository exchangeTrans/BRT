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
                    img: `${require('@/static/images/home/pool.png')}`,
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
                    url:'earning/index'
                },
                {
                    text: '公告列表',
                    img: `${require('@/static/images/home/notice.png')}`,
                    url:'sub/index'
                },
                {
                    text: '推广链接',
                    img: `${require('@/static/images/home/link.png')}`,
                    url:'sub/index'
                },
                {
                    text: '团队详情',
                    img: `${require('@/static/images/home/team.png')}`,
                    url:'sub/index'
                },
                {
                    text: '推广收益',
                    img: `${require('@/static/images/home/list.png')}`,
                    url:'sub/index'
                },
                {
                    text: '矿池分红',
                    img: `${require('@/static/images/home/detail.png')}`,
                    url:'sub/index'
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
     //   this.$refs.update.open();
    },
    methods: {
        toInfo(item){
            this.jumpPage.jump({
                type:'navigateTo',
                url:item.url
            })
        }
    }
}
