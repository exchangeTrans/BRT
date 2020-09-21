<template>
	<view class="">
		<historyhead :headerOptions="headerOptions"></historyhead>
		<scroll-view scroll-y="true" class="list">
			<view v-for="(item,id) in listOptions" :key="item.id">
				<historylist :listOptions="item"></historylist>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import historyhead from '../../components/common/header'
	import historylist from '../../components/history_list/history_list'
	export default{
		components:{historyhead,historylist},
		data(){
			return{
				headerOptions:{
					show: true,
					isAllowReturn: true,
					text: "历史记录",
					background:"#FFFFFF",
					isAllowReturn:true,
					rightItem: {
					    type: "text",
					    text: "ID:AVV941",
					    style: {
					        "fontSize": '24rpx',
					        "fontFamily": 'PingFangSC-Regular, PingFang SC;',
					        "fontWeight": '400',
					        "color": 'rgba(68,68,68,1)'
					    }
					},
					style:{
						color:"#000000"
					},
					isWhiteIcon:false,
					headerIsNoBoder: false,
				},
				listOptions:[
					{
						num:"0.3567",
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:''
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:''
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:''
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:''
						}
					},
				]
			}
		}
	}
</script>

<style lang="less">
	.list{
		width: 100%;
		height: calc(100vh - var(--status-bar-height) - 100rpx); 
		background: #F8F8F8;
		padding-top: 135rpx;
	}
</style>
