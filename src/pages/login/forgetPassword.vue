<template>
    <view class="forgetPassword" id="forgetPassword">
		<app-header :headerOptions="headerOptions">
			<view class="titleTop">
				<view class="returnIconClass" :style="{'background-image': returnIcon}"></view>
				<view class="titleClass">{{title}}</view>
			</view>
		</app-header>
		<view class="wrap">
			<loginHead :defaultType="defaultType" :leftText="leftText" :rightText="rightText" @typeChange="typeChange"></loginHead>
		</view>
		
    </view>
</template>

<script>
	import appHeader from '@/components/common/header.vue'
	import loginHead from '@/components/login/loginHead.vue'
    export default {
        name: "forgetPassword",
        components: {
            appHeader,
			loginHead
        },
        data() {
            return{
                headerOptions: {
					show:true,
					isAllowReturn:true,
					text:"",
					rightItem:{
					    type:"text",
					    text:"",
					},
					bodyPadding:{"padding":'0,0,0,0'},
					headerIsNoBoder: true,
				},
				defaultType: "PHONE",
				leftText: "手机账号",
				rightText: "邮箱账号",
				type: "PHONE",
				title: "忘记密码"
            }
        },
        mounted(){
            
        },
        methods:{
            typeChange(type) {
				this.type = type
			}
        },
    }
</script>

<style lang="less">
	.forgetPassword{
		.titleTop {
			margin-top: 88rpx;
			height: 100rpx;
			width: 100%;
			text-align: center;
			.returnIconClass{
				width: 48rpx;
				height: 48rpx;
				margin: auto 0 auto 30rpx;
			}
			.titleClass {
				font-size: 36rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 50rpx;

			}
		}
	}
</style>
