<template>
    <view>
        <uni-popup ref="transferInAmount" type="bottom" >
            <view class="transfer"
                  :style="{'background':mode==='night'?'#22252A':'#ffffff',
            'color':mode==='night'?'#D9DADB':'#1A1A1A'}">
                <view class="transferTop">
                    <view class="transferTitle">参与挖矿</view>
                    <view class="close" @tap="close">取消</view>
                    <view class="clearfix"></view>
                </view>
                <view class="beUsedNum">可用数量：40.24 BRT</view>

                <view class="transferInput"   :style="{'background':mode==='night'?'#272A2E':'#ffffff'}">
                    <input type="text" class="input" placeholder="请输入转入数量">
                    <view class="allTransfer"  @tap="allTransfer">全部转入</view>
                </view>
                <view class="intro">质押週期为15日，到期后会自动解锁。</view>

                <view class="transferBtn" @tap="transfer">转入</view>
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
		data() {
			return {
                title: 'dialog',
                type:'',
                isMustUpDate:false,
                updateIcon:`${require('@/static/images/home/updateIcon.png')}`,
                closeIcon:`${require('@/static/images/home/close.png')}`,
			}
		},
        watch:{

        },
		props: {
		    mode:{type:String,default:'day'}
        },
		mounted(){

        },
		methods: {
            open(){
                this.$nextTick(() => {
                    this.$refs['transferInAmount'].open();
                })
            },
            close(){
                this.$nextTick(() => {
                    this.$refs['transferInAmount'].close();
                })
            },
            allTransfer(){

            },
            transfer(){

            }

		}
	}
</script>

<style lang="less">

    .transfer{
        width: 750rpx;
        height: 534rpx;
        padding: 60rpx 40rpx 40rpx 40rpx;
        box-sizing: border-box;
        border-radius: 60rpx 60rpx 0rpx 0rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        .transferTop{
            .transferTitle{
                float: left;
                font-size: 40rpx;
            }
            .close{
                float: right;
                font-size: 32rpx;
            }
        }
        .beUsedNum{
            opacity: 0.5;
            margin-top: 15rpx;
            font-size: 32rpx;
        }
        .transferInput{
            margin-top: 40rpx;
            width: 670rpx;
            height: 88rpx;
            padding: 24rpx 30rpx;
            box-sizing: border-box;
            background: #F4F6F7;
            border-radius: 8rpx;
            .input{
                float: left;

                width: 500rpx;
            }
            .allTransfer{
                float: right;
                font-size: 28rpx;
                color: #098FE0;
            }

        }
        .intro{
            margin-top: 15rpx;
            font-size: 26rpx;
        }

        .transferBtn{
            margin-top: 40rpx;
            width: 670rpx;
            height: 100rpx;
            line-height: 100rpx;
            background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
            border-radius: 50rpx;
            font-size: 32rpx;
            color: #FFFFFF;
            text-align: center;
        }

    }




</style>
