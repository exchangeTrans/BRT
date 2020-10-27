<template>
	<view class="tradeChart1">

        <!-- <block v-for="(item, index) in arr" :key="index">
			<view class="qiun-columns" style="background-color: #FFFFFF;">
				<u-charts :canvas-id="item.id" :chartType="item.chartType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
			</view>
		</block> -->
        <!-- <u-charts canvas-id="tradeChart1" 
            :chartType="chartType" 
            :cWidth="cWidth" 
            :cHeight="cHeight" 
            :opts="item.opts" 
            ref="tradeChart1"/> -->
        <!-- <canvas id="tradeChart1" 
            canvasId="tradeChart1" 
            :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
            @touchstart="touchStart" 
            @touchmove="touchMove" 
            @touchend="touchEnd" 
            @error="error"> -->
        <!-- </canvas> -->
        <!-- <view 
        :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
        class="tradeChart1" id="tradeChart1" 
        :prop="option" :change:prop="echarts.update" @click="echarts.onClick"></view> -->
        <view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" :lang="langMsg" :change:lang="echarts.langMsgChange" :change:test="echarts.test" :test="KLineTradingPair" id="echarts" class="echarts tradeChart1"></view>
	</view>
</template>
<script>
	export default {
		name: 'Echarts',
		created() {
			// 设置随机数id
			// let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			// let len = t.length
			// let id = ''
			// for (let i = 0; i < 32; i++) {
			// 	id += t.charAt(Math.floor(Math.random() * len))
			// }
			// this.option.id = id
        },
        data(){
             return {
                 pixelRatio:1,
                chartType:'line',
                textarea: '',
				cWidth:'',
                cHeight:'',
                option: {
                    // notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
                    // tooltip: {
                    //     trigger: 'axis',
                    //     positionStatus: true,
                    //     formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
                    //     formatterUnit: '元', // 自定义变量：数值后面的单位
                    //     formatFloat2: true, // 自定义变量：是否格式化为两位小数
                    //     formatThousands: true // 自定义变量：是否添加千分位
                    // },
                    legend: {
                        show:false,
                        data: ['K'],
                        inactiveColor: '#909AA4',
                        textStyle: {
                            color: '#909AA4'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#F44E33',
                                width: 1,
                                opacity: 1
                            }
                        }
                    },
                    grid: {
                        top:10,
                        bottom: 40,
                        right:60,
                        left:10
                    },
                    // xAxis: [
                    //     {
                    //         type: 'category',
                    //         data: ['周一', '周二', '周三', '周四', '周五']
                    //     }
                    // ],
                    xAxis: {
                        show:true,
                        type: 'category',
                        data: [],
                        axisTick: {
                            show: false
                        },
                        splitLine: { show: false },
                        axisLine: { 
                            show:false,
                            lineStyle: { color: '#EDEDED' }
                        },
                        axisLabel:{
                            textStyle: {
                                color: '#909AA4',
                                fontSize:'12'
                            }
                        },
                    },
                    yAxis: {
                        position:'right',
                        scale: true,
                        axisLine: { 
                            lineStyle: { color: '#EDEDED' },
                            show:false,
                            
                        },
                        axisLabel:{
                            textStyle: {
                                color: '#909AA4',
                                fontSize:'12'
                            }
                        },
                        splitLine: { 
                            show: true,
                            lineStyle:{
                                color: ['#EDEDED'],
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    series: [
                        // {
                        //     name: '邮件',
                        //     type: 'bar',
                        //     data: [120, 132, 101, 134, 90],
                        //     // 自定义变量，以数组形式传递渐变参数
                        //     linearGradient: [0, 0, 0, 1,
                        //     [
                        //         {offset: 0, color: '#2378f7'},
                        //         {offset: 0.7, color: '#2378f7'},
                        //         {offset: 1, color: '#83bff6'}
                        //     ]]
                        // },
                        // {
                        //     name: '手机',
                        //     type: 'bar',
                        //     data: [220, 182, 191, 234, 290],
                        //     // 自定义变量，以数组形式传递渐变参数
                        //     linearGradient: [0, 0, 0, 1,
                        //     [
                        //         {offset: 0, color: '#0bac00'},
                        //         {offset: 0.7, color: '#0dcb00'},
                        //         {offset: 1, color: '#0fef00'}
                        //     ]]
                        // }
                    ]
                },
                KLindeData:null,
                xData:null,
           
              }
        },
        computed:{
            tradeListData(){
                return this.$store.state.tradeData.tradePairData;
            },
            KLineTradingPair(){
                return this.$store.state.tradeData.KLineTradingPair;
            },
            selectedCurrency(){
                return this.$store.state.defaultData.selectedCurrency;
            },
            symbolDefaultData(){
                return this.$store.state.tradeData.symbolDefaultData
            },
            langMsg(){
                return this.$store.state.defaultData.langMsg.name;
            }, 
            // depthData(){
            //     let res = this.$store.state.tradeData.KLineTradingPair.depth;
            //     let tradesOptions_list = this.tradesOptions_list;
            //     let defult = {
            //         asks:tradesOptions_list,
            //         bids:tradesOptions_list
            //     }
            //     res = res&&res!==null?res:defult
            //     return res

            // }

        },
        watch:{
            KLineTradingPair(res){
                // this.createKLineData()
            }
        },
        mounted(){

            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(526);
        },
		methods: {
			/**
			 * renderjs内的点击事件，回调到父组件
			 * @param {Object} params
			 */
			onViewClick(params) {
				this.$emit('click', params)
			}
		}
	}
</script>
<script module="echarts" lang="renderjs">
    import store from '@/store/index.js';
    import {DateFunc} from '@/static/js/common.js';
    import datastorage from '@/static/js/datastorage.js';
    // import uCharts from '@/components/u-charts/component.vue';
    // import uCharts from '@/static/js/uChart/u-charts.js';
    // import {
	// 	isJSON
    // } from '@/common/checker.js';
    let myChart;
    let localMsg = 'zh-CN'
    export default {
	    components:{
            // uCharts
		},
        data() {
            return { 
                pixelRatio:1,
                chartType:'line',
                textarea: '',
				cWidth:'',
				cHeight:'',
                arr: [],
                chart: null,
                clickData: null, // echarts点击事件的值
                // localMsg:'zh-CN'
                
                
           }
        },
        onLoad() {
			
        },
        mounted(){
            
            // if (typeof window.echarts === 'function') {
			// 	this.initEcharts()
			// } else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script');
				script.src = './static/js/echart/echarts.min.js'
				script.onload = this.initEcharts.bind(this)
				document.head.appendChild(script)
			// }
            
        },
        computed: {  
            KLineTradingPair1(){
                return store.state.tradeData.KLineTradingPair;
            },  
        }, 
        watch:{
            KLineTradingPair1(res){
                // this.createKLineData()
            }
        }, 
        
        methods: {
			initEcharts() {
                myChart = echarts.init(document.getElementById('echarts'))
                // 观测更新的数据在 view 层可以直接访问到
                this.createKLineData();
                
				
            },

             createKLineData(){
                let KLineTradingPair = this.KLineTradingPair;
                
                // let that = this;
                if(KLineTradingPair.dataArray&&KLineTradingPair.dataArray.length>0){
                    // let data = that.KLindeData =  res.data.map(function (item,index) {
                    //     if(index>180){
                    //         return [item.open, item.close, item.low,item.high];
                    //     }
                    //     // return [item.open, item.close, item.low,item.high];
                        
                    // });
                    let data = [];
                    let xData = [];
                    KLineTradingPair.dataArray.forEach((item,index) => {
                        if(index>KLineTradingPair.dataArray.length-30){
                            data.push([item.open, item.close, item.low,item.high])
                            let time = DateFunc.resetTime_getObj(parseInt(item.id) * 1000,'mdhm').viewTime
                            xData.push(time);
                        }
                    });
                    // this.nowTradePrice = res.data[res.data.length-1].close;
                    this.KLindeData = data;
                    this.xData = xData;
                    // let xData = that.xData = res.data.map(function (item,index) {
                    //     if(index>180){
                    //         return new Date(parseInt(item.id) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
                    //     }
                    //     // return new Date(parseInt(item.id) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
                    // });
                    // console.log(data)
                    if(xData!==null)
                    this.setEchart(data,xData);
                    // that.refreshEChartData(data,xData)
                    // that.refreshEChartXData(xData)
                }
            },
            setEchart(data,xData) {
                
                // let langMsg = localMsg

                let langMsg = this.langMsg
                let tipObj={
                    'zh-CN':{
                        Open:'开盘价:',
                        Close:'收盘价:',
                        Highest:'最高价:',
                        Lowest:'最低价:',
                    },
                    'en-US':{
                        Open:'Open:',
                        Close:'Close:',
                        Highest:'Highest:',
                        Lowest:'Lowest:',
                    },
                    'ko-KR':{
                        Open:'开盘价:',
                        Close:'收盘价:',
                        Highest:'最高价:',
                        Lowest:'最低价:',
                    },
                }
                let OpenTip = tipObj[langMsg].Open;
                let CloseTip = tipObj[langMsg].Close;
                let HighestTip = tipObj[langMsg].Highest;
                let LowestTip = tipObj[langMsg].Lowest;
                // let $element = document.getElementById("myChart");
                // let that = this;
                // let KLineTradingPair1 = this.KLineTradingPair1
                let KLineTradingPair = this.KLineTradingPair
                let chartOpts = this.option;
                let xAxis = this.option.xAxis;
                let yAxis = this.option.yAxis;
                
                let tooltip = this.option.tooltip;
                let opts = {
                    ...chartOpts,
                    xAxis: {
                        ...xAxis,
                        data: xData
                    },
                    yAxis: {
                        ...yAxis,
                        max: function (value) {
                            let maxRange = (value.max-value.min)*0.1
                            let min_num = value.min.toString().split(".")[1]
                            let max_num = value.max.toString().split(".")[1]
                            
                            min_num = min_num?min_num.length:0
                            max_num = max_num?max_num.length:0
                            let num = min_num>max_num?min_num:max_num
                            // let max = (value.max + maxRange).toFixed(num)
                            let max = num>0?(value.max + maxRange).toFixed(num):parseInt(value.max + maxRange)
                            return max;
                        },
                        min: function (value) {
                            let maxRange = (value.max-value.min)*0.1;
                            let min_num = value.min.toString().split(".")[1]
                            let max_num = value.max.toString().split(".")[1]
                            
                            min_num = min_num?min_num.length:0
                            max_num = max_num?max_num.length:0
                            let num = min_num>max_num?min_num:max_num
                            let min = num>0?(value.min - maxRange).toFixed(num):parseInt(value.min - maxRange)
                            return min;
                        }
                    },
                    
                    tooltip:{
                        ...tooltip,
                        formatter: function (datas) {
                            let data = datas[0];
                            var res = datas[0].name +'</br>'                          
                            +datas[0].seriesName+'</br>' 
                            +OpenTip+datas[0].data[1]+'</br>' 
                            +CloseTip+datas[0].data[2]+'</br>' 
                            +LowestTip+datas[0].data[3]+'</br>' 
                            +HighestTip+datas[0].data[4]+'</br>' 
                            return res
                        }
                    },
                    dataZoom:[{
                        type: 'inside',//图表下方的伸缩条inside
                        show : true, //是否显示
                        realtime : true, //拖动时，是否实时更新系列的视图
                        start : 0, //伸缩条开始位置（1-100），可以随时更改
                        end : 100, //伸缩条结束位置（1-100），可以随时更改
                    }],
                    
                    series: [
                        {
                            type: 'candlestick',
                            name: KLineTradingPair.name,
                            data: data,
                            barWidth : "60%",
                            itemStyle: {
                                color: '#01AF90',
                                color0: '#F44E33',
                                borderColor: '#01AF90',
                                borderColor0: '#F44E33'
                                // color: '#F44E33',
                                // color0: '#01AF90',
                                // borderColor: '#F44E33',
                                // borderColor0: '#01AF90'
                            }
                        }
                    ]
                }
                myChart.setOption(opts)
            },
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
                // myChart.setOption(newValue)
                
            },
            langMsgChange(newValue, oldValue, ownerInstance, instance){
                // // console.log(111)
                // console.log(newValue)
                // console.log(oldValue)
                localMsg = newValue
            },
            test(newValue, oldValue, ownerInstance, instance){
                this.initEcharts()
                // console.log(111)
                // console.log(newValue)
                // console.log(oldValue)
            },
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
    }
</script>

<style lang="less">
	.tradeChart1{
		width: 100%;
        height: 100%;
        // background: darkblue;

	}

</style>
