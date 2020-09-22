<template>
    <view>

        <uni-popup ref="subRuler"
                   type="center"
                   :mask-click="!isMustUpDate">
            <view class="subRuler"
                  :style="{'background':mode==='night'?'#272A2E':'#ffffff'}">

                <view class="rulerTitle">
                    {{$t('subRuler').intro}}
                </view>
                <scroll-view  scroll-y="true" class="rulerList">
                    <view class="rulerTextItem" v-for="(item,index) in $t('subRuler').rulerData" :key="index">
                        <view class="textNo">{{index+1}}</view>
                        <view class="text">{{item.text}}</view>
                        <view class="clearfix"></view>

                    </view>
                </scroll-view>


                <view class="closeIcon" @tap="close()" :style="{'background-image':'url('+closeIcon+')'}"></view>
            </view>
        </uni-popup>
    </view>
</template>

<script>

    import uniPopup from "@/components/uni-popup/uni-popup"
	export default {
		components:{
            uniPopup,
        },
        props:{
		  mode:{type:String,default:'day'},

        },
		data() {
			return {
                title: 'dialog',
                type:'',
                isMustUpDate:true,
                updateIcon:`${require('@/static/images/home/updateIcon.png')}`,
                closeIcon:`${require('@/static/images/home/close.png')}`,
                rulerData:[
                    {
                        text:'您的质押余额约必须大于1000BRT，才会获得质押收益。'
                    },
                    {
                        text:'每一次质押周期为15天，质押周期内不允许转入转出。'
                    },
                    {
                        text:'15天到期后，质押馀额会自动转入可用余额。'
                    },
                    {
                        text:'15天到期后，质押馀额会自动转入可用余额。'
                    }
                ]

            }
		},
        watch:{

        },
		mounted(){

        },
		methods: {
            open(){
                this.$nextTick(() => {
                    this.$refs['subRuler'].open();
                })
            },
            close(){
                this.$nextTick(() => {
                    this.$refs['subRuler'].close();
                })
            },
            updateBtn(){

            }

		}
	}
</script>

<style lang="less">

    .subRuler{
        width: 640rpx;
        height: 618rpx;
        border-radius: 10rpx;
        position: relative;
        padding: 50rpx 40rpx;
        box-sizing: border-box;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #1A1A1A;
        .rulerTitle{
            text-align: center;
            font-size: 34rpx;
            font-weight: 500;
        }
        .rulerList{
            width: 100%;
            height: 518rpx;
            .rulerTextItem{
                margin-top: 20rpx;
                .textNo{
                    margin-top: 8rpx;
                    float: left;
                    width: 32rpx;
                    height: 32rpx;
                    background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
                    border-radius: 10rpx 10rpx 0rpx 10rpx;
                    font-size: 24rpx;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 32rpx;
                    text-align: center;
                }
                .text{
                    width: 500rpx;
                    margin-left: 20rpx;
                    float: left;
                    font-size: 28rpx;
                    font-weight:400;
                    line-height: 48rpx;
                }
            }
        }



        .closeIcon{
            width: 48rpx;
            height: 48rpx;
            position: absolute;
            background-size: cover;
            bottom: -100rpx;
            left: 50%;
            transform: translateX(-50%);
        }

    }




</style>
