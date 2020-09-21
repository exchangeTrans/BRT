<template>
	<view>
		<noticedheader :headerOptions="headerOptions"></noticedheader>
		<view class="setbg">
		<view class="notice_list">
			<view class="item">
				<view class="notice_content">BRT关于调整USDT提币手续公告</view>
				<view class="notice_time">2020-9-16 16:38</view>
			</view>
		</view>
		<scroll-view scroll-y class="notice_content_details">
			<view>尊敬的BRT用户</view>
			<view class="article">
				11月22日，有接近国家互联网金融风险专项整治小组办公室（下称整治办）人士表示，
			区块链的内涵很丰富，并不等于虚拟货币。目前所有打着区块链旗号关于虚拟货币的推广宣传
			活动都是违法违规的。监管部门对于虚拟货币炒作和虚拟货币交易场所的打击态度没有丝毫改变。
			</view>
			<view class="article">
				据了解，目前监管部门已经通盘部署，要求全国各地全面排查属地借助区块链开展虚拟货
			币炒作活动的最新情况，出现问题及时打早打小。在下一阶段的工作中，监管部门将加大清理整顿
			虚拟货币及交易场所的力度，发现一起、处置一起。</view>
			<view>BRT实验室</view>
			<view>2020年9月8日</view>
		</scroll-view>
		</view>
	</view>
</template>

<script>
	import noticedheader from '../../components/common/header';
	export default{
		components:{noticedheader},
		data(){
			return{
				headerOptions:{
					show: true,
					isAllowReturn: true,
					text: "公告详情",
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
	*{
		margin: 0;
		padding: 0;
	}
	
	.notice_list{
		width: 100%;
		height: 180rpx;
	}
	
	.setbg{
		background: #272A2E;
		color: #D9DADB;
		font-size: 0rpx;
	}
	.item{
		height: 150rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
		padding-top: 30rpx;
		.notice_content{
			margin-left: 20rpx;
			font-size: 38rpx;
			// margin-top: 30rpx;
			margin-bottom: 20rpx;
		}
		.notice_time{
			margin-left: 20rpx;
			font-size: 34rpx;
			color: #CCCCCC;
		}
	}
	.article{
		text-indent: 2em;
		margin-bottom: 40rpx;
		line-height: 50rpx;
		font-size: 36rpx;
	}
	.notice_content_details{
		line-height: 80rpx;
		font-size: 37rpx;
		margin-left: 20rpx;
		width: 96%;
		height: calc(100vh - 300rpx);
	}
</style>

