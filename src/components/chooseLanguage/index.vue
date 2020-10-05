<template>
    <view class="chooseLanguage">
        <view class="chooseLanguage-wrap-content">
            <view class="chooseLanguage-wrap-list">
                <view class="chooseLanguage-wrap-item"
                      v-for="(item,index) in countryData"
                      :key="index"
                      @click="chooseItem(item)"
                      :style="{'color':mode==='night'?'#D9DADB':'rgba(51, 51, 51, 1)',
                        'border-bottom':mode==='night'?'1rpx solid rgba(255,255,255,0.1)':'1rpx solid #F2F2F2'
                      }">
                    <image :src=item.icon alt=""/>
                    <view class="name">
                        {{item.text}}
                    </view>
                    <view class="selected" :style="{'background-image':'url('+selectedIcon+')'}" v-if="selectedObj.name===item.name">

                    </view>
                </view>
            </view>
        </view>
    </view>


</template>

<script>
    export default {
        name: "btn",
        props: {
            mode:{
                type:String,
                default:'day'
            }
        },
        computed: {

        },
        mounted() {
            let langMsg = this.$storage.getSync({key:'langMsg'});
            let langArray = this.$store.state.defaultData.langArray;
            this.selectedObj = langMsg;
            this.countryData = langArray[langMsg.name];
            
        },
        data() {
            return {
                // headerText: "选择国家",

                countryData: [
                    // {
                    //     name: "美国",
                    //     AreaCode: "+1",
                    //     icon: `${require('@/static/images/user/USA.png')}`,
                    // }, {
                    //     name: "俄罗斯",
                    //     AreaCode: "+7",
                    //     icon: `${require('@/static/images/user/Russia.png')}`,
                    // }, {
                    //     name: "法国",
                    //     AreaCode: "+33",
                    //     icon: `${require('@/static/images/user/France.png')}`,
                    // }, {
                    //     name: "英国",
                    //     AreaCode: "+44",
                    //     icon: `${require('@/static/images/user/UK.png')}`,
                    // }, {
                    //     name: "德国",
                    //     AreaCode: "+49",
                    //     icon: `${require('@/static/images/user/Germany.png')}`,
                    // },
                    //  {
                    //     name: "简体中文",
                    //     nameCode:"zh-CN",
                    //     icon: `${require('@/static/images/user/Chinese.png')}`,
                    // },
                    // {
                    //     name: "English",
                    //     nameCode:"en-US",
                    //     icon: `${require('@/static/images/user/UK.png')}`,
                    // },
                    // {
                    //     name: "한국어",
                    //     nameCode:"ko-KR",
                    //     icon: `${require('@/static/images/user/Korea.png')}`,
                    //}, /*{
                    //     name: "日本",
                    //     AreaCode: "+82",
                    //     icon: `${require('@/static/images/user/Japan.png')}`,
                    //}*/
                ],
                selectedObj:{
                    name: 'zh-CN',
                    text: '中文',
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                    code: 1
                },
                selectedIcon:`${require('@/static/images/user/select.png')}`,
            }
        },
        methods: {
            chooseItem(item) {
                if(item.name==='zh-CN'){
                    this.selectedObj=item;
                    this.$emit('chooseItem',item);
                }else{
                    this.$toast.show({
                        title: this.$t('setting').noOpen,
                    })
                }
                
            },
        }
    }
</script>

<style lang="less">
    .chooseLanguage {
        width: 100%;
        height: 100%;
        .chooseLanguage-wrap-content {
            /*margin: 0 1.5rpx;*/

            .chooseLanguage-wrap-list {


                .chooseLanguage-wrap-item {
                    //margin-bottom: 20rpx;
                    padding: 0 32rpx;
                    width: 690rpx;
                    height: 100rpx;
                    display: flex;
                    align-items: center;
                    /*border-bottom: 1rpx solid #F2F2F2;*/
                    position: relative;


                    image {
                        width: 48rpx;
                        height: 34rpx;
                    }

                    .name{
                        margin-left:30rpx;
                        font-size: 28rpx;
                        font-family: "PingFang";
                        font-weight: 400;
                        /*color: rgba(51, 51, 51, 1);*/
                    }

                    .selected{
                        width: 38rpx;
                        height: 32rpx;
                        background-size: cover;
                        position: absolute;
                        right: 30rpx;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }

        }

    }

</style>
