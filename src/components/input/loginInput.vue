<template>
    <view class="loginInput" id="loginInput"
          :style="[wrapStyle, {'background': mode !== 'DARK' ? '#FFFFFF' : '#272A2E', 'box-shadow': mode !== 'DARK' ? '0rpx -1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1)' :
'0px -1rpx 0px 0px rgba(255, 255, 255, 0.1)'}]">
        <view class="content">
            <view class="icon" v-show="iconShow" :style="{'background-image': iconSrc}"></view>
            <view class="firstText" v-show="firstTextShow"
                  :style="[firstTextStyle, {'color': mode !== 'DARK' ? '#1A1A1A' : '#D9DADB'}]">{{firstText}}
            </view>
            <input :placeholder="placeHolder" class="inputClass"
                   :style="[inputStyle, {'color': mode !== 'DARK' ? '#1A1A1A' : '#D9DADB'}]"
                   @input="inputChange($event)"/>
            <view class="lastText" v-show="lastTextShow"
                  :style="lastTextStyle" @tap="sendVerifyCode">
                {{lastText}}
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "loginInput",
        components: {},
        props: {
            mode: "",
            placeHolder: "",
            wrapStyle: {},
            inputStyle: {},
            iconShow: false,
            iconSrc: "",
            firstText: "",
            firstTextShow: false,
            firstTextStyle: {},
            inputStyle: {},
            lastText: "",
            lastTextShow: false,
            lastTextStyle: {}

        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            sendVerifyCode() {
                this.$emit('lastTextClick')
            },
            inputChange(e) {
                let value = e.detail.value;
                this.$emit('inputChange', value)
            }
        },
    }
</script>

<style lang="less">
    .loginInput {
        width: 690rpx;
        height: 120rpx;
        background: #FFFFFF;
        box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.1);
        margin: 0 auto 0;
        text-align: left;
        // position: relative;
        .content {
            display: flex;
            height: 100%;

            .firstText {
                margin: auto 0;
            }

            .inputClass {
                float: left;
                margin-left: 20rpx;

                box-sizing: border-box;
                height: 100%;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                line-height: 120rpx;

            }

            .icon {
                margin: auto 0 auto 30rpx;

                display: inline-block;
                width: 48rpx;
                height: 48rpx;
                background: no-repeat center center;
                background-size: cover;
            }

            .lastText {
                position: absolute;
                right: 30rpx;
                margin: auto 30rpx auto 0;
                display: inline-block;
                height: 120rpx;
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #098FE0;
                line-height: 120rpx;
            }
        }
    }
</style>
