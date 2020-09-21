<template>
	<view class="">
		<nologheader :headerOptions="headerOptions"></nologheader>
		<view class="nologimg">
			<image src="../../static/images/nohistorylog/nohistorylog.png" mode="" class="img"></image>
			<view class="nologfont">暂无数据</view>
		</view>
		
	</view>
</template>

<script>
	import nologheader from '../../components/common/header'
	export default{
		components:{nologheader},
		data(){
			return{
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
			}
		}
	}
</script>

<style lang="less">
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

