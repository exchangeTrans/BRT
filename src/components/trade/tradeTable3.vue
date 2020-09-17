<template>
	<view class="tradeTable3" id="tradeTable3">
		
        <view class="tableTr tableTr1">
            <view class="tableLi tableLi1">LED</view>
        </view>
        <view class="tableTr tableTr2">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[0]}}</view>
            <view class="tableLi tableLi2">2020-09-12</view>
        </view>
        <view class="tableTr tableTr3">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr3[1]}}</view>
            <view class="tableLi tableLi2">1000{{$t('trade').unit}}</view>
        </view>
	</view>
</template>

<script>
    export default {
	    components:{
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
                    {code:'1',name:"买单/卖单",id:''},
                    {code:'2',name:"最新成交",id:''},
                    {code:'3',name:"币种简介",id:''},
                ],
                tableTabSelect:{code:'2',name:"最新成交",id:''},
                

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
        }
    }
</script>

<style lang="less">
	.tradeTable3{
		width: 100vw;
        height: auto;
        
        .tableTr{
            width: 100%;
            height: 88rpx;
            box-sizing: border-box;
            padding: 0 20rpx;
            display: flex;
            justify-content:space-between;
            border-bottom: 2rpx solid #EDEDED;
            .tableLi{      
                height: 88rpx;      
                font-size: 24rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #1A1A1A;
                line-height: 88rpx;
                text-align: center;
            }
            .tableLi1{
                text-align: left;
            }
            .tableLi2{
                text-align: right;
            }
        }
        .tableTr1{
           .tableLi{              
            font-size: 32rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
           } 
        }
		

	}

</style>
