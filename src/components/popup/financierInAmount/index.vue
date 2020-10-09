<template>
    <view>
        <uni-popup ref="financierInAmountDialog" type="bottom" >
            <view class="transfer"
                  :style="{'background':mode==='night'?'#22252A':'#ffffff',
            'color':mode==='night'?'#D9DADB':'#1A1A1A'}">
                <view class="transferTop">
                    <view class="transferTitle">{{$t('financierInAmount').inMining}}</view>
                    <view class="close" @tap="close">{{$t('financierInAmount').close}}</view>
                    <view class="clearfix"></view>
                </view>
                <view class="beUsedNum">{{$t('financierInAmount').availableCount}}:{{availableCounts}} USDT</view>

                <view class="transferInput"   :style="{'background':mode==='night'?'#272A2E':'#ffffff'}">
                    <input type="number"
                           class="input"
                           :placeholder="$t('transferInAmount').inputHolderText"
                           v-model="counts"
                           @input="changeInput"

                    >
                    <view class="allTransfer"  @tap="allTransfer(availableCounts)">{{$t('financierInAmount').allInto}}</view>
                </view>
                <view class="intro">{{$t('financierInAmount').intoIntro}}</view>

                <view class="transferBtn" @tap="transfer">{{$t('financierInAmount').into}}</view>
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
                counts:null,
                isMustUpDate:false,
                updateIcon:`${require('@/static/images/home/updateIcon.png')}`,
                closeIcon:`${require('@/static/images/home/close.png')}`,
            }
        },
        watch:{

        },
        props: {
            mode:{type:String,default:'day'},
            availableCounts:{type:String,default:''},
            transferDate:{type:Object,default:()=>{}}
        },
        mounted(){

        },
        methods: {

            changeInput(e){
                // console.log(e)

                let value = e.detail.value;
                if(value.length==1){
                    value=value.replace(/[^1-9]/g,'');
                }else{
                    value=value.replace(/[^\d]/g,'');
                }
                this.counts = value;
                // console.log(value)
            },
            open(){
                this.$nextTick(() => {
                    this.$refs['financierInAmountDialog'].open();
                })
            },
            close(){
                this.$nextTick(() => {
                    this.$refs['financierInAmountDialog'].close();
                })
            },
            allTransfer(item){
                let res = item.split(',').join('');
                this.counts=parseInt(res);

            },
            transfer(){
                let that = this;
               let EmptyTip = this.$t('financierInAmount').Empty;
                    if(!this.counts){
                        this.$toast.show({
                            title:EmptyTip
                        })
                        return;
                    }
                    let postData = {
                        amount:that.counts
                    }
                    this.$request({
                        url:'finance/inFinance',
                        method:'post',
                        params:postData
                    }).then((res)=>{
                        if (res.result.returnCode.toString() === "0") {
                            that.close();
                            that.$emit('transferInAmountSuccess',that.counts)
                        }else{
                            this.$toast.show({
                                title: res.result.returnMessage,
                            })
                        }
                    })
            },

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
