<template>
    <view class="header" id="header" :style="{'borderBottom':headerStyle.borderBottom,'backgroundColor':headerStyle.backgroundColor,'background':headerStyle.background,}">
        <uni-status-bar/>
        <view class="headerContent" :style="{'opacity':hearderOpacity}">

            <!-- isAllowReturn:false,
                    isClose:false, -->
            
            <div class="left" v-if="headerOptions.isAllowReturn" @tap="headertap(headerOptions.isSetPage?headerOptions.isSetPage:'pageReturn')">
                <div class="imgBox" v-if="headerOptions.isAllowReturn"
                     :style=" headerOptions.isWhiteIcon===true?'background-image:url('+arrow.arrow_w+')':'background-image:url('+arrow.arrow+')'"
                     ></div>
            </div>
            <div class="left" v-else-if="headerOptions.isClose">
                <div class="imgBox" v-if="headerOptions.isClose"
                     :style="'background-image:url('+arrow.close+')'"
                     @tap.stop="headertap('pageClose')"></div>
            </div>
            <div v-else-if="headerOptions.type!=='tab'" class="left"></div>
            <div class="tabBox" v-if="headerOptions.type==='tab'">
                    <!-- <headerTab ref="headerTab"
                        :tabTitle="tabTitle"
                        @changeTab='changeTab'></headerTab> -->
                <headerTab :tabData="headerOptions.tabData"
                    :tabSelete="headerOptions.tabSelete"
                    @changeTab="changeHeaderTab"/>
                <!-- <span /v-for="(item,index) in textData" :key="index">{{item.text}} </span> -->
            </div>
            <div class="middle" v-if="headerOptions.type!=='tab'">
                <div v-if="headerOptions.type==='tab'">
                    <!-- <headerTab ref="headerTab"
                        :tabTitle="tabTitle"
                        @changeTab='changeTab'></headerTab> -->
                    <!-- <headerTab :tabData="headerOptions.tabData"
                        :tabSelete="headerOptions.tabSelete"
                        @changeTab="changeHeaderTab"/> -->
                    <!-- <span /v-for="(item,index) in textData" :key="index">{{item.text}} </span> -->
                </div>
                <div v-else><span
                :style="{
                        'width':headerOptions.style&&headerOptions.style.width?headerOptions.style.width:'',
                        'height':headerOptions.style&&headerOptions.style.height?headerOptions.style.height:'',
                        'color':headerOptions.style&&headerOptions.style.color?headerOptions.style.color:'',
                        'fontSize':headerOptions.style&&headerOptions.style.fontSize?headerOptions.style.fontSize:'',
                        'fontFamily':headerOptions.style&&headerOptions.style.fontFamily?headerOptions.style.fontFamily:'',
                        'fontWeight':headerOptions.style&&headerOptions.style.fontWeight?headerOptions.style.fontWeight:'',}">{{headerOptions.text}}</span></div>
            </div>
            <div class="right">
                <div class="textBox"
                    @tap.stop="headertap(headerOptions.funcType)"
                    v-if="headerOptions.rightItem.type==='text'"
                    :style="{
                        'width':headerOptions.rightItem.style&&headerOptions.rightItem.style.width?headerOptions.rightItem.style.width:'',
                        'height':headerOptions.rightItem.style&&headerOptions.rightItem.style.height?headerOptions.rightItem.style.height:'',
                        'color':headerOptions.rightItem.style&&headerOptions.rightItem.style.color?headerOptions.rightItem.style.color:'',
                        'fontSize':headerOptions.rightItem.style&&headerOptions.rightItem.style.fontSize?headerOptions.rightItem.style.fontSize:'',
                        'fontFamily':headerOptions.rightItem.style&&headerOptions.rightItem.style.fontFamily?headerOptions.rightItem.style.fontFamily:'',
                        'fontWeight':headerOptions.rightItem.style&&headerOptions.rightItem.style.fontWeight?headerOptions.rightItem.style.fontWeight:'',}">
                    {{headerOptions.rightItem.text}}
                </div>
                <div class="imgBox" v-else-if="headerOptions.rightItem.type==='icon'"  @tap.stop="headertap(headerOptions.funcType)">
                    <image :src="headerOptions.rightItem.path" :style="{'width':headerOptions.rightItem.style.width,'height':headerOptions.rightItem.style.height}"></image>
                    <!-- <div class="cricle">
                        <div class="cricle-item"></div>
                        <div class="cricle-item"></div>
                        <div class="cricle-item"></div>
                    </div> -->
                </div>
            </div>
        </view>
    </view>
</template>

