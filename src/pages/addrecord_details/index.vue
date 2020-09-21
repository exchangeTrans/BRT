<template>
	<view class="">
		<cheader :headerOptions="headerOptions"></cheader>
		<view class="datacontent">
			<image src="../../static/images/addrecord/addlog.png" mode="" class="img"></image>
			<view class="item">暂无数据</view>
		</view>
	</view>
</template>

<script>
	import cheader from '../../components/common/header';
	export default{
		components:{
			cheader
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
						color:"#333333",
						
					},
					isColor:true,
					rightItem:{
						type:"text",
						text:"ID:AVV491",
						style:{
							color:"#000000"
						}
					},
				}
			}
		}
	}
</script>

<style lang="less">
	.datacontent{
		text-align: center;
		margin-top: 572rpx;
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
		color: #000000;
		line-height: 40rpx;
		text-align: center;
	}
</style>
