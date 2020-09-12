<template>
	<view class="welcome" id="welcome" :style="{'background-image':'url('+welcomeBg+')'}">
		<!--<view class="logo"></view>-->
		<!--<view class="welcomeText">欢迎来到 BRT 交易平台</view>-->
		<appHeader :headerOptions="headerOptions"></appHeader>


		<view class="btnGroup">
			<view class="btnItem"> 保存图片</view>
			<view class="btnItem  copy">复制下载链接</view>

		</view>





		<!--<view class="tcp">-->
			<!--<checkbox value="cb" checked="true" />   我已仔细阅读并同意《BRT用户协议》-->
		<!--</view>-->

	</view>
</template>

<script>
	import appHeader from '@/components/common/header.vue'
    export default {
	    components:{
            appHeader
		},
        data() {
            return {
                headerOptions:{
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
                welcomeBg:`${require('@/static/images/welcome/welcomeBg.png')}`

            }
        },
        onLoad() {

        },
        methods: {
            createAddress(){

			},
            importAddress(){

			}
        }
    }
</script>

<style lang="less">
	.welcome{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		.logo{
			width: 276rpx;
			height: 276rpx;
			background: #1A1A1A;
			margin: 200rpx auto 0;
			border-radius: 50%;
		}
		.welcomeText{
			margin-top: 30rpx;
			font-size: 36rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #000000;
			text-align: center;

		}
		.btnGroup{
			width: 100%;
			position: absolute;
			bottom: 100rpx;
			left: 0;
			text-align: center;
			.btnItem{
				display: inline-block;
				width: 280rpx;
				height: 100rpx;
				background: rgba(21, 21, 21, 0.16);
				border-radius: 50rpx;
				border: 2rpx solid #FFFFFF;

				text-align: center;
				line-height: 100rpx;


				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
			}
			.copy{
				margin-left: 22rpx;
			}
		}
		.tcp{
			width: 100%;
			position: fixed;
			bottom: 50rpx;
			left: 0;
			text-align: center;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
		}

	}

</style>
