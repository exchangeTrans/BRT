<template>
	<view>
		<view class="datalist">
			<view class="item" :style="{'background':bgstyle.background_color,'color':bgstyle.color}">
				<view class="money">{{tradesOptions.money}}</view>
				<view class="num">{{tradesOptions.num}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			colorOptions: {
                type: Object,
                default: () => {
                },
            },
			tradesOptions:{
				type: Object,
				default: () => {
				},
			}
		},
		data(){
			return{
				
			}
		},
		computed: {
			bgstyle(){
				let {colorOptions} = this.$props;
				let background_color = colorOptions.bgc;
				let color = colorOptions.fonts_color
				return {
					background_color,
					color
				}
			}
		}
	}
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.datalist{
		width: 100%;
	}
	.item{
		display: inline-block;
		font-size: 0;
		width: 89%;
		height: 52rpx;
		// text-align: center;
		line-height: 52rpx;
		margin-left: 20rpx;
		display: block;
		vertical-align:middle;
		.money{
			float: left;
			font-size: 24rpx;
		}
		.num{
			float: right;
			font-size: 24rpx;
		}
	}
</style>
