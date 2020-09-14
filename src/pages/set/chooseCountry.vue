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
                        <image :src=item.icon alt=""/>
                        <view class="name">
                            {{item.name}}
                        </view>
                        <view class="areaCode">
                            ({{item.AreaCode}})
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import appHeader from "@/components/common/header.vue"

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
                    text: "选择国家",
                    rightItem: {
                        type: "text",
                        text: "",
                    },
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
    }
</script>

<style scoped lang="less">
    #chooseCountry {
        width: 100vw;
        height: 100vh;
        padding-top:calc(100rpx + var(--status-bar-height));

        .chooseCountry-wrap {
            width: 100%;
            height: 100%;
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
                        border-bottom: 1rpx solid #F2F2F2;


                        image {
                            width: 64rpx;
                            height: 44rpx;
                        }

                        .name, .areaCode {
                            margin-left:30rpx;
                            font-size: 28rpx;
                            font-family: "PingFang";
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                        }
                    }
                }

            }

        }
    }
</style>