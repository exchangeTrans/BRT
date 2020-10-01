<template>
	<view class="tradeTable2" id="tradeTable2">
		<view class="tableHeader">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr2[0]}}</view>
            <view class="tableLi tableLi2">{{$t('trade').tableHeadTr2[1]}}</view>
            <view class="tableLi tableLi3">{{$t('trade').tableHeadTr2[2]}}({{KLineTradingPair.type}})</view>
            <view class="tableLi tableLi4">{{$t('trade').tableHeadTr2[3]}}</view>
        </view>
        <view class="tableTr" v-for="(item,index) in tableData" :key="index">
            <view class="tableLi tableLi1">{{item.ts}}</view>
            <view class="tableLi tableLi2 buy" v-if="item.direction==='buy'">{{$t('trade').buy}}</view>
            <view class="tableLi tableLi2" v-else>{{$t('trade').sell}}</view>
            <view class="tableLi tableLi3">{{item.price}}</view>
            <view class="tableLi tableLi4">{{item.amount}}</view>
        </view>
        <!-- amount: 0.00662
direction: "buy"
id: "113148402599112150493040940"
price: 10898.6
tradeId: "102194428546"
ts: 1601307776068 -->
        <!-- <view class="tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2 buy">{{$t('trade').buy}}</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
        </view>
        <view class="tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2 buy">{{$t('trade').sell}}</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
        </view> -->
	</view>
</template>

<script>
    import {DateFunc} from '@/static/js/common.js';
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
                tableData:[],
                

            }
        },
        onLoad() {

        },
        mounted(){
            this.getTableData()
        },
        computed: {  
            pageText () {  
                // console.log(this.$t('trade'))
                return this.$t('trade')  
            },
            KLineTradingPair(){
                return this.$store.state.tradeData.KLineTradingPair;
            },
            // detailData(){
            //     console.log(this.$store.state.tradeData.KLineTradingPair.detail)
            //     return this.$store.state.tradeData.KLineTradingPair.detail;
            // }
        },  
        watch:{
            KLineTradingPair(){
                console.log(111)
                this.getTableData()
            }
        },
        methods: {
            getTableData(){
                let detail = this.KLineTradingPair.detail;
                let newData = detail.map(function (item) {
                    if(item&&item.ts){
                        let res = DateFunc.resetTime_getObj(item.ts,'hms')
                        let ts = res.viewTime;
                        return {
                            ...item,
                            ts
                        }
                    }
                });
                
                this.tableData = newData;
            },   
                
                


            // },
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
	.tradeTable2{
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
