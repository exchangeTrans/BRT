<template>
	<view class="noticeDetail" id="noticeDetail">
		<ndheader :headerOptions="headerOptions" class="headstyle"></ndheader>
		<view class="notice_list">
			<view class="item">
				<view class="notice_content">{{details_msg_list[id].title}}</view>
				<view class="notice_time">{{details_msg_list[id].date}}</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="notice_content_details">
			<view class="user">尊敬的BRT用户</view>
			<view class="article">
				{{details_msg_list[id].details}}
			</view>
			<view class="brt">BRT 实验室</view>
			<view class="date">{{details_msg_list[id].date}}</view>
		</scroll-view>
	</view>
</template>

<script src="@/script/noticedetails/noticedetails.js">
	// import noticedheader from '../../components/common/header';
	// export default{
	// 	components:{noticedheader},
	// 	data(){
	// 		return{
	// 			headerOptions:{
	// 				show: true,
	// 				isAllowReturn: true,
	// 				text: "公告详情",
	// 				background:"#00001A",
	// 				rightItem: {
	// 				    type: "text",
	// 				    text: "ID:AVV941",
	// 				    style: {
	// 				        "fontSize": '24rpx',
	// 				        "fontFamily": 'PingFangSC-Regular, PingFang SC;',
	// 				        "fontWeight": '400',
	// 				        "color": '#D9DADB'
	// 				    }
	// 				},
	// 				style:{
	// 					color:"#D9DADB"
	// 				},
	// 				isWhiteIcon:true,
	// 				headerIsNoBoder: true,
	// 			},
	// 		}
	// 	}
	// }
</script>

<style lang="less">
	/**{*/
		/*margin: 0;*/
		/*padding: 0;*/
	/*}*/
	/*.headstyle{*/
		/*padding-top: calc(100rpx + var(--status-bar-height));*/
	/*}*/
	/*.notice_list{*/
		/*width: 100%;*/
		/*height: 180rpx;*/
		/*padding-top: calc(100rpx + var(--status-bar-height));*/
	/*}*/

	/*.setbg{*/
		/*background: #272A2E;*/
		/*color: #D9DADB;*/
		/*font-size: 0rpx;*/
	/*}*/
	/*.item{*/
		/*height: 150rpx;*/
		/*width: 100%;*/
		/*border-bottom: 1rpx #CCCCCC solid;*/
		/*padding-top: 30rpx;*/
		/*.notice_content{*/
			/*margin-left: 20rpx;*/
			/*font-size: 38rpx;*/
			/*// margin-top: 30rpx;*/
			/*margin-bottom: 20rpx;*/
		/*}*/
		/*.notice_time{*/
			/*margin-left: 20rpx;*/
			/*font-size: 34rpx;*/
			/*color: #CCCCCC;*/
		/*}*/
	/*}*/
	/*.article{*/
		/*text-indent: 2em;*/
		/*margin-bottom: 40rpx;*/
		/*line-height: 50rpx;*/
		/*font-size: 36rpx;*/
	/*}*/
	/*.notice_content_details{*/
		/*line-height: 80rpx;*/
		/*font-size: 37rpx;*/
		/*margin-left: 20rpx;*/
		/*width: 96%;*/
		/*height: calc(100vh - 300rpx);*/
	/*}*/

	.noticeDetail{
		width: 100%;
		height: 100%;
		background: #272A2E;
		color: #D9DADB;
		.notice_list{
			padding-top:calc(100rpx + var(--status-bar-height));
			box-sizing: border-box;
			.item{
				height: 170rpx;
				width: 100%;
				padding-left:20rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid rgba(255, 250, 250, 0.1);
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				.notice_content{
					margin-bottom: 20rpx;
					font-size: 32rpx;
					padding-top: 40rpx;
				}
				.notice_time{
					height: 40rpx;
					font-size: 28rpx;
					line-height: 40rpx;
					opacity: 0.5;
				}
			}
		}
		.notice_content_details{
			padding: 30rpx;
			box-sizing: border-box;
			width: 100%;
			height: calc(100vh - 300rpx);
			font-size: 32rpx;
			font-family: PingFangSC-Light, PingFang SC;
			font-weight: 300;
			.user{
				height: 44rpx;
				font-weight: 300;
				line-height: 44rpx;
			}
			.article{
				padding-top: 20rpx;
				padding-bottom: 30rpx;
				text-indent: 2em;
				line-height: 44rpx;
			}
			.brt{
				height: 44rpx;
				line-height: 44rpx;
				padding-bottom: 16rpx;
			}
			.date{
				height: 44rpx;
				line-height: 44rpx;
			}
		}

	}


</style>

