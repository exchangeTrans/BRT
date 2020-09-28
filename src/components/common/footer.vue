<template>
    <view>
        <view :class="'footer '+theme"
              id="footer"
              :style="{top:footerStyle.top}">
            <view class="footerContent">
                <view v-for="(item,key) in footerArray"
                      :key="key"
                      :class="item.pagePath===currentTab.pagePath?'footerTabLi active':'footerTabLi'"
                      @tap="changePage(item)">
                    <block>
                        <view class="imgBox"
                              :style="{'backgroundImage':item.pagePath===currentTab.pagePath?item.selectedIconPath:item.iconPath}"></view>
                        <span class="title">{{item.text}}</span>
                    </block>
                </view>
            </view>
        </view>
    </view>

</template>

<script>

    export default {
        components: {},
        data() {
            return {
                title: 'footer',
                windowHeight: "100%",
                footerHeight: '0',
                footerStyle: {top: 'calc(100vh - 116rpx)'},
                currentTab:{pagePath:""}

            }
        },
        props: {
            footerOptions: {
                type: Object,
                default: () => {
                },
            },
        },
        computed: {
            footerArray() {
                return this.$store.state.defaultData.footerArray;
            },
            footerSelected() {
                return this.$store.state.defaultData.footerSelected;
            },
            theme() {
                // return 'black'
                return this.$storage.getSync({key: 'theme'});
            }

        },
        watch:{
            footerSelected(){

            },
        },
        mounted() {
            let that = this;
            this.currentTab = {
                pagePath:that.$storage.getSync({key:'pagePath'})
            }
            this.$emit('changePage',this.currentTab)
            
            const query = uni.createSelectorQuery().in(this);
            query.select('#footer').boundingClientRect(data => {
                that.footerHeight = data.height;
                let windowHeight = that.height;
                if (windowHeight === "100%") {
                    that.getWindowHeight();
                } else {
                    that.windowHeight = windowHeight;
                }
            }).exec();
        },
        watch: {
            footerHeight() {
                let top = "100%";
                if (this.windowHeight !== "100%") {
                    top = this.windowHeight - this.footerHeight;
                }
                this.footerStyle = {top: top + "px",}
            },
            windowHeight() {
                let top = "100%";
                if (this.windowHeight !== "100%") {
                    top = this.windowHeight - this.footerHeight;
                }
                this.footerStyle = {
                    top: top + "px",
                }
            },
        },
        methods: {
            getWindowHeight() {
                let that = this;
                uni.getSystemInfo({
                    success(res) {
                        that.windowHeight = res.windowHeight;
                    }
                });
            },
            changePage(item) {
                let {footerSelected} = this;
                // if (footerSelected.code !== item.code) {
                this.$store.commit("setDefaultSync", {key: "footerSelected", val: item,})
                let jumpType = 'reLaunch';
                this.$jumpPage.jump({
                    type: jumpType,
                    url: item.pagePath
                })
                this.currentTab = {
                    pagePath:item.pagePath
                }
                this.$emit('changePage',item)
                // }

            },

        }
    }
</script>

<style lang="less">
    .footer {
        z-index: 2;
        height: 116rpx;
        width: 100%;
        position: fixed;
        // bottom: 0;
        left: 0;
        top: calc(100vh - 116rpx);
        // top:100vh
        background-size: cover;
        box-sizing: border-box;
        padding: 0 50rpx;
        box-shadow: 0px 6rpx 28rpx 0px rgba(205, 205, 205, 0.5);

        background: #ffffff;


        .footerContent {
            position: relative;
            // background:firebrick;
            width: 100%;
            height: 99rpx;
            margin-top: 16rpx;
            // display:-webkit-flex;
            display: flex;
            // flex-direction: column;
            // justify-content:flex-start | flex-end | center | space-between |space-around;
            justify-content: space-between;

            .footerTabLi {
                width: 100rpx;
                float: left;

                .imgBox {
                    width: 52rpx;
                    height: 52rpx;
                    display: block;
                    margin: 0rpx auto 2rpx;
                    // background: red;
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                }

                span {
                    display: block;
                    width: 100%;
                    text-align: center;
                    height: 34rpx;
                    line-height: 34rpx;
                    font-size: 24rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #1A1A1A;
                    opacity: 0.5;
                }
            }

            .footerTabLi.active {
                span {
                    color: #098FE0;
                    opacity: 1;
                }
            }
        }

    }

    .footer.black {
        background: #22252A;

        .footerContent {

            .footerTabLi {

                span {
                    color: #D9DADB;
                    opacity: 0.5;
                }
            }

            .footerTabLi.active {
                span {
                    color: #0A87D3;
                    opacity: 1;
                }
            }
        }
    }
</style>
