import appHeader from '../../components/common/header';
import record from '../../components/record/recordItem';
import {DateFunc} from '@/static/js/common.js';
import recordAmount from '@/static/js/recordNum.js';

export default {
    components: {
        appHeader,
        record
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        let symbolType = this.$store.state.wallet.symbolType
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                text: symbolType.name + "充币记录",
                isAllowReturn: true,
				background: '#FFFFFF',
                style: {
                    color: "#333333",
					'fontSize': '34rpx',
					'fontFamily':' PingFangSC-Regular, PingFang SC',
					'fontWeight': '400',
                },
                isColor: true,
                rightItem: {
                    type: "text",
                    text: "ID:AVV491",
                    style: {
						'fontSize': '24rpx',
						'fontFamily': 'PingFangSC-Regular, PingFang SC',
						'fontWeight': '400',
						'color': '#000000',
						'opacity': 0.5
                    }
                }
            }
        } else {
            this.headerOptions = {
                show: true,
                text: symbolType.name + "充币记录",
                isAllowReturn: true,
				background: '#FFFFFF',
                style: {
					color: "#333333",
					'fontSize': '34rpx',
					'fontFamily':' PingFangSC-Regular, PingFang SC',
					'fontWeight': '400',

                },
                isColor: true,
                rightItem: {
                    type: "text",
                    text: "ID:AVV491",
                    style: {
                        'fontSize': '24rpx',
                        'fontFamily': 'PingFangSC-Regular, PingFang SC',
                        'fontWeight': '400',
                        'color': '#000000',
						'opacity': 0.5
                    }
                }
            }
        }
        this.getRecordList(this.currentIndex , recordAmount.num)
    },
    data() {
        return {
            headerOptions: {},
            recordData_list: [],
            hasNext: true,
            currentIndex: 0,
        }
    },
	methods: {
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
                operationType: 30
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
                        let obj = {
                            "titleName": item.operationTypeText,
                            "status": 'success',
                            "number": item.amount,
                            "date": DateFunc.dateFormat(item.createTime, "hh:mm MM/dd"),
                        }
                        that.recordData_list.push(obj)
                    })
                } else {
			        this.$toast.show({
                        title: res.result.returnMessage,
                    })
                }
			})
		}
	}
}
