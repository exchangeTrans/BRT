import appHeader from '@/components/common/header.vue';
import {checkDataFunc} from "../../static/js/common";
import {uploadImage} from "../../static/js/uploadImage";

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
            avatar: "",
            // avatarUrl: `url(${require('@/static/images/user/avatar.png')})`,
            modifyUrl: `${require('@/static/images/user/modifyIcon.png')}`,
            nicknameInput: false,

            userMsgData: {},
            checkArray: [
                {
                    name: "昵称",
                    checkKey: "nickname",
                },
            ],
            imgList: [],

        }
    },
    mounted() {
        let theme = this.$storage.getSync({key: 'theme'});
        if (theme === 'white') {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: false,
                text: this.$t('personInfo').title,
                rightItem: {
                    type: "text",
                    text: "",
                },
                bodyPadding: {"padding": '0,0,0,0'},
                headerIsNoBoder: true,
            }
        } else {
            this.headerOptions = {
                show: true,
                isAllowReturn: true,
                isWhiteIcon: true,
                text: this.$t('personInfo').title,
                rightItem: {
                    type: "text",
                    path: '',
                },
                style: {
                    'color': '#D9DADB'
                },
                background: '#00001A',
                headerIsNoBoder: true,
            }
        };
        this.getUserMsg();
    },
    methods: {
        ChooseImage() {
            let that = this;
            uploadImage(1,function (res) {
                // console.log(res);
                that.avatar = res;
            });
        },
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
                    if (res.result.returnCode.toString() === "0") {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'navigateBack',
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }

                })
            }
        },
        getPostData() {
            let nickname = this.userMsgData.nickname;
            let avatar = this.avatar;
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
                    that.avatar = res.data.avatar;
                } else {
                    if (res.result.returnCode.toString() === "10032") {
                        this.$toast.show({
                            title: res.result.returnUserMessage,
                        })
                        this.$jumpPage.jump({
                            type: 'redirectTo',
                            url: 'login/login',
                        })
                    } else {
                        this.$toast.show({
                            title: res.result.returnMessage,
                        })
                    }
                }
            });
        },
        nicknameClick() {
            this.nicknameInput = true
        },
        nicknameMoveOut() {
            this.nicknameInput = false
        }

    },
}
