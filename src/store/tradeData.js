
import request from '@/request/index';
const INITQUOTATIONDATA = 'INITQUOTATIONDATA'; // 基本设置
const UPKLINEDATA = 'UPKLINEDATA'; 


export default {
  state: {
  symbolDefaultData:{
    BTC:1,
    ETH:2,
    BCH:3,
    LTC:4,
    XMR:5,
    USDT:6,
    XRP:7,
    BRT:9,
    EOS:10,
    DASH:11,
  },
    tradingPairIntroduction:{
      BRT:{
        'zh-CN':{
          issueDate:'2020-10-01',
          issueNum:'10亿',           
          webSite:'',
          text:'BRT 意为价值存託自治公链（BATU），支持一切有价值的数字资产和实物 资持的存託。自研發的六维默克树演算法融合PoW原理以及隐匿技术，支持搭建可存储各式资产的匿名交 易节点、跨链交易所、Defi、去中心化应用等，且所有交易皆为隐匿不可查询，完美支持高频交易应用。'
        },
        'en-US':{
          issueDate:'2020-10-01',
          issueNum:'1 billion',           
          webSite:'',
          text:'BRT means Value Asset Depository Service Chain (BATU), which supports the depository of all valuable digital assets and real materials. The self-developed six-dimensional Merkle Tree algorithm integrates PoW principle and concealment technology make it available to support the construction of anonymous trading nodes, cross-chain exchanges, Defi, decentralized applications that can store various types of assets, and all transactions are concealed and unqueried, which perfectly support high-frequency trading applications.'
        },
        'ko-KR':{
          issueDate:'2020-10-01',
          issueNum:'1 billion',           
          webSite:'',
          text:'BRT means Value Asset Depository Service Chain (BATU), which supports the depository of all valuable digital assets and real materials. The self-developed six-dimensional Merkle Tree algorithm integrates PoW principle and concealment technology make it available to support the construction of anonymous trading nodes, cross-chain exchanges, Defi, decentralized applications that can store various types of assets, and all transactions are concealed and unqueried, which perfectly support high-frequency trading applications.'
        },
      },
      USDT:{
        'zh-CN':{
          issueDate:'2020-10-01',
          issueNum:'10亿',           
          webSite:'',
          text:'BRT 意为价值存託自治公链（BATU），支持一切有价值的数字资产和实物 资持的存託。自研發的六维默克树演算法融合PoW原理以及隐匿技术，支持搭建可存储各式资产的匿名交 易节点、跨链交易所、Defi、去中心化应用等，且所有交易皆为隐匿不可查询，完美支持高频交易应用。'
        },
        'en-US':{
          issueDate:'2020-10-01',
          issueNum:'1 billion',           
          webSite:'',
          text:'BRT means Value Asset Depository Service Chain (BATU), which supports the depository of all valuable digital assets and real materials. The self-developed six-dimensional Merkle Tree algorithm integrates PoW principle and concealment technology make it available to support the construction of anonymous trading nodes, cross-chain exchanges, Defi, decentralized applications that can store various types of assets, and all transactions are concealed and unqueried, which perfectly support high-frequency trading applications.'
        },
        'ko-KR':{
          issueDate:'2020-10-01',
          issueNum:'1 billion',           
          webSite:'',
          text:'BRT means Value Asset Depository Service Chain (BATU), which supports the depository of all valuable digital assets and real materials. The self-developed six-dimensional Merkle Tree algorithm integrates PoW principle and concealment technology make it available to support the construction of anonymous trading nodes, cross-chain exchanges, Defi, decentralized applications that can store various types of assets, and all transactions are concealed and unqueried, which perfectly support high-frequency trading applications.'
        }
      },
      BTC:{
        'zh-CN':{
          issueDate:'2008-11-01',
          issueNum:'2100万',
          webSite:'https://bitcoin.org/en/',
          text:'比特币（Bitcoin）的概念最初由中本聪在2008年11月1日提出，并于2009年1月3日正式诞生。根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实拥有者转移、支付及兑现，同样确保了货币所有权与流通交易的匿名性。'
        },
        'en-US':{
          issueDate:'2008-11-01',
          issueNum:'21 millio',
          webSite:'https://bitcoin.org/en/',
          text:'The concept Bitcoin was originally proposed by Satoshi Nakamoto on November 1, 2008 and officially born on January 3, 2009. Open source software and P2P network were designed and released according to the idea of Satoshi Nakamoto. It is a digital encrypted currency transmitted by point-to-point (P2P), with a total of 21 million. Bitcoin is generated through a large number of calculations according to a specific algorithm, does not rely on the issuance of specific monetary institutions. It uses a distributed database composed of many nodes in the entire P2P network to confirm and record all transaction behaviors, and uses cryptographic design to ensure the security of each link of currency circulation, which can ensure that the currency value cannot be artificially manipulated by manufacturing a large number of bitcoins. The design based on cryptography can make Bitcoin only be transferred, paid and cashed by real owners, which also ensures the anonymity of currency ownership and circulation transactions.'
        },
        'ko-KR':{
          issueDate:'2008-11-01',
          issueNum:'21 millio',
          webSite:'https://bitcoin.org/en/',
          text:'The concept Bitcoin was originally proposed by Satoshi Nakamoto on November 1, 2008 and officially born on January 3, 2009. Open source software and P2P network were designed and released according to the idea of Satoshi Nakamoto. It is a digital encrypted currency transmitted by point-to-point (P2P), with a total of 21 million. Bitcoin is generated through a large number of calculations according to a specific algorithm, does not rely on the issuance of specific monetary institutions. It uses a distributed database composed of many nodes in the entire P2P network to confirm and record all transaction behaviors, and uses cryptographic design to ensure the security of each link of currency circulation, which can ensure that the currency value cannot be artificially manipulated by manufacturing a large number of bitcoins. The design based on cryptography can make Bitcoin only be transferred, paid and cashed by real owners, which also ensures the anonymity of currency ownership and circulation transactions.'
        }
      },
      ETH:{
        'zh-CN':{
          issueDate:'2014-07-24',
          issueNum:'11024.944万',           
          webSite:'https://www.ethereum.org/',
          text:'以太坊（Ethereum）是一个开源的有智能合约功能的公共区块链平台。通过其专用加密货币以太币（Ether，又称“以太币”）提供去中心化的虚拟机（称为“以太虚拟机”Ethereum Virtual Machine）来处理点对点合约。'
        },
        'en-US':{
          issueDate:'2014-07-24',
          issueNum:'110,249,440',           
          webSite:'https://www.ethereum.org/',
          text:'Ethereum is an open source public block chain platform with intelligent contract function. De-centralized virtual machines (called"Ethereum Virtual Machine") are provided through their dedicated encrypted currency, Ether (also known as"Ether Coin") to process point-to-point contracts.'
        },
        'ko-KR':{
          issueDate:'2014-07-24',
          issueNum:'110,249,440',
          webSite:'https://www.ethereum.org/',
          text:'Ethereum is an open source public block chain platform with intelligent contract function. De-centralized virtual machines (called"Ethereum Virtual Machine") are provided through their dedicated encrypted currency, Ether (also known as"Ether Coin") to process point-to-point contracts.'
        },
      },
      XRP:{
        'zh-CN':{
          issueDate:'2011-04-18',
          issueNum:'1000亿',      
          webSite:'https://ripple.com/',
          text:'瑞波币是Ripple网络的基础货币，它可以在整个ripple网络中流通，总量为1000亿，并且随着交易的增多而逐渐减少，瑞波币的运营公司为Ripple Labs（其前身为OpenCoin）。瑞波币是ripple系统中唯一的通用货币，不同于ripple系统中的其他货币，它没有网关的限制，在ripple系统内是通用的。'
        },
        'en-US':{
          issueDate:'2011-04-18',
          issueNum:'100 billion',      
          webSite:'https://ripple.com/',
          text:'Ripple is the basic currency of the Ripple network, which can circulate throughout the Ripple network, with total of 100 billion yuan, and gradually decreases with increased transactions. The operation company of the Ripple is Ripple Labs (formerly known as OpenCoin). The Ripple is the only universal currency in the Ripple system, unlike other currencies in the Ripple system, which has no gateway restrictions and is universal within the Ripple system.'
        },
        'ko-KR':{
          issueDate:'2011-04-18',
          issueNum:'100 billion',      
          webSite:'https://ripple.com/',
          text:'Ripple is the basic currency of the Ripple network, which can circulate throughout the Ripple network, with total of 100 billion yuan, and gradually decreases with increased transactions. The operation company of the Ripple is Ripple Labs (formerly known as OpenCoin). The Ripple is the only universal currency in the Ripple system, unlike other currencies in the Ripple system, which has no gateway restrictions and is universal within the Ripple system.'
        },
      },
      BCH:{
        'zh-CN':{
          issueDate:'2017-07-24',
          issueNum:'2100万',           
          webSite:'https://www.bitcoincash.org/',
          text:'比特现金（BCH）全称为Bitcoin Cash，是于2017年8月1日从比特币区块高度478558正式脱离诞生的。特币的一个分支。CryptoNote 在2012年已经开发出来，当年已有Bytecoin使用CrytoNote技术，XMR是在2014年开发出来，可以预见CryptoNote技术已经非常成熟，该技术通过数字环签名提供更好的匿名性。目前国内对该币种匿名技术宣传较少，国外知名度较高。Monero词语是引自于世界语，在世界语中的含义表示为货币。'
        },
        'en-US':{
          issueDate:'2017-07-24',
          issueNum:'21 million',           
          webSite:'https://www.bitcoincash.org/',
          text:'BCH, fully known as Bitcoin Cash, was officially separated from the birth of Bitcoin Block Height 478558 on August 1, 2017. A branch of a special coin. CryptoNote was been developed in 2012, when CrytoNote technology was applied by Bytecoin. XMR was been developed in 2014, and it was anticipated that CryptoNote technology was very mature, which provided better anonymity through digital ring signing. At present, there are few domestic publicity on the anonymous technology of this currency, while there is  is high foreign popularity. The word Monero is derived from Esperanto, and the meaning in Esperanto is expressed as currency.'
        },
        'ko-KR':{
          issueDate:'2017-07-24',
          issueNum:'21 million',           
          webSite:'https://www.bitcoincash.org/',
          text:'BCH, fully known as Bitcoin Cash, was officially separated from the birth of Bitcoin Block Height 478558 on August 1, 2017. A branch of a special coin. CryptoNote was been developed in 2012, when CrytoNote technology was applied by Bytecoin. XMR was been developed in 2014, and it was anticipated that CryptoNote technology was very mature, which provided better anonymity through digital ring signing. At present, there are few domestic publicity on the anonymous technology of this currency, while there is  is high foreign popularity. The word Monero is derived from Esperanto, and the meaning in Esperanto is expressed as currency.'
        },
      },
      LTC:{
        'zh-CN':{
          issueDate:'2011-11-09',
          issueNum:'8400万',           
          webSite:'https://litecoin.org/',
          text:'莱特币是一个开源的、点对点的分布式网络货币系统，相对比特币的加密货币系统，莱特币拥有更快的交易确认时间，更高的网络交易容量和效率。莱特币现在拥有完整的产业链，充分的流动性，是个成熟、安全、稳定的商用金融系统。'
        },
        'en-US':{
          issueDate:'2011-11-09',
          issueNum:'84 million',           
          webSite:'https://litecoin.org/',
          text:"Litecoin is an open source, point-to-point distributed network currency system. Compared with Bitcoin's encrypted currency system, Litecoin has faster transaction confirmation time and higher network transaction capacity and efficiency. Litecoins now have a complete industrial chain, sufficient liquidity. It is a mature, safe and stable commercial financial system."
        },
        'ko-KR':{
          issueDate:'2011-11-09',
          issueNum:'84 million',           
          webSite:'https://litecoin.org/',
          text:"Litecoin is an open source, point-to-point distributed network currency system. Compared with Bitcoin's encrypted currency system, Litecoin has faster transaction confirmation time and higher network transaction capacity and efficiency. Litecoins now have a complete industrial chain, sufficient liquidity. It is a mature, safe and stable commercial financial system."
        }
      },
      XMR:{
        'zh-CN':{
          issueDate:'2014-04-18',
          issueNum:'1770.46万',
          
          webSite:'https://www.getmonero.org/',
          text:'门罗币(Monero,XMR)采用CryptoNote的核心算法，基于新数字环签名的一种数字货币，出块时间600秒，每个区块奖励不定，货币总量1844万，于2014年4月18日发布。 XMR一种使用CryptoNote协议的一个虚拟币币种，其并不是比特币的一个分支。CryptoNote 在2012年已经开发出来，当年已有Bytecoin使用CrytoNote技术，XMR是在2014年开发出来，可以预见CryptoNote技术已经非常成熟，该技术通过数字环签名提供更好的匿名性。目前国内对该币种匿名技术宣传较少，国外知名度较高。Monero词语是引自于世界语，在世界语中的含义表示为货币。'
        },
        'en-US':{
          issueDate:'2014-04-18',
          issueNum:'17,704,600',
          
          webSite:'https://www.getmonero.org/',
          text:"Adopting CryptoNote's core algorithm, Monero (XMR) is a digital currency signed based on the new digital ring, with a block time of 600 seconds, variable reward per block, and a total currency of 18.44 million. It was released on April 18, 2014. XMR is a virtual currency that uses the CryptoNote protocol and is not a branch of Bitcoin. CryptoNote was been developed in 2012, when CrytoNote technology was used for Bytecoin. XMR was been developed in 2014, and it was anticipated that CryptoNote technology was very mature, which provided better anonymity through digital ring signing. At present, there are few domestic publicity on the anonymous technology of this currency, while the foreign popularity is high. The word Monero is derived from Esperanto, and the meaning in Esperanto is expressed as currency"
        },
        'ko-KR':{
          issueDate:'2014-04-18',
          issueNum:'17,704,600',
          
          webSite:'https://www.getmonero.org/',
          text:"Adopting CryptoNote's core algorithm, Monero (XMR) is a digital currency signed based on the new digital ring, with a block time of 600 seconds, variable reward per block, and a total currency of 18.44 million. It was released on April 18, 2014. XMR is a virtual currency that uses the CryptoNote protocol and is not a branch of Bitcoin. CryptoNote was been developed in 2012, when CrytoNote technology was used for Bytecoin. XMR was been developed in 2014, and it was anticipated that CryptoNote technology was very mature, which provided better anonymity through digital ring signing. At present, there are few domestic publicity on the anonymous technology of this currency, while the foreign popularity is high. The word Monero is derived from Esperanto, and the meaning in Esperanto is expressed as currency"
        }
      },
      EOS:{
        'zh-CN':{
          issueDate:'2017-07-02',
          issueNum:'9.44亿',         
          webSite:'https://eos.io/',
          text:'EOS 是由 Blockone 公司研发的一种新的区块链架构，该架构可以提供账户，身份认证，数据库，异步通信以及可在数以百计的 CPU 或群集上的程序调度。EOS旨在实现分布式应用的性能拓展。'
        },
        'en-US':{
          issueDate:'2017-07-02',
          issueNum:'944 million',         
          webSite:'https://eos.io/',
          text:'EOS is a new chunk chain architecture developed by Blockone that provides accounts, authentication, databases, asynchronous communication, and scheduling on hundreds of CPUs or clusters. EOS is designed to enable performance expansion for distributed applications.'
        },
        'ko-KR':{
          issueDate:'2017-07-02',
          issueNum:'944 million',         
          webSite:'https://eos.io/',
          text:'EOS is a new chunk chain architecture developed by Blockone that provides accounts, authentication, databases, asynchronous communication, and scheduling on hundreds of CPUs or clusters. EOS is designed to enable performance expansion for distributed applications.'
        }
      },
      DASH:{
        'zh-CN':{
          issueDate:'2014-01-18',
          issueNum:'1890万',
          
          webSite:'https://www.dash.org/',
          text:'Dash是一种为匿名币，拥有保护隐私、即时交易及安全等特点。Dash无预挖，基于11种加密算法，超级安全哈希运算，CPU挖矿（GPU挖矿软件也已发布）。它的区块奖励由公式自动确定 2222222/(((Difficulty+2600)/9)^2)。'
        },
        'en-US':{
          issueDate:'2014-01-18',
          issueNum:'18.9 million',
          
          webSite:'https://www.dash.org/',
          text:'Dash is an anonymous currency with the characteristics of protecting privacy, immediate transaction and security. Dash has no pre-excavation based on 11 cryptographic algorithms, super secure Hash operations, and CPU mining (GPU mining software has also been released). Its block reward is automatically determined by the formula: 2222222/(((Difficulty+2600)/9)^2).'
        },
        'ko-KR':{
          issueDate:'2014-01-18',
          issueNum:'18.9 million',
          
          webSite:'https://www.dash.org/',
          text:'Dash is an anonymous currency with the characteristics of protecting privacy, immediate transaction and security. Dash has no pre-excavation based on 11 cryptographic algorithms, super secure Hash operations, and CPU mining (GPU mining software has also been released). Its block reward is automatically determined by the formula: 2222222/(((Difficulty+2600)/9)^2).'
        }
      },
    },

    KLineTradingPair:{
      type:'USDT',
        name:'BRT',
        id:'brtusdt',
        range:0,
        price:0.00,
        detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/BRT.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:true,
    },
    tradingSymol: {
      BRT:{name:'BRT',type:'USDT',nowData:null,isLocal:true},
      USDT:{name:'USDT',type:'USDT',nowData:null,isLocal:true},
      BTC:{name:'BTC',type:'USDT',nowData:null,isLocal:false},
      ETH:{name:'ETH',type:'USDT',nowData:null,isLocal:false},
      XRP:{name:'XRP',type:'USDT',nowData:null,isLocal:false},
      BCH:{name:'BCH',type:'USDT',nowData:null,isLocal:false},
      LTC:{name:'LTC',type:'USDT',nowData:null,isLocal:false},
      XMR:{name:'XMR',type:'USDT',nowData:null,isLocal:false},   
      EOS:{name:'EOS',type:'USDT',nowData:null,isLocal:false},
      DASH:{name:'DASH',type:'USDT',nowData:null,isLocal:false},   
    },
    selectSymbol:{name:'USDT',isLocal:false},
    quotationData:{},

    //交易对
    tradePairData:[
      {
        type:'USDT',
        name:'BRT',
        id:'brtusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/BRT.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:true,
      },
      {
        type:'USDT',
        name:'BTC',
        id:'btcusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/BTC.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'ETH',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/ETH.png')}`,
        id:'ethusdt',
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'XRP',
        id:'xrpusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/XRP.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      
      {
        type:'USDT',
        name:'BCH',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/BCH.png')}`,
        id:'bchusdt',
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'LTC',
        id:'ltcusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/LTC.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'XMR',
        id:'xmrusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/XMR.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'EOS',
        id:'eosusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/EOS.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
      {
        type:'USDT',
        name:'DASH',
        id:'dashusdt',
        range:0,
        price:0.00,
      detail:[],
        depth:null,
        iconPath:`${require('@/static/images/tradeSymbol/DASH.png')}`,
        nowData:null,
        dataArray:[],
        isLocal:false,
      },
    ],
  },
  actions: {
   
    //获取k线
    getKline({commit},data) {
      let KLineTradingPair = this.state.tradeData.KLineTradingPair;
      let str = KLineTradingPair.name + KLineTradingPair.type;
      str = str.toLowerCase();
      let postData = {
					symbol:str,
					period:data.period,
          size:'30',
          isLocal:KLineTradingPair.isLocal
      }
      request({
          url: 'kline/list',
          method: 'get',
          hostType:"klineApi",
          params:postData
      }).then(res => {
          if (res.errorCode.toString() === '0') {
            
              // let data = res.results;
              let data={
                ...KLineTradingPair,
                dataArray:res.results.reverse()
              }
              commit('UPKLINEDATA', data);
          }
      })
    },
    initQuotationData({commit},cb){
      let {tradingSymol,selectSymbol,selectedCurrency} = this.state.tradeData;
      let newData = tradingSymol.map(function (item) {
        let id = item.name+selectSymbol.name;
        id = id.toLowerCase();
        let obj = {
          type:selectSymbol.name,
          name:item.name,
          id:id,
          range:0,
          price:0.00,
      detail:[],
        depth:null,
          nowData:null,
          dataArray:[],
          isLocal:item.isLocal&&selectSymbol.isLocal,
        }            
        return {
          ...obj
        }
        
      });
      commit('INITQUOTATIONDATA', newData);
      if(cb){
        cb(newData)
      }
    }
   
  
   
  },
  mutations: {
    [INITQUOTATIONDATA](state,result) {
      state.quotationData = result;
    },
    [UPKLINEDATA](state,result){
      state.KLineTradingPair = result;
    },
    setTredDataSync(state,param,cb) {//param:{key:*,val:*}
      state[param.key] = param.val;
      if(cb){
        cb()
      }
    },
        
    
    
    
    
  }
}