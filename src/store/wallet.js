import request from '@/request/index';

const RATE = 'RATE'; // 基本设置
export default {
    state: {
        rate: {},
        symbolType: {}
    },
    actions: {
        getRate({commit}) {
            request({
                url: 'wallet/getRate',
                method: 'post',
            }).then(res => {
                if (res.result.returnCode.toString() === '0') {
                    let data = res.data;
                    commit('RATE', data);
                }
            })
        }
    },
    mutations: {
        [RATE](state, result) {
            state.rate = result;
        },
        setSymbolType(state, val) {
            state.symbolType = val
        },


    }
}
