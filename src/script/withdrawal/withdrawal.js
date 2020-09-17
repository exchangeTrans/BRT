import appHeader from "@/components/common/header.vue"
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

            inputDatas: [
                {
                    textTitle: "提币地址",
                    placeholder: "输入或长按粘贴地址",
                    rightItem: {
                        type: "isIcon",//isText isBtn isIcon
                        text: "BRT",
                    },
                },
                {
                    textTitle: "数量",
                    placeholder: "最小提币数量10.00000000",
                    rightItem: {
                        type: "isText",//isText isBtn isIcon
                        text: "BRT",
                    },
                    // haveTip: "余额：0.562 BRT"
                },
                {
                    textTitle: "手续费",
                    placeholder: "1.00000000",
                    rightItem: {
                        type: "isText",//isText isBtn isIcon
                        text: "BRT",
                    },
                    haveTip: "余额：0.562 BRT"
                }
            ],
            phoneInput: {
                textTitle: "手机验证码",
                placeholder: "输入手机验证码",
                rightItem: {
                    type: "isBtn",//isText isBtn isIcon
                    text: "获取验证码",
                },
            }
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
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
                headerIsNoBoder: true,
            };
            this.isBlack = true;
            this.BtnackgroundColor = "#8C939B";
        }
    },
    methods: {
        headertap(type) {
            console.log(type)
        }
    }
}