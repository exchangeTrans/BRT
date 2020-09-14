

const GETBASICSET = 'GETBASICSET'; // 基本设置
export default {
  state: {
    KLineTradingPair:{type:'USDT',name:'BRT'},
    tradingPair: [
        {type:'USDT',name:'BRT'},
        {type:'USDT',name:'BTC'},
        {type:'USDT',name:'ETH'},
        {type:'USDT',name:'XRP'},
        {type:'USDT',name:'BCH'},
        {type:'USDT',name:'LTC'},
        {type:'USDT',name:'XMR'},
        
    ],//交易对
    tradePairData:[
      {
        type:'USDT',
        name:'BRT',
        id:'brtusdt',
        range:0,
        nowData:null,
        dataArray:[],
      },
      {
        type:'USDT',
        name:'BTC',
        id:'btcusdt',
        range:0,
        nowData:null,
        dataArray:[],
      },
      {
        type:'USDT',
        name:'ETH',
        range:0,
        id:'ethusdt',
        nowData:null,
        dataArray:[],
      },
      {
        type:'USDT',
        name:'XRP',
        id:'xrpusdt',
        range:0,
        nowData:null,
        dataArray:[],
      },
      
      {
        type:'USDT',
        name:'BCH',
        range:0,
        id:'bchusdt',
        nowData:null,
        dataArray:[],
      },
      {
        type:'USDT',
        name:'LTC',
        id:'Ltcusdt',
        range:0,
        nowData:null,
        dataArray:[],
      },
      {
        type:'USDT',
        name:'XMR',
        id:'xmrusdt',
        range:0,
        nowData:null,
        dataArray:[],
      },
    ]
  },
  actions: {
   
    //基本设置
    getBasicSet() {
        // commit
    },
    
  
   
  },
  mutations: {
    [GETBASICSET](state,result) {
      state.basicSet = result;
    },
    setTredDataSync(state,param) {//param:{key:*,val:*}
      state[param.key] = param.val;
        
        // eval(`state.${param.key}=${val}`);
    },
        
    
    
    
    
  }
}