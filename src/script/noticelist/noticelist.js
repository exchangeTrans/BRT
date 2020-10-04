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
	// 下拉刷新
	onPullDownRefresh() {
		let that = this
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();//停止当前页面下拉刷新
			that.postData.start='0';
			that.notice_list=[];
			that.getdata();
		}, 1000);
	},
// 上拉加载
	onReachBottom() {
		let that = this
		uni.showNavigationBarLoading()
		console.log('reach');
		setTimeout(function () {
			(parseInt(that.postData.start)+1).toString();
			that.notice_list=[];
			that.getdata();
			uni.hideNavigationBarLoading()
		}, 2000);
	},
		mounted() {
		this.getdata();
		// setTimeout(function() {
		// 	console.log('start pulldown');
		// }, 1000);
		// uni.startPullDownRefresh();//开始下拉刷新
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
				isWhiteIcon: true,
				fontfamily: "PingFangSC-Regular, PingFang SC",
				fontSize: '34',
				background: "#00001A",
				style: {
					color: "#D9DADB",
				},
				rightItem: {
					type: "text",
					// text: "ID:AVV491",
					style: {
						color: "#D9DADB"
					}
				},
				headerIsNoBoder: true,
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
		getdata() {
			this.$request({
				url: "discovery/getInfo",
				method: "post",
				params: this.postData
			}).then((res) => {
				var notice_list_item = {
					text: '',
					date: '',
					// isBlack:false
				};
				var notice_details = {
					title: '',
					date: '',
					details: ''
				}
				for (var i = 0; i < res.data.list.length; i++){
						notice_list_item.text = res.data.list[i].title;
						var time = DateFunc.resetTime(parseInt(res.data.list[i].createTime), 'ymdhm');
						notice_list_item.date = time;
						// console.log(this.notice_list.indexOf(notice_list_item));
						this.notice_list.unshift(notice_list_item);
						notice_list_item = {
							text: '',
							date: '',
							// isBlack: false
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
				}
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
			postData:{
				infoType:'1',
				start:'0',
				index:'10'
			}
		}
	}
}
