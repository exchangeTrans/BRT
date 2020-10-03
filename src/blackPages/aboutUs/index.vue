<template>
	<view class="aboutUs" id="aboutUs" :style="{'background-image':'url('+welcomeBg+')'}">
		<!--<view class="logo"></view>-->
		<!--<view class="welcomeText">欢迎来到 BRT 交易平台</view>-->
		<appHeader :headerOptions="headerOptions"></appHeader>
		

		<view class="promotion">
			<view class="qeCodeBox"><uni-qrcode cid="qrcodeVis" @makeComplete="makeComplete" ref="qrcodeVis" :text="codeUrl" :size="size" backgroundColor="rgba(255,255,255,0)" /></view>
			<view class="inviteCode">邀请码：{{userInfo.inviteCode}}</view>
		</view>


		<view class="btnGroup">
			<view class="btnItem" @tap="saveImage"> 保存图片</view>
			<view class="btnItem  copy" @tap="copy">复制分享链接</view>

		</view>





		<!--<view class="tcp">-->
			<!--<checkbox value="cb" checked="true" />   我已仔细阅读并同意《BRT用户协议》-->
		<!--</view>-->

	</view>
</template>

<script>
	import appHeader from '@/components/common/header.vue'
	import uniQrcode from '@/components/uqrcode/index.vue'
	import saveImg from '@/static/js/saveImg.js';
    export default {
	    components:{
			appHeader,
			uniQrcode
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
				welcomeBg:`${require('@/static/images/welcome/welcomeBg.png')}`,
				codeUrl:'',
				size:uni.upx2px(202),
				filePath:''

            }
        },
        onLoad() {

		},
		mounted(){
			this.createAddress()
		},
		computed: {
			
			userInfo() {
				return this.$store.state.defaultData.userInfo
			}
		},
        methods: {
            createAddress(){
				// let url = 'http://reg.brtscan.pro/#/?'
				// let url = 'http://www.baidu.com/?'
				// let inviteCode = this.userInfo.inviteCode;
				let shareUrl = this.userInfo.shareUrl;
				
				// let str = this.userInfo.tel;
				// let telArray = str.split("");
				// let phoneArray = telArray.map(function (item,index) {
				// 	if(index>2&&index<telArray.length-4){
				// 		return '*'
				// 	}
				// 	return item
				// })
				let that = this;
				// let phone = phoneArray.join('');
				this.codeUrl = shareUrl;
				setTimeout(() => {
					that.$refs.qrcodeVis.make()
				}, 100);
			},
			makeComplete(res){
				this.filePath = res;
			},
            importAddress(){

			},
			saveImage() {
				let that = this;
				this.$permissionFunc.query("photoLibrary",function(){
					var pages = getCurrentPages();  
					var page = pages[pages.length - 1];  
					console.log('当前页：'+pages.length-1);  
					var bitmap=null;  
					var currentWebview = page.$getAppWebview();    
					bitmap = new plus.nativeObj.Bitmap('amway_img');  
					// 将webview内容绘制到Bitmap对象中  
					currentWebview.draw(bitmap,function(){  
						console.log('截屏绘制图片成功');  
						bitmap.save( "_doc/a.jpg"  
						,{}  
						,function(i){  
							console.log('保存图片成功：'+JSON.stringify(i));  
							uni.saveImageToPhotosAlbum({  
								filePath: i.target,  
								success: function () {  
									bitmap.clear(); //销毁Bitmap图片  
									uni.showToast({  
										title: '保存图片成功',  
										mask: false,  
										duration: 1500  
									});  
								}  
							});  
						}  
						,function(e){  
							console.log('保存图片失败：'+JSON.stringify(e));  
						});  
					},function(e){  
						console.log('截屏绘制图片失败：'+JSON.stringify(e));  
					});  

				})
			
                //currentWebview.append(amway_bit);
		},

			saveImage1(){
				let filePath = this.filePath;
				console.log(filePath)
				saveImg(filePath)
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
				// uni.getImageInfo({
				// 	src: filePath,
				// 	success: function(image) {
				// 		console.log('图片信息：', JSON.stringify(image));
				// 		uni.saveImageToPhotosAlbum({
				// 			filePath: image.path,
				// 			success: function() {
				// 				console.log('save success');
				// 				uni.showToast({
				// 					title: '图片保存成功',
				// 					icon: 'none',
				// 					duration: 2200
				// 				});
				// 			},fail:function(e){
				// 				uni.showToast({
				// 					title: '图片保存失败',
				// 					icon: 'none',
				// 					duration: 2200
				// 				});
				// 			}
				// 		});
				// 	}
				// });

			},
			copy(){
            	let text = this.codeUrl;
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
		height: 100vh;
		background-size: 100% 100%;
		background-repeat: no-repeat;
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
		.promotion{
			width: 100%;
			position: absolute;
			bottom: 27%;
			left: 0;
			.qeCodeBox{
				width: 202rpx;
				height: 202rpx;
				padding: 8rpx;
				margin: 0 auto;
				background-color: #fff;
			}
			.inviteCode{
				margin-top: 20rpx;
				text-align: center;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #F9FAFA;
				line-height: 34rpx;

			}
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
