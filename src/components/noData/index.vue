<template>
    <view class="noData" :style="{'top':noDataStyle.top}">
        <view class="noDataImg" :style="{'background-image':isGrey?'url('+noData_grey+')':'url('+noData+')'}"></view>
        <view class="noDataText" :class="{'isBlack': isBlack, 'isNotBlack': !isBlack}">{{$t('noData')}}</view>
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
            },
            isGrey: {
                type: Boolean,
                default: false
            },
        },
        data(){
            return{
                noData:`${require('@/static/images/noData/noData.png')}`,
                noData_grey:`${require('@/static/images/noData/noData_grey.png')}`,
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
            padding-bottom: 80rpx;
        }

        .isBlack {
            color: #D9DADB;
        }

        .isNotBlack {
            color: #000000;
        }
    }

</style>
