import appHeader from "@/components/common/header.vue";
import earningsRecordList from "@/components/earningsRecordList/index.vue";
import noData from "@/components/noData/index.vue";

export default {
    components: {
        appHeader,
        earningsRecordList,
        noData
    },
    name: "bonus",
    data() {
        return {
            time: `${require("@/static/images/set/time.png")}`,
            noDataImg: `${require("@/static/images/set/noData.png")}`,
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "矿池分红",

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
                headerIsNoBoder: true,*/
            },
            earningsRecordData: [
                /*{
                    type: 'V1收益',
                    num: '+190.32 BRT',
                    time: '2020/09/28'
                },
                {
                    type: 'V1收益',
                    num: '+190.32 BRT',
                    time: '2020/09/28'
                },*/
            ],
            isBlack: true,
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "矿池分红",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = false;
            this.BtnackgroundColor = "#B4BBC0";
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "矿池分红",

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
            };
            this.isBlack = true;
            this.BtnackgroundColor = "#8C939B";
        }
    },
    methods: {},

}