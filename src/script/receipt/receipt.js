import appHeader from '@/components/common/header.vue'
import QRCode from 'qrcodejs2'
import qrcodeComponents from '@/components/qrcode/qrcode'

export default {
    components: {
        appHeader,
        qrcodeComponents
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'})
        let that = this
        that.choiceType = this.$store.state.wallet.symbolType
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: that.choiceType.name + "收款",
                rightItem: {
                    type: "text",
                    text: "充币记录",
                    path: `${require('@/static/images/receipt/detail.png')}`,
                    style: {
                        'fontSize': '28rpx',
                        'color': '#098FE0'
                    },
                    tipText: 'AVV491',
                    haveTip: true
                },
                background: '#ffffff',

                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: that.choiceType.name + "收款",
                rightItem: {
                    type: "text",
                    text: "充币记录",
                    path: `${require('@/static/images/receipt/detail.png')}`,
                    style: {
                        'fontSize': '28rpx',
                        'color': '#098FE0'
                    },
                    tipText: 'AVV491',
                    haveTip: true
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            }
        }
        this.getUserWalletAddress();
        this.setQrcodeStyle()
    },
    data() {
        return {
            headerOptions: {},
            rightIcon: `${require('@/static/images/receipt/rightIcon.png')}`,
            data: {},
            qrCodeStyle: {},
            choiceType: {},
        }
    },
    watch: {
        data(v) {
            // console.log(v)
            if (v.userWalletAddress) {
                this.$refs.qrcodeComponents.qrcodeScan(v.userWalletAddress);
            }
        }

    },
    computed: {
        /*qrCodeStyle() {
            let width = 203;
            let height = 203;

            return {
                width,
                height,
            }
        }*/
    },
    onLoad() {

    },
    methods: {
        createAddress() {

        },
        importAddress() {

        },
        setQrcodeStyle() {
            let width = this.$refs.qrImg.$el.offsetWidth;
            let height = this.$refs.qrImg.$el.offsetHeight;
            this.qrCodeStyle = {
                width,
                height,
            }
        },
        getUserWalletAddress() {
            let that = this;
            let postParam = {
                "symbolType": that.choiceType.symbolType
            }
            this.$request({
                url: "wallet/getUserWalletAddress",
                method: "post",
                params: postParam,
            }).then((res) => {
                if (res.result.returnCode === "0") {
                    that.data = res.data
                } else {
                    this.$toast.show({
                        title: res.result.returnUserMessage
                    })
                }
            })
        },
        rechargeRecord() {
            this.$jumpPage.jump({
                url: "addrecord/index",
                type: "navigateTo"
            })
        }
    }
}
