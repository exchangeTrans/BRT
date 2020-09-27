<template>
	<view class="aboutUs" id="aboutUs" :style="{'background-image':'url('+welcomeBg+')'}">
		<!--<view class="logo"></view>-->
		<!--<view class="welcomeText">欢迎来到 BRT 交易平台</view>-->
		<appHeader :headerOptions="headerOptions"></appHeader>


		<view class="btnGroup">
			<view class="btnItem" @tap="saveImage"> 保存图片</view>
			<view class="btnItem  copy" @tap="copy">复制下载链接</view>

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
                    isWhiteIcon:true,
					leftText:'',
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

			},
			saveImage(){
				let filePath = this.filePath;
				// uni.chooseImage({
				//     count: 1,
				//     sourceType: ['album '],
				//     success: function (res) {
				// uni.saveImageToPhotosAlbum({
				//     filePath: filePath,
				//     success: function () {
				//         console.log('save success');
				//     }
				// });
				// }
				// })
				uni.getImageInfo({
					src: filePath,
					success: function(image) {
						console.log('图片信息：', JSON.stringify(image));
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								console.log('save success');
								uni.showToast({
									title: '图片保存成功',
									icon: 'none',
									duration: 2200
								});
							},fail:function(e){
								uni.showToast({
									title: '图片保存失败',
									icon: 'none',
									duration: 2200
								});
							}
						});
					}
				});

			},
			copy(){
            	let text = "下载地址未知"
				uni.setClipboardData({
					data: text,
					success: function () {
					}
				});
			},
        }
    }
</script>

<style lang="less">
	.aboutUs{
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
