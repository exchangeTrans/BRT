import store from '@/store/index.js';

export const changeMoney = (changeObj) => {
    /*
    let changeObj = {
        firstCode,//第一个单位
        lastCode,//第二个单位
        asset,//用户的钱 USDT
    }
    */
    // debugger
    // let selectedCurrency = store.state.defaultData.selectedCurrency;
    let code = changeObj.firstCode + changeObj.lastCode;
    let rangeList = store.state.defaultData.rangeData;//获取汇率
    let asset = Number(changeObj.asset).toFixed(2)
    let price = (Number(rangeList[code]) * Number(changeObj.asset)).toFixed(2);
    // console.log(price);

    return {
        firstCode: changeObj.firstCode,
        lastCode: changeObj.lastCode,
        asset: asset,
        price: price,
    }
}

export const getMoney = (money,firstCode,lastCode) => {
    // debugger
    /*
    let changeObj = {
        firstCode,//第一个单位
        lastCode,//第二个单位
        asset,//用户的钱 USDT
    }
    */
//    debugger

    let rangeList = store.state.defaultData.rangeData;
    let selectedCurrency = lastCode?lastCode:store.state.defaultData.selectedCurrency.code;
    
    let toUSDTCode = firstCode + 'USDT'
    let toUSDTRange = firstCode==='USDT'?1:rangeList[toUSDTCode];
    let toMoneyCode = "USDT" + selectedCurrency;
    let toMoneyRange = rangeList[toMoneyCode]
    let asset = money.replace(/,/g,"");
    let price = 0;
    if(toUSDTRange&&toMoneyRange){
        price = (Number(toUSDTRange) * Number(toMoneyRange) * Number(asset)).toFixed(2);
    }
    
    // console.log(price);

    return {
        firstCode: firstCode,
        lastCode: selectedCurrency,
        asset: asset,
        price: price,
    }
}