<template>
	<view class="welcome" id="welcome">
		<view class="logo"></view>
		<view class="welcomeText">欢迎来到 BRT 交易平台</view>

		<view class="create"> 	<createBtn :btnText="'创建地址'" @btnClick="createAddress"></createBtn></view>
		<view class="import">	<importBtn :btnText="'导入地址'" @btnClick="importAddress"></importBtn></view>




		<view class="tcp">
			<checkbox value="cb" checked="true" />   我已仔细阅读并同意《BRT用户协议》
		</view>

	</view>
</template>

<script>
	import createBtn from '@/components/btn/index.vue'
    import importBtn from '@/components/btn/index.vue'
    export default {
	    components:{
            createBtn,
			importBtn
		},
        data() {
            return {

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
		.create{
			margin-top: 60rpx;
		}
		.import{
			margin-top: 35rpx;
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
