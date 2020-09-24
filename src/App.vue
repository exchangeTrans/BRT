<script>
	export default {
		onLaunch: function() {
			//white black
			let theme = this.$storage.getSync({key:'theme'});
			if(!theme){
				this.$storage.setSync({key: "theme", data: "white"});
			}
			this.$mySocket.createSocket();

			// #ifdef APP-PLUS
			// 锁定屏幕方向
			// eslint-disable-next-line no-undef
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
			this.initPhoneMsg();
			this.initLoginMsg();
			this.initLangMsg();
			this.initStoreData();
			let that = this;
			// uni.onSocketOpen(function (res) {
			// 	console.log(res)
			// 	that.$toast.show({title:"WebSocket连接已打开！"});
			// 	console.log('WebSocket连接已打开！');
			// });
			// uni.onSocketMessage(function (res) {
			// 	console.log(res.data)
			// 	that.$toast.show({title:"收到消息"});
			// 	console.log('收到服务器内容：' + res.data);
			// });
			// uni.onSocketError(function (res) {
			// 	console.log(res)
			// 	// mySocket.onopen();
			// 	that.$toast.show({title:"WebSocket失败！"});
			// 	console.log('WebSocket失败！');
			// });
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		computed:{
			tradePairData(){
				return this.$store.state.tradeData.tradePairData;
			},
			// tradeNoticeData(){
			// 	return this.$store.state.tradeData.tradeNoticeData;
			// },
			// tradeRangeData(){
			// 	return this.$store.state.tradeData.tradeRangeData;
			// }

		},
		methods: {
			initStoreData(){
				this.$store.dispatch('getCountryList');
				this.$store.dispatch('getKline',{
					symbol:'XRP',
					period:'1min',
					size:'200'
				});
                this.$store.dispatch('getRate');

			},
			initPhoneMsg(){
				//获取设备信息
				let phoneMsg = uni.getSystemInfoSync();
				let deviceNo = "1111";
				// #ifdef APP-PLUS
				deviceNo = plus.device.uuid;
				// #endif
				let defultMsg = {
					devicePlatform:phoneMsg.platform==='ios'?'iOS':phoneMsg.platform,
					deviceNo:deviceNo
				}
				this.$storage.setSync({
					key: "mobileMsg",
					data: defultMsg
				});
			},
			initLoginMsg(){
				let loginMsg = {
					isLogin:false,
					userLoginId:'',
					userLoginToken:''
				}
				let storageLoginMsg = this.$storage.getSync({key:'loginMsg'});
				loginMsg = storageLoginMsg?storageLoginMsg:loginMsg;
				this.$storage.setSync({
					key: "loginMsg",
					data: loginMsg
				});
			},
			initLangMsg(){
				let storageLangMsg = this.$storage.getSync({key:'langMsg'});
				let langMsg = {
					name:'zh-CN',
					text:'中文',
					code:1
				};
				langMsg = storageLangMsg?storageLangMsg:langMsg;
				this.$storage.setSync({
					key: "langMsg",
					data: langMsg
				});
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
    @import "./static/style/common.css";
</style>
