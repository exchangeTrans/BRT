import request from '@/request/index';

const GETCOUNTRYLIST = 'GETCOUNTRYLIST';
const COUNTRY = 'COUNTRY';
const GETRANGEDATA = "GETRANGEDATA"
export default {
    state: {
        langArray: {
            'zh-CN': [
                {
                    name: 'zh-CN',
                    text: '中文',
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                    code: 1
                },
                {
                    name: 'en-US',
                    text: '英文',
                    icon: `${require('@/static/images/user/UK.png')}`,
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: '韩文',
                    icon: `${require('@/static/images/user/Korea.png')}`,
                    code: 3
                },
            ],
            'en-US': [
                {
                    name: 'zh-CN',
                    text: 'Chinese',
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                    code: 1
                },
                {
                    name: 'en-US',
                    text: 'English',
                    icon: `${require('@/static/images/user/UK.png')}`,
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: 'Korean',
                    icon: `${require('@/static/images/user/Korea.png')}`,
                    code: 3
                },
            ],
            'ko-KR': [
                {
                    name: 'zh-CN',
                    text: '중국말',
                    icon: `${require('@/static/images/user/Chinese.png')}`,
                    code: 1
                },
                {
                    name: 'en-US',
                    text: '영어',
                    icon: `${require('@/static/images/user/UK.png')}`,
                    code: 2
                },
                {
                    name: 'ko-KR',
                    text: '한국어',
                    icon: `${require('@/static/images/user/Korea.png')}`,
                    code: 3
                },
            ]
        },
        conturyList: [],
        contury: {},
        userInfo: {},
        footerArray: [
            {
                code: 'index',
                pagePath: "index/index",
                text: "首页",
                iconPath: `url(${require('@/static/images/tabIcon/home_normal.png')})`,
                selectedIconPath: `url(${require('@/static/images/tabIcon/home.png')})`
            },
            {
                code: 'quotes',
                pagePath: "quotes/quotes",
                text: "行情",
                iconPath: `url(${require('@/static/images/tabIcon/market_normal.png')})`,
                selectedIconPath: `url(${require('@/static/images/tabIcon/market.png')})`
            },
            {
                code: 'trades',
                pagePath: "trades/index",
                text: "交易",
                iconPath: `url(${require('@/static/images/tabIcon/deal_normal.png')})`,
                selectedIconPath: `url(${require('@/static/images/tabIcon/deal.png')})`
            },
            {
                code: 'property',
                pagePath: "property/property",
                text: "资产",
                iconPath: `url(${require('@/static/images/tabIcon/property_normal.png')})`,
                selectedIconPath: `url(${require('@/static/images/tabIcon/property.png')})`
            },
            {
                code: 'user',
                pagePath: "user/user",
                text: "我的",
                iconPath: `url(${require('@/static/images/tabIcon/user_normal.png')})`,
                selectedIconPath: `url(${require('@/static/images/tabIcon/user.png')})`
            }
        ],
        footerSelected: {
            code: 'index',
            pagePath: "index/index",
            text: "首页",
            iconPath: "static/images/tabIcon/home_normal.png",
            selectedIconPath: "static/images/tabIcon/home.png"
        },
        currency: {
            'zh-CN': [
                {
                    name: '人民币',
                    // code: "RMB",
                    img: `${require('@/static/images/set/rmb.png')}`,
                    code: "CNY",
                    unit: '¥'
                },
                {
                    name: '美元',
                    code: "USD",
                    img: `${require('@/static/images/set/dollar.png')}`,
                    unit: '$'
                },
                {
                    name: '韩元',
                    code: "KRW",
                    img: `${require('@/static/images/set/yen.png')}`,
                    unit: '₩'
                },
            ],
            'en-US': [
                {
                    name: '人民币',
                    code: "CNY",
                    // code: "RMB",
                    img: `${require('@/static/images/set/rmb.png')}`,
                    unit: '¥'
                },
                {
                    name: '美元',
                    code: "USD",
                    img: `${require('@/static/images/set/dollar.png')}`,
                    unit: '$'
                },
                {
                    name: '韩元',
                    code: "KRW",
                    img: `${require('@/static/images/set/yen.png')}`,
                    unit: '₩'
                },
            ],
            'ko-KR': [
                {
                    name: '人民币',
                    code: "RMB",
                    img: `${require('@/static/images/set/rmb.png')}`,
                    unit: '¥'
                },
                {
                    name: '美元',
                    code: "USD",
                    img: `${require('@/static/images/set/dollar.png')}`,
                    unit: '$'
                },
                {
                    name: '韩元',
                    code: "KRW",
                    img: `${require('@/static/images/set/yen.png')}`,
                    unit: '₩'
                },
            ]
        },
        //当前选择币种
        selectedCurrency: {
            name: '人民币',
            img: `${require('@/static/images/set/rmb.png')}`,
            code: "CNY",
            unit: '¥'
        },
        rangeData: {}

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
        //获取汇率
        getRange({commit}) {
            request({
                url: 'wallet/getRate',
                method: 'post',
            }).then(res => {
                if (res.result.returnCode.toString() === '0') {
                    let data = res.data;
                    commit('GETRANGEDATA', data);
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
        [GETRANGEDATA](state, result) {
            state.rangeData = result;
        },
        setDefaultSync(state, param) {
            state[param.key] = param.val;
        }
    }
}