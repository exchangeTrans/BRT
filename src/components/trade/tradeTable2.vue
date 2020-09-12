<template>
	<view class="tradeTable1" id="tradeTable1">
		<view class="tableHeader">
            <view class="tableLi tableLi1">时间</view>
            <view class="tableLi tableLi2">方向</view>
            <view class="tableLi tableLi3">价格(HDU)</view>
            <view class="tableLi tableLi4">数量</view>
        </view>
        <view class="tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2">卖出</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
        </view>
        <view class="tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2 buy">买入</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
        </view>
        <view class="tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2 buy">买入</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
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
	.tradeTable1{
		width: 100vw;
        height: auto;
        .tableHeader{
            width: 100%;
            height: 74rpx;
            box-sizing: border-box;
            padding: 0 20rpx;
            display: flex;
            justify-content:space-between;
            .tableLi{      
                height: 74rpx;      
                font-size: 24rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #A5AEB7;
                line-height: 74rpx;
                text-align: center;
            }
            .tableLi1{
                width: 130rpx;
                text-align: left;
            }
            .tableLi2{
                width: 130rpx;
            }
            .tableLi3{
                width: 280rpx;
            }
            .tableLi4{
                width: 130rpx;
                text-align: right;
            }
        }
        .tableTr{
            width: 100%;
            height: 88rpx;
            box-sizing: border-box;
            padding: 0 20rpx;
            display: flex;
            justify-content:space-between;
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
                width: 130rpx;
                text-align: left;
            }
            .tableLi2{
                width: 130rpx;
                color: #5BC788;
            }
             .tableLi2.buy{
                width: 130rpx;
                color: #FC3C5A;
            }
            .tableLi3{
                width: 280rpx;
                
            }
           
            .tableLi4{
                width: 130rpx;
                text-align: right;
            }
        }
		

	}

</style>
