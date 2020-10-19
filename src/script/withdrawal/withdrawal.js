import appHeader from "@/components/common/header.vue";
import WithdrawalInput from "../../components/withdrawal/withdrawalInput";
import Btn from "../../components/btn/index";
import {checkDataFunc} from "@/static/js/common";
import {scanCode} from "../../static/js/scanCode";

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
            // btnText: "提币",
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
            addressUrl:"",
            time: 60,
            getCodeStatus: true,
            tag:'',

            address: {
                textTitle:this.$t('withdrawal').addressInput.textTitle,
                placeholder: this.$t('withdrawal').addressInput.placeholder,
                rightItem: {
                    type: "isIcon",//isText isBtn isIcon
                    text: "BRT",
                },
                name: "address",
            },
            tagInput:{
                textTitle:this.$t('withdrawal').tagInput.textTitle,
                placeholder: this.$t('withdrawal').tagInput.placeholder,
                lable:this.$t('withdrawal').tagInput.labe,
                rightItem: {
                    type: "isIcon",//isText isBtn isIcon
                    text: "BRT",
                },
                name: "tag",
            },
            amount: {
                textTitle: this.$t('withdrawal').amountInput.textTitle,
                placeholder: this.$t('withdrawal').amountInput.placeholder+"10",
                rightItem: {
                    type: "isText",//isText isBtn isIcon
                    text: "BRT",
                },
                haveTip: this.$t('withdrawal').amountInput.subText+"0.562 BRT",
                name: "amount",
            },
            commission: {
                textTitle: this.$t('withdrawal').commissionInput.textTitle,
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
                textTitle: this.$t('withdrawal').phoneInput.textTitle,
                placeholder: this.$t('withdrawal').phoneInput.placeholder,
                rightItem: {
                    type: "isBtn",//isText isBtn isIcon
                    text: this.$t('withdrawal').phoneInput.subText,
                },
                name: "verifyCode",
            },
            isAllowClick:true,
            symbolName:''
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        // debugger
        let symbolType = this.$store.state.wallet.symbolType
        this.symbolName =  this.$store.state.wallet.symbolType.name
        let userInfo = this.$store.state.defaultData.userInfo
        let that= this;
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: symbolType.name + " " +that.$t('withdrawal').title,
                rightItem: {
                    type: "text",
                    text: that.$t('withdrawal').subTitle,
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
                text: symbolType.name + " " +that.$t('withdrawal').title,
                rightItem: {
                    type: "text",
                    text: that.$t('withdrawal').subTitle,
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
        moveHandle(){
            return;
        },
        headertap(type) {
            this.$jumpPage.jump({
                url: "record/record",
                type: "navigateTo"
            })
        },
        toScanCode(){
            // let that = this;
            // scanCode(function (res) {
            //     //     "result": "X-HM://005KKFLVD3YAG",
            //     //     "scanType": "QR_CODE",
            //     //     "charSet": "utf8",
            //     //     "path": "file:///var/mobile/Containers/Data/Application/409633F4-FB48-4729-A22A-4921F46A9E26/Documents/Pandora/apps/HBuilder/doc/1600848159-IMG_0736.JPG",
            //     //     "errMsg": "scanCode:ok"
            //     // console.log(res.result);
            //     that.addressUrl = res.result;
            // })
        },
        inputChange(name, e) {
            if (name === "amount") {
                if (e.trim() !== "") {
                    this.btnInputObject.amount = true
                } else {
                    this.btnInputObject.amount = false
                }
                // e = e.replace(/[^\d]/g, '')
            }
            this.postData[name] = e;

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
                // debugger
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
                this.receiveAmount =  parseFloat(this.receiveAmount.toFixed(5))
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
            console.log(this.tag)
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
                    that.amount.placeholder = that.$t('withdrawal').mainNumber + res.data.withdrwaMin
                    that.amount.haveTip = that.$t('withdrawal').balance + res.data.symbolBalance + " " + res.data.symbolTitle
                    that.minDrawTip = res.data.withdrwaMin + " （" + res.data.symbolTitle + "）"
                    that.commissionAmount = res.data.symbolFeeMin
                }
            })
        },
        sendVerifyCode() {
            let userInfo = this.$store.state.defaultData.userInfo
            let phone = userInfo.tel
            let dialingCode = userInfo.dialingCode
            
            if (!this.getCodeStatus) {
                return
            }
            this.setIntervalFun()
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
                    
                } else {
                    this.$toast.show({
                        title: res.result.returnUserMessage,
                    })
                }
            })

        },
        setIntervalFun() {
            let that = this
            let interval = setInterval(function () {
                // eslint-disable-next-line no-debugger
                // debugger
                that.phoneInput.rightItem.text = that.time + that.$t('withdrawal').requestTipArrray[0];
                --that.time;
                if (that.time < 0) {
                    that.phoneInput.rightItem.text = that.$t('withdrawal').requestTipArrray[1];
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
            let that = this;
            if (parseInt(this.postData['amount']) < parseInt(this.symbolDetail.withdrwaMin)) {
                this.$toast.show({
                    title: that.$t('withdrawal').requestTipArrray[2]
                })
                return;
            }
            if(this.symbolName==='EOS'||this.symbolName==='XRP'){
                if (!this.postData['tag']||this.postData['tag'].trim()==='') {
                    this.$toast.show({
                        title: that.$t('withdrawal').tagInput.tip
                    })
                    return;
                }else{
                    that.postData['address'] = that.postData['address']+'#'+that.postData['tag'];
                }
            }
            
            this.isAllowClick = false;
            this.$toast.showLoading({
                title:that.$t('withdrawal').requestTipArrray[3]
            })
            this.$request({
                url: "wallet/validateAddress",
                method: "post",
                params: {
                    symbolType: symbolType.symbolType,
                    address: that.postData.address
                }
            }).then(res => {
                that.postData.symbolType=symbolType.symbolType;
                // && res.data.validate.toString() === "0"
                if (res.result.returnCode.toString() === "0") {
                    this.$request({
                        url: "wallet/transfer",
                        method: "post",
                        params: that.postData,
                    }).then((res) => {
                        
                        that.$toast.hideLoading()
                        that.$store.dispatch('getUserMsg');
                        if (res.result.returnCode.toString() === "0") {
                            that.postData.verifyKey = res.data.verifyKey;
                            that.$jumpPage.jump({
                                type: 'navigateTo',
                                url: 'withdrawal/orderDetail?transactionId='+res.data.transactionId
                            })
                            // that.$jumpPage.jump({
                            //     url: "index/index",
                            //     type: "navigateTo"
                            // })
                        } else {
                            that.isAllowClick = true;
                            that.$toast.show({
                                title: res.result.returnUserMessage,
                            })
                        }
                    })
                } else {
                    that.isAllowClick = true;
                    that.$toast.show({
                        title: that.$t('withdrawal').requestTipArrray[4]
                    })
                }
            })



        }
    }
}
