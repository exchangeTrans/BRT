<template>
	<view class="trade" id="trade">
		<pageHeader :headerOptions="headerOptions"/>
        
        <scroll-view class="tradeContent" scroll-y>
            <!-- <view @tap="changeTest">tatsadd</view> -->
            <view class="tradeTopView">
                <view class="priceView add">0.0641</view>
                <view class="moneyView">
                    <view class="money">≈6.68 CNY</view>
                    <view class="range add">+1.00%</view>
                </view>
                <view class="rightView">
                    <view class="rightLi">
                        <view class="text">0.062</view>
                        <view class="title">{{$t('trade').high}}</view>
                    </view>
                    <view class="rightLi">
                        <view class="text">0.062</view>
                        <view class="title">{{$t('trade').low}}</view>
                    </view>
                    <view class="rightLi">
                        <view class="text">49833</view>
                        <view class="title">24H</view>

                    </view>
                </view>
            </view>

            <view class="chartBox">
                <view class="chartTab">
                    <view :class="chartTabSelect.code===item.code?'chartTabLi active':'chartTabLi'"
                    v-for="(item,index) in chartTabArray"
                    :key="index"
                    @tap='selectChartTab(item)'>
                        {{item.name}}
                        <view class="line"></view>
                    </view>

                </view>
                <view class="chart1" id="chart1"></view>
                <view class="chart2" id="chart2"></view>
            </view>

            <view class="tableBox">
                <view class="tableTab">
                    <view :class="tableTabSelect.code===item.code?'tableTabLi active':'tableTabLi'"
                    v-for="(item,index) in tableTabArray"
                    :key="index"
                    @tap='selectTableTab(item)'>
                        {{item.name}}
                        <view class="line"></view>
                    </view>

                </view>
                <block v-if="tableTabSelect.code==='table1'"><tradeTable1/></block>
                <block v-if="tableTabSelect.code==='table2'"><tradeTable2/></block>
                <block v-if="tableTabSelect.code==='table3'"><tradeTable3/></block>
                <!-- <tradeTable1/> -->
                <!-- <tradeTable2/> -->
                <!-- <tradeTable3/> -->
            </view>
        </scroll-view>
        <view class="tradeBtnBox">
            <view class="tradeBtn buy">买入</view>
            <view class="tradeBtn">卖出</view>
        </view>
	</view>
</template>

<script>
    import pageHeader from '@/components/common/header.vue'
    import tradeTable1 from '@/components/trade/tradeTable1.vue'
    import tradeTable2 from '@/components/trade/tradeTable2.vue'
    import tradeTable3 from '@/components/trade/tradeTable3.vue'
    export default {
	    components:{
            pageHeader,
            tradeTable1,
            tradeTable2,
            tradeTable3
		},
        data() {
            return {
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    text: "LED/HDU",
                    rightItem: {
                        // type: "text",
                        // text: "须知&反馈",
                        // style: {
                        //     "fontSize": '28rpx',
                        //     "fontFamily": 'Source Han Sans CN',
                        //     "fontWeight": '400',
                        //     "color": 'rgba(68,68,68,1)'
                        // }
                    },
                    headerIsNoBoder: false,
                },
                chartTabArray:[
                    {code:'1',name:"1分",id:''},
                    {code:'2',name:"15分",id:''},
                    {code:'3',name:"1小时",id:''},
                    {code:'4',name:"4小时",id:''},
                    {code:'5',name:"日线",id:''},
                    {code:'6',name:"周线",id:''},
                    {code:'7',name:"指标",id:''},
                ],
                chartTabSelect:{code:'2',name:"15分",id:''},
                tableTabArray:[
                    {code:'table1',name:"买单/卖单",id:''},
                    {code:'table2',name:"最新成交",id:''},
                    {code:'table3',name:"币种简介",id:''},
                ],
                tableTabSelect:{code:'table2',name:"最新成交",id:''},
                

            }
        },
        onLoad() {

        },
        methods: {
            selectChartTab(item){
                this.chartTabSelect = item;
            },
            selectTableTab(item){
                this.tableTabSelect = item;
            },
            changeTest(){
                console.log(1111)
                this.$storage.setSync({key: "lang", data: "zh-CN"});
                // let url = '/blackPages/login/forgetPassword'
                // uni.navigateTo({
                //     url: '/pages/miningEarnings/index'
                // });
                this.$jumpPage.jump({
					type: 'navigateTo',
					url: 'miningEarnings/index'
				})
            },
        }
    }
