<template>
    <view class="btn" id="btn" @tap="btnClick">
        {{btnText}}
    </view>

</template>

<script>
    export default {
        name: "index",
        props:{
            btnText:{
                type:String,
                default:'确认'
            }
        },
        data(){
            return {

            }
        },
        methods:{
            btnClick(){
                this.$emit('btnClick')
            }
        }
    }
</script>

<style lang="less">
    .btn{
        width: 710rpx;
        height: 100rpx;
        line-height: 100rpx;
        background: linear-gradient(139deg, #5D6CFF 0%, #835DFF 100%);
        border-radius: 50rpx;
        margin: 0 auto;
        font-size: 32rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
    }


</style>
