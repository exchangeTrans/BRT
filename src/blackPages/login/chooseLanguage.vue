<template>
    <view class="setIndex1" id="setIndex1">
        <app-header :headerOptions="headerOptions"
                    class="appHeader"></app-header>

        <view class="content">

            <chooseLanguage @chooseItem="chooseLanguage"></chooseLanguage>




        </view>


    </view>
</template>

<script src="@/script/login/chooseLanguage.js"></script>

<style lang="less">
    .setIndex1 {
        width: 100%;
        height: 100%;
        background: #22252A !important;

        .appHeader {
            top: var(--status-bar-height);
        }

        .content {
            margin-top: calc(100rpx + var(--status-bar-height));
            font-family: PingFangSC-Semibold, PingFang SC;
        }

    }

</style>
