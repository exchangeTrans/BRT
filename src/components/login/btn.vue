<template>
    <view class="btn" id="btn">
        <view class="wrap" :style="btnStyle" @tap.stop="btnClick">
            {{btnText}}
        </view>
    </view>
</template>

<script>
    export default {
        name: "btn",
        components: {},
        props: {
            btnText: "",
            btnStyle: {}
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            btnClick() {
                this.$emit('btnClick')
            }
        },
    }
</script>

<style lang="less">
    .btn {
        width: 710rpx;
        height: 100rpx;
        margin: 0 auto 0;
        text-align: center;

        .wrap {
            height: 100%;
            width: 100%;
            background: linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%);
            border-radius: 50rpx;

            font-size: 32rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 100rpx;

        }

    }
</style>
