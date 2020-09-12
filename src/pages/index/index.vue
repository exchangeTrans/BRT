<template>
	<view class="index" id="index">
		<scroll-view class="content">
			<view class="indexTop">
				<view class="iconGroup">
					<view class="logo"></view>
					<view class="fucIcon"></view>
				</view>

				<view class="earning">
					<view>矿池收益(HDU)</view>
					<view>
						<span>0</span>
						<span>≈￥0</span>
					</view>
				</view>

			</view>
		</scroll-view>

	</view>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style lang="less">
	.index{
		width: 100%;
		height: 100%;
		.content{
			width: 100%;
			height: 100%;
			.indexTop{
				width: 100%;
				height: 420rpx;
				padding-top:80rpx;
				box-sizing: border-box;
				background: #1A1A1A;
			}
		}
	}
</style>
