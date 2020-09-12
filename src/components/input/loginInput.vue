<template>
	<view class="loginInput" id="loginInput" :style="inputStyle">
		<div class="content">
			<div class="icon" v-show="iconShow" :style="{'background-image': iconSrc}"></div>
			<div class="firstText" v-show="firstTextShow" :style="firstTextStyle">{{firstText}}</div>
			<input :placeholder="placeHolder" class="inputClass" />
			<div class="lastText" v-show="lastTextShow" :style="lastTextStyle">{{lastText}}</div>
		</div>
	</view>
</template>

<script>
	export default {
		name: "loginInput",
		components: {

		},
		props: {
			placeHolder: "",
			inputStyle: {

			},
			iconShow: false,
			iconSrc: "",
			firstText: "",
			firstTextShow: false,
			firstTextStyle: {},
			lastText: "",
			lastTextShow: false,
			lastTextStyle: {}

		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="less">
	.loginInput {
		width: 690rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
		margin: 0 auto 0;
		text-align: left;

		.content {
			padding: 36rpx 20rpx 36rpx 30rpx;
			height: 48rpx;
		}

		.icon {

			display: inline-block;
			width: 48rpx;
			height: 48rpx;
			background: no-repeat center center;
			background-size: cover;
		}

		.firstText {
			display: inline-block;
		}

		.lastText {
			display: inline-block;

		}

		.inputClass {
			display: inline-block;
			width: 224rpx;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
			line-height: 44rpx;

		}
	}
</style>
