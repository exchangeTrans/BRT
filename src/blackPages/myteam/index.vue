<template>
	<view>
		<view class="headbg">
			<pageHeader :headerOptions="headerOptions" class="headname"></pageHeader>
			<view class="usermsgcon">
				<view class="headphoto">
					<image src="../../static/images/myteam/headphoto.png" mode="" style="width:118rpx; height: 118rpx;"></image>
				</view>
				<view class="usermsg">
					<view class="username">CSIji7833</view>
					<view class="userid">ID:893632</view>
				</view>
				<view class="incomelog">推广收益记录</view>
			</view>
			<view class="teammsg">
				<view class="teamablity">
					<view class="descrip">团队总质押</view>
					<view class="num">1343.32万</view>
				</view>
				<view class="teamtoday">
					<view class="descrip">今日新增质押</view>
					<view class="num">1343.32万</view>
				</view>
				<view class="teamyestoday">
					<view class="descrip">团队总人数</view>
					<view class="num">69</view>
				</view>
			</view>
			<view class="invitelog">
				<image src="../../static/images/myteam/item.png" mode="" class="img"></image>
				<view class="log">邀请记录</view>
			</view>
			<view class="datalisthead">
				<view class="time">邀请号码</view>
				<view class="memberid">会员ID</view>
				<view class="grade">业绩</view>
			</view>
			<scroll-view scroll-y="true" class="scrollh">
				<view class="datalist" v-for="(item,id) in datalist" :key="item.id">
					<image :src=item.flag mode="" class="flag"></image>
					<view class="time">{{item.phonenumber}}</view>
					<view class="memberid">{{item.memberid}}</view>
					<view class="grade">{{item.grade}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import pageHeader from '@/components/common/header.vue'
	export default{
		components:{pageHeader},
			data(){
				return{
					datalist:[
						{
							flag : require("../../static/images/myteam/chinese.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/taiwan.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/hongkong.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/korea.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/korea.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/hongkong.png"),
							phonenumber:"13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							flag:require("../../static/images/myteam/taiwan.png"),
							phonenumber:"15884864417",
							memberid:"19034532",
							grade:'1000BRT'
						}
					],
					headerOptions: {
					    show: true,
					    isAllowReturn: true,
					    text: "团队详情",
					    rightItem: {
					        // type: "text",
					        // text: "须知&反馈",
					        // style: {
					        //     "fontSize": '28rpx',
					        //     "fontFamily": 'Source Han Sans CN',
					        //     "fontWeight": '400',
					        //     "color": 'rgba(68,68,68,1)'
					        // }
					    },
						style:{
							color:"#ffffff"
						},
						isWhiteIcon:true,
					    headerIsNoBoder: false,
					},
				}
			}
	}
</script>

<style lang="less">
	.headbg{
		position: relative;
		width: 100%;
		height: 506rpx;
		background: linear-gradient(to right,#004FA8,#007CD3,#25D4ED);
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}
	.headname{
		font-size: 36rpx;
		color: #FFFFFF;
		font-family: PingFangSC-Semibold, PingFang SC;
	}
	// .head{
	// 	height: 100rpx;
	// 	width: 100%;
	// 	border-bottom: 1rpx #CCCCCC solid;
	// 	position: absolute;
	// 	.headleft{
	// 		width: 50rpx;
	// 		height: 50rpx;
	// 		float: left;
	// 		margin-left: 30rpx;
	// 		margin-top: 25rpx;
	// 	}
		
	// }
	.usermsgcon{
		position: absolute;
		width: 100%;
		height: 120rpx;
		margin-top: 10rpx;
		line-height: 120rpx;
		margin-left: 40rpx;
		.headphoto{
			width: 118rpx;
			height: 118rpx;
			border-radius: 140rpx;
			margin-top: 140rpx;
			float: left;
		}
		.usermsg{
			width: 60rpx;
			height: 60rpx;
			float: left;
			line-height: 60rpx;
			margin-left: 20rpx;
			.username{
				color: #FFFFFF;
				margin-top: 140rpx;
				font-size: 36rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
			}
			.userid{
				color: #C0C0C0;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
			}
		}
		.incomelog{
			width: 200rpx;
			height: 40rpx;
			font-size: 30rpx;
			line-height: 40rpx;
			text-align: center;
			background-color: #4BB1E3;
			color: #FFFFFF;
			border-radius: 40rpx;
			float: right;
			margin-top: 154rpx;
			margin-right: 60rpx;
		}
	}
	.teammsg{
		width: 100%;
		height: 100rpx;
		.teamablity{
			height: 100rpx;
			width: 200rpx;
			color: #FFFFFF;
			position: absolute;
			border-right: 2rpx #ccc solid;
			margin-top: 350rpx;
			margin-left: 50rpx;
			text-align: center;
		}
		.teamtoday{
			height: 100rpx;
			width: 200rpx;
			color: #FFFFFF;
			position: absolute;
			border-right: 2rpx #ccc solid;
			margin-top: 350rpx;
			margin-left: 270rpx;
			text-align: center;
		}
		.teamyestoday{
			height: 100rpx;
			width: 200rpx;
			color: #FFFFFF;
			position: absolute;
			margin-top: 350rpx;
			margin-left: 490rpx;
			text-align: center;
		}
		.descrip{
			font-size: 28rpx;
			margin-bottom: 18rpx;
		}
		.num{
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
		}
	}
	.invitelog{
		padding-top: 100rpx;
		margin-top: 370rpx;
		background: #272A2E;
		padding-bottom: 30rpx;
		clear: both;
		.img{
			width: 32rpx;
			height: 32rpx;
			float: left;
			margin-left: 20rpx;
			margin-right: 10rpx;
		}
		.log{
			line-height: 32rpx;
			font-weight: bold;
			font-size: 36rpx;
			color: #D9DADB;
			font-family: PingFangSC-Medium, PingFang SC;
		}
	}
	.datalisthead{
		width: 100%;
		height: 100rpx;
		background-color: #F9FAFA;
		font-size: 32rpx;
		line-height: 100rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		color: #D9DADB;
		background: #22252A;
		.time{
			margin-left: 20rpx;
			float: left;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #D9DADB;
		}
		.memberid{
			margin-left: 205rpx;
			float: left;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #D9DADB;
		}
		.grade{
			margin-left: 600rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #D9DADB;
		}
	}
	.datalist{
		font-size: 32rpx;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		color: #D9DADB;
		background: #272A2E;
		.flag{
			width: 50rpx; 
			height: 34rpx;
			float: left; 
			margin-top: 30rpx;
			margin-left: 20rpx;
		}
		.time{
			margin-left: 20rpx;
			float: left;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			margin-top: -5rpx;
		}
		.memberid{
			margin-left: 80rpx;
			float: left;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			margin-top: -5rpx;
		}
		.grade{
			margin-left: 600rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			margin-top: -5rpx;
		}
	}
	.scrollh{
		width: 100%;
		height: calc(100vh - 762rpx);
	}
	
	
	
</style>
