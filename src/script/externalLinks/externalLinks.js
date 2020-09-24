import appHeader from "@/components/common/header.vue";
export default {
    components: {appHeader},
    mounted(){

        let theme = this.$storage.getSync({key:'theme'});
        if(theme === 'white') {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                text:'',
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{},
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }else {
            this.headerOptions={
                show:true,
                isAllowReturn:true,
                isWhiteIcon:true,
                text:'',
                rightItem:{
                    type:"text",
                    text:"",
                },
                style:{
                    'color': '#D9DADB'
                },
                bodyPadding:{"padding":'0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
    },
    data() {
        return {
            headerOptions:{},



            webviewStyles: {
                progress: {
                    color: '#FF3333',
                },



            }
        }
    }
}
