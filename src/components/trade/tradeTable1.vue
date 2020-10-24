<template>
	<view class="tradeTable1" id="tradeTable1">
		<view class="tableHeader">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr1[0]}}</view>
            <view class="tableLi tableLi2">{{$t('trade').tableHeadTr1[1]}}({{KLineTradingPair.name}})</view>
            <view class="tableLi tableLi3">{{$t('trade').tableHeadTr1[2]}}({{KLineTradingPair.type}})</view>
            <view class="tableLi tableLi4">{{$t('trade').tableHeadTr1[3]}}({{KLineTradingPair.name}})</view>
            <view class="tableLi tableLi5">{{$t('trade').tableHeadTr1[4]}}</view>
        </view>
        <block  v-for="(item,index) in tableData" :key="index">
            <view class="tableTr" >
                <view class="tableLi tableLi1">{{index+1}}</view>
                <view class="tableLi tableLi2">{{item.bids.size}}</view>
                <view class="tableLi tableLi3">
                    <view class="price1">{{item.bids.price}}</view>
                    <view class="price2">{{item.asks.price}}</view>
                </view>
                <view class="tableLi tableLi4">{{item.asks.size}}</view>
                <view class="tableLi tableLi5">{{index+1}}</view>
            </view>
        </block>
        
	</view>
</template>

<script>
    export default {
	    components:{
		},
        data() {
            return {             
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
                tableData:[]
                

            }
        },
        onLoad() {
            
        },
        mounted(){
            // console.log()
            this.getDepthData()
        },
        computed: {  
            pageText () {  
                // console.log(this.$t('trade'))
                return this.$t('trade')  
            },
            KLineTradingPair(){
                return this.$store.state.tradeData.KLineTradingPair;
            },
        },  
        watch:{
            KLineTradingPair(){
                this.getDepthData();
            }
        },
        methods: {
            getDepthData(){
                let depth = this.KLineTradingPair.depth;
                if(depth!==null){
                    let asks = [...depth.asks].reverse();
                    let bids = depth.bids;
                    if(asks.length===0&&bids.length===0){
                        return
                    }
                    

                    let array = asks.length>bids.length?asks:bids;
                    let newData = array.map(function (item,index) {
                        let nullObj = {
                            all: 0,
                            depth: 0,
                            percent: 0,
                            price: 0,
                            size: 0,
                        }
                        let bidsItem = bids[index]?bids[index]:nullObj;
                        let asksItem = asks[index]?asks[index]:nullObj;
                        return {bids:bidsItem,asks:asksItem}                   
                    });
                    this.tableData = newData;
                }
                
                
                


            },
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
            .tableLi1,.tableLi5{
                width: 48rpx;
            }
            .tableLi2{
                width: 130rpx;
            }
            .tableLi3{
                width: 230rpx;
            }
            .tableLi4{
                width: 130rpx;
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
            .tableLi1,.tableLi5{
                width: 48rpx;
                opacity: 0.5;
            }
            .tableLi2{
                width: 130rpx;
            }
            .tableLi3{

                width: 230rpx;
                display: flex;
                justify-content: center;
                .price1{
                    margin-right: 10rpx;
                    
                    color: #5BC788;
                }
                .price2{
                    color: #FC3C5A;
                }
            }
            .tableLi4{
                width: 130rpx;
            }
        }
		

	}

</style>
