<template>
	<view class="loginHead" :style="loginHeadStyle" id="loginHead">
		<view class="headerBackImg" :style="{'background-image':headerBackImg}">
			<view class="logo" :style="{'background-image':headerLogo}"></view>
			<view class="choiceType">
				<view :class="type === 'PHONE' ? 'activeChoice' : 'inactiveChoice'" :style="{'background-image': leftBackground}"
				 @tap="typeClick('PHONE')">{{leftText}}</view>
				<view :class="type === 'EMAIL' ? 'activeChoice' : 'inactiveChoice'" :style="{'background-image': rightBackground}"
				 @tap="typeClick('EMAIL')">{{rightText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "loginHead",
		components: {},
		props: {
			defaultChoice: "",
			leftText: "",
			rightText: "",
			loginHeadStyle: {}
		},
		mounted() {
			let {
				defaultChoice
			} = this.$props
			this.type = defaultChoice
		},
		data() {
			return {
				headerBackImg: `url(${require('@/static/images/login/longHeader.png')})`,
				headerLogo: `url(${require('@/static/images/login/loginIcon.png')})`,
				leftBackground: `url(${require('@/static/images/login/leftWhite.png')})`,
				rightBackground: `url(${require('@/static/images/login/rightBlack.png')})`,
				type: "PHONE",
			}
		},
		watch: {
			type(val) {
				switch (val) {
					case "PHONE":
						this.leftBackground = `url(${require('@/static/images/login/leftWhite.png')})`
						this.rightBackground = `url(${require('@/static/images/login/rightBlack.png')})`
						break;
					case "EMAIL":
						this.leftBackground = `url(${require('@/static/images/login/leftBlack.png')})`
						this.rightBackground = `url(${require('@/static/images/login/rightWhite.png')})`
						break;
				}
			}
		},
		mounted() {

		},
		methods: {
			typeClick(type) {
				if (type !== this.type) {
					this.type = type
					this.$emit('typeChange', type)
				}
			}
		},
	}
</script>

<style lang="less">
	.loginHead {
		width: 100%;
		height: 100%;

		.headerBackImg {
			background: no-repeat center center;
			background-size: cover;
			width: 750rpx;
			height: 666rpx;
			padding-top: 206rpx;
			box-sizing: border-box;

			.logo {
				background: no-repeat center center;
				background-size: cover;
				width: auto;
				height: 164rpx;
			}
		}


		.choiceType {
			display: inline-block;
			text-align: center;
			width: 100%;
			margin-top: 62rpx;

			.activeChoice {
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

			.inactiveChoice {
				background: no-repeat center center;
				background-size: cover;
				display: inline-block;
				width: 256rpx;
				height: 76rpx;
				opacity: 0.5;
				font-size: 32rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 76rpx;
			}
		}
	}
</style>
