import appHeader from "@/components/common/header.vue";
import RecordItem from "../../components/record/recordItem";

export default {
    components: {RecordItem,appHeader},
    name: "record",
    data() {
        return {
			showdata:false,
			nodata:true,
            isBlack: true,
            headerOptions: {
                /*show: true,
                isAllowReturn: true,
                text: "USDT提币记录",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText:"AVV49111",
                    haveTip:true,
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,*/
            },
            recordDataList: [
                {
                    titleName: "提币",
                    number: 1798.8876987,
                    status: "success",
                    date: "19:28 08/16",
                },
                {
                    titleName: "提币",
                    number: 1798.8876987,
                    status: "inTheReview",
                    date: "19:28 08/16",
                },
                {
                    titleName: "提币",
                    number: 1798.8876987,
                    status: "fail",
                    date: "19:28 08/16",
                },
            ],
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white'){
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "USDT提币记录",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText:"AVV49111",
                    haveTip:true,
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = false;
            // this.BtnackgroundColor = "#B4BBC0";
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: "USDT提币记录",
                rightItem: {
                    type: "text",
                    text: "",
                    style: {
                        fontSize: "28rpx",
                        color: "#098FE0",
                    },
                    tipText:"AVV491",
                    haveTip:true,
                    tipTextStyle: {
                        color: "#D9DADB",
                        opacity: 0.5,
                    }
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            };
            this.isBlack = true;
            // this.BtnackgroundColor = "#8C939B";
        }
    },
    methods: {
        headertap() {

        }
    },
}