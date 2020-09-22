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
	// import http from '../../request/index.js';
	import noticehead from '../../components/common/header';
	import noticeitem from '../../components/notice_item/index';
	import jumpPage from '../../static/js/jumpPage.js'
	export default{
		components:{
			noticehead,
			noticeitem
		},
		mounted(){
			this.getdata();
			this.getusermsg();
			this.useriverst();
			this.setRate();
		},
		methods:{
			gonoticedetails(){
					this.$jumpPage.jump({
					type:"navigateTo",
					url:'noticedetails/index'
				})
			},
			getdata(){
				this.$request({
					url:"discovery/getInfo",
					method:"post",
					params:{
						infoType:'1',
						start:'0',
						index:'10'
					},
				}).then((res)=>{
					console.log(res)
				}).catch((err)=>{	
					console.log(err)
				})
			},
			getusermsg(){
				this.$request({
					url:"finance/getFinance",
					method:"post",
					params:''
				}).then((res)=>{
					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			},
			useriverst(){
				this.$request({
					url:"finance/inFinance",
					method:"post",
					params:{
						amount:'1000',
						pageRepeatCode:'ybh'
					}
				}).then((res)=>{
					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			},
			setRate(){
				this.$request({
					url:"finance/setRate",
					method:"post",
					params:{
						rateType:'1',
						rateValue:'0.6'
					}
				}).then((res)=>{
					console.log(res)
				}).catch((err)=>{
					console.log(err)
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
				],
			}
		}
	}
	
</script>

<style lang="less">
	.notice_list{
		margin-top: 100rpx;
	}
</style>
