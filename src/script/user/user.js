import Btn from "../../components/btn/index";

export default {
    name: "user",
    components: {Btn},
    data() {
        return {
            listItemData: [
                {
                    name: "修改绑定手机邮箱",
                    path: "changeEmail/index",
                    img: `${require('@/static/images/user/alter.png')}`,
                },
                {
                    name: "修改密码",
                    path: "login/forgetPassword",
                    img: `${require('@/static/images/user/password.png')}`,
                },
                {
                    name: "分享链接",
                    path: "aboutUs/index",
                    img: `${require('@/static/images/user/link.png')}`,
                },
                {
                    name: "联系客服",
                    path: "",
                    img: `${require('@/static/images/user/service.png')}`,
                },
                {
                    name: "设置",
                    path: "set/index",
                    img: `${require('@/static/images/user/set.png')}`,
                },
            ],
            aboutItemData: [
                {
                    name: "官网",
                    path: "",
                    img: `${require('@/static/images/user/official.png')}`,
                    url: "https://drrfffs.brt.com/https://drrfffs.brt.com/https://drrfffs.brt.com/",
                },
                {
                    name: "区块链浏览器",
                    path: "",
                    img: `${require('@/static/images/user/blockchain.png')}`,
                    url: "https://drrfffs.brt.com/",
                },
                {
                    name: "开发者支持",
                    path: "",
                    img: `${require('@/static/images/user/dev.png')}`,
                    url: "https://drrfffs.brt.com/",
                },
                {
                    name: "版本",
                    path: "",
                    img: `${require('@/static/images/user/version.png')}`,
                    url: "https://drrfffs.brt.com/",
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
        this.getUserMsg();
    },
    /*onShow(){
        this.getUserMsg();
    },*/
    methods: {
        toPage(path) {
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: path,
            })
        },
        btnClick() {
            // debugger
            this.$request({
                url: "common/logout",
                method: "post",
            }).then((res) => {
                console.log(res)
            })
        },
        getUserMsg() {
            this.$request({
                url: "me/getHome",
                method: "post",
            }).then((res) => {
                console.log(res)
            })
        }
    }
}