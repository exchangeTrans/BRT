import historyhead from '../../components/common/header'
import historylist from '../../components/history_list/history_list'
export default {
	components: {
		historyhead,
		historylist 
	},
	mounted() {
		let theme = this.$storage.getSync({
			key: 'theme'
		});
		if (theme === 'white') {
			this.headerOptions = {
				show: true,
				isAllowReturn: true,
				text: "历史记录",
				background: "#FFFFFF",
				rightItem: {
					type: "text",
					text: "ID:AVV941",
					style: {
						"fontSize": '24rpx',
						"fontFamily": 'PingFangSC-Regular, PingFang SC;',
						"fontWeight": '400',
						"color": 'rgba(68,68,68,1)'
					}
				},
				style: {
					color: "#000000"
				},
				isWhiteIcon: false,
				headerIsNoBoder: false,
			}
		} else {
			this.headerOptions={
				show: true,
				isAllowReturn: true,
				text: "历史记录",
				background: "#FFFFFF",
				// isAllowReturn: true,
				rightItem: {
					type: "text",
					text: "ID:AVV941",
					style: {
						"fontSize": '24rpx',
						"fontFamily": 'PingFangSC-Regular, PingFang SC;',
						"fontWeight": '400',
						"color": 'rgba(68,68,68,1)'
					}
				},
				style: {
					color: "#000000"
				},
				isWhiteIcon: false,
				headerIsNoBoder: false,
			}
		}
	},
	data() {
		return {
			showdata: true,
			nodata: false,
			headerOptions: {

			},
			listOptions: [{
					num: "0.3567",
					charge: "46.76",
					money: "9.4658",
					all: "39.54",
					buytype: {
						type: "买",
						status: "1",
					},
					style: {
						color: ''
					}
				},
				{
					num: '0.3567',
					charge: "46.76",
					money: "9.4658",
					all: "39.54",
					buytype: {
						type: "买",
						status: "1",
					},
					style: {
						color: ''
					}
				},
				{
					num: '0.3567',
					charge: "46.76",
					money: "9.4658",
					all: "39.54",
					buytype: {
						type: "卖",
						status: "0",
					},
					style: {
						color: ''
					}
				},
				{
					num: '0.3567',
					charge: "46.76",
					money: "9.4658",
					all: "39.54",
					buytype: {
						type: "卖",
						status: "0",
					},
					style: {
						color: ''
					}
				},
			]
		}
	}
}
