<template>
	<view>
		<view class="datalist">
			<view class="item"  :style="{'color':bgstyle.color}" @tap="itemClick(tradesOptions)">
				<view class="money">{{tradesOptions.price}}</view>
				<view class="num">{{tradesOptions.size}}</view>
				<view class="bg" :style="{'background':bgstyle.background_color,width:tradesOptions.percent+'%'}"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
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
				let background_color = colorOptions.bgc?colorOptions.bgc:'';
				let color = colorOptions.fonts_color?colorOptions.fonts_color:''
				return {
					background_color,
					color
				}
			}
		},
		methods:{
			itemClick(item){
				this.$emit('itemClick',item)
			}
		}
	}
</script>

<style lang="less">
	.datalist{
		width: 100%;
	}
	.item{
		display: inline-block;
		font-size: 0;
		width: 89%;
		height: 40rpx;
		// text-align: center;
		line-height: 40rpx;
		margin-left: 20rpx;
		display: block;
		// vertical-align:middle;
		position: relative;
		.money{
			position: relative;
			z-index: 2;
			float: left;
			font-size: 24rpx;
		}
		.num{
			position: relative;
			z-index: 2;
			float: right;
			font-size: 24rpx;
		}
		.bg{
			position: absolute;
			right: 0;
			width: 100%;
			height: 100%;
			opacity: 0.5;
			// background: darkblue;
		}
	}
</style>
