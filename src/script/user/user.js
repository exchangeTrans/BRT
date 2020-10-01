import Btn from "../../components/btn/index";
import pageFooter from '@/components/common/footer.vue'
import {changeMoney,getMoney} from "../../static/js/changeMoney";
export default {
    name: "user",
    components: {
        Btn,
        pageFooter,
    },
    data() {
        return {
            listItemData: [
                // {
                //     name: "修改密码",
                //     path: "login/forgetPassword",
                //     img: `${require('@/static/images/user/password.png')}`,
                // },
                {
                    name: "实名认证",
                    path: "auth/auth",
                    img: `${require('@/static/images/user/auth.png')}`,
                },
                {
                    name: "推广链接",
                    path: "aboutUs/index",
                    img: `${require('@/static/images/user/link.png')}`,
                },
                {
                    name: "公告列表",
                    path: "noticelist/index",
                    img: `${require('@/static/images/user/announcement.png')}`,
                },
                {
                    name: "联系客服",
                    path: "connectus/index",
                    img: `${require('@/static/images/user/service.png')}`,
                },
                {
                    name: "修改绑定手机邮箱",
                    path: "",
                    img: `${require('@/static/images/user/alter.png')}`,
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
                    url: "www.brtdefi.com",
                    allowToUrl:true,
                    urlHeader:'https://',
                    urlBody:"www.brtdefi.com",
                    
                },
                {
                    name: "区块链浏览器",
                    path: "",
                    img: `${require('@/static/images/user/blockchain.png')}`,
                    url: "www.brtscan.pro",
                    urlHeader:'https://',
                    urlBody:"www.brtscan.pro",
                    allowToUrl:true,
                },
                {
                    name: "开源代码",
                    path: "",
                    img: `${require('@/static/images/user/dev.png')}`,
                    url: "github.com/BRTChain/BRT-Chain",
                    urlHeader:'https://',
                    urlBody:"github.com/BRTChain/BRT-Chain",
                    allowToUrl:true,
                },
                {
                    name: "版本",
                    path: "",
                    img: `${require('@/static/images/user/version.png')}`,
                    url: '',
                    allowToUrl:false,
                    isNoImg:true,
                    code:'version'
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

            homeMsgData: {},
            userMsgData: {},

            changeMoneyData: {},
        }
    },
    computed:{
        version(){
            return this.$store.state.defaultData.version;
        },

    },
    mounted() {
        this.getLoginStatus();
    },
    onShow() {

    },
    methods: {
        toUrl(item){
            if(item.allowToUrl){
                var urlStr = encodeURI(item.urlBody)//把字符串作为url进行编码
                plus.runtime.openURL(item.urlHeader + urlStr);
                // plus.runtime.openUrl(item.url)
            }
        },
        toPage(path) {
            // console.log(path)
            if(path!==''){
                this.$jumpPage.jump({
                    type: 'navigateTo',
                    url: path,
                })
            }

        },
        btnClick() {
            // debugger
            this.$request({
                url: "common/logout",
                method: "post",
            }).then((res) => {
                // data: null
                // result: {returnCode: "0", returnUserMessage: "注销成功", returnMessage: "注销成功"}
                // returnCode: "0"
                // returnMessage: "注销成功"
                // returnUserMessage: "注销成功"
                if (res.result.returnCode.toString() === "0") {
                    let loginMsg = {
                        isLogin:false,
                        userLoginId:'',
                        userLoginToken:''
                    }
                    this.$storage.setSync({key: "loginMsg",data: loginMsg});
                    this.$jumpPage.jump({
                        type: 'redirectTo',
                        url: 'login/login',
                    })
                }
                this.$toast.show({
                    title: res.result.returnMessage,
                })


            })
        },
        getLoginStatus() {
            let loginMsg = this.$storage.getSync({key: 'loginMsg'});
            // console.log(loginMsg);
            if (!loginMsg.isLogin) {
                this.$jumpPage.jump({
                    type: 'redirectTo',
                    url: 'login/login',
                })
            } else {
                this.getHomeMsg();
            }
        },
        getHomeMsg() {
            let that = this
            this.$request({
                url: "me/getHome",
                method: "post",
            }).then((res) => {
                // console.log(res)
                if (res.result.returnCode.toString() === "0") {
                    that.homeMsgData = {
                        ...res.data,
                    }
                    let asset = res.data.asset.replace(/,/g, '');
                    // debugger
                    let changeObj = that.getChangeObj(asset)
                    that.changeMoneyData = {
                        ...getMoney(asset,'USDT')
                    };
                    // console.log(that.changeMoneyData);
                } else {
                    /*if (res.result.returnCode.toString() === "10032") {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'redirectTo',
                            url: 'login/login',
                        })
                    } else {*/
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                    // }
                }
                that.getUserMsg()
            })
        },
        getChangeObj(asset) {
            // debugger
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
        getUserMsg() {
            let that = this
            this.$request({
                url: "me/getUserInfo",
                method: "post",
            }).then((res) => {
                if (res.result.returnCode.toString() === "0") {
                    that.userMsgData = {
                        ...res.data,
                    }
                    let userAccountType = res.data.userAccountType//0 是手机， 1就是邮件
                    // that.listItemData[0].path = 'changeEmail/index'
                    that.listItemData[4].path = userAccountType == 0 ? 'changePhone/index' : 'changeEmail/index'
                    // console.log(userAccountType == 0 ? 'changePhone/index' : 'changeEmail/index')
                    this.$store.commit("setDefaultSync", {
                        key: "userInfo",
                        val: res.data,
                    })
                    this.$store.dispatch('getUserMsg');
                    // console.log(that.$store.state.defaultData.userInfo);
                } else {
                    if (res.result.returnCode.toString() === "10032") {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'redirectTo',
                            url: 'login/login',
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                }
            });
        }

    }
}
