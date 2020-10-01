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
            emailadress:'客服邮箱:ukbatubrt@gmail.com',
            copyText:'ukbatubrt@gmail.com'
        }
    },
    methods:{
        copymsg(){
            let text = this.copyText
            uni.setClipboardData({
                data:text,
                success: (res) => {
                    // console.log("succeed");
                }
            });
        }
    },
    mounted() {
        let theme = this.$storage.getSync({
            key: 'theme'
        });
        let userInfo = this.$store.state.defaultData.userInfo

        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "联系客服",
                background: "#FFFFFF",
                rightItem: {
                    type: "text",
                    text: "ID:" + userInfo.inviteCode,
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
                    text: "ID:" + userInfo.inviteCode,
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
