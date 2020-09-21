<template>
	<view>
		<cheader :headerOptions="headerOptions"></cheader>
		<view class="item"></view>
		<scroll-view class="record-wrap" :scroll-y="true">
		<view 
			v-for="(item,index) in recordData_list" 
			:key="index">
			<record :recordData="item"
					:isBlack="isBlack"></record>
		</view>
		</scroll-view>
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
	.item{
		height: 30rpx;
		width: 100%;
		background: #22252A;
		margin-top: 90rpx;
	}
	.record-wrap{
		background: #22252A;
		height: calc(100vh - var(--status-bar-height) - 100rpx);
	}
</style>
