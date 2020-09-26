<template>
    <view class="noData" :style="{'top':noDataStyle.top}">
        <view class="noDataImg" :style="{'background-image':'url('+noData+')'}"></view>
        <view class="noDataText" :class="{'isBlack': isBlack, 'isNotBlack': !isBlack}">暂无数据</view>
    </view>
</template>

<script>
    export default {
        name: "index",
        props:{
          positionTop:{
              type:String,
              default:'',
          },
            isBlack: {
              type: Boolean,
                default: false
            }
        },
        data(){
            return{
                noData:`${require('@/static/images/noData/noData.png')}`
            }
        },
        computed:{
            noDataStyle(){
                let {positionTop} = this.$props;
                let top = '100rpx'
                if (positionTop) {
                     top = positionTop;
                }
                return {
                    top
                }
            }
        }
    }
</script>

<style lang="less">
    .noData{
        width: 100%;
        position: absolute;
        left: 0;
        .noDataImg{
            width: 530rpx;
            height: 440rpx;
            margin: 0 auto;
            background-size: cover;
        }
        .noDataText{
            margin-top: 42rpx;
            text-align: center;
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            opacity: 0.5;
            line-height: 40rpx;
        }

        .isBlack {
            color: #D9DADB;
        }

        .isNotBlack {
            color: #000000;
        }
    }

</style>
