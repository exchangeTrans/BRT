export default {
    footer: ['首页', '行情', '交易', '资产', '我的'],
    noData: '暂无数据',
    currency:{
        RMB:'人民币',
        USD:'美元',
        KRW:'韩元',
    },
    btn:{
        confirm:'确认'
    },

    //首页
    index: {
        totalAssets: "资产总额",
        gridData: [
            '质押挖矿',
            '挖矿收益',
            '量化理财',
            '智能合约',
            '节点矿池',
            '团队详情',
            '推广收益',
            '上币申请',
        ],
        quotation: '币价行情',
        currency: '币种',
        newPrice: '最新价',
        addAndDown: '涨跌',
        amount: '量',
        noOpen: '暂未开放',

    },
    //行情
    quotes: {
        title: '行情',
        currency: '计价货币：',
        price: '价格',
        addAndDown: '涨跌',
    },
    //交易
    tradePage: {
        headerTab: ['币币交易', '合约交易'],
        buy: "买入",
        sell: "卖出",
        prcie: '价格',
        number: '数量',
        tip1: '请先填写交易价格',
        tip2: '暂未开放',
        use: '可用：',
        tradeAll: '交易额:',
        nowTrade: '当前委托',
        historyTrade: '历史记录',
        noData: '暂无数据',
        orderBuy: '买单',
        orderSell: '卖单',
        orderReturn: '撤单',
        orderPrice: '委托价格',
        orderNumber: '委托数量',
    },
    //资产
    property: {
        title: '资产',
        assetAll: '总资产',
        balance: '可用余额',
        balanceUse: '锁仓余额',
        withdrawal: "转账",
        receipt: "收款",
        tip: '此币种目前只支持提币',
    },
    //提币{}
    withdrawal: {
        title: '提币',
        subTitle: '提币纪录',
        number: "到账数量",
        tipArray: [
            '最小提币数量：',
            '平台间用户转帐无手续费。',
            '为保障资金安全，当您账户安全策略变更、密码修改、我们会对提币进行人工审核、请耐心等待工作人员电话或邮件联系。',
            '请务必确认电脑及浏览器安全，防止信息被篡改或泄露'
        ],
        btnText: '提币',
        addressInput: {
            textTitle: "提币地址",
            placeholder: "输入或长按粘贴地址",
        },
        amountInput: {
            textTitle: "数量",
            placeholder: "最小提币数量",
            subText: '余额：'
        },
        commissionInput: {
            textTitle: "手续费",
        },
        phoneInput: {
            textTitle: "手机验证码",
            placeholder: "输入手机验证码",
            subText: '获取验证码'
        },
        mainNumber: '最小提币数量',
        balance: '余额',
        requestTipArrray: [
            '秒后重新发送',
            '重新发送',
            '未达到最小提币数量不足',
            '提币中',
            '请先输入正确的提币地址'
        ],
        success: '提币成功',
        finish: '完成'
        // minNumber:'最小提币数量：'

    },
    //提币记录
    record: {
        title: "提币记录",
        noData: '暂无数据'
    },
    //充币记录
    addRecord: {
        title: "充币记录",
        noData: '暂无数据'
    },
    //记录组件
    recordItem: {
        number: '数量',
        status: '状态',
        times: '时间',
        starusArray: [
            '审核中',
            '失败',
            '成功',
        ]
    },
    receipt: {
        title: '收款',
        subTitle: '充币记录',
        address: '充币地址',
        saveCode: '保存二维码',
        copyAddress: '复制地址',
        remark1: '请勿向上述地址充值任何非',
        remark2: '资产，否则资产将不可找回。您充值至上述地址后，需要网络节点的确认。您的充值地址不会经常改变，可以重复充值；如果有更改我们会尽量通过网站公告或邮件通知您。',
        saveTip: '保存图片成功'
    },
    //k线
    trade: {
        buy: "买入",
        sell: "卖出",
        tableHeadTr1: ["买盘", "数量", "价格", "数量", "卖盘"],
        tableHeadTr2: ["时间", "方向", "价格", "数量"],
        tableHeadTr3: ["发行时间", "发行总量", "官网", '币种简介'],
        unit: '万',
        high: "高",
        low: '低',
        lineTypeArray: [
            '分',
            '小时',
            '日线',
            '周线',
        ],
        tabArray: [
            '买单/卖单',
            '最新成交',
            '币种简介'
        ]
    },
    //量化
    earnings: {
        title: '量化理财',
        balance: '可用余额',
        yield: '累计收益率',
        profitDetail: '收益详情',
        earningsData: '量化数据',
        investment: '投资金额',
        quantBalance: '量化余额',
        lastYield: '昨日收益率',
        stopRatio: '止盈率',
        stopRate: '止损率',
        set: '设置',
        maxReturn: '最大撤回',
        rule: '规则',
        rulerText: '量化理财运行七天后或是收益率达到止盈率或止损率时，量化馀额会自动转入可用余额。量化运行时可以转入加仓，但不可提现。最少需投入1000 USDT才可进行量化。',
        join: '转入加仓',
        downLoad: '下载韩亚量化App',
        noOpen: '暂未开放',
        setSuccess: '设置成功',
    },
    //更新
    upData: {
        updateBtn: '发现新版本',
        find: '立即更新'
    },
    login: {
        phoneLogin: "手机登录",
        emailLogin: "邮箱登录",
        inputPhone: "请输入手机号码",
        inputPassword: "请输入登录密码",
        loginBtn: "登录",
        forgetPasswordJump: "忘记密码？",
        regsJump: "没有账号？立即注册",
        inputEmail: "请输入邮箱",
        inputEmailPassword: "请输入登录密码",
    },
    regs: {
        phoneRegs: '手机号注册',
        emailRegs: '邮箱注册',
        regsBtn: '下一步',
        inputPhone: '请输入手机号码',
        inputPhoneVerifyCode: '请输入手机验证码',
        sendVerifyCode: '发送验证码',
        inputPhonePassword: '请输入6-20位登录密码',
        inputPhoneSurePassword: '请再次输入6-20位登录密码',
        inputInviteCode: '请输入推广码',
        inputEmail: '请输入邮箱',
        inputEmailVerifyCode: '请输入邮箱验证码',
        sendVerifyEmailCode: "发送验证码",
        inputEmailPassword: "请输入6-20位登录密码",
        inputEmailSurePassword: "请再次输入6-20位登录密码",
        inputEmailInviteCode: "请输入推广码",
        loginJump: "已有账号，立即登录",
        phoneName: '发送验证码',
        emailName: '发送验证码',
        showLoading: "加载中...",
        verifyKey: "请先获取验证码",
        password: "两次密码不一致，请重新输入",
        resend1: "秒后重新发送",
        resend2: "重新发送",
        checkPhoneArray: [
            "手机号",
            "验证码",
            "密码",
            "确认密码",
            "邀请码",
        ],
        checkEmailArray: [
            "邮箱",
            "验证码",
            "密码",
            "确认密码",
            "邀请码",
        ],
    },
    forgetPassword: {
        phoneForget: "手机号找回",
        emailForget: "邮箱找回",
        inputPhone: "请输入注册手机号码",
        inputVerifyCode: "请输入手机验证码",
        sendVerifyCode: "发送验证码",
        inputPassword: "请输入新登录密码",
        inputSurePassword: "请确认新登录密码",
        inputEmail: "请输入注册邮箱",
        inputEmailVerifyCode: "请输入邮箱验证码",
        sendVerifyEmailCode: "发送验证码",
        inputEmailPassword: "请输入新登录密码",
        inputEmailSurePassword: "请确认新登录密码",
        forgetBtn: "重置密码",
        regsJump: "没有账号？立即注册",
    },
    loginOrRegs: {
        loginBtn: "登录",
        regsBtn: "创建账户",
    },
    personInfo: {
        title: "个人资料",
        avatarText: "头像",
        nicknameText: "昵称",
        saveBtn: "保存",
    },
    promoteBonus: {
        title: "推广收益",
        bonusTotal: "团队总质押",
        bonusNow: "当前推广算力",
        bonusLastDay: "昨日推广收益",
        inviteBonusRecords: "推广收益记录",
    },
        //矿池分红
    bonus:{
        title:'矿池分红',
        vip:'您的VIP等级',
        number:'矿池积累数量',
        lastTime:'下次分红时间',
        lastProfit:'矿池分红收益',
        vipArray:[
            '普通会员',
            '初级节点',
            '中级节点',
            '高级节点',
            '最高节点',
        ]

    },
    //倒计时
    countDown:{
        d:'天',
        h:'时',
        m:'分',
        s:'秒',
    },
    loadMore:{
        contentdown: '显示更多',
        contentrefresh: '正在加载...',
        contentnomore: '没有更多数据了'
    },
    sub: {
        title: '质押挖矿',
        availableBalance: '可用余额',
        accumulatedIncome: '累计收益',
        interestDay: '昨日收益',
        bestHold: '昨日最佳持币',
        BeganToDig: '开始挖矿',
        closePledge: '取消质押',
        addPledge: '增加质押',
        minLimit: '最小持币',
        pledgeNow: '目前质押',
        will: '将于',
        releasePledge: '释放质押',
        pledgeRecord: '质押挖矿记录',
        pledgeNumber: '质押数量',
        createTime: '起始时间',
        expiresIn: '结束时间'
    },
    //团队
    myTeam:{
        title:"团队详情",
        teamPledge:'团队总质押',
        addPledge:'今日新增质押',
        teamNumAll:'团队总人数',
        invitationRecord:'邀请记录',
        invitationAccount:'邀请账户',
        pledgeAmount:'团队业绩',
        teamNum:'团队人数'
    },
    //质押弹窗
    transferInAmount: {
        inMining: '参与挖矿',
        close: '取消',
        availableCount: '可用数量',
        inputHolderText: '请输入转入数量',
        allInto: '全部转入',
        intoIntro: '质押週期为15日，到期后会自动解锁。',
        into: '转入',
    },
    financierInAmount: {
        inMining: '转入',
        close: '取消',
        availableCount: '可用数量',
        inputHolderText: '请输入转入数量',
        allInto: '全部转入',
        intoIntro: '量化週期为7日，到期或达到止盈率后会自动解锁。',
        into: '转入',
    },
    //质押规则
    subRuler: {
        intro: '质押挖矿说明',
        rulerData: [
            {text: '您的质押余额约必须大于1000BRT，才会获得质押收益。'},
            {
                text: '每一次质押周期为15天，质押期内不允许转入，质押期内转出将扣除10％手续费。'
            },
            {
                text: '15天到期后，质押馀额会自动转入可用余额。'
            }]
    },
    miningEarnings: {
        title: '挖矿收益',
        availableBalance: '当前质押',
        accumulatedIncome: '累计收益',
        interestDay: '昨日收益',
        bestHold: '昨日最佳持币',
        pledgeEarningRecord: '质押收益记录',
    },
    //我的
    userL: {
        totalAssets: "总资产",
        btnText: "退出登录",
        listItemData: [
            {name: "实名认证"},
            {name: "推广链接"},
            {name: "公告列表"},
            {name: "联系客服"},
            {name: "修改绑定手机邮箱"},
            {name: "设置"},
        ],
        aboutItemData: [
            {name: "官网"},
            {name: "区块链浏览器"},
            {name: "开源代码"},
            {name: "版本"},
        ]
    },
    //实名认证
    authL: {
        authStatus: "实名状态",
        authAwait: "待实名",
        realName: "已实名",
        noRealName: "待审核（未审核）",
        notReviewed: "审核失败，请重新提交",
        realname: "真实姓名",
        realnamePlaceholder: "和身份证上的姓名保持一致",
        cardNumber: "证件号",
        cardNumberPlaceholder: "请输入身份证号",
        uploadImgText: "请上传手持法定证件和手写纸条的照片，手写纸条上面写（BRT；日期；日期请用认证当日日期）",
        uploadImgBtn: "上传照片",
        button: "提交认证审核",
        authentication: "实名认证",
        checkArray: [
            {name: "姓名"},
            {name: "证件号码"},
            {name: "手持照片"},
        ],
        loading: "加载中...",
    },
    //设置
    setting: {
        settingText: "设置",
        noOpen: "暂未开放",
        modelText: "日夜模式",
        day: "日间模式",
        night: "夜晚模式",
        showCurrency: "显示币种",
        showLang: "显示语言",
    },
    //推广链接
    share: {
        inviteCode: "邀请码",
        saveImg: "保存图片",
        copyLink: "复制分享链接",
    },
    //公告列表
    noticelist: {
        noticelistText: "公告列表",
        noData: "暂无数据",
    },
    //联系客服
    connectUs: {
        content: "BRT 全球匿名公链，由英国贝莱特基金会（Beilette Foundation）支持， " +
            "致力于结合信用抵押挖矿，量化机器人，合约等打造全球最佳DEFI数字货币" +
            "生态，将支持一切有价值的数字资产和实物资产的存托。",
        aboutText: "关于BRT",
        connectUsText: "联系我们",
        email: "客服邮箱",
        connectUser: "联系客服",
    },
    chooseCountry:{
        title:'选择国家'
    },
    chooseLanguage:{
        title:'选择语言'
    },
    //修改绑定手机邮箱
    changePhone: {
        leftText: "手机号注册",
        rightText: "邮箱注册",
        btnText: "更换手机绑定",
        country: "中国",
        changePhoneText: "更换手机号码",
        getPhoneCode: "请获取当前手机验证码",
        getNewPhoneCode: "请获取当新绑定手机验证码",
        resend1: "秒后重新发送",
        resend2: "重新发送",
        spanNameNew: '发送验证码',
        spanNameOld: '发送验证码',
        nowPhoneTitle: "当前绑定手机号码：",
        oldPhonePlaceholder: "请输入当前手机验证码",
        newPhonePlaceholder: "请输入新绑定手机号码",
        newPhoneVerifyCode: "请输入新手机验证码",

        newPhoneText: "新绑定手机号码",
        checkPhoneArray: [
            {name: "新绑定手机号码"},
            {name: "当前手机验证码"},
            {name: "新手机验证码"},
            {name: "手机号"},
        ],

    },
    changeEmail: {
        leftText: "手机号注册",
        rightText: "邮箱注册",
        btnText: "更换邮箱绑定",
        country: "中国",
        nowEmailTitle: "当前绑定邮箱：",
        VerifyCodeText: "输入当前邮箱验证码",
        spanNameNew: '发送验证码',
        spanNameOld: '发送验证码',
        changeEmailText: "更换邮箱",
        getEmailCode: "请获取当前手机验证码",
        getNewEmailCode: "请获取当新绑定手机验证码",
        resend1: "秒后重新发送",
        resend2: "重新发送",
        newEmail: "新绑定邮箱",
        newEmailPlaceholder: "请输入新绑定邮箱",
        newVerifyCodePlaceholder: "请输入新绑定邮箱",
        checkEmailArray: [
            {name: "新绑定邮箱号码"},
            {name: "当前邮箱验证码"},
            {name: "新邮箱验证码"},
            {name: "邮箱"},
        ]
    },

    //取消质押
    cancelPledge:{
        cancelTitle: '取消质押',
        close: '关闭',
        pledgeCount: '质押数量',
        inputHolderText: '请输入验证码',
        code: '获取验证码',
        intoIntro: '取消质押会收取10%的手续费',
        into: '确认取消',
        verifyTip: "请先获取验证码",
        verifyCountDown:'秒后再次获取'
    }

}
