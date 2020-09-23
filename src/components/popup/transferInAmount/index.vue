<template>
    <view>
        <uni-popup ref="transferInAmount" type="bottom" >
            <view class="transfer"
                  :style="{'background':mode==='night'?'#22252A':'#ffffff',
            'color':mode==='night'?'#D9DADB':'#1A1A1A'}">
                <view class="transferTop">
                    <view class="transferTitle">{{$t('transferInAmount').inMining}}</view>
                    <view class="close" @tap="close">{{$t('transferInAmount').close}}</view>
                    <view class="clearfix"></view>
                </view>
                <view class="beUsedNum">{{$t('transferInAmount').availableCount}}：{{availableCount}} BRT</view>

                <view class="transferInput"   :style="{'background':mode==='night'?'#272A2E':'#ffffff'}">
                    <input type="number" class="input" :placeholder="$t('transferInAmount').inputHolderText" v-model="counts">
                    <view class="allTransfer"  @tap="allTransfer">{{$t('transferInAmount').allInto}}</view>
                </view>
                <view class="intro">{{$t('transferInAmount').intoIntro}}</view>

                <view class="transferBtn" @tap="transfer">{{$t('transferInAmount').into}}</view>
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
                counts:'',
                isMustUpDate:false,
                updateIcon:`${require('@/static/images/home/updateIcon.png')}`,
                closeIcon:`${require('@/static/images/home/close.png')}`,
			}
		},
        watch:{

        },
		props: {
		    mode:{type:String,default:'day'},
            availableCount:{type:Number,default:0},
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
                let {availableCount} = this.$props;
                this.counts=availableCount;
            },
            transfer(){
                let postData={
                    amount: this.counts
                };
                this.$request({
                    url:'mining/inMining',
                    method:'post',
                    params:postData
                }).then((res)=>{
                    if (res.result.returnCode.toString() === "0") {
                        this.close();
                        this.$emit('transferInAmountSuccess')
                    }else{
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
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

                width: 480rpx;
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
