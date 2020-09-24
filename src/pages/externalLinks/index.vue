<template>
    <view class="externalLinks" id="externalLinks">
        <appHeader :headerOptions="headerOptions"></appHeader>
        <view class="externalLinksContent">
            <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html" ></web-view>
        </view>

    </view>
</template>

<script src="@/script/externalLinks/externalLinks.js">


</script>

<style lang="less">
    .externalLinks{
        width: 100%;
        height: 100%;

        .externalLinksContent{

            box-sizing: border-box;
        }
        .uni-web-view{
            padding-top:calc(100rpx + var(--status-bar-height));
        }

    }

</style>
