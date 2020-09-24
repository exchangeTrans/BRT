
import request from '@/request/index';
const GETBASICSET = 'GETBASICSET'; // 基本设置
export default {
  state: {
    KLineTradingPair:{
      type:'USDT',
      name:'BRT',
      id:'brtusdt',
      range:0,
      nowData:null,
      dataArray:[],
      isLocal:true,
      introduction:{
        'zh-CN':{
          issueDate:'2020-10-01',
          issueNum:'10亿',           
          webSite:'',
          text:'BRT 意为价值存託自治公链（BATU），支持一切有价值的数字资产和实物 资持的存託。自研發的六维默克树演算法融合PoW原理以及隐匿技术，支持搭建可存储各式资产的匿名交 易节点、跨链交易所、Defi、去中心化应用等，且所有交易皆为隐匿不可查询，完美支持高频交易应用。'
        }
      }
    },
    tradingPair: [
        {type:'USDT',name:'BRT',isLocal:true},
        {type:'USDT',name:'BTC',isLocal:false},
        {type:'USDT',name:'ETH',isLocal:false},
        {type:'USDT',name:'XRP',isLocal:false},
        {type:'USDT',name:'BCH',isLocal:false},
        {type:'USDT',name:'LTC',isLocal:false},
        {type:'USDT',name:'XMR',isLocal:false},
        
    ],//交易对
    tradePairData:[
      {
        type:'USDT',
        name:'BRT',
        id:'brtusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:true,
        introduction:{
          'zh-CN':{
            issueDate:'2020-10-01',
            issueNum:'10亿',           
            webSite:'',
            text:'BRT 意为价值存託自治公链（BATU），支持一切有价值的数字资产和实物 资持的存託。自研發的六维默克树演算法融合PoW原理以及隐匿技术，支持搭建可存储各式资产的匿名交 易节点、跨链交易所、Defi、去中心化应用等，且所有交易皆为隐匿不可查询，完美支持高频交易应用。'
          }
        }
      },
      {
        type:'USDT',
        name:'BTC',
        id:'btcusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2008-11-01',
            issueNum:'2100万',
            webSite:'https://bitcoin.org/en/',
            text:'比特币（Bitcoin）的概念最初由中本聪在2008年11月1日提出，并于2009年1月3日正式诞生。根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实拥有者转移、支付及兑现，同样确保了货币所有权与流通交易的匿名性。'
          }
        }
      },
      {
        type:'USDT',
        name:'ETH',
        range:0,
        id:'ethusdt',
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2014-07-24',
            issueNum:'11024.944万',           
            webSite:'https://www.ethereum.org/',
            text:'以太坊（Ethereum）是一个开源的有智能合约功能的公共区块链平台。通过其专用加密货币以太币（Ether，又称“以太币”）提供去中心化的虚拟机（称为“以太虚拟机”Ethereum Virtual Machine）来处理点对点合约。'
          }
        }
      },
      {
        type:'USDT',
        name:'XRP',
        id:'xrpusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2011-04-18',
            issueNum:'1000亿',      
            webSite:'https://ripple.com/',
            text:'瑞波币是Ripple网络的基础货币，它可以在整个ripple网络中流通，总量为1000亿，并且随着交易的增多而逐渐减少，瑞波币的运营公司为Ripple Labs（其前身为OpenCoin）。瑞波币是ripple系统中唯一的通用货币，不同于ripple系统中的其他货币，它没有网关的限制，在ripple系统内是通用的。'
          }
        }
      },
      
      {
        type:'USDT',
        name:'BCH',
        range:0,
        id:'bchusdt',
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2017-07-24',
            issueNum:'2100万',           
            webSite:'https://www.bitcoincash.org/',
            text:'比特现金（BCH）全称为Bitcoin Cash，是于2017年8月1日从比特币区块高度478558正式脱离诞生的。特币的一个分支。CryptoNote 在2012年已经开发出来，当年已有Bytecoin使用CrytoNote技术，XMR是在2014年开发出来，可以预见CryptoNote技术已经非常成熟，该技术通过数字环签名提供更好的匿名性。目前国内对该币种匿名技术宣传较少，国外知名度较高。Monero词语是引自于世界语，在世界语中的含义表示为货币。'
          }
        }
      },
      {
        type:'USDT',
        name:'LTC',
        id:'ltcusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2011-11-09',
            issueNum:'8400万',           
            webSite:'https://litecoin.org/',
            text:'莱特币是一个开源的、点对点的分布式网络货币系统，相对比特币的加密货币系统，莱特币拥有更快的交易确认时间，更高的网络交易容量和效率。莱特币现在拥有完整的产业链，充分的流动性，是个成熟、安全、稳定的商用金融系统。'
          }
        }
      },
      {
        type:'USDT',
        name:'XMR',
        id:'xmrusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2014-04-18',
            issueNum:'1770.46万',
            
            webSite:'https://www.getmonero.org/',
            text:'门罗币(Monero,XMR)采用CryptoNote的核心算法，基于新数字环签名的一种数字货币，出块时间600秒，每个区块奖励不定，货币总量1844万，于2014年4月18日发布。 XMR一种使用CryptoNote协议的一个虚拟币币种，其并不是比特币的一个分支。CryptoNote 在2012年已经开发出来，当年已有Bytecoin使用CrytoNote技术，XMR是在2014年开发出来，可以预见CryptoNote技术已经非常成熟，该技术通过数字环签名提供更好的匿名性。目前国内对该币种匿名技术宣传较少，国外知名度较高。Monero词语是引自于世界语，在世界语中的含义表示为货币。'
          }
        }
      },
      {
        type:'USDT',
        name:'EOS',
        id:'eosusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2017-07-02',
            issueNum:'9.44亿',
            
            webSite:'https://eos.io/',
            text:'EOS 是由 Blockone 公司研发的一种新的区块链架构，该架构可以提供账户，身份认证，数据库，异步通信以及可在数以百计的 CPU 或群集上的程序调度。EOS旨在实现分布式应用的性能拓展。'
          }
        }
      },
      {
        type:'USDT',
        name:'DASH',
        id:'dashusdt',
        range:0,
        nowData:null,
        dataArray:[],
        isLocal:false,
        introduction:{
          'zh-CN':{
            issueDate:'2014-01-18',
            issueNum:'1890万',
            
            webSite:'https://www.dash.org/',
            text:'Dash是一种为匿名币，拥有保护隐私、即时交易及安全等特点。Dash无预挖，基于11种加密算法，超级安全哈希运算，CPU挖矿（GPU挖矿软件也已发布）。它的区块奖励由公式自动确定 2222222/(((Difficulty+2600)/9)^2)。'
          }
        }
      },
    ]
  },
  actions: {
   
    //获取k线
    getKline({commit},data) {
      console.log(data)
      request({
          url: 'kline/list',
          method: 'get',
          hostType:"klineApi",
          params:data
      }).then(res => {
        console.log(res)
          // if (res.result.returnCode.toString() === '0') {
            
              // let data = res.data.list;
              // commit('GETCOUNTRYLIST', data);
              // commit('COUNTRY', data[0]);
          // }
      })
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