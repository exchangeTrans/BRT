<template>
    <view id="qrcode">
        <div id="qrcode" ref="qrcode"></div>
    </view>
</template>

<script>
    import QRCode from 'qrcodejs2';

    export default {
        name: "qrcode",
        props: {
            url: {
                type: String,
                default: "",
            },
            qrCodeStyle: {
                type: Object,
                default: {}
            }
        },
        computed: {
            qrcodestyle() {
                let {qrCodeStyle} = this.$props;
                let style = qrCodeStyle;
                return {
                    ...style,
                }
            },
        },
        data() {
            return {
                
            }
        },
        methods: {
            /*qrcodeScan() {//生成二维码
                let {
                    shareUrl,
                    qrCodeStyle,
                } = this.$props;
                
                let width = qrCodeStyle.width;
                let height = qrCodeStyle.height;
                
                let qrcode = new QRCode('qrcode', {
                    width: width,  // 二维码宽度
                    height: height, // 二维码高度
                    text: shareUrl
                })
            },*/
            qrcodeScan(url) {//生成二维码
                // debugger
                let {
                    qrCodeStyle,
                } = this.$props;
                
                let width = qrCodeStyle.width;
                let height = qrCodeStyle.height;
                
                let qrcode = new QRCode('qrcode', {
                    width: width,  // 二维码宽度
                    height: height, // 二维码高度
                    text: url
                })
            },
        }
    }
</script>

<style scoped lang="less">
    /*#qrcode {
        width: 406rpx;
        height: 406rpx;

        #canvas {
            width: 406rpx;
            height: 406rpx;
        }
    }*/
</style>