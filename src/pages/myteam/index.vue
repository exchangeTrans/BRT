<template>
	<view>
		<view class="headbg">
			<view class="head">
				<image src="../../images/myteam/left.png" mode="" class="headleft"></image>
				<view class="headname">我的团队</view>
			</view>
			<view class="usermsgcon">
				<view class="headphoto"></view>
				<view class="usermsg">
					<view class="username">CSIji7833</view>
					<view class="userid">id:893632</view>
				</view>
				<view class="incomelog">推广收益记录</view>
			</view>
			<view class="teammsg">
				<view class="teamablity">
					<view class="descrip">总团队算力</view>
					<view class="num">1343.32万</view>
				</view>
				<view class="teamtoday">
					<view class="descrip">今日新增算力</view>
					<view class="num">1343.32万</view>
				</view>
				<view class="teamyestoday">
					<view class="descrip">昨日推广收益</view>
					<view class="num">1343.32万</view>
				</view>
			</view>
			<view class="invitelog">
				<image src="../../images/myteam/item.png" mode="" class="img"></image>
				<view class="log">邀请记录</view>
			</view>
			<view class="datalisthead">
				<view class="time">邀请号码</view>
				<view class="memberid">会员ID</view>
				<view class="grade">业绩</view>
			</view>
			<scroll-view scroll-y="true" class="scrollh">
				<view class="datalist" v-for="(item,id) in datalist" :key="item.id">
					<view class="time">{{item.phonenumber}}</view>
					<view class="memberid">{{item.memberid}}</view>
					<view class="grade">{{item.grade}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
			data(){
				return{
					datalist:[
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 13541511711",
							memberid:"19034532",
							grade:'1000BRT'
						},
						{
							phonenumber:"+86 15884864417",
							memberid:"19034532",
							grade:'1000BRT'
						}
					]
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
	.head{
		height: 100rpx;
		width: 100%;
		border-bottom: 1rpx #CCCCCC solid;
		position: absolute;
		.headleft{
			width: 50rpx;
			height: 50rpx;
			float: left;
			margin-left: 30rpx;
			margin-top: 25rpx;
		}
		.headname{
			text-align: center;
			line-height: 100rpx;
			font-size: 38rpx;
			color: #FFFFFF;
		}
	}
	.usermsgcon{
		position: absolute;
		width: 100%;
		height: 120rpx;
		margin-top: 10rpx;
		line-height: 120rpx;
		margin-left: 40rpx;
		.headphoto{
			width: 140rpx;
			height: 140rpx;
			background-color: #C0C0C0;
			border-radius: 140rpx;
			margin-top: 140rpx;
			float: left;
		}
		.usermsg{
			width: 60rpx;
			height: 60rpx;
			float: left;
			line-height: 70rpx;
			margin-left: 20rpx;
			.username{
				color: #FFFFFF;
				margin-top: 140rpx;
				
			}
			.userid{
				color: #C0C0C0;
				
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
			font-size: 30rpx;
			margin-bottom: 18rpx;
		}
		.num{
			font-size: 34rpx;
			font-weight: bolder;
		}
	}
	.invitelog{
		position: static;
		margin-top: 450rpx;
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
			font-size: 38rpx;
			margin-bottom: 50rpx;
		}
	}
	.datalisthead{
		width: 100%;
		height: 100rpx;
		background-color: #F9FAFA;
		font-size: 32rpx;
		line-height: 100rpx;
		.time{
			margin-left: 20rpx;
			float: left;
		}
		.memberid{
			margin-left: 200rpx;
			float: left;
		}
		.grade{
			margin-left: 600rpx;
		}
	}
	.datalist{
		font-size: 32rpx;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		.time{
			margin-left: 20rpx;
			float: left;
		}
		.memberid{
			margin-left: 50rpx;
			float: left;
		}
		.grade{
			margin-left: 600rpx;
		}
	}
	.scrollh{
		width: 100%;
		height: calc(100vh - 762rpx);
	}
	
	
	
</style>
