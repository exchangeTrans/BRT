<template>
	<view class="tradeChart1">
        <!-- <block v-for="(item, index) in arr" :key="index">
			<view class="qiun-columns" style="background-color: #FFFFFF;">
				<u-charts :canvas-id="item.id" :chartType="item.chartType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
			</view>
		</block> -->
        <!-- <u-charts canvas-id="tradeChart1" 
            :chartType="item.chartType" 
            :cWidth="cWidth" 
            :cHeight="cHeight" 
            :opts="item.opts" 
            :ref="item.id"/> -->
	</view>
</template>

<script>
    import uCharts from '@/components/u-charts/component.vue';
    // import {
	// 	isJSON
	// } from '@/common/checker.js';
    var _self;
    export default {
	    components:{
            uCharts
		},
        data() {
            return { 
                textarea: '',
				cWidth:'',
				cHeight:'',
				arr: []            

            }
        },
        onLoad() {
            
        },
        mounted(){
            _self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(526);
			// this.getServerData();
            // console.log(this.$t('trade'))
        },
        computed: {  
            // pageText () {  
            //     // console.log(this.$t('trade'))
            //     return this.$t('trade')  
            // }  
        },  
        methods: {
            getServerData() {
				// uni.request({
				// 	url: 'https://www.ucharts.cn/data.json',
				// 	data: {},
				// 	success: function(res) {
                //         console.log(res)
				// 		let LineA = {
				// 			categories: [],
				// 			series: []
				// 		};
				// 		LineA.categories = res.data.data.LineA.categories;
				// 		LineA.series = res.data.data.LineA.series;

				// 		let Column = {
				// 			categories: [],
				// 			series: []
				// 		};
				// 		Column.categories = res.data.data.ColumnB.categories;
				// 		Column.series = res.data.data.ColumnB.series;

				// 		_self.textarea = JSON.stringify(res.data.data.LineA);

				// 		let serverData = [{
				// 			opts: LineA,
				// 			chartType: "line",
				// 			id: "abcc"
				// 		}, {
				// 			opts: Column,
				// 			chartType: "column",
				// 			id: "bcdd"
				// 		}];

				// 		_self.arr = serverData;
				// 	},
				// 	fail: () => {
				// 		_self.tips = "网络错误，小程序端请检查合法域名";
				// 	},
				// });
			},
			changeData() {
				// //这里newdata仅做为演示，实际请先获取后台数据，再调用子组件changeData事件
				// let newdata = JSON.parse(_self.textarea);
				// //'bcdd'为之前后台获取的第二个图表的id，不是固定不变的
				// this.$refs.bcdd[0].changeData('bcdd',newdata)
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
