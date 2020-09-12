<template>
	<view class="phoneRegs" id="phoneRegs">
		<appHeader :headerOptions="headerOptions"></appHeader>
		<loginHead :leftText="leftText" :rightText="rightText" :loginHeadStyle="loginHeadStyle"></loginHead>
		<!-- <div class="regsTypeChoice">
			<div class="phoneRegsType" :class="{'active': regsType === 'PHONE'}">手机号注册
				<div class="activeBack" v-show="regsType === 'PHONE'"></div>
			</div>
			<div class="emailRegsType" :class="{'active': regsType === 'EMAIL'}">邮箱注册
				<div class="activeBack" v-show="regsType === 'EMAIL'"></div>
			</div>
		</div> -->
	</view>
</template>

<script>
	import appHeader from "@/components/common/header.vue"
	import loginHead from "@/components/login/loginHead.vue"
	export default {
		name: "phoneRegs",
		components: {
			appHeader,
			loginHead
		},
		data() {
			return {
				regsType: "PHONE",
				leftText: "手机号注册",
				rightText: "邮箱注册",
				loginHeadStyle: {
					"width": "100%",
					"height": "666rpx",
				},
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
