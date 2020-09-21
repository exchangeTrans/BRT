<template>
	<view>
		<noticehead :headerOptions="headerOptions"></noticehead>
		<scroll-view class="notice_list" scroll-y>
			<!-- <view class="item">
				<view class="notice_content">BRT关于调整USDT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
				<image src="../../static/images/noticelist/right.png" mode="" class="item_right"></image>
			</view> -->
			<view v-for="(item,id) in notice_list" :key="id" @click="gonoticedetails">
				<noticeitem :noticeOptions="item"></noticeitem>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import noticehead from '../../components/common/header';
	import noticeitem from '../../components/notice_item/index';
	import jumpPage from '../../static/js/jumpPage.js'
	export default{
		components:{
			noticehead,
			noticeitem
		},
		methods:{
			// gonoticedetails(){
			// 	console.log("666")
			// 	this.$jumpPage.jump({
			// 		type:"navigateTo",
			// 		url:'/noticedetails/index'
			// 	})
			// }
			gonoticedetails(){
					this.$jumpPage.jump({
					type:"navigateTo",
					url:'noticedetails/index'
				})
			}
		},
		data(){
			return {
				headerOptions:{
					show:true,
					text:"USTU充币记录",
					isAllowReturn:true,
					fontfamily:"PingFangSC-Regular, PingFang SC",
					fontSize:'34',
					style:{
						color:"#333333",
						
					},
					isColor:true,
					rightItem:{
						type:"text",
						text:"ID:AVV491",
						style:{
							color:"#000000"
						}
					},
				},
				notice_list:[
					{
						text:"BRT关于调整USDT提币手续公告",
						date:"2020-9-16 16:38",
						isBlack:false
					},
					{
						text:"BRT关于调整USDT提币手续公告",
						date:"2020-9-16 16:38",
						isBlack:false
					},
					{
						text:"BRT关于调整USDT提币手续公告",
						date:"2020-9-16 16:38",
						isBlack:false
					},
				]
				
			}
		}
	}
	
</script>

<style lang="less">
	.notice_list{
		margin-top: 100rpx;
	}
</style>
