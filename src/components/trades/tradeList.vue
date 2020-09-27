<template>
	<view :class="blacktradelist==true?'blacktradelist':''">
        <view class="listHeader" :class="isblack==true?'isblack':'iswhite'">币币交易</view>
		<scroll-view class="datalist" scroll-y>
			<view class="datalist_item" v-for="(item,index) in data" :key="index" @tap="chooseTradePair(item)">
                <view class="itemName">{{item.name}}/{{item.type}}</view>
                <view class="itemPrice">{{item.nowData===null?'0.00':item.nowData.close.toFixed(2)}}</view>
                <view v-if="item.range>0" class="itemRange up">+{{item.range.toFixed(2)}}%</view>
                <view v-else-if="item.range<0" class="itemRange down">{{item.range.toFixed(2)}}%</view>
                <view v-else class="itemRange">{{item.range.toFixed(2)}}%</view>
            </view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			data: {
                type: Array,
                default: () => [],
            },
            isblack:{
                type:Boolean,
                default: () => {}
            },
            blacktradelist:{
                type:Boolean,
                default: () => {}
            }
		},
		data(){
			return{
				
			}
		},
		computed: {
			// bgstyle(){
			// 	let {colorOptions} = this.$props;
			// 	let background_color = colorOptions.bgc?colorOptions.bgc:'';
			// 	let color = colorOptions.fonts_color?colorOptions.fonts_color:''
			// 	return {
			// 		background_color,
			// 		color
			// 	}
			// }
        },
        methods:{
            chooseTradePair(item){
                let that = this;
                this.$emit('chooseTradePair',item)
                
                
            }
        }
	}
</script>

<style lang="less">
    .blacktradelist{
        background: #272A2E;
    }
    .isblack{
        color: #D9DADB;
    }
    iswhite{
        color: #1A1A1A;
    }
    .listHeader{
        height: 108rpx;
        width: 100%;
        padding:0 30rpx;
        box-sizing: border-box;
        font-size: 34rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 108rpx;
    }
	.datalist{
        width: 100%;
        height: calc(100vh - var(--status-bar-height) - 108rpx);
        box-sizing: border-box;
    }
    .datalist_item{
        width: 100%;
        height: 110rpx;
        padding:0 30rpx;
        box-sizing: border-box;
        display: flex;
        box-shadow: 0px -2rpx 0px 0px rgba(0, 0, 0, 0.05);
        border-bottom: 2rpx solid #F9FAFA;
        justify-content: space-around;
        align-content: center;
        view{
            height: 100%;
            line-height: 110rpx;           
            font-size: 28rpx;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #8D989E;
            width: 40%;
            text-align: left;
        }
        .itemPrice{
            width: 40%;
            text-align: center;
        }
        .itemRange{
            width: 20%;
            text-align: right;
        }
        .itemRange.up{         
            color: #FC3C5A;
        }
        .itemRange.down{         
            color: #5BC788;
        }
    }
	// .item{
	// 	display: inline-block;
	// 	font-size: 0;
	// 	width: 89%;
	// 	height: 52rpx;
	// 	// text-align: center;
	// 	line-height: 52rpx;
	// 	margin-left: 20rpx;
	// 	display: block;
	// 	vertical-align:middle;
	// 	.money{
	// 		float: left;
	// 		font-size: 24rpx;
	// 	}
	// 	.num{
	// 		float: right;
	// 		font-size: 24rpx;
	// 	}
	// }
</style>
