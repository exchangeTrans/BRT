export default {

    footer: ['Homepage', 'Market', 'Transaction', 'Asset', 'My'],

    noData: 'No Data',
    currency:{
        RMB:'RMB',
        USD:'USD',
        KRW:'KRW',
    },
    btn:{
        confirm:'confirm'
    },


    //Homepage

    index: {

        totalAssets: "Total Assets",

        gridData: [

            'Staking',

            'Mining revenue',

            'Quantitative financial management',

            'Smart contract',

            'Nodal ore pool',

            'Team Details',

            'Promotion income',

            'Currency application',

        ],

        quotation: 'Currency Quotation',

        currency: 'Currency',

        newPrice: 'New Price',

        addAndDown: 'Rise and Fall',

        amount: 'Amount',

        noOpen: 'Not Yet Open',



    },

    //Quotation

    quotes: {

        title: 'Quotation',

        currency: 'Valuation Currency：',

        price: 'Price',

        addAndDown: 'Rise and Fall',

    },

    //Transaction

    tradePage: {

        headerTab: ['Currency Transaction', 'Contract Transaction'],

        buy: "Buy",

        sell: "Sell",

        prcie: 'Price',

        number: 'Amount',

        tip1: 'Please fill in transaction price',

        tip2: 'Not Yet Open',

        use: 'Usable：',

        tradeAll: 'Transaction Volume:',

        nowTrade: 'Current commission',

        historyTrade: 'Histroy record',

        noData: 'No Data',

        orderBuy: 'Buying Order',

        orderSell: 'Selling Order',

        orderReturn: 'Cancle Order',

        orderPrice: 'Commission price',

        orderNumber: 'Commission amount',

    },

    //Asset

    property: {

        title: 'Asset',

        assetAll: 'Total Asset',

        balance: 'Avaliable Balance',

        balanceUse: 'Lock Position Balance',

        withdrawal: "Transfer",

        receipt: "receipt",

        tip: 'This currency only supports withdrawal',

    },

    //Withdrawal{}

    withdrawal: {

        title: 'Withdrawal',

        subTitle: 'Withdrawl Record',

        number: "amount received",

        tipArray: [

            'Minimum amount of withdrawal：',

            'No service charge for transfer between platforms.',

            ' In order to ensure the security of funds, when your account security policy changes, password changes, we will manually audit the withdrawal, please wait patiently for the staff to contact you over phone or email'

        ],

        btnText: 'Withdraw',

        addressInput: {

            textTitle: "Withdraw address",

            placeholder: "put in or press long to copy the address",

        },

        amountInput: {

            textTitle: "amount",

            placeholder: "Minimum amount of withdrawal",

            subText: 'Balance：'

        },

        commissionInput: {

            textTitle: "Service Charge",

        },

        phoneInput: {

            textTitle: "Phone verification code",

            placeholder: "put in phone verification code",

            subText: 'Get phone verification code '

        },

        mainNumber: 'Minimum amount of withdrawal',

        balance: 'Balance',

        requestTipArrray: [

            'sent again in  second',

            'resent',

            'Not reached to Minimum amount of withdrawal',

            'Withdrawing',

            'Please input correct withdrawal address first'

        ],

        success: 'Withdraw Successed',

        finish: 'Accomplished'

        // minNumber:' Minimum amount of withdrawal：'



    },

    //Withdraw Record

    record: {

        title: "Withdraw Record",

        noData: 'No Data'

    },

    //Currency Charge Record

    addRecord: {

        title: "Currency Charge Record",

        noData: 'No Data'

    },

    //Log Component

    recordItem: {

        number: 'Amount',

        status: 'Status',

        times: 'Time',

        starusArray: [

            'Auditing',

            'Failed',

            'Successed',

        ]

    },

    receipt: {

        title: 'Receipt',

        subTitle: 'Chaege Record',

        address: 'Charge Rocord',

        saveCode: 'Save QR Code',

        copyAddress: 'Copy Address',

        remark1: "Please don't charge any asset to the above address",

        remark2: "asset，otherwise asset cannot be foud。After you charge to the above address, you need to confirm the network node. Your charge address will not change frequently, you can recharge repeatedly; if there is any change, we will try to inform you through website announcement or email.",

        saveTip: 'Picture saved'

    },

    //k-LIne

    trade: {

        buy: "Buy",

        sell: "Sell",

        tableHeadTr1: ["Buy Order", "Amount", "Price", "Amount", "Sell order"],

        tableHeadTr2: ["Time", "Direction", "Price", "Amount"],

        tableHeadTr3: ["Issue Time", "Issue Anount", "Official Website", 'Currency Introduction '],

        unit: 'Ten Thousand',

        high: "HIgh",

        low: 'Low',

        lineTypeArray: [

            'Minute',

            'Hour',

            'Date Line',

            'Week Line',

        ],

        tabArray: [

            'Buying Oder/Selling Order',

            'Latest Deal',

            'Currency Introduction'

        ]

    },

    //Quantization

    earnings: {

        title: 'Quantitative financial management',

        balance: 'Available Balance',

        yield: '累计收益率',

        profitDetail: 'Cumulative rate of return',

        earningsData: 'Quantitative data',

        investment: 'Investment amount',

        quantBalance: 'Quantified balance',

        lastYield: "Yesterday's yield",

        stopRatio: 'Profit stop ratio',

        stopRate: "Stop loss rate",

        set: 'set up',

        maxReturn: 'Maximum withdrawal',

        rule: 'Rules',

        rulerText: 'After seven days of quantitative financing operation or when the yield reaches the stop profit ratio or stop loss rate, the quantified balance will be automatically transferred to the available balance. In quantitative operation, it can be transferred to warehouse adding, but can not be withdrawn. A minimum of 1000 usdt is required to quantify.',

        join: 'Transfer to add warehouse',

        downLoad: 'DownloadDownload Hanya Quantization app',

        noOpen: 'Not Yet Open',

        setSuccess: 'Setup succeeded',

    },

    //Update

    upData: {

        updateBtn: 'New version found',

        find: 'Update now'

    },

    login: {

        phoneLogin: "Mobile login",

        emailLogin: "E-mail login",

        inputPhone: "Please enter phone number",

        inputPassword: "Please enter login password",

        loginBtn: "Login",

        forgetPasswordJump: "Forget Password？",

        regsJump: "No account? Register now",

        inputEmail: "Please Enter Email ",

        inputEmailPassword: "Please enter login password",

    },

    regs: {

        phoneRegs: 'Mobile phone number registration',

        emailRegs: 'Email registration',

        regsBtn: 'Next',

        inputPhone: 'Please enter phone number',

        inputPhoneVerifyCode: 'Please enter phone verification code',

        sendVerifyCode: 'Send verification code',

        inputPhonePassword: 'Please enter a 6-20 digit login password',

        inputPhoneSurePassword: 'Please enter a 6-20 digit login password again',

        inputInviteCode: 'Please input promotion code',

        inputEmail: 'Please Enter Email',

        inputEmailVerifyCode: 'Please Enter Email verification code',

        sendVerifyEmailCode: "Send verification code",

        inputEmailPassword: "Please enter a 6-20 digit login password",

        inputEmailSurePassword: "Please enter a 6-20 digit login password again",

        inputEmailInviteCode: "Please input promotion code",

        loginJump: "Existing account, login now",

        phoneName: 'Send verification code',

        emailName: 'Send verification code',

        showLoading: "loading...",

        verifyKey: "Please get the verification code first",

        password: "The two passwords are inconsistent, please re-enter",

        resend1: "Resend in Seconds",

        resend2: "Resend",

        checkPhoneArray: [

            "Phone Number",

            "Verification Code",

            "Password",

            "Password confirmation",

            "Invitation code",

        ],

        checkEmailArray: [

            "Email",

            "Verification Cod",

            "Password",

            "Password confirmation",

            "Invitation code",

        ],

    },

    forgetPassword: {

        phoneForget: "Mobile phone number recovery",

        emailForget: "Email recovery",

        inputPhone: "Please enter the registered mobile phone number",

        inputVerifyCode: "Please input the phone verification code",

        sendVerifyCode: "Send verification code",

        inputPassword: "Please enter the new login password",

        inputSurePassword: "Please confirm the new login password",

        inputEmail: "Please enter registration email",

        inputEmailVerifyCode: "Please enter email verification code",

        sendVerifyEmailCode: "Send verification code",

        inputEmailPassword: "Please enter the new login password",

        inputEmailSurePassword: "Please confirm the new login password",

        forgetBtn: "Reset password",

        regsJump: "No account? Register now",

    },

    loginOrRegs: {

        loginBtn: "Sign in",

        regsBtn: "Create account",

    },

    personInfo: {

        title: "personal Profile",

        avatarText: "head portrait",

        nicknameText: "Nickname",

        saveBtn: "Save",

    },

    promoteBonus: {

        title: "Promotion income",

        bonusTotal: "Total pledge of the team",

        bonusNow: "Current promotion computing power",

        bonusLastDay: "Yesterday's promotion revenue",

        inviteBonusRecords: "Promotion revenue record",

    },

        //Mining pool dividend

    bonus:{

        title:'Mining pool dividend',

        vip:'Your VIP level',

        number:'Accumulated quantity of Mining pool',

        lastTime:'Next dividend time',

        lastProfit:'Dividend income of mining pool',

        vipArray:[

            'Ordinary member',

            'Primary node',

            'Intermediate node',

            'Advanced node',

            'Highest node',

        ]



    },

    //count down

    countDown:{

        d:'Day',

        h:'Hour',

        m:'MInute',

        s:'Second',

    },

    loadMore:{

        contentdown: 'Show more',

        contentrefresh: 'Loading...',

        contentnomore: 'no more data'

    },

    sub: {

        title: 'Staking',

        availableBalance: 'Available balance',

        accumulatedIncome: 'Cumulative income',

        interestDay: "Yesterday's earnings",

        bestHold: "Yesterday's best currency holdings",

        BeganToDig: 'Began To Dig',

        closePledge: 'Cancellation of pledge',

        minLimit: 'Minimum holding currency',

        pledgeNow: 'Current pledge',

        will: 'Will',

        releasePledge: 'Release pledge',

        pledgeRecord: 'Pledge mining record',

        pledgeNumber: 'Pledge quantity',

        createTime: 'Starting time',

        expiresIn: 'Ending time'

    },

    //Team

    myTeam:{

        title:"Team details",

        teamPledge:'Total pledge of the team',

        addPledge:'New pledge added today',

        teamNumAll:'Total team size',

        invitationRecord:'Invitation record',

        invitationAccount:'Invitation account',

        pledgeAmount:'Team pledge performance',

    },

    //Pledge pop-up window

    transferInAmount: {

        inMining: 'Participate in mining',

        close: 'cancle',

        availableCount: 'Available quantity',

        inputHolderText: 'Please input the transfer in quantity',

        allInto: 'All transferred in',

        intoIntro: 'The pledge period is 15 days, and it will be automatically unlocked after expiration.',

        into: 'transfer into',

    },

    financierInAmount: {

        inMining: 'transfer into',

        close: 'cancle',

        availableCount: 'Available quantity',

        inputHolderText: 'Please input the transfer in quantity',

        allInto: 'All transferred in',

        intoIntro: 'The pledge period is 7 days, and it will be automatically unlocked after expiration。',

        into: 'transfer into',

    },

    //Pledge rules

    subRuler: {

        intro: 'Description of pledge mining',

        rulerData: [

            {text: 'Your pledge balance must be greater than 1000brt in order to obtain pledge income.'},

            {

                text: 'Each pledge period is 15 days. Transfer in is not allowed during the pledge period, and 10% service charge will be deducted for transfer out during the pledge period.'

            },

            {

                text: 'After 15 days, the pledge balance will be automatically transferred to the available balance.'

            },

            {

                text: 'After 15 days, the pledge balance will be automatically transferred to the available balance.'

            }]

    },

    miningEarnings: {

        title: 'Mining revenue',

        availableBalance: 'Current pledge',

        accumulatedIncome: 'Cumulative income',

        interestDay: "Yesterday's earnings",

        bestHold: "Yesterday's best currency holdings",

        pledgeEarningRecord: 'Pledge income record',

    },

    //My

    userL: {

        totalAssets: "total assets",

        btnText: "Log out",

        listItemData: [

            {name: "Real name authentication"},

            {name: "Promotion link"},

            {name: "Announcement list"},

            {name: "Contact customer service"},

            {name: "Modify and bind mobile email"},

            {name: "Set up"},

        ],

        aboutItemData: [

            {name: "Official website"},

            {name: "Blockchain browser"},

            {name: "open source"},

            {name: "version"},

        ]

    },

    //Real name authentication

    authL: {

        authStatus: "Real name status",

        authAwait: "Waiting for real name authentication",

        realName: "Real Name authented",

        noRealName: "To be reviewed (not reviewed)",

        notReviewed: "To be reviewed (not reviewed)",

        realname: "Real Name",

        realnamePlaceholder: "The same as the name on the ID card",

        cardNumber: "ID number",

        cardNumberPlaceholder: "Please enter ID number",

        uploadImgText: "Please upload photos of holding legal documents and handwritten notes, which writes (BRT; Date;Please use the date of certification)",

        uploadImgBtn: "Upload photos",

        button: "Submit for certification review",

        authentication: "Real name authentication",

        checkArray: [

            {name: "Name"},

            {name: "ID Number"},

            {name: "Hand held photo"},

        ],

        loading: "Loading...",

    },

    //Set up

    setting: {

        settingText: "Set up",

        noOpen: "Not Yet Open",

        modelText: "Day and night mode",

        day: "Day mode",

        night: "NOght mode",

        showCurrency: "Display currency",

        showLang: "Display language",

    },

    //Promotion link

    share: {

        inviteCode: "Invitation code",

        saveImg: "Save picture",

        copyLink: "Copy share link",

    },

    //Announcement list

    noticelist: {

        noticelistText: "Announcement list",

        noData: "No Data",

    },

    //Contact customer service

    connectUs: {

        content: "BRT Global anonymous public chain, supported by the beilette Foundation， " +

            "We are committed to building the best digital currency ecology in the world by combining credit mortgage mining, quantitative robots, contracts, etc." +

            "and will support the deposit of all valuable digital assets and physical assets.",

        aboutText: "About BRT",

        connectUsText: "Contact us",

        email: "Customer service email",

        connectUser: "Contact customer service",

    },

    //Change and bind mobile email

    changePhone: {

        leftText: "Phone Number registration",

        rightText: "Email registration",

        btnText: "Change mobile phone binding",

        country: "China",

        changePhoneText: "Chanege Phone Number",

        getPhoneCode: "Please get the current  phone verification code",

        getNewPhoneCode: "Please obtain the verification code of the newly bound  phone",

        resend1: "Resend in Seconds",

        resend2: "Resend",

        spanNameNew: 'Send Verification Code',

        spanNameOld: 'Send Verification Code',

        nowPhoneTitle: "Currently bound mobile phone number：",

        oldPhonePlaceholder: "Please enter Phone Verification Code",

        newPhonePlaceholder: "Please enter New Phone Number",

        newPhoneVerifyCode: "Please enter New Phone Verification Code",



        newPhoneText: "New bound  phone number",

        checkPhoneArray: [

            {name: "New bound phone number"},

            {name: "Phone Number Verification Code"},

            {name: "New Phone Number Verification Code"},

            {name: "Phone Number"},

        ],



    },

    changeEmail: {

        leftText: "Phone number registration",

        rightText: "E-mail registration",

        btnText: "Change E-mail binding",

        country: "China",

        nowEmailTitle: "Present E-mail：",

        VerifyCodeText: "Please enter Present E-mail Verification Code",

        spanNameNew: 'Send Verification Code',

        spanNameOld: 'Send Verification Code',

        changeEmailText: "Change E-mail",

        getEmailCode: "Please obtain the phone verification code",

        getNewEmailCode: "Please obtain the verification code of the newly bound mobile phone",

        resend1: "Resend in Seconds",

        resend2: "Resend",

        newEmail: "New Bound E-mail",

        newEmailPlaceholder: "Please enter new bound E-mal",

        newVerifyCodePlaceholder: "Please enter new bound E-mali",

        checkEmailArray: [

            {name: "New Bound Email "},

            {name: " Present E-mail Verification Code"},

            {name: "New E-mail Verification Code"},

            {name: "E-mail"},

        ]

    }



}

