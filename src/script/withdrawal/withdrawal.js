import appHeader from "@/components/common/header.vue";
import WithdrawalInput from "../../components/withdrawal/withdrawalInput";
import Btn from "../../components/btn/index";
import {checkDataFunc} from "@/static/js/common";

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
            btnInputObject: {
                "address": false,
                "amount": false,
                "verifyCode": false,
            },
            postData: {},
            symbolDetail: {},
            minDrawTip: "10.0",
            receiveAmount: "0 BRT",
            commissionAmount: "1.00",
            amountInputValue: "",
            time: 60,
            getCodeStatus: true,

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
                name: "amount",
            },
            commission: {
                textTitle: "手续费",
                placeholder: "1.00000000",
                rightItem: {
                    type: "isText",//isText isBtn isIcon
                    text: "BRT",
                },
                disabled: true,
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
                name: "verifyCode",
            },
            isAllowClick:true,
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        let symbolType = this.$store.state.wallet.symbolType
        let userInfo = this.$store.state.defaultData.userInfo
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: symbolType.name + " 提币",
                rightItem: {
                    type: "text",
                    text: "提现记录",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText: userInfo.inviteCode,
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
                text: symbolType.name + " 提币",
                rightItem: {
                    type: "text",
                    text: "提现记录",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText: userInfo.inviteCode,
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
        this.receiveAmount = "0 " + symbolType.name
        this.amount.rightItem.text = symbolType.name
        this.commission.rightItem.text = symbolType.name
        this.getSymbolDetail()
    },
    watch: {
        btnCorrectNum(val) {
            if (this.btnInputObject.address && this.btnInputObject.amount && this.btnInputObject.verifyCode) {
                // let that = this
                this.btnCanClick = true
            } else {
                this.btnCanClick = false
            }
        }
    },
    methods: {
        headertap(type) {
            this.$jumpPage.jump({
                url: "record/record",
                type: "navigateTo"
            })
        },
        inputChange(name, e) {
            if (name === "amount") {
                if (e.trim() !== "") {
                    this.btnInputObject.amount = true
                } else {
                    this.btnInputObject.amount = false
                }
                e = e.replace(/[^\d]/g, '')
            }
            this.postData[name] = e

            // 数据校验
            if (name === "address") {
                this.btnCorrectNum++
                // 如果不为空
                if (e.trim() !== "") {
                    this.btnInputObject.address = true
                } else {
                    this.btnInputObject.address = false
                }
            } else if (name === "amount") {
                this.btnCorrectNum++
                // 计算
                this.amountInputValue = e

                if (e < this.symbolDetail.withdrwaMin) {
                    e = this.symbolDetail.withdrwaMin
                }
                let fee = e * this.symbolDetail.symbolFeeRate
                if (fee < this.symbolDetail.symbolFeeMin) {
                    this.commissionAmount = this.symbolDetail.symbolFeeMin.toString()
                    this.receiveAmount = e - this.symbolDetail.symbolFeeMin
                } else if (fee > this.symbolDetail.symbolFeeMax) {
                    this.commissionAmount = this.symbolDetail.symbolFeeMax.toString()
                    this.receiveAmount = e - this.symbolDetail.symbolFeeMax
                } else {
                    this.commissionAmount = fee.toString()
                    this.receiveAmount = e - fee
                }
                // commissionAmount
                // receiveAmount
            } else if (name === "verifyCode") {
                this.btnCorrectNum++
                if (e.trim() !== "") {
                    this.btnInputObject.verifyCode = true
                } else {
                    this.btnInputObject.verifyCode = false
                }
            }

            // amount
            //
        },
        getSymbolDetail() {
            let symbolType = this.$store.state.wallet.symbolType
            let param = {symbolType: symbolType.symbolType}

            this.$request({
                url: "wallet/getSymbolDetail",
                method: "post",
                params: param
            }).then(res => {
                let that = this
                if (res.result.returnCode.toString() === "0") {
                    that.symbolDetail = res.data
                    that.amount.placeholder = "最小提币数量" + res.data.withdrwaMin
                    that.amount.haveTip = "余额：" + res.data.symbolBalance + " " + res.data.symbolTitle
                    that.minDrawTip = res.data.withdrwaMin + " （" + res.data.symbolTitle + "）"
                    that.commissionAmount = res.data.symbolFeeMin
                }
            })
        },
        sendVerifyCode() {
            let userInfo = this.$store.state.defaultData.userInfo
            console.log(userInfo)
            let phone = userInfo.tel
            let dialingCode = userInfo.dialingCode
            if (!this.getCodeStatus) {
                return
            }
            this.getCodeStatus = false
            let sendCodeData = {
                type: 3,
                accountType: 0,
                dialingCode: dialingCode,
                tel: phone,
            }
            let that = this;
            this.$request({
                url: "common/sendCode",
                method: "post",
                params: sendCodeData,
            }).then((res) => {
                if (res.result.returnCode.toString() === "0") {
                    that.postData.verifyKey = res.data.verifyKey;
                    that.setIntervalFun()
                } else {
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })

        },
        setIntervalFun() {
            let that = this
            let interval = setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that.phoneInput.rightItem.text = that.time + '秒后重新发送';
                --that.time;
                if (that.time < 0) {
                    that.phoneInput.rightItem.text = "重新发送";
                    that.time = 60;
                    that.getCodeStatus = true
                    clearInterval(interval);
                }
            }, 1000);
        },
        transfer() {
            if (!this.btnCanClick) {
                return
            }
            if(!this.isAllowClick){
                return
            }
            let symbolType = this.$store.state.wallet.symbolType

            // 校验数据
            // if (parseInt(this.symbolDetail.symbolBalance) < parseInt(this.postData['amount'])) {
            //     this.$toast.show({
            //         title: "余额不足"
            //     })
            //     return;
            // }
            if (parseInt(this.postData['amount']) < parseInt(this.symbolDetail.withdrwaMin)) {
                this.$toast.show({
                    title: "未达到最小提币数量不足"
                })
                return;
            }
            this.isAllowClick = false;
            this.$toast.showLoading({
                title:'提币中'
            })
            let that = this;
            this.$request({
                url: "wallet/validateAddress",
                method: "post",
                params: {
                    symbolType: symbolType.symbolType,
                    address: that.postData.address
                }
            }).then(res => {
                that.postData.symbolType=symbolType.symbolType;
                if (res.result.returnCode.toString() === "0" && res.data.validate.toString() === "0") {
                    this.$request({
                        url: "wallet/transfer",
                        method: "post",
                        params: that.postData,
                    }).then((res) => {
                        that.isAllowClick = true;
                        that.$toast.hideLoading()
                        if (res.result.returnCode.toString() === "0") {
                            that.postData.verifyKey = res.data.verifyKey;
                            that.$jumpPage.jump({
                                url: "index/index",
                                type: "navigateTo"
                            })
                        } else {
                            that.$toast.show({
                                title: res.result.returnMessage,
                            })
                        }
                    })
                } else {
                    that.isAllowClick = true;
                    that.$toast.show({
                        title: "请先输入正确的提币地址"
                    })
                }
            })



        }
    }
}
