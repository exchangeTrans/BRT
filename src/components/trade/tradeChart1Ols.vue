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
        <view 
        :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
        class="tradeChart1" id="tradeChart1" 
        :prop="option" :change:prop="echarts.update" @click="echarts.onClick"></view>
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
                    notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
                    tooltip: {
                        trigger: 'axis',
                        positionStatus: true,
                        formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
                        formatterUnit: '元', // 自定义变量：数值后面的单位
                        formatFloat2: true, // 自定义变量：是否格式化为两位小数
                        formatThousands: true // 自定义变量：是否添加千分位
                    },
                    legend: {
                        show:false,
                        data: ['日K'],
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
                        bottom: 60,
                        right:60,
                        // left:30
                    },
                    // xAxis: [
                    //     {
                    //         type: 'category',
                    //         data: ['周一', '周二', '周三', '周四', '周五']
                    //     }
                    // ],
                    xAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五'],
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
                        {
                            name: '邮件',
                            type: 'bar',
                            data: [120, 132, 101, 134, 90],
                            // 自定义变量，以数组形式传递渐变参数
                            linearGradient: [0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]]
                        },
                        {
                            name: '手机',
                            type: 'bar',
                            data: [220, 182, 191, 234, 290],
                            // 自定义变量，以数组形式传递渐变参数
                            linearGradient: [0, 0, 0, 1,
                            [
                                {offset: 0, color: '#0bac00'},
                                {offset: 0.7, color: '#0dcb00'},
                                {offset: 1, color: '#0fef00'}
                            ]]
                        }
                    ]
                },                        
           
              }
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
    // import uCharts from '@/components/u-charts/component.vue';
    // import uCharts from '@/static/js/uChart/u-charts.js';
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
                arr: [],
                chart: null,
				clickData: null, // echarts点击事件的值
                
           }
        },
        onLoad() {
			
        },
        mounted(){
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(526);
            // this.getServerData();
            
            // this.init()
            // if (typeof window.echarts === 'object') {
			// 	this.init()
			// } else {
				// 动态引入类库
				const script = document.createElement('script')
				script.src = './static/js/echart/echarts.min.js'
				script.onload = this.init
				document.head.appendChild(script)
			// }
            // console.log(this.$t('trade'))
            
        },
        computed: {  
            // pageText () {  
            //     // console.log(this.$t('trade'))
            //     return this.$t('trade')  
            // }  
        },  
        methods: {
			/**
			 * 初始化echarts
			 */
			init() {
				// 根据id初始化图表
				this.chart = echarts.init(document.getElementById('tradeChart1'))
				this.update(this.option)
				// echarts的点击事件
				this.chart.on('click', params => {
					// 把点击事件的数据缓存下来
					this.clickData = params
				})
			},
			/**
			 * 点击事件，可传递到外部
			 * @param {Object} event
			 * @param {Object} instance
			 */
			onClick(event, instance) {
				if (this.clickData) {
					// 把echarts点击事件相关的值传递到renderjs外
					instance.callMethod('onViewClick', {
						value: this.clickData.data,
						name: this.clickData.name,
						seriesName: this.clickData.seriesName
					})
					// 上次点击数据置空
					this.clickData = null
				}
			},
			/**
			 * 监测数据更新
			 * @param {Object} option
			 */
			update(option) {
				if (this.chart) {
					// 因App端，回调函数无法从renderjs外传递，故在此自定义设置相关回调函数
					if (option) {
						// tooltip
						if (option.tooltip) {
							// 判断是否设置tooltip的位置
							if (option.tooltip.positionStatus) {
								option.tooltip.position = this.tooltipPosition()
							}
							// 判断是否格式化tooltip
							if (option.tooltip.formatterStatus) {
								option.tooltip.formatter = this.tooltipFormatter(option.tooltip.formatterUnit, option.tooltip.formatFloat2, option.tooltip.formatThousands)
							}
						}
						// 颜色渐变
						if (option.series) {
							for (let i in option.series) {
								let linearGradient = option.series[i].linearGradient
								if (linearGradient) {
									option.series[i].color = new echarts.graphic.LinearGradient(linearGradient[0],linearGradient[1],linearGradient[2],linearGradient[3],linearGradient[4])
								}
							}
						}
					}
					// 设置新的option
					this.chart.setOption(option, option.notMerge)
				}
			},
			/**
			 * 设置tooltip的位置，防止超出画布
			 */
			tooltipPosition() {
				return (point, params, dom, rect, size) => {
					// 其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
					let x = point[0]
					let y = point[1]
					let viewWidth = size.viewSize[0]
					let viewHeight = size.viewSize[1]
					let boxWidth = size.contentSize[0]
					let boxHeight = size.contentSize[1]
					let posX = 0 // x坐标位置
					let posY = 0 // y坐标位置
					if (x >= boxWidth) { // 左边放的下
						posX = x - boxWidth - 1
					}
					if (y >= boxHeight) { // 上边放的下
						posY = y - boxHeight - 1
					}
					return [posX, posY]
				}
			},
			/**
			 * tooltip格式化
			 * @param {Object} unit 数值后的单位
			 * @param {Object} formatFloat2 是否保留两位小数
			 * @param {Object} formatThousands 是否添加千分位
			 */
			tooltipFormatter(unit, formatFloat2, formatThousands) {
				return params => {
					let result = ''
					unit = unit ? unit : ''
					for (let i in params) {
						if (i == 0) {
							result += params[i].axisValueLabel
						}
						let value = '--'
						if (params[i].data !== null) {
							value = params[i].data
							// 保留两位小数
							if (formatFloat2) {
								value = this.formatFloat2(value)
							}
							// 添加千分位
							if (formatThousands) {
								value = this.formatThousands(value)
							}
						}
						// #ifdef H5
						result += '\n' + params[i].seriesName + '：' + value + ' ' + unit
						// #endif
						
						// #ifdef APP-PLUS
						result += '<br/>' + params[i].marker + params[i].seriesName + '：' + value + ' ' + unit
						// #endif
					}
					return result
				}
			},
			/**
			 * 保留两位小数
			 * @param {Object} value
			 */
			formatFloat2(value) {
				let temp = Math.round(parseFloat(value) * 100) / 100
				let xsd = temp.toString().split('.')
				if (xsd.length === 1) {
					temp = (isNaN(temp) ? '0' : temp.toString()) + '.00'
					return temp
				}
				if (xsd.length > 1) {
					if (xsd[1].length < 2) {
						temp = temp.toString() + '0'
					}
					return temp
				}
			},
			/**
			 * 添加千分位
			 * @param {Object} value
			 */
			formatThousands(value) {
				if (value === undefined || value === null) {
					value = ''
				}
				if (!isNaN(value)) {
					value = value + ''
				}
				let re = /\d{1,3}(?=(\d{3})+$)/g
				let n1 = value.replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {
					return s1.replace(re, '$&,') + s2
				})
				return n1
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
