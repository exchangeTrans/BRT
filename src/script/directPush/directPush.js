import appHeader from "@/components/common/header.vue"

export default {
    name: "directPush",
    components: {
        appHeader,
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "直推明细",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            inviteData: [
                {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                }, {
                    inviteTime: "+86 17362511772",
                    inviteId: "19034532",
                    invitePerformance: "1000 BRT",
                },
            ]
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        // console.log(theme);
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "直推明细",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "直推明细",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    methods: {

    }
}