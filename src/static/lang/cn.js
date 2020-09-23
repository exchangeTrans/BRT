export default {
    footer:['首页','行情','交易','资产','我的'],
    trade: {
      buy:"买入",
      sell:"卖出",
      tableHeadTr1:["买盘","数量","价格","数量","卖盘"],
      tableHeadTr2:["时间","方向","价格","数量"],
      tableHeadTr3:["发行时间","发行总量","官网",'币种简介'],
      unit:'万',
      high:"高",
      low:'低',
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
    sub:{
        title:'质押挖矿',
        availableBalance:'可用余额',
        accumulatedIncome:'累计收益',
        interestDay:'昨日收益',
        bestHold:'昨日最佳持币',
        BeganToDig:'开始挖矿',
        closePledge:'取消质押',
        minLimit:'最小持币',
        pledgeNow:'目前质押',
        will:'将于',
        releasePledge:'释放质押',
        pledgeRecord:'质押挖矿记录',
        pledgeNumber:'质押数量',
        createTime:'起始时间',
        expiresIn:'结束时间'
    },
    //质押弹窗
    transferInAmount:{
        inMining:'参与挖矿',
        close:'取消',
        availableCount:'可用数量',
        inputHolderText:'请输入转入数量',
        allInto:'全部转入',
        intoIntro:'质押週期为15日，到期后会自动解锁。',
        into:'转入',
    },
    //质押规则
    subRuler:{
        intro:'质押挖矿说明',
        rulerData:[
            {text:'您的质押余额约必须大于1000BRT，才会获得质押收益。'},
            {
                text:'每一次质押周期为15天，质押周期内不允许转入转出。'
            },
            {
                text:'15天到期后，质押馀额会自动转入可用余额。'
            },
            {
                text:'15天到期后，质押馀额会自动转入可用余额。'
            }]
    },
    miningEarnings:{
        title:'挖矿收益',
        availableBalance:'可用余额',
        accumulatedIncome:'累计收益',
        interestDay:'昨日收益',
        bestHold:'昨日最佳持币',
        pledgeEarningRecord:'质押收益记录',
    }

}
