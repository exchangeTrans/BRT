import ndheader from '../../components/common/header'
	export default {
		components: {
			ndheader
		},
		onLoad(options) {
			this.details_msg_list = JSON.parse(options.details_list);
			// console.log(details_msg_list);
			this.id = options.id;
		},
		mounted() {
			let theme = this.$storage.getSync({
				key: 'theme'
			});
			let that = this;
			let title = that.$t('noticelist').noticeDetail.title;
			if (theme === 'white') {
				this.headerOptions = {
					show: true,
					text: title,
					isAllowReturn: true,
					fontfamily: "PingFangSC-Regular, PingFang SC",
					fontSize: '34',
					style: {
						color: "#333333",

					},
					isColor: true,
					rightItem: {
						type: "text",
						// text: "ID:AVV491",
						style: {
							color: "#000000"
						}
					}
				}
			} else {
				this.headerOptions = {
					show: true,
					text: title,
					isAllowReturn: true,
					isWhiteIcon:true,
					fontfamily: "PingFangSC-Regular, PingFang SC",
					fontSize: '34',
					background: "#00001A",
					style: {
						color: "#D9DADB",

					},
					isColor: true,
					rightItem: {
						type: "text",
						// text: "ID:AVV491",
						style: {
							color: "#000000"
						}
					},
					headerIsNoBoder:true
				}
			}
		},
		data() {
			return {
				headerOptions: {},
				details_msg_list: [],
				id: ''
			}
		}
	}
