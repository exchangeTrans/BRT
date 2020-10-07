<template>
    <view>
        <uni-popup ref="cancelPledge" type="bottom" >
            <view class="cancelPledge"
                  :style="{'background':mode==='night'?'#22252A':'#ffffff',
            'color':mode==='night'?'#D9DADB':'#1A1A1A'}">
                <view class="cancelPledgeTop">
                    <view class="cancelPledgeTitle">{{$t('cancelPledge').cancelTitle}}</view>
                    <view class="close" @tap="close">{{$t('cancelPledge').close}}</view>
                    <view class="clearfix"></view>
                </view>
                <view class="beUsedNum">{{$t('cancelPledge').pledgeCount}}：{{pledgeCount}} BRT</view>

                <view class="cancelPledgeInput"   :style="{'background':mode==='night'?'#272A2E':'#F4F6F7'}">
                    <input type="number"
                           class="input"
                           :placeholder="$t('cancelPledge').inputHolderText"
                           @input="inputChange('verifyCode', $event)"
                    >
                    <!--@input="changeInput"-->
                    <view class="getCode"  @tap="getCode(availableCount)" v-if="verifyFlag">{{$t('cancelPledge').code}}</view>
                    <view class="getCode" v-else>{{countDown}}{{$t('cancelPledge').verifyCountDown}}</view>
                </view>
                <view class="intro">{{$t('cancelPledge').intoIntro}}</view>

                <view class="cancelPledgeBtn" @tap="cancelPledge">{{$t('cancelPledge').into}}</view>
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
                verifyKey:'',//验证key
                verifyCode:'',
                countDown:60,
                verifyFlag:true,//true可以获取，false不可获取
                timer:'',
			}
		},
        watch:{
		    countDown(v){
		        if (v===0){
		            clearInterval(this.timer);
		            this.verifyFlag=true;
                }
            }
        },
		props: {
		    mode:{type:String,default:'day'},
            pledgeCount:{type:String,default:''},
			transferDate:{type:Object,default:()=>{}}
        },
		mounted(){

        },
		methods: {
            inputChange(key, e) {
                this[key] = e.target.value;
            },
            // changeInput(e){
            //     // console.log(e)
            //
            //     let value = e.detail.value;
            //     if(value.length==1){
            //         value=value.replace(/[^1-9]/g,'');
            //     }else{
            //         value=value.replace(/[^\d]/g,'');
            //     }
            //     this.counts = value;
            //     // console.log(value)
            // },
            open(){
                this.$nextTick(() => {
                    this.$refs['cancelPledge'].open();
                })
            },
            close(){
                this.$nextTick(() => {
                    this.$refs['cancelPledge'].close();
                })
                this.verifyFlag=true;
            },
            getCode(item){
               // let res = item.split(',').join('');
               //  this.counts=parseInt(res);
                let that = this;
                if (!this.verifyFlag){
                    return
                }
                let sendCodeData = this.getSendCodeData();
                this.verifyFlag=false;
                this.countDownFuc();
                this.$request({
                    url: "common/sendCode",
                    method: "post",
                    params: sendCodeData,
                }).then((res) => {
                    if (res.result.returnCode.toString() === "0") {

                        that.verifyKey = res.data.verifyKey;
                        uni.hideLoading()
                    } else {
                        that.verifyFlag=true;
                        that.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            },

            getSendCodeData() {
                let type = 6;//1注册 2忘记密码  3转账 4更换账号 5更换新账号 6取消质押
                let accountType = 0 ;
                let tel = this.$store.state.defaultData.userMsg.tel;
                let dialingCode = this.$store.state.defaultData.userMsg.dialingCode;
                let sendCodeData = {
                    type,
                    accountType,
                    dialingCode,
                    tel
                };
                return sendCodeData
            },

            cancelPledge(){
                let that = this;
                let tip = this.$t('cancelPledge').verifyTip
                if (this.verifyCode===""){
                    this.$toast.show({
                        title: tip
                    });
                    return;
                }
                let postData={
                    verifyKey:this.verifyKey,
                    verifyCode:this.verifyCode,
                };
                this.$request({
                    url: "mining/cancelMining",
                    method: "post",
                    params:postData,
                }).then((res)=>{
                    if (res.result.returnCode.toString() === "0") {
                        that.verifyFlag=true;
                        that.$emit('cancelPledgeSuccess')
                    }else{
                        that.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                })
            },

            countDownFuc(){
                let {timer} = this;
                timer = setInterval(()=>{
                    this.countDown--
                },1000)
                this.timer=timer;
            }
			// transfer(transferDate){
            //     let that = this;
			// 	if(transferDate.type==="finance/inFinance"){
			// 		if(!this.counts){
			// 			this.$toast.show({
			// 				title:'金额不能为空'
			// 			})
			// 			return;
			// 		}
			// 		let postData={
			// 		    amount: this.counts
			// 		};
			// 		this.$request({
			// 		    url:type,
			// 		    method:'post',
			// 		    params:postData
			// 		}).then((res)=>{
			// 			if (res.result.returnCode.toString() === "0") {
            //                 that.close();
            //                 that.$emit('transferInAmountSuccess',that.counts)
			// 			}else{
			// 			    this.$toast.show({
			// 			        title: res.result.returnMessage,
			// 			    })
			// 			}
			// 		})
			// 	}else{
			// 		this.miningTransfer();
			// 	}
			// },
            // miningTransfer() {
            //     if (!this.counts){
            //         this.$toast.show({
            //             title: '金额不能为空',
            //         })
            //         return;
            //     }
            //     let postData={
            //         amount: this.counts
            //     };
            //     this.$request({
            //         url:'mining/inMining',
            //         method:'post',
            //         params:postData
            //     }).then((res)=>{
            //         if (res.result.returnCode.toString() === "0") {
            //             this.close();
            //             this.$emit('transferInAmountSuccess',this.counts)
            //         }else{
            //             this.$toast.show({
            //                 title: res.result.returnMessage,
            //             })
            //         }
            //     })
            // },

		}
	}
</script>

<style lang="less">

    .cancelPledge{
        width: 750rpx;
        height: 534rpx;
        padding: 60rpx 40rpx 40rpx 40rpx;
        box-sizing: border-box;
        border-radius: 60rpx 60rpx 0rpx 0rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        .cancelPledgeTop{
            .cancelPledgeTitle{
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
        .cancelPledgeInput{
            margin-top: 40rpx;
            width: 670rpx;
            height: 88rpx;
            padding: 24rpx 30rpx;
            box-sizing: border-box;
            border-radius: 8rpx;
            .input{
                float: left;

                width: 400rpx;
            }
            .getCode{
                float: right;
                font-size: 28rpx;
                color: #098FE0;
            }

        }
        .intro{
            text-indent:30rpx;
            margin-top: 15rpx;
            font-size: 26rpx;
        }

        .cancelPledgeBtn{
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
