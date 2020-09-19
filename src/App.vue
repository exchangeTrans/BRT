<script>
	export default {
		onLaunch: function() {
			//white black
			let theme = this.$storage.getSync({key:'theme'});
			if(!theme){
				this.$storage.setSync({key: "theme", data: "white"});
			}
			// this.$mySocket.createSocket();

			// #ifdef APP-PLUS
			// 锁定屏幕方向
			// eslint-disable-next-line no-undef
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
			this.initPhoneMsg();
			this.initLoginMsg();
			this.initLangMsg();

			
			
			



		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
			initPhoneMsg(){
				//获取设备信息
				let phoneMsg = uni.getSystemInfoSync();
				let deviceNo = "defult";
				// #ifdef APP-PLUS
				deviceNo = plus.device.uuid;
				// #endif
				let defultMsg = {
					devicePlatform:phoneMsg.platform,
					devicePlatformLanguage:phoneMsg.language,
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
				let storageLangMsg = this.$storage.getSync({key:'loginMsg'});
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
