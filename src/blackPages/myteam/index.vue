<template>
	<view class="myteam">
		<pageHeader :headerOptions="headerOptions" class="headname"></pageHeader>
		<view class="headbg">
			<view class="usermsgcon">
				<view class="headphoto">
					<image src="../../static/images/myteam/headphoto.png" mode="" style="width:118rpx; height: 118rpx;"></image>
				</view>
				<view class="usermsg">
					<view class="username">{{teamData.nickname}}</view>
					<view class="userid">ID:{{teamData.inviteCode}}</view>
				</view>
				<view class="incomelog">
					<image src="../../static/images/myteam/crown.png" class="crown" mode=""></image>
					<text class="grade"><text class="grade">{{teamData.vipType}}</text></text>
				</view>
				<view class="clearfix"></view>
			</view>
			<view class="teammsg">
				<view class="teamablity">
					<view class="descrip">团队总质押</view>
					<view class="num">{{teamData.teamMining}}</view>
				</view>
				<view class="teamtoday">
					<view class="descrip">今日新增质押</view>
					<view class="num">{{teamData.teamMiningDay}}</view>
				</view>
				<view class="teamyestoday">
					<view class="descrip">团队总人数</view>
					<view class="num">{{teamData.teamQty}}</view>
				</view>
			</view>

		</view>
		<view class="invitelog">
			<image src="../../static/images/myteam/item.png" mode="" class="img"></image>
			<view class="log">邀请记录</view>
		</view>
		<view class="datalisthead">
			<view class="count">邀请账户</view>
			<view class="memberid">ID</view>
			<view class="grade">团队质押业绩</view>
		</view>
		<scroll-view scroll-y="true" class="scrollh">
			<!-- <view class="datalist" v-for="(item,id) in datalist" :key="id">
				<image :src=item.flag mode="" class="flag"></image>
				<view class="count">{{item.phonenumber}}</view>
				<view class="memberid">{{item.memberid}}</view>
				<view class="grade">{{item.grade}}</view> -->
			<view class="datalist" v-for="(item,id) in inviteRecord" :key="id">
				<image :src=countryFlagArr[item.countryCode] mode="" class="flag"></image>
				<view class="time">{{item.account}}</view>
				<view class="memberid">{{item.inviteCode}}</view>
				<view class="grade">{{item.teamMining}}</view>
			</view>


			<uni-load-more  @clickLoadMore="getMiningInterest(true)" :status="status"    v-if="!isNoDataFlag"></uni-load-more>

			<view class="noDataBox"  v-if="isNoDataFlag">
				<noData :isBlack="true"></noData>
			</view>
		</scroll-view>
	</view>
</template>

<script src="@/script/myTeam/myTeam.js"></script>

<style lang="less">
	*{
		/*background: #00*/
	}
	.myteam{
		width: 100%;
		height: 100%;
		// padding-top: calc(100rpx + var(--status-bar-height));
		.headbg{
			position: relative;
			width: 100%;
			height: 506rpx;
			background: linear-gradient(to right,#004FA8,#007CD3,#25D4ED);
			border-bottom-left-radius: 50rpx;
			border-bottom-right-radius: 50rpx;
			.usermsgcon{
				position: absolute;
				width: 100%;
				//height: 120rpx;
				padding-left:40rpx;
				box-sizing: border-box;
				/*margin-top: 10rpx;*/
				line-height: 120rpx;
				/*margin-left: 40rpx;*/
				// padding-top: calc(100rpx + var(--status-bar-height));
				.headphoto{
					width: 118rpx;
					height: 118rpx;
					border-radius: 140rpx;
					margin-top: 140rpx;
					float: left;
				}
				.usermsg{
					width: 300rpx;
					height: 60rpx;
					float: left;
					line-height: 60rpx;
					margin-left: 20rpx;
					.username{
						color: #FFFFFF;
						margin-top: 140rpx;
						font-size: 36rpx;
						font-family: PingFangSC-Semibold, PingFang SC;
						font-weight: 600;
						width: 300rpx;
					}
					.userid{
						color: #C0C0C0;
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						opacity: 0.6;
						font-weight: 400;
						width: 300rpx;
					}
				}
				.incomelog{
					width: 116rpx;
					height: 48rpx;
					font-size: 30rpx;
					line-height: 40rpx;
					background: #FFFFFF;
					border-radius: 24rpx;
					float: right;
					margin-top: 154rpx;
					display: flex;
					align-items: center;
					margin-right: 60rpx;
					.crown{
						width: 40rpx;
						height: 32rpx;
						margin-left: 25rpx;
						margin-right: 15rpx;
					}
					.grade{
						line-height: 28rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #098FE0;
					}
				}
			}
			.teammsg{
				width: 100%;
				height: 100rpx;
				// padding-top: calc(100rpx + var(--status-bar-height));
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
					opacity: 0.8;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
				}
				.num{
					font-size: 32rpx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
		}
		.invitelog{
			background: #272A2E;
			padding-bottom: 30rpx;
			clear: both;
			width: 100%;
			height: 160rpx;
			margin-top: -45rpx;
			.img{
				width: 32rpx;
				height: 32rpx;
				float: left;
				margin-left: 20rpx;
				margin-right: 10rpx;
				margin-top: 110rpx;
			}
			.log{
				font-weight: bold;
				font-size: 36rpx;
				color: #D9DADB;
				font-family: PingFangSC-Medium, PingFang SC;
				line-height: 250rpx;
			}
		}
		.datalisthead{
			margin-top: -2rpx;
			margin-bottom: -2rpx;
			background: #22252A;
			width: 100%;
			height: 100rpx;
			font-size: 28rpx;
			line-height: 100rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #1A1A1A;
			.count{
				margin-left: 40rpx;
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
				margin-left: 530rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				color: #D9DADB;
			}
		}
		.datalist{
			font-size: 28rpx;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			color: #D9DADB;
			.flag{
				width: 50rpx;
				height: 34rpx;
				float: left;
				margin-top: 30rpx;
				margin-left: 20rpx;
			}
			.count{
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
				margin-left: 560rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				margin-top: -5rpx;
			}
		}
		.scrollh{
			width: 100%;
			height: calc(100vh - 710rpx - var(--status-bar-height));
			background: #272A2E;
			.noDataBox {
				position: relative;
			}
		}
	}




</style>
