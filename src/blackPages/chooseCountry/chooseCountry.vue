<template>
    <view id="chooseCountry">
        <app-header :headerOptions="headerOptions"
                    @headertap=headertap></app-header>
        <scroll-view class="chooseCountry-wrap" :scroll-y="true">
            <view class="chooseCountry-wrap-content">
                <view class="chooseCountry-wrap-list">
                    <view class="chooseCountry-wrap-item"
                          v-for="(item,index) in countryData"
                          :key="index"
                          @click="chooseItem(item)">
                        掌控资产、安全随行
                        <view class="name">
                            {{item.name}}
                        </view>
                        <view class="selected"
                              :style="{'background-image':'url('+selectedIcon+')'}"
                              v-if="selectedItem.countryCode === item.countryCode">
                        </view>
                        <view class="areaCode">
                            (+{{item.dialingCode}})
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script src="@/script/chooseCountry/chooseCountry.js">
    /*import appHeader from "@/components/common/header.vue"

    export default {
        name: "chooseCountry",
        components: {
            appHeader,
        },
        data() {
            return {
                headerText: "选择国家",
                Korea: `${require('@/static/images/user/Korea.png')}`,
                Chinese: `${require('@/static/images/user/Chinese.png')}`,
                Japan: `${require('@/static/images/user/Japan.png')}`,
                Germany: `${require('@/static/images/user/Germany.png')}`,
                UK: `${require('@/static/images/user/UK.png')}`,
                France: `${require('@/static/images/user/France.png')}`,
                Russia: `${require('@/static/images/user/Russia.png')}`,
                USA: `${require('@/static/images/user/USA.png')}`,
                countryData: [
                    {
                        name: "美国",
                        AreaCode: "+1",
                        icon: `${require('@/static/images/user/USA.png')}`,
                    }, {
                        name: "俄罗斯",
                        AreaCode: "+7",
                        icon: `${require('@/static/images/user/Russia.png')}`,
                    }, {
                        name: "法国",
                        AreaCode: "+33",
                        icon: `${require('@/static/images/user/France.png')}`,
                    }, {
                        name: "英国",
                        AreaCode: "+44",
                        icon: `${require('@/static/images/user/UK.png')}`,
                    }, {
                        name: "德国",
                        AreaCode: "+49",
                        icon: `${require('@/static/images/user/Germany.png')}`,
                    }, {
                        name: "韩国",
                        AreaCode: "+81",
                        icon: `${require('@/static/images/user/Korea.png')}`,
                    }, {
                        name: "日本",
                        AreaCode: "+82",
                        icon: `${require('@/static/images/user/Japan.png')}`,
                    }, {
                        name: "中国",
                        AreaCode: "+86",
                        icon: `${require('@/static/images/user/Chinese.png')}`,
                    },
                ],
                headerOptions: {
                    show: true,
                    isAllowReturn: true,
                    isWhiteIcon:true,
                    text: "选择国家",
                    rightItem: {
                        type: "text",
                        text: "",
                    },
                    style:{
                        'color':'#D9DADB'
                    },
                    background: '#00001A',
                    bodyPadding: {"padding": '0,0,0,0'},
                    headerIsNoBoder: true,
                },
            }
        },
        methods: {
            chooseItem(item) {
                // eslint-disable-next-line no-debugger
                // debugger
                // this.$bus.$emit('chooseItem', item)
                let name = this.$route.params.oldName
                this.$router.push({
                    name: name,
                    params: {
                        item: item,
                    }
                })
            },
            headertap(type) {
                console.log(type)
            }
        }
    }*/
</script>

<style scoped lang="less">
    #chooseCountry {
        width: 100vw;
        height: 100vh;
        padding-top: calc(100rpx + var(--status-bar-height));

        .chooseCountry-wrap {
            width: 100%;
            height: 100%;
            background: #22252A;

            .chooseCountry-wrap-content {
                /*margin: 0 1.5rpx;*/

                .chooseCountry-wrap-list {


                    .chooseCountry-wrap-item {
                        margin-bottom: 20rpx;
                        padding: 0 40rpx;
                        width: 690rpx;
                        height: 110rpx;
                        display: flex;
                        align-items: center;
                        border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);


                        image {
                            width: 64rpx;
                            height: 44rpx;
                        }

                        .name, .areaCode {
                            margin-left: 30rpx;
                            font-size: 28rpx;
                            font-family: "PingFang";
                            font-weight: 400;

                            color: #D9DADB;
                        }

                        .selected {
                            width: 38rpx;
                            height: 32rpx;
                            background-size: cover;
                            position: absolute;
                            right: 30rpx;
                        }
                    }
                }

            }

        }
    }
</style>
