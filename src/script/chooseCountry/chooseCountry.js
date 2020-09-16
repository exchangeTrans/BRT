import appHeader from "@/components/common/header.vue"

export default {
    name: "chooseCountry",
    components: {
        appHeader,
    },
    data() {
        return {
            headerText: "选择国家",
            Korea: `${require('@/static/images/user/Korea.png')}`,
            Chinese: `${require('@/static/images/user/Chinese.png')}`,
            Japan: `${require('@/static/images/user/Japan.png')}`,
            Germany: `${require('@/static/images/user/Germany.png')}`,
            UK: `${require('@/static/images/user/UK.png')}`,
            France: `${require('@/static/images/user/France.png')}`,
            Russia: `${require('@/static/images/user/Russia.png')}`,
            USA: `${require('@/static/images/user/USA.png')}`,
            countryData: [
                {
                    name: "美国",
                    AreaCode: "+1",
                    icon: `${require('@/static/images/user/USA.png')}`,
                }, {
                    name: "俄罗斯",
                    AreaCode: "+7",
                    icon: `${require('@/static/images/user/Russia.png')}`,
                }, {
                    name: "法国",
                    AreaCode: "+33",
                    icon: `${require('@/static/images/user/France.png')}`,
                }, {
                    name: "英国",
                    AreaCode: "+44",
                    icon: `${require('@/static/images/user/UK.png')}`,
                }, {
                    name: "德国",
                    AreaCode: "+49",
                    icon: `${require('@/static/images/user/Germany.png')}`,
                }, {
                    name: "韩国",
                    AreaCode: "+81",
                    icon: `${require('@/static/images/user/Korea.png')}`,
                }, {
                    name: "日本",
                    AreaCode: "+82",
                    icon: `${require('@/static/images/user/Japan.png')}`,
                }, {
                    name: "中国",
                    AreaCode: "+86",
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                },
            ],
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        // console.log(theme);
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon:true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    methods: {
        chooseItem(item) {
            // eslint-disable-next-line no-debugger
            // debugger
            // this.$bus.$emit('chooseItem', item)
            let name = this.$route.params.oldName
            this.$router.push({
                name: name,
                params: {
                    item: item,
                }
            })
        },
        headertap(type) {
            console.log(type)
        }
    }
}