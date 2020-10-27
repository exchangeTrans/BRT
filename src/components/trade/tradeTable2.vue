<template>
	<view class="tradeTable2" id="tradeTable2">
		<view class="tableHeader">
            <view class="tableLi tableLi1">{{$t('trade').tableHeadTr2[0]}}</view>
            <view class="tableLi tableLi2">{{$t('trade').tableHeadTr2[1]}}</view>
            <view class="tableLi tableLi3">{{$t('trade').tableHeadTr2[2]}}({{KLineTradingPair.type}})</view>
            <view class="tableLi tableLi4">{{$t('trade').tableHeadTr2[3]}}</view>
        </view>
        <block>
        <view class="tradeTable2_tableTr" v-for="(item,index) in KLineTradingPair.detail" :key="index">
            <view class="tableLi tableLi1">{{item.viewTime}}</view>
            <view class="tableLi tableLi2 buy" v-if="item.direction==='buy'">{{$t('trade').buy}}</view>
            <view class="tableLi tableLi2" v-else>{{$t('trade').sell}}</view>
            <view class="tableLi tableLi3">{{Number(item.price).toFixed(5)}}</view>
            <view class="tableLi tableLi4">{{item.amount}}</view>
            <view class="clearfix"></view>
        </view>
        </block>
        
        <!-- amount: 0.00662
direction: "buy"
id: "113148402599112150493040940"
price: 10898.6
tradeId: "102194428546"
ts: 1601307776068 -->
        <!-- <view class="tradeTable2_tableTr">
            <view class="tableLi tableLi1">14:34:43</view>
            <view class="tableLi tableLi2 buy">{{$t('trade').buy}}</view>
            <view class="tableLi tableLi3">1200.96</view>
            <view class="tableLi tableLi4">1</view>
        </view>
        <view class="tradeTable2_tableTr">
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
                tableData:[],
                

            }
        },
        onLoad() {

        },
        mounted(){
            this.getTableData()
        },
        computed: {  
            // pageText () {  
            //     // console.log(this.$t('trade'))
            //     return this.$t('trade')  
            // },
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
                this.getTableData()
            }
        },
        methods: {
            getTableData(){
                let detail = this.$store.state.tradeData.KLineTradingPair.detail;
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
                // console.log(detail)
                // console.log(newData)
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
        .tradeTable2_tableTr{
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
                color: #FC3C5A;
            }
             .tableLi2.buy{
                width: 130rpx;
                
                color: #5BC788;
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
