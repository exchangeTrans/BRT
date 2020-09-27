<template>
	<view class="" id="">
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		computed: {},
		mounted() {
            let loginMsg = this.$storage.setSync({
                key: "loginMsg"
            });

            if(loginMsg&&loginMsg.isLogin){
                this.$jumpPage.jump({
                    type: 'reLaunch',
                    url: 'pageIndex/index'
                })
            }else{
                this.$jumpPage.jump({
                    type: 'reLaunch',
                    url: 'login/loginOrRegs'
                })
            }
			//   this.$refs.update.open();
			// this.getfirst();
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
</style>
