import noticehead from '../../components/common/header';
import noticeitem from '../../components/notice_item/index';
import jumpPage from '../../static/js/jumpPage.js';
import {
	DateFunc
} from '../../static/js/common.js';
import recordAmount from '../../static/js/recordNum.js'
export default {
	components: {
		noticehead,
		noticeitem
	},
	mounted() {
		this.getmore();
		let theme = this.$storage.getSync({
			key: 'theme'
		});
		if (theme === 'white') {
			this.headerOptions = {
				show: true,
				text: "公告列表",
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
				},
			}
		} else {
			this.headerOptions = {
				show: true,
				text: "公告列表",
				isAllowReturn: true,
				fontfamily: "PingFangSC-Regular, PingFang SC",
				fontSize: '34',
				background: "#00001A",
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
				},
			}
		}
	},
	methods: {
		gonoticedetails(id) {
			var that = this;
			var obj = JSON.stringify(that.notice_deails_list);
			this.$jumpPage.jump({
				type: "navigateTo",
				url: 'noticedetails/index?details_list=' + obj+'&id='+id
			})
		},
		getmore(isMore) {
			if (this.haveNext) {
				let postData = {
					infoType: '1',
					start: '0',
					index: recordAmount.num,
				};
				this.getdata(postData, isMore);
			}
		},

		getdata(postData, isMore) {
			this.$request({
				url: "discovery/getInfo",
				method: "post",
				params: postData
			}).then((res) => {
				var notice_list_item = {
					text: '',
					date: '',
					isBlack: false
				};
				var notice_details = {
					title: '',
					date: '',
					details: ''
				}
				if (res.result.returnCode.toString() === "0") {
					//判断是否还有数据
					if (res.data.list.length < recordAmount.num) {
						this.haveNext = true;
					}
					if (isMore) {
						notice_list_item.text = res.data.list[i].title;
						var time = DateFunc.resetTime(parseInt(res.data.list[i].createTime), 'ymdhm');
						notice_list_item.date = time;
						this.notice_list.unshift(notice_list_item);
						notice_list_item = {
							text: '',
							date: '',
							isBlack: false
						};

						notice_details.title = res.data.list[i].title;
						var time = DateFunc.resetTime(parseInt(res.data.list[i].createTime), 'ymd');
						notice_details.date = time;
						notice_details.details = res.data.list[i].detail;
						this.notice_deails_list.push(notice_details);
						notice_details = {
							title: '',
							date: '',
							details: ''
						}
					} else {
						for (var i = 0; i < res.data.list.length; i++) {
							notice_list_item.text = res.data.list[i].title;
							var time = DateFunc.resetTime(parseInt(res.data.list[i].createTime), 'ymdhm');
							notice_list_item.date = time;
							this.notice_list.unshift(notice_list_item);
							notice_list_item = {
								text: '',
								date: '',
								isBlack: false
							};

							notice_details.title = res.data.list[i].title;
							var time = DateFunc.resetTime(parseInt(res.data.list[i].createTime), 'ymd');
							notice_details.date = time;
							notice_details.details = res.data.list[i].detail;
							this.notice_deails_list.push(notice_details);
							notice_details = {
								title: '',
								date: '',
								details: ''
							}
						};
					}
				}
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
		},

	},
	data() {
		return {
			headerOptions: {},
			notice_list: [],
			notice_deails_list: [],
			haveNext: true
		}
	}
}
