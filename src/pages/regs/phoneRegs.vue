<template>
	<view class="phoneRegs" id="phoneRegs">
		<div class="regsTypeChoice">
			<div class="phoneRegsType" :class="{'active': regsType === 'PHONE'}">手机号注册
				<div class="activeBack" v-show="regsType === 'PHONE'"></div>
			</div>
			<div class="emailRegsType" :class="{'active': regsType === 'EMAIL'}">邮箱注册
				<div class="activeBack" v-show="regsType === 'EMAIL'"></div>
			</div>
		</div>
	</view>
</template>

<script>
	import appHeader from "@/components/common/header.vue"
	import loginHead from "@/components/login/loginHead.vue"
	export default {
		name: "phoneRegs",
		components: {
			appHeader
		},
		data() {
			return {
				headerOptions: {
					show: false,
					isAllowReturn: true,
					text: "",
					rightItem: {
						type: "text",
						text: "",
					},
					bodyPadding: {
						"padding": '0,0,0,0'
					},
					headerIsNoBoder: true,
				},
				regsType: "PHONE"
			}
		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="less">
	.phoneRegs {
		width: 100%;
		height: 100%;
		position: absolute;
		.headerBackImg {
			z-index: -1;
			position: absolute;
			background: url(../../static/images/login/longHeader.png) no-repeat center center;
			background-size: cover;
			width: 750rpx;
			height: 666rpx;
		}

		.logo {
			background: url(../../static/images/login/loginIcon.png) no-repeat center center;
			background-size: cover;
			margin: 206rpx auto 0 auto;
			width: 306rpx;
			height: 164rpx;
		}

		.regsTypeChoice {
			margin-top: 62rpx;
			text-align: center;

			.phoneRegsType {
				display: inline-block;
				height: 44rpx;
				font-size: 32rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #000000;
				line-height: 44rpx;
			}

			.emailRegsType {
				margin-left: 70rpx;
				display: inline-block;
				height: 44rpx;
				font-size: 32rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #000000;
				line-height: 44rpx;
			}

			.active {
				font-size: 36rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #000000;
				line-height: 50rpx;
			}
			.activeBack {
				margin: -20rpx 0 0 -10rpx;
				position: absolute;
				width: 200rpx;
				height: 26rpx;
				background: #835DFF;
				border-radius: 8rpx;
				opacity: 0.2;
			}
		}

	}
</style>
