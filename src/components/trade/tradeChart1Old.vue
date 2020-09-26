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
        <canvas id="tradeChart1" 
            canvasId="tradeChart1" 
            :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
            @touchstart="touchStart" 
            @touchmove="touchMove" 
            @touchend="touchEnd" 
            @error="error">
        </canvas>
	</view>
</template>

<script>
    // import uCharts from '@/components/u-charts/component.vue';
    import uCharts from '@/static/js/uChart/u-charts.js';
    // import {
	// 	isJSON
	// } from '@/common/checker.js';
    export default {
	    components:{
            // uCharts
		},
        data() {
            return { 
                myChart:null,
                pixelRatio:1,
                chartType:'line',
                textarea: '',
				cWidth:'',
				cHeight:'',
				arr: []            

            }
        },
        onLoad() {
			
        },
        mounted(){
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(526);
            // this.getServerData();
            
            this.initChart()
            // console.log(this.$t('trade'))
            
        },
        computed: {  
            // pageText () {  
            //     // console.log(this.$t('trade'))
            //     return this.$t('trade')  
            // }  
        },  
        methods: {
            initChart(){
                this.myChart = new uCharts({
					$this: this,
					canvasId: 'tradeChart1',
					type: 'candle',
					legend: {
                        show:false
                    },
					fontSize: 11,
					background: '#FFFFFF',
                    pixelRatio: this.pixelRatio,
                    padding:[10,30,0,30],
					animation: true,
					categories: ['', '', '', '', '', '','', '', '', '', '', '','', '', '', '', '', ''],
					series: [{
                        name: '上证指数',
                        // disableLegend:'true',
                        data: [
                            [2320.26, 2302.6, 2287.3, 2362.94],
                            [2300, 2291.3, 2288.26, 2308.38],
                            [2295.35, 2346.5, 2295.35, 2346.92],
                            [2347.22, 2358.98, 2337.35, 2363.8],
                            [2360.75, 2382.48, 2347.89, 2383.76],
                            [2383.43, 2385.42, 2371.23, 2391.82],
                            [2377.41, 2419.02, 2369.57, 2421.15],
                            [2320.26, 2302.6, 2287.3, 2362.94],
                            [2300, 2291.3, 2288.26, 2308.38],
                            [2295.35, 2346.5, 2295.35, 2346.92],
                            [2347.22, 2358.98, 2337.35, 2363.8],
                            [2360.75, 2382.48, 2347.89, 2383.76],
                            [2383.43, 2385.42, 2371.23, 2391.82],
                            [2377.41, 2419.02, 2369.57, 2421.15],
                            [2320.26, 2302.6, 2287.3, 2362.94],
                            [2300, 2291.3, 2288.26, 2308.38],
                            [2295.35, 2346.5, 2295.35, 2346.92],
                            [2347.22, 2358.98, 2337.35, 2363.8],
                            [2360.75, 2382.48, 2347.89, 2383.76],
                            [2383.43, 2385.42, 2371.23, 2391.82],
                            [2377.41, 2419.02, 2369.57, 2421.15]
                        ]
                    }],
					enableScroll: false,
					xAxis: {
						disableGrid: true,
						itemCount: 8,
                        scrollShow: false,
                        calibration:false,
                        // labelCount:5
					},
					yAxis: {
						disabled:true
					},
					dataLabel: true,
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					extra: {
						candle: {
                            color:{
                                upLine:'#FC3C5A',
                                upFill:'#FC3C5A',
                                downLine:'#5BC788',
                                downFill:'#5BC788',
                            },
                            average:{

                            }
						}
					}
				});
                
            },
            changeData(cid,newdata) {
                if(this.myChart===null) return;
				this.myChart.updateData({
					series: newdata.series,
					categories: newdata.categories
				});
			},
			touchStart(e) {
                if(this.myChart===null) return
                // console.log(e)
				this.myChart.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
                });
                if(this.myChart===null) return;
				this.myChart.scrollStart(e);
			},
			touchMove(e) {
                if(this.myChart===null) return;
				this.myChart.scroll(e);
			},
			touchEnd(e) {
                if(this.myChart===null) return;
                this.myChart.scrollEnd(e);
                
                // console.log(e)
				this.myChart.showToolTip(e, {
//                     textList:[
// {text:'我是一个标题',color:null},{text:'自定义1：值1',color:'#2fc25b'},{text:'自定义2：值2',color:'#facc14'},{text:'自定义3：值3',color:'#f04864'}
//                     ],
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
                });
                if(this.myChart===null) return;
				this.myChart.scrollStart(e);
			},
			error(e) {
				console.log(e)
			}
            // getServerData() {
			// 	uni.request({
			// 		url: 'https://www.ucharts.cn/data.json',
			// 		data: {},
			// 		success: function(res) {
			// 			let LineA = {
			// 				categories: [],
			// 				series: []
			// 			};
			// 			LineA.categories = res.data.data.LineA.categories;
			// 			LineA.series = res.data.data.LineA.series;

			// 			let Column = {
			// 				categories: [],
			// 				series: []
			// 			};
			// 			Column.categories = res.data.data.ColumnB.categories;
			// 			Column.series = res.data.data.ColumnB.series;

			// 			_self.textarea = JSON.stringify(res.data.data.LineA);

			// 			let serverData = [{
			// 				opts: LineA,
			// 				chartType: "line",
			// 				id: "abcc"
			// 			}, {
			// 				opts: Column,
			// 				chartType: "column",
			// 				id: "bcdd"
			// 			}];

			// 			_self.arr = serverData;
			// 		},
			// 		fail: () => {
			// 			_self.tips = "网络错误，小程序端请检查合法域名";
			// 		},
			// 	});
			// },
			// changeData() {
			// 	//这里newdata仅做为演示，实际请先获取后台数据，再调用子组件changeData事件
			// 	let newdata = JSON.parse(_self.textarea);
			// 	//'bcdd'为之前后台获取的第二个图表的id，不是固定不变的
			// 	this.$refs.bcdd[0].changeData('bcdd',newdata)
			// }
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
