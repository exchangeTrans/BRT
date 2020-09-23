<template>
	<view>
		<cheader :headerOptions="headerOptions" class="headstyle"></cheader>
		<view class="item"></view>
		<scroll-view class="record-wrap" :scroll-y="true" v-if="showdata">
		<view 
			v-for="(item,index) in recordData_list" 
			:key="index">
			<record :recordData="item"
					:isBlack="isBlack"></record>
		</view>
		</scroll-view>
		<view class="datacontent" v-if="nodata">
			<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
			<view class="item">暂无数据</view>
		</view>
	</view>
</template>

<script>
	import cheader from '../../components/common/header';
	import record from '../../components/record/recordItem'
	export default{
		components:{
			cheader,
			record
		},
		data(){
			return{
				headerOptions:{
					show:true,
					text:"USTU充币记录",
					isAllowReturn:true,
					fontfamily:"PingFangSC-Regular, PingFang SC",
					fontSize:'34',
					style:{
						color:'#D9DADB',
						
					},
					background: '#00001A',
					isColor:true,
					rightItem:{
						type:"text",
						text:"ID:AVV491",
						style:{
							color:"#D9DADB"
						}
					},
				},
				isBlack:true,
				recordData_list:[
					{
						titleName:"充币",
						number:"1798.1561657",
						status:"fail",
						date:"19:28 08/16"
					},
					{
						titleName:"提币",
						number:"1798.1561657",
						status:"success",
						date:"19:28 08/16"
					},
					{
						titleName:"提币",
						number:"1798.1561657",
						status:"inTheReview",
						date:"19:28 08/16"
					},
				]
			}
		}
	}
</script>

<style lang="less">
	.headstyle{
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.item{
		height: 30rpx;
		width: 100%;
		background: #22252A;
		margin-top: 90rpx;
	}
	.record-wrap{
		background: #22252A;
		height: calc(100vh - var(--status-bar-height) - 100rpx);
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.record{
		background: #272A2E;
		width: 100%;
		height: calc(100vh);
		padding-top: 100rpx;
	}
	.datacontent{
		text-align: center;
		margin-top: 572rpx;
		padding-top: calc(100rpx + var(--status-bar-height));
	}
	.img{
		width: 530rpx;
		height: 400rpx;
	}
	.item{
		width: 100%;
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color:#D9DADB;
		line-height: 40rpx;
		text-align: center;
	}
</style>
