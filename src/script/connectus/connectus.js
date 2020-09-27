import appheader from '../../components/common/header.vue'
export default{
    components:{appheader},
    data(){
        return{
            headerOptions:{
                // show: true,
                // isAllowReturn: true,
                // text: "联系客服",
                // rightItem: {
                //     type: "text",
                //     text: "",
                // },
                // bodyPadding: {"padding": '0,0,0,0'},
                // headerIsNoBoder: true,
            },
            emailadress:'客服邮箱:test0001@gmail.com',
        }
    },
    methods:{
        copymsg(){
            var clipboard = new this.Clipboard('.email')
            clipboard.on('success', e => {
                this.$toast.show({
                    title: '复制成功',
                })
            })
        }
    },
    mounted() {
        let theme = this.$storage.getSync({
            key: 'theme'
        });

        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "联系客服",
                background: "#FFFFFF",
                rightItem: {
                    type: "text",
                    text: "ID:AVV941",
                    style: {
                        "fontSize": '24rpx',
                        "fontFamily": 'PingFangSC-Regular, PingFang SC;',
                        "fontWeight": '400',
                        "color": 'rgba(68,68,68,1)'
                    }
                },
                style: {
                    color: "#000000"
                },
                isWhiteIcon: false,
                headerIsNoBoder: false,
            }
        } else {
            this.headerOptions={
                show: true,
                isAllowReturn: true,
                text: "联系客服",
                background: '#00001A',
                isWhiteIcon: true,
                rightItem: {
                    type: "text",
                    text: "ID:AVV941",
                    style: {
                        "fontSize": '24rpx',
                        "fontFamily": 'PingFangSC-Regular, PingFang SC;',
                        "fontWeight": '400',
                        "color": 'rgba(68,68,68,1)',
                        style: {
                            color: "#D9DADB"
                        }
                    }
                },
                style: {
                    color: "#D9DADB"
                },
                headerIsNoBoder: true,
            }
        }
    }
}