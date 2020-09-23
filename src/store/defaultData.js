import request from '@/request/index';

const GETCOUNTRYLIST = 'GETCOUNTRYLIST';
const COUNTRY = 'COUNTRY';
export default {
    state: {
        langArray: {
            'zh-CN': [
                {
                    name: 'zh-CN',
                    text: '中文',
                    code: 1
                },
                {
                    name: 'en-US',
                    text: '英文',
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: '韩文',
                    code: 3
                },
            ],
            'en-US': [
                {
                    name: 'zh-CN',
                    text: 'Chinese',
                    code: 1
                },
                {
                    name: 'en-US',
                    text: 'English',
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: 'Korean',
                    code: 3
                },
            ],
            'ko-KR': [
                {
                    name: 'zh-CN',
                    text: '중국말',
                    code: 1
                },
                {
                    name: 'en-US',
                    text: '영어',
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: '한국어',
                    code: 3
                },
            ]
        },
        conturyList: [],
        contury: {},
        userInfo: {},
        footerArray: [
            {
                code:'index',
                pagePath: "index/index",
                text: "首页",
                iconPath: "static/images/tabIcon/home_normal.png",
                selectedIconPath: "static/images/tabIcon/home.png"
            },
            {
                code:'quotes',
                pagePath: "quotes/quotes",
                text: "行情",
                iconPath: "static/images/tabIcon/market_normal.png",
                selectedIconPath: "static/images/tabIcon/market.png"
            },
            {
                code:'trades',
                pagePath: "trades/index",
                text: "交易",
                iconPath: "static/images/tabIcon/deal_normal.png",
                selectedIconPath: "static/images/tabIcon/deal.png"
            },
            {
                code:'property',
                pagePath: "property/property",
                text: "资产",
                iconPath: "static/images/tabIcon/property_normal.png",
                selectedIconPath: "static/images/tabIcon/property.png"
            },
            {
                code:'user',
                pagePath: "user/user",
                text: "我的",
                iconPath: "static/images/tabIcon/user_normal.png",
                selectedIconPath: "static/images/tabIcon/user.png"
            }
        ],
        footerSelected:{
            code:'index',
            pagePath: "index/index",
            text: "首页",
            iconPath: "static/images/tabIcon/home_normal.png",
            selectedIconPath: "static/images/tabIcon/home.png"
        },
        
    },
    actions: {

        //获取国家
        getCountryList({commit}) {
            request({
                url: 'common/getCountry',
                method: 'post',
            }).then(res => {
                if (res.result.returnCode.toString() === '0') {
                    let data = res.data.list;
                    commit('GETCOUNTRYLIST', data);
                    commit('COUNTRY', data[0]);
                }
            })
        },


    },
    mutations: {
        [GETCOUNTRYLIST](state, result) {
            state.conturyList = result;
        },
        [COUNTRY](state, result) {
            state.contury = result;
        },
        setDefaultSync(state, param) {
            state[param.key] = param.val;
        }
    }
}