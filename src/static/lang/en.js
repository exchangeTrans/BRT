export default {

    footer: ['Homepage', 'Market', 'Transaction', 'Asset', 'My'],

    noData: 'No Data',
    noOpen:'Not Yet Open',
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

            'Revenue',

            'Quant',

            'Contract',

            'Pool',

            'Team Details',

            'Commission',

            'Vote',

        ],

        quotation: 'Currency Quotation',

        currency: 'Currency',

        newPrice: 'New Price',

        addAndDown: 'Rise and Fall',

        amount: '',

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

        tradeAll: 'Volume:',

        nowTrade: 'Current commission',

        historyTrade: 'Histroy record',

        noData: 'No Data',

        orderBuy: 'Buy',

        orderSell: 'Sell',

        orderReturn: 'Cancel',

        orderPrice: 'Price',

        orderNumber: 'Amount',

    },
    historyTrade:{
        buy: "Buy",
        title:'history',
        sell: "Sell",

        noData: 'no data',
        orderNumber: 'Amount',
        orderPrice: 'Price',
        orderAllMoney: 'Total',
        orderAll: 'Turnover',
    },

    //Asset

    property: {

        title: 'Asset',

        assetAll: 'Total Asset',

        balance: 'Avaliable',

        balanceUse: 'Lock',

        withdrawal: "Transfer",

        receipt: "receipt",

        tip: 'This currency only supports withdrawal',

    },

    //Withdrawal{}

    withdrawal: {

        title: 'Withdrawal',

        subTitle: 'History',

        number: "amount received",

        tipArray: [

            'Minimum withdrawal：',

            'No service charge for transfer between platforms.',

            ' In order to ensure the security of funds, when your account security policy changes, password changes, we will manually audit the withdrawal, please wait patiently for the staff to contact you over phone or email'

        ],

        btnText: 'Withdraw',

        addressInput: {

            textTitle: "Withdraw address",

            placeholder: "put in or press long to copy the address",

        },
        tagInput:{
            textTitle: "Tag",
            placeholder: "Enter or paste",
            labe:'(Wrong address may lead to asset loss.)',
            tip:'Tag Empty Error'
        },

        amountInput: {

            textTitle: "amount",

            placeholder: "Minimum withdrawal ",

            subText: 'Balance：'

        },

        commissionInput: {

            textTitle: "Service Charge",

        },

        phoneInput: {

            textTitle: "Phone verification code",

            placeholder: "code",

            subText: 'Send'

        },

        mainNumber: 'Minimum withdrawal ',

        balance: 'Balance',

        requestTipArrray: [

            'sent again in  second',

            'resent',

            'Not reached to Minimum withdrawal ',

            'Withdrawing',

            'Please input correct withdrawal address first'

        ],

        success: 'Withdraw Successed',

        finish: 'Accomplished'

        // minNumber:' Minimum withdrawal： '



    },

    //Withdraw Record

    record: {

        title: "History",

        noData: 'No Data'

    },
    //提币详情
    orderDetail: {
        title: "Withdrawal Detail",
        type: 'Type',
        state: 'State',
        serviceCharge: 'Service Charge',
        withdrawAddress: 'Withdraw Address',
        time: 'Time',
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

        subTitle: 'History',

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

        tableHeadTr1: ["Buy", "Amount", "Price", "Amount", "Sell"],

        tableHeadTr2: ["Time", "Direction", "Price", "Amount"],

        tableHeadTr3: ["Issue Time", "Issue Anount", "Official Website", 'Currency Introduction '],

        unit: 'Ten Thousand',

        high: "High",

        low: 'Low',

        lineTypeArray: [

            'Minute',

            'Hour',

            'Date Line',

            'Week Line',

        ],

        tabArray: [

            'Buying Oder/Selling Order',

            'History',

            'Intro'

        ]

    },

    //Quantization

    earnings: {

        title: 'Quant',

        balance: 'Available Balance',

        yield: 'Profit',

        profitDetail: 'Return',

        earningsData: 'Data',

        investment: 'Investment',

        quantBalance: 'Quant',

        lastYield: "Yield",

        stopRatio: 'Stop Profit',

        stopRate: "Stop loss",

        set: 'set up',

        maxReturn: 'Max fallback',

        rule: 'Rules',

        rulerText: 'After seven days of quantitative financing operation or when the yield reaches the stop profit ratio or stop loss rate, the quantified balance will be automatically transferred to the available balance. In quantitative operation, it can be transferred to warehouse adding, but can not be withdrawn. A minimum of 1000 usdt is required to quantify.',

        join: 'Transfer to add warehouse',

        downLoad: 'Download Hanya ',

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
        phone:'phone number',
        email:'emial',
        password:'password',

        inputPhone: "Please enter phone number",

        inputPassword: "Please enter login password",

        loginBtn: "Login",

        forgetPasswordJump: "Forget Password？",

        regsJump: "No account? Register now",

        inputEmail: "Please Enter Email ",

        inputEmailPassword: "Please enter login password",

    },

    regs: {

        phoneRegs: 'Phone',

        emailRegs: 'Email',

        regsBtn: 'Next',

        inputPhone: 'Phone number',

        inputPhoneVerifyCode: 'Verification Code',

        sendVerifyCode: 'Send',

        inputPhonePassword: '6-20 digit login password',

        inputPhoneSurePassword: 'Enter password again',

        inputInviteCode: 'Referral Code',

        inputEmail: 'Please Enter Email',

        inputEmailVerifyCode: 'Please Enter Email verification code',

        sendVerifyEmailCode: "Send",

        inputEmailPassword: "Please enter a 6-20 digit login password",

        inputEmailSurePassword: "Please enter a 6-20 digit login password again",

        inputEmailInviteCode: "Please input promotion code",

        loginJump: "Log in now",

        phoneName: 'Send',

        emailName: 'Send',

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

        phoneForget: "Phone",

        emailForget: "Email",

        phone:'Phone number',
        email:'Email',
        password:'password',
        verifyCode:'Verification code',

        verifyKey: "Please get the verification code first",
        passwordAgin:"The two passwords are inconsistent, please re-enter",
        resend1: "Resend in Seconds",

        resend2: "Resend",

        inputPhone: "Phone number",

        inputVerifyCode: "Verification code",

        sendVerifyCode: "Send",

        inputPassword: "New login password",

        inputSurePassword: "Re-enter password",

        inputEmail: "Email",

        inputEmailVerifyCode: "Verification code",

        sendVerifyEmailCode: "Send",

        inputEmailPassword: "New login password",

        inputEmailSurePassword: "Confirm password",

        forgetBtn: "Reset password",

        regsJump: "Register now",

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

        title: "Commission",

        bonusTotal: "Team Pledge",

        bonusNow: "Promote Power",

        bonusLastDay: "Revenue",

        inviteBonusRecords: "Promotion revenue record",

    },

        //Mining pool dividend

    bonus:{

        title:'Mining pool dividend',

        vip:'Your VIP level',

        number:'Mining pool',

        lastTime:'Next dividend time',

        lastProfit:'Dividend income of mining pool',

        vipArray:[

            'Member',

            'Primary',

            'Intermediate',

            'Advanced',

            'Highest',

        ]



    },

    //count down

    countDown:{

        d:'D',

        h:'H',

        m:'M',

        s:'S',

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

        BeganToDig: 'Start',

        closePledge: 'Cancel',
        addPledge: 'Add',

        minLimit: 'Minimum holding currency',

        pledgeNow: 'Current pledge',

        will: 'Will',

        releasePledge: 'Release pledge',

        pledgeRecord: 'Pledge mining record',

        pledgeNumber: 'Pledge quantity',

        createTime: 'Starting time',

        expiresIn: 'Ending time',

        SuccessfulTransfer:'Successful transfer',
        complete:'complete'

    },

    //Team

    myTeam:{

        title:"Team details",

        teamPledge:'Total pledge of the team',

        addPledge:'New pledge added today',

        teamNumAll:'Total team size',

        invitationRecord:'Invitation record',

        invitationAccount:'Invitation account',

        pledgeAmount:'Team Performance',

    },

    //Pledge pop-up window

    transferInAmount: {

        inMining: 'Participate in mining',

        close: 'cancel',

        availableCount: 'Available quantity',

        inputHolderText: 'Amount',
        Empty:'Amount Empty error',

        allInto: 'All',

        intoIntro: 'The pledge period is 15 days, and it will be automatically unlocked after expiration.',

        into: 'transfer into',

    },

    financierInAmount: {

        inMining: 'transfer into',

        close: 'cancel',

        availableCount: 'Available quantity',

        inputHolderText: 'Amount',
        Empty:'Amount Empty error',

        allInto: 'All transferred in',

        intoIntro: 'The pledge period is 7 days, and it will be automatically unlocked after expiration。',

        into: 'transfer into',

    },

    //Pledge rules

    subRuler: {

        intro: 'Description of pledge mining',

        rulerData: [

            {text: 'Your pledge balance must be greater than 1000 brt in order to obtain pledge income.'},

            {

                text: 'Each pledge period is 15 days. Transfer in is not allowed during the pledge period, and 10% service charge will be deducted for transfer out during the pledge period.'

            },

            {

                text: 'After 15 days, the pledge balance will be automatically transferred to the available balance.'

            },

            {

                text: 'You can deposit more during your pledge duration.'

            }]

    },

    miningEarnings: {

        title: 'Revenue',

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

            {name: "KYC"},

            {name: "Promotion link"},

            {name: "Announcement list"},

            {name: "Contact Us"},

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

        authStatus: "KYC status",

        authAwait: "Pending",

        realName: "Success",

        noRealName: "Pending",

        notReviewed: "Pending",

        realname: "Name",

        realnamePlaceholder: "Name",

        cardNumber: "ID",

        cardNumberPlaceholder: "ID",

        uploadImgText: "Photos of holding legal documents and handwritten notes",

        uploadImgBtn: "Upload photos",

        button: "Submit",

        authentication: "KYC",

        checkArray: [

            {name: "Name"},

            {name: "ID"},

            {name: "Hand held photo"},

        ],

        loading: "Loading...",

    },

    //Set up

    setting: {

        settingText: "Set up",

        noOpen: "Not Yet Open",

        modelText: "Day and night mode",

        day: "Day",

        night: "Night",

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
        noticeDetail:{
            title:'Announcement Detail',
            textTitle:'To BRT Users',
            textSubTitle:'BRT Lab',
        }

    },

    //Contact customer service

    connectUs: {

        content: "BRT Global anonymous public chain, supported by the beilette Foundation， " +

            "We are committed to building the best digital currency ecology in the world by combining credit mortgage mining, quantitative robots, contracts, etc." +

            "and will support the deposit of all valuable digital assets and physical assets.",

        aboutText: "About BRT",

        connectUsText: "Contact us",

        email: "Email",

        connectUser: "Contact Us",

    },
    chooseCountry:{
        title:'choose country'
    },
    chooseLanguage:{
        title:'choose language'
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

        spanNameNew: 'Send',

        spanNameOld: 'Send',

        nowPhoneTitle: "Currently bound mobile phone number：",

        oldPhonePlaceholder: "Please enter Phone Verification Code",

        newPhonePlaceholder: "New Phone Number",

        newPhoneVerifyCode: "Code",



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

        spanNameNew: 'Send',

        spanNameOld: 'Send',

        changeEmailText: "Change E-mail",

        getEmailCode: "Please obtain the phone verification code",

        getNewEmailCode: "Please obtain the verification code of the newly bound mobile phone",

        resend1: "Resend in Seconds",

        resend2: "Resend",

        newEmail: "New Bound E-mail",

        newEmailPlaceholder: "New E-mal",

        newVerifyCodePlaceholder: "New E-mail",

        checkEmailArray: [

            {name: "New Bound Email "},

            {name: " Send"},

            {name: "Code"},

            {name: "E-mail"},

        ]

    },
    //取消质押
    cancelPledge:{
        cancelTitle: 'Cancel',
        close: 'Close',
        pledgeCount: 'Amount',
        inputHolderText: 'Code',
        code: 'Send',
        intoIntro: 'Cancel fee: 10%',
        into: 'Cancel',
        verifyTip: "Get code first",
        verifyCountDown:'sec again'
    }



}

