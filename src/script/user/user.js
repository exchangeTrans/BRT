import Btn from "../../components/btn/index";
export default {
    name: "user",
    components: {Btn},
    data() {
        return {
            listItemData: [
                {
                    name:"修改绑定手机邮箱",
                    path:"",
                    img:`${require('@/static/images/user/alter.png')}`,
                },{
                    name:"修改密码",
                    path:"",
                    img:`${require('@/static/images/user/password.png')}`,
                },{
                    name:"分享链接",
                    path:"",
                    img:`${require('@/static/images/user/link.png')}`,
                },{
                    name:"联系客服",
                    path:"",
                    img:`${require('@/static/images/user/service.png')}`,
                },{
                    name:"设置",
                    path:"",
                    img:`${require('@/static/images/user/set.png')}`,
                },
            ],
            aboutItemData:[
                {
                    name:"官网",
                    path:"",
                    img:`${require('@/static/images/user/official.png')}`,
                },{
                    name:"区块链浏览器",
                    path:"",
                    img:`${require('@/static/images/user/blockchain.png')}`,
                },{
                    name:"开发者支持",
                    path:"",
                    img:`${require('@/static/images/user/dev.png')}`,
                },{
                    name:"版本",
                    path:"",
                    img:`${require('@/static/images/user/version.png')}`,
                },
            ],
            btnText: "退出登录",
            backgroundImage: `${require('@/static/images/user/background.png')}`,
            assetBackgroundImage: `url(${require('@/static/images/user/assetBg.png')})`,
            headerImg: `${require('@/static/images/user/head.png')}`,
            rightIcon: `${require('@/static/images/user/right.png')}`,
            wallet: `${require('@/static/images/user/wallet.png')}`,
            headerImgRight: `${require('@/static/images/user/headerRight.png')}`,
            eyesIcon: `${require('@/static/images/user/eyes.png')}`,
        }
    },
    mounted() {
        /*let theme = this.$storage.getSync({key:'theme'});
        // console.log(theme);
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: false,
                text: "资产",
                rightItem: {
                    type: "text",
                    text: "",
                },
                headerIsNoBoder: false,
            };
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: false,
                text: "资产",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            };
        }*/
    },
    methods: {

    }
}