<script>
    import headerTab from '@/components/common/headerTab.vue';
    // import navTab from '@/components/navTab.vue';
    import uniStatusBar from '@/components/uniComponents/uni-status-bar/uni-status-bar.vue'
    // import imgMaps from "@/static/imgPath/index.js"
    export default {
        components: {
            headerTab,
            // navTab,
            uniStatusBar
        },
        data() {
            return {
                title: 'header',
                // hearderOpcity:0.4,
                // headerOptions:{
                // 	show:true,
                // 	text:"这是头部",
                // 	isAllowReturn:true,
                // 	style:{}
                // },
                // tabTitle:{},
                // tabTitle: [
                //     {
                //         code: 1,
                //         text: "最新"
                //     }, {
                //         code: 2,
                //         text: "热门"
                //     },
                //     {
                //         code: 3,
                //         text: "关注"
                //     },], //导航栏格式 --导航栏组件
                arrow: {
                    // eslint-disable-next-line no-undef
                    arrow: "imgMaps.header.arrow",
                    // eslint-disable-next-line no-undef
                    arrow_w:"imgMaps.header.arrow_w",
                    // eslint-disable-next-line no-undef
                    close:"imgMaps.header.close",
                }

            }
        },
        props: {
            headerOptions: {
                type: Object,
                default: () => {
                },
            },
            textData: {
                type: Array,
                default: () => [],
            },
            statusBar: {
				type: Boolean,
				default: false
            },
            hearderOpacity:{type:Number,default:1}


        },
        onLoad() {

        },
        computed: {
            headerStyle() {
                let {headerOptions} = this.$props;
                let background = '';
                let borderBottom = "1rpx solid rgba(242,243,244,1)";
                let style=headerOptions.style;
                if (headerOptions && headerOptions.headerIsNoBoder) {
                    borderBottom = "0  solid rgba(242,243,244,1)";
                }
                if (headerOptions && headerOptions.background) {
                    background=headerOptions.background
                }
                return {

                    ...style,
                    background,
                    borderBottom,
                }
            }
        },
        methods: {
            toReturn() {
                //eslint-disable-next-line no-undef
               this.jumpPage.jump({
                   type:'navigateBack',

               })
            },
            toClose() {
                // //eslint-disable-next-line no-undef
                // uni.navigateBack({
                //     type:'navigateBack',
                // });
                this.jumpPage.jump({
                   type:'navigateBack',
                })
            },
            changeHeaderTab(item){
                this.$emit('changeTab',item);
            },
            pageTo(){
                // this.$emit("rightItemClick")
            },
            headertap(type){
                if(type==='pageReturn'){
                    this.$monitor.emit('stopVoice');
                    this.toReturn();
                }else if(type==='pageClose'){
                    this.$monitor.emit('stopVoice');
                    this.toClose();
                }else if (type === 'pageTo') {
                    this.$monitor.emit('stopVoice');
                    this.$emit('rightItemClick',type)
                }else if(type === 'isSetPage'){
                    this.$emit('pageReturn');
                    this.$monitor.emit('stopVoice');
                }else if (type === 'iosPay'){
                    this.$emit('pageReturn');
                }
                else{
                    this.$emit('headertap',type);
                }

            }
        }
    }
</script>

<style lang="less">
    .header {
        height:auto;
        width:750rpx;
        position:fixed;
        top:0;
        left: 0;
        box-sizing: border-box;
       // padding: 0 30rpx;
        z-index: 9;
        // border-bottom: 1rpx solid rgba(242, 243, 244, 1);
        // background: darkblue;

        .headerContent {
            width: 750rpx;
            height: 90rpx;
            margin: 0 auto;
            position: relative;
            .tabBox{
                float: left;
                // width: 500rpx;
                height: 90rpx;
                position: absolute;
                left: 80rpx;
                // margin-left:00rpx;
            }
            // background: red;
            .left {
                 float: left;
                 height: 90rpx;
                 width:160rpx;
                 padding-left: 40rpx;
                box-sizing: border-box;

                .imgBox {
                    width:28rpx;
                    height:28rpx;
                    text-align: left;
                    margin: 28rpx 0;
                    background-size:contain;
                    background-repeat: no-repeat;
                }
            }
            .middle {
                float: left;
                width:430rpx;
                height: 90rpx;
                text-align: center;
                line-height: 90rpx;

                span {
                    font-size:36rpx;
                    font-family:Source Han Sans CN;
                    display:block;
                    font-weight:550;
                    color: rgba(68, 68, 68, 1);
                }
            }
            .right {
                float: right;
                width: 160rpx;
                height: 90rpx;
                padding-right: 40rpx;
                box-sizing: border-box;
                position: relative;
                .textBox{
                    float:right;
                    display:block;
                    text-align:right;
                    position: absolute;
                    margin-top: 30rpx;
                    right: 40rpx;
                    width: 100%;
                }
                .imgBox {
                    float:right;
                    display:block;
                    text-align:right;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    image {
                        width: 32rpx;
                        height: 35rpx;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }


                }
            }
        }

    }
</style>
