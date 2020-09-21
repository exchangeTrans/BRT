import appHeader from '@/components/common/header.vue'
import {checkDataFunc} from "../../static/js/common";

export default {
    name: "personalInfo",
    components: {
        appHeader
    },
    data() {
        return {
            headerOptions: {
                show: true,
                isAllowReturn: true,
                text: this.$t('personInfo').title,
                isWhiteIcon: false,
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            },
            nickname: "CS1997",
            avatarUrl: `url(${require('@/static/images/user/avatar.png')})`,
            modifyUrl: `url(${require('@/static/images/user/modifyIcon.png')})`,

            userMsgData: {},
            checkArray: [
                {
                    name: "昵称",
                    checkKey: "nickname",
                },
            ],
        }
    },
    mounted() {
        this.getUserMsg();
    },
    methods: {
        saveBtnClick() {
            /*data: null
            result: {returnCode: "0", returnUserMessage: "成功", returnMessage: "成功"}
                returnCode: "0"
                returnMessage: "成功"
                returnUserMessage: "成功"*/
            let postData = this.getPostData();
            if (postData) {
                this.$request({
                    url: "me/setUserInfo",
                    method: "post",
                    params: postData,
                }).then((res) => {
                    console.log(res)
                })
            }
        },
        getPostData() {
            let nickname = this.userMsgData.nickname;
            let avatar;
            let postData = {
                nickname,
                avatar,
            }
            if (checkDataFunc.checkBasics(postData, this.checkArray)) {
                return postData
            } else {
                return false
            }
        },
        getUserMsg() {
            let that = this
            this.$request({
                url: "me/getUserInfo",
                method: "post",
            }).then((res) => {
                if (res.result.returnCode.toString() === "0") {
                    that.userMsgData = {
                        ...res.data,
                    }
                } else {
                    if(res.result.returnCode.toString() === "10032"){
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'redirectTo',
                            url: 'login/login',
                        })
                    }else{
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                }
            });
        }
    },
}
