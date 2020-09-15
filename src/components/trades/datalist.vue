<template>
	<view>
		<view class="datalist">
			<view class="item" :style="{'backgroundColor':bgstyle.background_color,'color':bgstyle.color}">
				<view class="money">0.0653</view>
				<view class="num">500</view>
			</view>
			<view class="item" :style="{'backgroundColor':bgstyle.background_color,'color':bgstyle.color}">
				<view class="money">0.0653</view>
				<view class="num">500</view>
			</view>
			<view class="item" :style="{'backgroundColor':bgstyle.background_color,'color':bgstyle.color}">
				<view class="money">0.0653</view>
				<view class="num">500</view>
			</view>
			<view class="item" :style="{'backgroundColor':bgstyle.background_color,'color':bgstyle.color}">
				<view class="money">0.0653</view>
				<view class="num">500</view>
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
		margin-bottom: 10rpx;
	}
	.item{
		font-size: 24rpx;
		width: 100%;
		height: 52rpx;
		// background-color: #DEF4E7;
		.money{
			float: left;
			margin-left: 20rpx;
			
		}
		.num{
			float: right;
			margin-right: 20rpx;
		}
	}
</style>
