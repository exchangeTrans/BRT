<template>
    <view>

        <uni-popup ref="transferInAmount" type="bottom" >
            <view class="transfer" >
                <view class="transferTop">
                    <view class="transferTitle">转入</view>
                    <view class="close">取消</view>
                </view>
                <view class="beUsedNum">可用数量：40.24 BRT</view>

                <view class="transferInput">
                    <input type="text">
                    <view class="allTransfer">全部转入</view>
                </view>
                <view class="intro">质押週期为15日，到期后会自动解锁。</view>

                <view class="transferBtn">转入</view>
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

		}
	}
</script>

<style lang="less">

    .transfer{
        width: 750rpx;
        height: 534rpx;
        background: #FFFFFF;
        padding: 60rpx 40rpx 40rpx 40rpx;
        box-sizing: border-box;
        border-radius: 60rpx 60rpx 0rpx 0rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        .transferTop{
            .transferTitle{
                float: left;
                font-size: 40rpx;
                color: #1A1A1A;
            }
            .close{
                float: right;
                font-size: 32rpx;
                color: #1A1A1A;
            }
        }
        .beUsedNum{
            font-size: 32rpx;
            color: #1A1A1A;
        }
        .transferInput{
            width: 670rpx;
            height: 88rpx;
            background: #F4F6F7;
            border-radius: 8rpx;
            .allTransfer{
                font-size: 28rpx;
                color: #098FE0;
            }

        }

        .transferBtn{
            width: 670rpx;
            height: 100rpx;
            line-height: 100rpx;
            background: linear-gradient(135deg, #004FA8 0%, #007CD3 49%, #25D4ED 100%);
            border-radius: 50rpx;
            font-size: 32rpx;
            color: #FFFFFF;
        }

    }




</style>
