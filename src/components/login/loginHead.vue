<template>
    <view class="loginHead" id="loginHead">
		<appHeader :headerOptions="headerOptions"></appHeader>
		<div class="headerBackImg"></div>
		<div class="logo"></div>
    </view>
</template>

<script>
    export default {
        name: "loginHead",
        components: {
            
        },
        data() {
            return{
                
            }
        },
        mounted(){
            
        },
        methods:{
            
        },
    }
</script>

<style lang="less">
	.loginHead {
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
	}
</style>
