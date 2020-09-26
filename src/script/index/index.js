import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
import pageFooter from '@/components/common/footer.vue'
import {
	DateFunc
} from '../../static/js/common.js';
import {changeMoney} from "../../static/js/changeMoney";
export default {
	components: {
		forcedUpdating,
		pageFooter
	},
	data() {
		return {
			girdData: [{
					text: '质押挖矿',
					img: `${require('@/static/images/home/detail.png')}`,
					url: 'sub/index'
				},
				{
					text: '挖矿收益',
					img: `${require('@/static/images/home/dividend.png')}`,
					url: 'miningEarnings/index'
				},
				{
					text: '量化理财',
					img: `${require('@/static/images/home/deal.png')}`,
					url: 'earnings/index'
				},
				{
					text: '智能合约',
					img: `${require('@/static/images/home/agreement.png')}`,
					url: '#'
				},
				{
					text: '节点矿池',
					img: `${require('@/static/images/home/pool.png')}`,
					url: 'bonus/bonus'
				},

				{
					text: '团队详情',
					img: `${require('@/static/images/home/team.png')}`,
					url: 'myteam/index'
				},
				{
					text: '推广收益',
					img: `${require('@/static/images/home/list.png')}`,
					url: 'bonus/promoteBonus'
				},
				{
					text: '上币申请',
					img: `${require('@/static/images/home/apply.png')}`,
					url: '#'
				},

			],
			logo: `${require('@/static/images/home/logo.png')}`, //logo
			qr: `${require('@/static/images/home/qr.png')}`, //二维码
			topBg: `${require('@/static/images/home/topBg.png')}`, //背景
			advertising: `${require('@/static/images/home/advertising.png')}`, //广告牌
			notice2: `${require('@/static/images/home/notice2.png')}`, //公告
			more: `${require('@/static/images/home/more.png')}`, //公告
			notice_deails_list: [],

            userMsg:{},
			changeMoneyData:{}
		}
	},
	onLoad() {

	},
	computed: {
		tradePairData() {
			return this.$store.state.tradeData.tradePairData;
			//             id	integer	unix时间，同时作为K线ID
			// amount	float	成交量
			// count	integer	成交笔数
			// open	float	开盘价
			// close	float	收盘价（当K线为最晚的一根时，是最新成交价）
			// low	float	最低价
			// high	float	最高价
			// vol	float	成交额, 即 sum(每一笔成交价 * 该笔的成交量)
		},
		selectedCurrency() {
			return this.$store.state.defaultData.selectedCurrency;
			//             id	integer	unix时间，同时作为K线ID
			// amount	float	成交量
			// count	integer	成交笔数
			// open	float	开盘价
			// close	float	收盘价（当K线为最晚的一根时，是最新成交价）
			// low	float	最低价
			// high	float	最高价
			// vol	float	成交额, 即 sum(每一笔成交价 * 该笔的成交量)
		},
		langMsg() {
			let langMsg = this.$storage.getSync({
				key: 'langMsg'
			});
			return langMsg.name
		}
	},
	mounted() {
		//   this.$refs.update.open();
		// this.getfirst();
		this.getuserInfo()
	},
	methods: {
		toInfo(item) {
			this.$jumpPage.jump({
				type: 'navigateTo',
				url: item.url
			})
		},
		gonoticelist() {
			this.$jumpPage.jump({
				type: 'navigateTo',
				url: 'noticelist/index'
			})
		},
		gonoticelist_details() {
			let postData = {
				infoType: '1',
				start: '0',
				index: "1",
			};
			this.$request({
					url: "discovery/getInfo",
					method: "post",
					params: postData
				}).then((res) => {
					var notice_details = {
						title: '',
						date: '',
						details: ''
					};
					console.log(res)
					notice_details.title = res.data.list[0].title;
					var time = DateFunc.resetTime(parseInt(res.data.list[0].createTime), 'ymd');
					notice_details.date = time;
					notice_details.details = res.data.list[0].detail;
					this.notice_deails_list.push(notice_details);
					console.log(this.notice_deails_list);
					var obj = JSON.stringify(this.notice_deails_list);
					this.$jumpPage.jump({
						type: 'navigateTo',
						url: 'noticedetails/index?details_list=' + obj + '&id=' + 0
					})
				}).catch(err => {
					console.log(err);
				})

		},

		getuserInfo(){
			debugger
			let userMsg = this.$store.state.defaultData.userMsg;
			// console.log(userMsg)
			let changeObj = this.getChangeObj(userMsg.asset)
			// debugger
			// console.log(changeMoney(changeObj))
			this.changeMoneyData = {
				...changeMoney(changeObj),
			};
		},
		getChangeObj(asset){
			let firstCode = "USDT"//第一个单位
			let lastCode = this.$store.state.defaultData.selectedCurrency.code//第二个单位
			// asset//用户的钱 USDT
			let changeObj = {
				firstCode,//第一个单位
				lastCode,//第二个单位
				asset,//用户的钱 USDT
			}
			return changeObj
		},
	}
}
