<template>
    <view class="loginOrRegs" :style="{'background-image': indexBackgroundImg}" id="loginOrRegs">
        <view class="languageChoice ">
            <view class="languageBack" @tap="toLang">
            </view>
            <view class="languageWrap" @tap="toLang">
                <view class="languageIcon" :style="{'background-image': 'url('+langMsg.icon+')'}"></view>
                <view class="languageText">
                    {{langMsg.text}}
                </view>
            </view>
        </view>
        <view class="iconWrap">
            <view class="icon" :style="{'background-image': iconBackground}">
            </view>
        </view>
        <view class="loginBtn" @tap="jumpLogin">
            {{loginBtn}}
        </view>
        <view class="or">
            or
        </view>
        <view class="regsWrap" @tap="jumpRegs">
            <view class="regsBtn">
            </view>
            <view class="regsText">
                {{regsBtn}}
            </view>
        </view>
    </view>

</template>

<script src="@/script/login/loginOrRegs.js">

    // export default {
    //     name: "loginOrRegs",
    //     components: {},
    //     data() {
    //         return {
    //             indexBackgroundImg: `url(${require('@/static/images/login/loginOrRegs.png')})`,
    //             languageIcon: `url(${require('@/static/images/login/chinese.png')})`,
    //             iconBackground: `url(${require('@/static/images/login/choiceIcon.png')})`,
    //             languageText: "简体中文",
    //             loginBtn: this.$t('loginOrRegs').loginBtn,
    //             regsBtn: this.$t('loginOrRegs').regsBtn,
    //         }
    //     },
    //     mounted() {
    //
    //     },
    //     methods: {
    //         jumpLogin() {
    //             this.$jumpPage.jump({
    //                 type: 'navigateTo',
    //                 url: 'login/login'
    //             })
    //         },
    //         jumpRegs() {
    //             this.$jumpPage.jump({
    //                 type: 'navigateTo',
    //                 url: 'regs/regs'
    //             })
    //         }
    //     },
    // }
</script>

<style lang="less">
    .loginOrRegs {
        width: 100%;
        height: 100%;
        background-size: cover;

        .languageChoice {
            position: relative;
            padding-top: calc(20rpx - var(--status-bar-height));

            .languageBack {
                position: absolute;
                right: 32rpx;
                width: 232rpx;
                height: 64rpx;
                background: #000000;
                border-radius: 32rpx;
                opacity: 0.6;
                text-align: center;
            }

            .languageWrap {
                position: absolute;
                right: 32rpx;
                width: 232rpx;
                height: 64rpx;

                .languageIcon {
                    width: 54rpx;
                    height: 36rpx;
                    left: 30rpx;
                    top: 16rpx;
                    position: absolute;
                    background: no-repeat center center;
                    background-size: cover;
                }

                .languageText {
                    position: absolute;
                    right: 30rpx;
                    width: 110rpx;
                    height: 100%;
                    font-size: 28rpx;
                    letter-spacing: -0.81rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #D9DADB;
                    line-height: 64rpx;
                }
            }
        }

        .iconWrap {
            width: 750rpx;
            height: 688rpx;
            padding-top: 22rpx;

            .icon {
                margin: 0 auto;
                width: 688rpx;
                height: 688rpx;
                background: no-repeat center center;
                background-size: cover;
            }
        }

        .loginBtn {
            width: 710rpx;
            height: 100rpx;
            text-align: center;
            background: linear-gradient(136deg, #004FA8 0%, #007CD3 50%, #25D4ED 100%);
            border-radius: 50rpx;
            margin: 0 auto;

            font-size: 32rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 100rpx;
        }
        .or {
            margin: 2rpx auto;
            text-align: center;
            width: 710rpx;
            height: 100rpx;
            font-size: 32rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 100rpx;
        }

        .regsWrap {
            text-align: center;
            position: relative;
            width: 710rpx;
            height: 100rpx;
            margin: 0 auto;
            .regsBtn {
                margin: 0 auto;
                width: 710rpx;
                height: 100rpx;
                background: linear-gradient(136deg, #8C939B 0%, #B4BBC0 50%, #C5C5C5 100%);
                border-radius: 50px;
                opacity: 0.8;
            }

            .regsText {
                font-size: 32rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 44rpx;
                width: 128rpx;
                height: 44rpx;
                position: absolute;
                top: 28rpx;
                left: 312rpx;
            }
        }
    }

</style>
