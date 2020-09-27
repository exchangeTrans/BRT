import appHeader from "@/components/common/header.vue"

export default {
    name: "chooseCountry",
    components: {
        appHeader,
    },
    data() {
        return {
            headerText: "选择国家",
            KR: `${require('@/static/images/user/Korea.png')}`,
            CN: `${require('@/static/images/user/Chinese.png')}`,
            JP: `${require('@/static/images/user/Japan.png')}`,
            // Germany: `${require('@/static/images/user/Germany.png')}`,
            GB: `${require('@/static/images/user/UK.png')}`,
            TW: `${require('@/static/images/user/TW.png')}`,
            HK: `${require('@/static/images/user/HK.png')}`,
            FR: `${require('@/static/images/user/France.png')}`,
            // Russia: `${require('@/static/images/user/Russia.png')}`,
            US: `${require('@/static/images/user/USA.png')}`,

            selectedIcon:`${require('@/static/images/user/select.png')}`,
            countryData: [
                /*{
                    name: "USA",
                    AreaCode: "+1",
                    icon: `${require('@/static/images/user/USA.png')}`,
                }, {
                    name: "Russia",
                    AreaCode: "+7",
                    icon: `${require('@/static/images/user/Russia.png')}`,
                }, {
                    name: "France",
                    AreaCode: "+33",
                    icon: `${require('@/static/images/user/France.png')}`,
                }, {
                    name: "UK",
                    AreaCode: "+44",
                    icon: `${require('@/static/images/user/UK.png')}`,
                }, {
                    name: "Germany",
                    AreaCode: "+49",
                    icon: `${require('@/static/images/user/Germany.png')}`,
                }, {
                    name: "Korea",
                    AreaCode: "+81",
                    icon: `${require('@/static/images/user/Korea.png')}`,
                }, {
                    name: "Japan",
                    AreaCode: "+82",
                    icon: `${require('@/static/images/user/Japan.png')}`,
                }, {
                    name: "Chinese",
                    AreaCode: "+86",
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                },*/
            ],
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            isBlack: {
                type: Boolean,
                default: false
            },

            selectedItem:{},
        }
    },
    mounted() {
        let theme = this.$storage.getSync({key:'theme'});
        // console.log(theme);
        if(theme === 'white'){
            this.isBlack = false
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.isBlack = true
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon:true,
                text: "选择国家",
                rightItem: {
                    type: "text",
                    text: "",
                },
                style:{
                    'color':'#D9DADB'
                },
                background: '#00001A',
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        }
        console.log(this.isBlack)

        this.assembleCountryData()
    },
    onShow() {
        this.getChooseCountry();
    },
    methods: {
        chooseItem(item) {
            this.selectedItem = item;
            this.$store.commit("setDefaultSync",{key:"contury", val: item,})
            this.$jumpPage.jump({
                type:'navigateBack',
            })
        },
        headertap(type) {
            console.log(type)
        },
        assembleCountryData() {
            let tempArray = [];
            let conturyList = this.$store.state.defaultData.conturyList;
            conturyList.forEach((el)=>{
                // debugger
                let obj = {
                    ...el,
                    icon: this[el.countryCode]
                }
                tempArray.push(obj);
            })
            this.countryData = tempArray;
        },
        getChooseCountry() {
            let contury = this.$store.state.defaultData.contury;
            this.selectedItem = contury;
        }
    }
}
