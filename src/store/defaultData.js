
import request from '@/request/index';
const GETBASICSET = 'GETBASICSET'; // 基本设置
const GETCOUNTRYLIST = 'USERINFO'; // userinfo数据
export default {
  state: {
    langArray:{
      'zh-CN':[
        {
          name:'zh-CN',
          text:'中文',
          code:1
        },
        {
          name:'en-US',
          text:'英文',
          code:2
        },
        {
          name:'ko-KR',
          text:'韩文',
          code:3
        },
      ],
      'en-US':[
        {
          name:'zh-CN',
          text:'Chinese',
          code:1
        },
        {
          name:'en-US',
          text:'English',
          code:2
        },
        {
          name:'ko-KR',
          text:'Korean',
          code:3
        },
      ],
      'ko-KR':[
        {
          name:'zh-CN',
          text:'중국말',
          code:1
        },
        {
          name:'en-US',
          text:'영어',
          code:2
        },
        {
          name:'ko-KR',
          text:'한국어',
          code:3
        },
      ]
    },
    contury:[]

  },
  actions: {
   
    //基本设置
    getCountryList({commit}) {
        request({
            url: 'common/getCountry',
            method: 'post',
        }).then(res => {
          // console.log(res)

            if (res.result.returnCode.toString() === '0') {
              let data = res.data.list;
              commit('GETCOUNTRYLIST', data);               
            }
        })   
    },
    
  
   
  },
  mutations: {
    [GETCOUNTRYLIST](state,result) {
      state.contury = result;
    },
    setDefaultSync(state,param) {
      state[param.key] = param.val;
    },   
  }
}