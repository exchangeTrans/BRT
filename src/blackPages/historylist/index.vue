<template>
	<view class="">
		<historyhead :headerOptions="headerOptions" class="headstyle"></historyhead>
		<scroll-view scroll-y="true" class="list" v-if="showdata">
			<view v-for="(item,id) in listOptions" :key="item.id">
				<historylist :listOptions="item"></historylist>
			</view>
		</scroll-view>
		<view class="nologimg" v-if="nodata">
			<image src="../../static/images/nohistorylog/nohistorylog.png" mode="" class="img"></image>
			<view class="nologfont">暂无数据</view>
		</view>
	</view>
</template>

<script>
	import historyhead from '../../components/common/header'
	import historylist from '../../components/history_list/history_list'
	export default{
		components:{historyhead,historylist},
		data(){
			return{
				nodata:true,
				showdata:false,
				headerOptions:{
					show: true,
					isAllowReturn: true,
					text: "历史记录",
					background:"#00001A",
					rightItem: {
					    type: "text",
					    text: "ID:AVV941",
					    style: {
					        "fontSize": '24rpx',
					        "fontFamily": 'PingFangSC-Regular, PingFang SC;',
					        "fontWeight": '400',
					        "color": '#D9DADB'
					    }
					},
					style:{
						color:"#D9DADB"
					},
					isWhiteIcon:true,
					headerIsNoBoder: true,
				},
				listOptions:[
					{
						num:"0.3567",
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:"0.3567",
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"买",
							status:"1",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:'#D9DADB'
						}
					},
					{
						num:'0.3567',
						charge:"46.76",
						money:"9.4658",
						all:"39.54",
						isBlack:true,
						buytype:{
							type:"卖",
							status:"0",
						},
						style:{
							color:'#D9DADB'
						}
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.headstyle{
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.list{
		width: 100%;
		height: calc(100vh - var(--status-bar-height) - 100rpx); 
		background: #F8F8F8;
		padding-top: 135rpx;
		background: #22252A;
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.nologimg{
		// margin-top: 500rpx;
		text-align: center;
		background: #22252A;
		height: calc(100vh - 100rpx);
		.img{
			width: 530rpx;
			height: 400rpx;
			margin-top: 500rpx;
		}
		.nologfont{
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #D9DADB;
			margin-top: 30rpx;
		}
	}
</style>
