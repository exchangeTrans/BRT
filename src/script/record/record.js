import appHeader from "@/components/common/header.vue";
import RecordItem from "../../components/record/recordItem";
import {DateFunc} from '@/static/js/common.js';
import recordAmount from '@/static/js/recordNum.js';

export default {
    components: {RecordItem,appHeader},
    name: "record",
    data() {
        return {
            isBlack: true,
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                text: "USDT提币记录",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText:"AVV49111",
                    haveTip:true,
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,*/
            },
            recordDataList: [
            ],
            hasNext: true,
            currentIndex: 0,
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        let symbolType = this.$store.state.wallet.symbolType
        let userInfo = this.$store.state.defaultData.userInfo
        let that = this;
        if(theme === 'white'){
            console.log(that.$t('record').title)
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: symbolType.name + that.$t('record').title,
                rightItem: {
                    type: "text",
                    text: "ID:" + userInfo.inviteCode,
                    style: {
                        'fontSize': '24rpx',
                        'fontFamily': 'PingFangSC-Regular, PingFang SC',
                        'fontWeight': '400',
                        'color': '#000000',
                        'opacity': 0.5,
                        
                    }
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = false;
            // this.BtnackgroundColor = "#B4BBC0";
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: symbolType.name + that.$t('record').title,
                rightItem: {
                    type: "text",
                    text: "ID:" + userInfo.inviteCode,
                    style: {
                        'fontSize': '24rpx',
                        'fontFamily': 'PingFangSC-Regular, PingFang SC',
                        'fontWeight': '400',
                        'color': '#000000',
                        'opacity': 0.5
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
            // this.BtnackgroundColor = "#8C939B";
        }
        this.getRecordList(this.currentIndex , recordAmount.num)
    },
    methods: {
        headertap() {

        },
        clickItem(data){
            this.$jumpPage.jump({
                type: 'navigateTo',
                url: 'withdrawal/orderDetail?transactionId='+data.item.transactionId
            })
        },
        getRecordList(index, size) {
            if (!this.hasNext) {
                // 没有数据了
                return
            }
            let symbolType = this.$store.state.wallet.symbolType
            let param = {
                symbolType: symbolType.symbolType,
                start: index,
                index: size,
                operationType: 20
            }
            this.$request({
                url: "wallet/getSymbolTransaction",
                method: "post",
                params: param
            }).then(res => {
                let that = this
                if (res.result.returnCode.toString() === "0") {
                    if (res.data.list.length < size) {
                        that.hasNext = false;
                    } else {
                        that.hasNext = true;
                    }
                    that.currentIndex++
                    res.data.list.forEach(item => {
                        let stateType= item.stateType;
                        let status='success';
                        if(stateType.toString()==='1'){
                            status='success';
                        }else if(stateType.toString()==='2'){
                            status='fail';
                        }else{
                            status='inTheReview';
                        }
                        let obj = {
                            "titleName": item.operationTypeText,
                            "status": status,
                            "number": item.amount,
                            "date": DateFunc.dateFormat(item.createTime, "hh:mm MM/dd"),
                            item:item
                        }
                        that.recordDataList.push(obj)
                    })
                } else {
                    this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
            })
        }
    },
}
