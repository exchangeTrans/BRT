import appHeader from "@/components/common/header.vue";
export default {
    components:{
        appHeader,

    },
    data() {
        return {


            topBg:`${require('@/static/images/earning/topBg.png')}`,
            moneyIcon:`${require('@/static/images/earning/moneyIcon.png')}`,
            logoIcon:`${require('@/static/images/earning/logoIcon.png')}`,
            sliderValue:50,
        }
    },
    onLoad() {

    },
    methods: {
        transferInAmount(){
            this.$refs.transferInAmount.open();
        },
        sliderChange(e) {
            this.sliderValue= e.detail.value;
        }
    }
}
