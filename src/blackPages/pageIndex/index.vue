<template>
	<view class="pageIndex" id="pageIndex">
		<block v-if="currentPage.pagePath==='index/index'">
			<index/>
		</block>
		<block v-if="currentPage.pagePath==='quotes/quotes'">
			<quotes/>
		</block>
		<block v-if="currentPage.pagePath==='trades/index'">
			<trades/>
		</block>
		<block v-if="currentPage.pagePath==='property/property'">
			<property/>
		</block>
		<block v-if="currentPage.pagePath==='user/user'">
			<user/>
		</block>	
		<pageFooter @changePage="changePage"/>
		<forcedUpdating ref="update" :upDate="upDate" @upDateFunc="upDateFunc" name="update"></forcedUpdating>
	</view>
</template>
<script>
	import pageFooter from '@/components/common/footer.vue';
	import forcedUpdating from "@/components/popup/forcedUpdating/index.vue"
	import index from '@/pages/index/index.vue';
	import quotes from '@/pages/quotes/quotes.vue';
	import trades from '@/pages/trades/index.vue';
	import property from '@/pages/property/property.vue';
	import user from '@/pages/user/user.vue';
	export default {
		components: {
			pageFooter,
			index,
			quotes,
			trades,
			property,
			user,
			forcedUpdating
		},
		data() {
			return {
				currentPage:{pagePath:''},
				upDate:{iosMemo:'',androidMemo:''}
			}
		},
		onLoad() {

		},
		computed: {
			version(){
				return this.$store.state.defaultData.version;
			},
			mobileMsg(){
                return this.$storage.getSync({
					key: "mobileMsg",
				});
            }
// 			androidBuild: 1
// androidMemo: "_"
// androidUrl: "http://download.funfun.pw/qy/wr3r"
// androidVersion: "1.0.0"
// iosBuild: 1
// iosMemo: "_"
// iosUrl: "http://download.funfun.pw/vip/hryv"
// iosVersion: "1.0.0"
// v: "20200930"
		},

		mounted() {
			//   this.$refs.update.open();
			// this.getfirst();
			this.getVersion()
		},
		methods: {
			changePage(item){
				this.currentPage=item;

			},
			getVersion() {
				// debugger
				let that = this;
				this.$request({
					url: "common/getVersion",
					method: "post",
				}).then((res) => {
					// data: null
					// result: {returnCode: "0", returnUserMessage: "注销成功", returnMessage: "注销成功"}
					// returnCode: "0"
					// returnMessage: "注销成功"
					// returnUserMessage: "注销成功"
					if (res.result.returnCode.toString() === "0") {
						that.upDate = res.data;
						let Build = that.mobileMsg.devicePlatform==='iOS'?that.upDate.iosBuild:that.upDate.androidBuild
						if(that.version.code<Number(Build)){
							that.$refs.update.open()
						}
						
						// this.$jumpPage.jump({
						// 	type: 'redirectTo',
						// 	url: 'login/login',
						// })
					}
					// this.$toast.show({
					// 	title: res.result.returnMessage,
					// })


				})
			},
			upDateFunc(){
				let upDate = this.upDate;
				let url = this.mobileMsg.devicePlatform==='iOS'?upDate.iosUrl:upDate.androidUrl;

                let urlStr = encodeURI(url)//把字符串作为url进行编码
                plus.runtime.openURL(urlStr);
        //         // plus.runtime.openUrl(item.url)


			},
			
			
		}
	}
</script>

<style lang="less">
	.pageIndex{
		width: 100vw;
		height: 100vh;
		background: #22252A;
	}
</style>
