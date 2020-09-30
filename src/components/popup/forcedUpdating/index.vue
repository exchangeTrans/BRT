<template>
    <view>

        <uni-popup ref="update"
                   type="center"
                   :mask-click="false">
            <view class="uni-image"
                  :style="{'background':mode==='night'?'#272A2E':'#ffffff'}"
            >
                <view class="image" :style="{'background-image':'url('+updateIcon+')'}"></view>
                <view class="findNew" :style="{'color':mode==='night'?'#D9DADB':'#000000'}">发现新版本</view>
                <view class="updateText" v-if="mobileMsg.devicePlatform&&mobileMsg.devicePlatform==='iOS'">{{upDate.iosMemo?upDate.iosMemo:''}}</view>
                <view class="updateText" v-else>{{upDate.androidMemo?upDate.androidMemo:''}}</view>
                <view   class="updateBtn" @tap="updateBtn">立即更新</view>
                <!--<view class="closeIcon" @tap="close()" :style="{'background-image':'url('+closeIcon+')'}"></view>-->
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
          upDate:{
              type:Object,default: () => {
                },
          }
        },
		data() {
			return {
                title: 'dialog',
                type:'',
                isMustUpDate:true,
                updateIcon:`${require('@/static/images/home/updateIcon.png')}`,
                closeIcon:`${require('@/static/images/home/close.png')}`,
                updateText:'钱包管理增加排序功能，优化网络速度'
			}
		},
        watch:{

        },
        computed:{
            mobileMsg(){
                return this.$storage.getSync({
					key: "mobileMsg",
				});
            }
            
        },
		mounted(){

        },
		methods: {
            open(){
                this.$nextTick(() => {
                    this.$refs['update'].open();
                })
            },
            close(){
                this.$nextTick(() => {
                    this.$refs['update'].close();
                })
            },
            updateBtn(){
                this.$emit('upDateFunc')
            }

		}
	}
</script>

<style lang="less">

    .uni-image{
        width: 640rpx;
        height: 800rpx;
        border-radius: 20rpx;
        position: relative;
        padding-top: 78rpx;
        box-sizing: border-box;
        .image{
            width: 344rpx;
            height: 314rpx;
            background-size: 100% 100%;
            margin: 0 auto 30rpx;
        }
        .findNew{
            margin-top: 60rpx;
            text-align: center;
            font-size: 36rpx;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
        }
        .updateText{
            margin-top: 30rpx;
            text-align: center;
            padding: 0 30rpx;
            box-sizing: border-box;
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
        }

        .updateBtn{
            width: 520rpx;
            height: 100rpx;
            background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
            border-radius: 50rpx;
            font-size: 32rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 100rpx;
            text-align:center;
            margin: 60rpx auto 0;
        }
        .closeIcon{
            width: 64rpx;
            height: 64rpx;
            position: absolute;
            background-size: cover;
            bottom: -100rpx;
            left: 50%;
            transform: translateX(-50%);
        }

    }




</style>
