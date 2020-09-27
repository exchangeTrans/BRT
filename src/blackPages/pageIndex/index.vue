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
	</view>
</template>

<script>
	import pageFooter from '@/components/common/footer.vue';
	import index from '@/blackPages/index/index.vue';
	import quotes from '@/blackPages/quotes/quotes.vue';
	import trades from '@/blackPages/trades/index.vue';
	import property from '@/blackPages/property/property.vue';
	import user from '@/blackPages/user/user.vue';
	export default {
		components: {
			pageFooter,
			index,
			quotes,
			trades,
			property,
			user
		},
		data() {
			return {
				currentPage:{pagePath:''}
			}
		},
		onLoad() {

		},
		computed: {},
		mounted() {
			//   this.$refs.update.open();
			// this.getfirst();
		},
		methods: {
			changePage(item){
				this.currentPage=item

			}
			
		}
	}
</script>

<style lang="less">
	.pageIndex{
		width: 100vw;
		height: 100vh;
		background: #EEEFEF;
	}
</style>
