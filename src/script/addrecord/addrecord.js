import appHeader from '../../components/common/header';
import record from '../../components/record/recordItem'

export default {
    components: {
        appHeader,
        record
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        let symbolType = this.$store.state.wallet.symbolType
        symbolType = {"name": 'USDT', "symbolType": 6}
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
        this.getRecordList(0 , 10)
    },
    data() {
        return {
            headerOptions: {},
            recordData_list: []
        }
    },
	methods: {
    	getRecordList(index, size) {
    	    let symbolType = this.$store.state.wallet.symbolType
            console.log(symbolType.symbolType)
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

			})
		}
	}
}
