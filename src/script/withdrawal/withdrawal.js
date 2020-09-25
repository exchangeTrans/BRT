import appHeader from "@/components/common/header.vue";
import WithdrawalInput from "../../components/withdrawal/withdrawalInput";
import Btn from "../../components/btn/index";

export default {
    components: {
        Btn,
        WithdrawalInput,
        appHeader,
    },
    name: "withdrawal",
    data() {
        return {
            isBlack: true,
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "BRT 提币",
                rightItem: {
                    type: "text",
                    text: "提现记录",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText:"AVV491",
                    haveTip:true,
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,*/
            },
            btnText: "提币",
            BtnackgroundColor: "#8C939B",
            btnCanClick: false,
            btnCorrectNum: 0,
            postData: {},
            symbolDetail: {},

            address: {
                textTitle: "提币地址",
                placeholder: "输入或长按粘贴地址",
                rightItem: {
                    type: "isIcon",//isText isBtn isIcon
                    text: "BRT",
                },
                name: "address",
            },
            amount: {
                textTitle: "数量",
                placeholder: "最小提币数量10.00000000",
                rightItem: {
                    type: "isText",//isText isBtn isIcon
                    text: "BRT",
                },
                haveTip: "余额：0.562 BRT",
                name: "amount"
            },
            commission: {
                textTitle: "手续费",
                placeholder: "1.00000000",
                rightItem: {
                    type: "isText",//isText isBtn isIcon
                    text: "BRT",
                },
                // haveTip: "余额：0.562 BRT"
                name: "commission",
            },
            phoneInput: {
                textTitle: "手机验证码",
                placeholder: "输入手机验证码",
                rightItem: {
                    type: "isBtn",//isText isBtn isIcon
                    text: "获取验证码",
                },
                name: "phoneInput",
            }
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        let symbolType = this.$store.state.wallet.symbolType
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: symbolType.symbolType + " 提币",
                rightItem: {
                    type: "text",
                    text: "提现记录",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText: "AVV49111",
                    haveTip: true,
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = false;
            this.BtnackgroundColor = "#B4BBC0";
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: symbolType.symbolType + " 提币",
                rightItem: {
                    type: "text",
                    text: "提现记录",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText: "AVV491",
                    haveTip: true,
                    tipTextStyle: {
                        color: "#D9DADB",
                        opacity: 0.5,
                    }
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = true;
            this.BtnackgroundColor = "#8C939B";
        }
        this.getSymbolDetail()
    },
    watch: {
        postData(val) {
            console.log(val)
        }
    },
    methods: {
        headertap(type) {
            // console.log(type)
        },
        inputChange(name, e) {
            console.log(name)
            console.log(e)
        },
        getSymbolDetail() {
            let symbolType = this.$store.state.wallet.symbolType
            console.log(symbolType)
            let param = {symbolType: symbolType.symbolType}

            this.$request({
                url: "wallet/getSymbolDetail",
                method: "post",
                params: param
            }).then(res => {
                let that = this
                if (res.result.returnCode.toString() === "0") {
                    that.symbolDetail = res.data
                    console.log(that.inputDatas[1])
                    that.inputDatas[1].placeholder = "最小提币数量" + res.data.withdrwaMin
                    that.inputDatas[1].haveTip = "余额：" + res.data.symbolBalance + " " + res.data.symbolTitle
                }
            })
        },
    }
}