</script>

<style lang="less">
	.trade{
		width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));
        .tradeContent{
            height: calc(100vh - var(--status-bar-height) - 240rpx);
        }
		.tradeTopView{
           width: 750rpx;
            height: 226rpx;
            background: #FFFFFF; 
            border-bottom: 20rpx solid #F9FAFA;
            position: relative;
            .priceView{
                width: 400rpx;
                height: 74rpx;
                font-size: 52rpx;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #5BC788;
                line-height: 74rpx;
                position: absolute;
                left: 30rpx;
                top: 44rpx;
            }
            .priceView.add{
                color: #FC3C5A;
            }
            .moneyView{
                width: 100%;
                height: 36rpx;
                font-size: 26rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #1A1A1A;
                line-height: 36rpx;
                position: absolute;
                bottom: 44rpx;
                left: 30rpx;
                view{
                    display: inline-block;
                }
                .range{
                    color: #5BC788;
                    margin-left: 20rpx;
                }
                .range.add{
                    color: #FC3C5A;
                }
            }
            .rightView{
                width: 300rpx;
                height: 100%;
                float: left;
                box-sizing: border-box;
                padding: 14rpx 30rpx;
                float: right;
                .rightLi{
                    width: 100%;
                    margin-top: 22rpx;
                    height: 36rpx;
                    text-align: right;
                    .title{
                        float: right;
                        height: 36rpx;
                        font-size: 26rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 36rpx;  
                        opacity: 0.5;                      
                    }
                    .text{
                        float: right;
                        height: 36rpx;
                        font-size: 26rpx;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 36rpx;
                        width: 120rpx;
                    }
                    
                }
            }
        }
        .chartBox{
            width: 750rpx;
            height: 800rpx;
            background: #FFFFFF; 
            border-bottom: 20rpx solid #F9FAFA;
            position: relative;
            .chartTab{
                width: 100%;
                height: 74rpx;
                padding:0 30rpx;
                box-sizing: border-box;
                display: flex;
                justify-content:space-between;
            }
            .chartTabLi{
                height: 100%;
                line-height: 74rpx;               
                font-size: 24rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #1A1A1A;
                position: relative;
                .line{
                    display: none;
                    width: 100%;
                    height: 2rpx;
                    background: #098FE0;
                    position: absolute;
                    bottom: 16rpx;
                }
            }
            .active.chartTabLi{
                color: #098FE0;
                .line{
                    display: block;
                }
            }
            .chart1{
                width: 100%;
                height: 526rpx;
                // background: darkblue;
            }
            .chart2{
                width: 100%;
                height: 200rpx;
                // background: firebrick;
            }
            
        }
        .tableBox{
            height: auto;
            width: 100%;
            .tableTab{
                height: 88rpx;
                width: 100%;
                padding: 0 60rpx;
                box-sizing: border-box;
                display: flex;
                justify-content:space-between;
                box-shadow: 0px -2rpx 0px 0px #F2F2F2;
                border-bottom: 2rpx solid #EDEDED;
                margin-bottom: 10rpx;
            }
            .tableTabLi{
                height: 100%;
                line-height: 88rpx;               
                font-size: 28rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #1A1A1A;
                position: relative;
                .line{
                    display: none;
                    width: 100%;
                    height: 4rpx;
                    background: #098FE0;
                    position: absolute;
                    bottom: 0rpx;
                }
            }
            .active.tableTabLi{
                color: #098FE0;
                .line{
                    display: block;
                }
            }
        }
        .tradeBtnBox{
            width: 750rpx;
            height: 140rpx;
            background: #FFFFFF;
            box-shadow: 0px 2rpx 0px 0px #EDEDED;
            box-sizing: border-box;
            padding: 20rpx;
            border-top: 2rpx solid #F9FAFA;
            .tradeBtn{
                width: 340rpx;
                height: 100rpx;  
                background: linear-gradient(135deg, #007CD3 0%, #25D4ED 100%);
                border-radius: 50rpx;
                line-height: 100rpx;
                color: #fff;
                text-align: center;
                float: right;            
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
            }
            .tradeBtn.buy{
                float: left;             
                background: linear-gradient(135deg, #004FA8 0%, #007CD3 100%);
            }
        }

	}

</style>
