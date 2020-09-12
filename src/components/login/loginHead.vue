<template>
	<view class="loginHead"
		  :style="loginHeadStyle" id="loginHead">
		<div class="headerBackImg"
			 :style="{'background-image':headerBackImg}"></div>
		<div class="logo"
			 :style="{'background-image':headerLogo}"></div>
		<div class="choiceType">
			<div class="leftChoice"
				 :style="{'background-image': leftBackground}">{{leftText}}</div>
			<div class="rightChoice"
				 :style="{'background-image': rightBackground}">{{rightText}}</div>
		</div>
		<loginInput :iconShow="true"
					:iconSrc="icon"
					:firstTextShow="true"
					:firstText="firstText"
					:placeHolder="placeHold"></loginInput>
	</view>
</template>

<script>
	import loginInput from '@/components/input/loginInput.vue'
	export default {
		name: "loginHead",
		components: {
			loginInput
		},
		props: {
			defaultChoice: "PHONE",
			leftText: "",
			rightText: "",
			loginHeadStyle: {}
		},
		data() {
			return {

				icon: `url(${require('@/static/images/login/phoneNumber.png')})`,
				firstText: "+86",
				placeHold: "手机号码",


				headerBackImg: `url(${require('@/static/images/login/longHeader.png')})`,
				headerLogo: `url(${require('@/static/images/login/loginIcon.png')})`,
				leftBackground: `url(${require('@/static/images/login/leftWhite.png')})`,
				rightBackground: `url(${require('@/static/images/login/rightBlack.png')})`,
			}
		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="less">
	.loginHead {
		width: 100%;
		height: 100%;

		.headerBackImg {
			z-index: -1;
			position: absolute;
			background: no-repeat center center;
			background-size: cover;
			width: 750rpx;
			height: 666rpx;
		}

		.logo {
			background: no-repeat center center;
			background-size: cover;
			padding-top: 206rpx;
			width: auto;
			height: 164rpx;
		}

		.choiceType {
			display: inline-block;
			text-align: center;
			width: 100%;

			.leftChoice {
				background: no-repeat center center;
				background-size: cover;
				display: inline-block;
				width: 256rpx;
				height: 76rpx;
				font-size: 32rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #098FE0;
				line-height: 76rpx;

			}

			.rightChoice {
				background: no-repeat center center;
				background-size: cover;
				display: inline-block;
				width: 256rpx;
				height: 76rpx;

				font-size: 32rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 76rpx;


			}
		}
	}
</style>
