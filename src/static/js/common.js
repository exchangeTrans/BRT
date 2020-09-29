import City from './idCardCity.js'
import toast from './dialog.js'

//阻止事件冒泡
export const stopEventBubble = (e) => {
    e.cancelBubble = true;
    stopPropagation(e);
};

function stopPropagation(e) {
    e = window.event || e;
    if (document.all) {  //只有ie识别
        e.cancelBubble = true;
    } else {
        e.stopPropagation();
    }
}


//组装数据
export const packAgeSelectData = (data, codeKey, valueKey) => {
    let selectArray = [];
    data.forEach(obj => {
        let selectObj = {
            ...obj,
            code: obj[codeKey],
            value: obj[valueKey],
        };
        selectArray.push(selectObj)
    });
    return selectArray;
};

//日期处理
export const DateFunc = {
    //isDay  是否只是到天
    nowDate: function (isDay) {
        let date = new Date();
        //年
        let year = date.getFullYear();
        //月
        let month = date.getMonth() + 1;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }

        return resultDate;
    },
    //获取明天
    tomorrowDate: function (isDay) {
        let date = new Date();
        date = new Date(date.valueOf() + 24 * 60 * 60 * 1000);// 当前时间加上
        //年
        let year = date.getFullYear();
        //月
        let month = date.getMonth() + 1;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }

        return resultDate;
    },
    //下个月
    lastMonthDate: function (isDay) {
        let date = new Date();

        //月
        let month = date.getMonth() + 2;
        //年
        let year = date.getFullYear();
        year = month === 13 ? (year + 1) : year;
        month = month === 13 ? 1 : month;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }
        return resultDate;
    },

    //将秒数转换为时分秒格式
    formatSeconds(value) {
        let theTime = parseInt(value);// 秒
        let middle = 0;// 分
        let hour = 0;// 小时
        let result = "";
        if (theTime > 60) {
            middle = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (middle > 60) {
                hour = parseInt(middle / 60);
                middle = parseInt(middle % 60);
            }
        }
        theTime = theTime < 10 ? "0" + theTime : theTime
        if (middle > 0) {
            middle = middle < 10 ? "0" + middle : middle
        } else {
            middle = "00"
        }
        result = middle + ":" + theTime;
        if (hour > 0) {
            hour = hour < 10 ? "0" + hour : hour
            result = hour + ":" + result;
        }
        return result;
    },

    dateDiffIncludeToday: function (sDate1, sDate2) {
        let startTime = sDate1.substr(0, 10);//截取时间
        let endTime = sDate2.substr(0, 10);
        let separator = "-"; //日期分隔符
        let startDates = startTime.split(separator);
        let endDates = endTime.split(separator);
        let startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
        let endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
        let resultDate = parseInt(Math.abs(endDate - startDate) / 86400000);
        resultDate = resultDate < 0 ? -resultDate : resultDate;
        return resultDate;//把相差的毫秒数转换为天数
    },
    //时间加减天
    countDate: function (date, count, isHH) {
        let resultDate = new Date(date);
        resultDate = new Date(resultDate.valueOf() + count * 24 * 60 * 60 * 1000);// 当前时间加上
        // let date=new Date();
        //年
        let year = resultDate.getFullYear();
        //月
        let month = resultDate.getMonth() + 1;
        //日
        let day = resultDate.getDate();
        //时
        let hh = resultDate.getHours();
        //分
        let mm = resultDate.getMinutes();
        //秒
        let ss = resultDate.getSeconds();
        let time = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (isHH) {
            time += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }
        // // console.log(time)
        return time;
    },
    //处理时间
    resetTime(time, isDay) {
        let d = new Date(parseInt(time));
        //年
        let year = d.getFullYear();
        //月
        let month = d.getMonth() + 1;
        //日
        let day = d.getDate();
        //时
        let hh = d.getHours();
        //分
        let mm = d.getMinutes();
        //秒
        let ss = d.getSeconds();
        let times = '';
        if (isDay === 'day') {
            times = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        } else if (isDay === 'ymdhm') {
            times = year + "/" +(month < 10 ? "0" + month : month) + "/" + (day < 10 ? "0" + day : day) + "  " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        } else if (isDay === 'mdhm') {
            times = (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day) + " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        } else if (isDay === 'hms') {
            times = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
        } else {
            times = year + "年" + (month < 10 ? "0" + month : month) + "月" + (day < 10 ? "0" + day : day) + " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        }
        return times;
    },
    //处理时间
    resetTime_getObj(time, isDay) {
        let d = new Date(time);
        //年
        let year = d.getFullYear();
        //月
        let month = d.getMonth() + 1;
        //日
        let day = d.getDate();
        //时
        let hh = d.getHours();
        //分
        let mm = d.getMinutes();
        //秒
        let ss = d.getSeconds();
        let times = '';
        if (isDay === 'day') {
            times = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        } else if (isDay === 'mdhm') {
            times = (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day) + " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        } else if (isDay === 'hms') {
            times = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
        } else {
            times = year + "年" + (month < 10 ? "0" + month : month) + "月" + (day < 10 ? "0" + day : day) + " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        }
        // let formatterTime = 
        let result = {
            viewTime: times,
            year,
            month,
            day,
            hh,
            mm,
            ss
        }
        return result;
    },
    // 发布时间
    releaseTime(recordTime) {
        const duration = (+new Date() - recordTime) / 1000;
        let displayTime = '';
        // if (duration < 60) {
        // displayTime = `${Math.round(Math.max(duration, 1))}秒前`;
        // }else if (duration < 60*60) {
        // displayTime = `${Math.round(duration / 60)}分钟前`;
        // }else if (duration < 60*60*24) {
        // displayTime = `${Math.round(duration / 60 / 60)}小时前`;
        // }else {
        if (duration < 60 * 60 * 24) {
            let hh = DateFunc.resetTime_getObj(recordTime).hh;
            let mm = DateFunc.resetTime_getObj(recordTime).mm;
            displayTime = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);
        } else {
            displayTime = DateFunc.dateTime(recordTime, true);
        }
        return displayTime;
    },
    timeFormatter(duration) {
        let secondTime = parseInt(duration);// 秒
        let minuteTime = 0;// 分
        let hourTime = 0;// 小时
        if (secondTime > 60) { // 如果秒数大于60，将秒数转换成整数
            // 获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            // 获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            // 如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                // 获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                // 获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        let result = ""
        if (secondTime > 0) {
            result = (secondTime > 9 ? secondTime : ('0' + secondTime)) + "秒";
        }
        if (minuteTime > 0) {
            result = (minuteTime > 9 ? minuteTime : ('0' + minuteTime)) + "分钟" + result;
        }
        if (hourTime > 0) {
            result = (hourTime > 9 ? hourTime : ('0' + hourTime)) + "小时" + result;
        }
        return result;
    },
    dateTime(time, isUnit) {
        const times = new Date(time);
        const Y = times.getFullYear();
        let M = times.getMonth() + 1;
        M = M < 10 ? '0' + M : M;
        let D = times.getDate();
        D = D < 10 ? '0' + D : D;
        let res = `${Y}年${M}月${D}日`;
        if (isUnit) {
            res = `${Y}/${M}/${D}`;
        }
        return res;
    },
    /**
     *
     * @param time 时间错
     * @param pattern 转换格式
     * @returns {string}
     */
    dateFormat(time, pattern) {
        var now = new Date(parseInt(time));
        var o = {
            "M+" : now.getMonth()+1,                 //月份
            "d+" : now.getDate(),                    //日
            "h+" : now.getHours(),                   //小时
            "m+" : now.getMinutes(),                 //分
            "s+" : now.getSeconds(),                 //秒
            "q+" : Math.floor((now.getMonth()+3)/3), //季度
            "S"  : now.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(pattern))
            pattern=pattern.replace(RegExp.$1, (now.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(pattern))
                pattern = pattern.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return pattern;

    },


    //秒转化为小时

    secondToHour(num) {
        let hour = (num / 3600).toFixed(2);
        return hour
    }

};

//模糊判断数据属于与否
export const findObjByKey = (dataArray, key, value, isBelong) => {
    let result = false;
    if (dataArray.length > 0) {
        dataArray.some(element => {
            let isReturn = false;
            isReturn = (String(element[key]).toLowerCase() === String(value).toLowerCase());
            if (isBelong) {
                isReturn = (element[key].indexOf(value) != -1);
            }
            if (isReturn) {
                result = element;
            }
            return isReturn
        });
    }

    return result;
};

/*//验证是否为手机号
export const isPoneAvailable = (pone) => {
    // eslint-disable-next-line no-useless-escape
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return myreg.test(pone);
};*/
/*//验证是否为邮箱
export const isEmailAvailable = (emailInput) => {
    // eslint-disable-next-line no-useless-escape
    let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return myreg.test(emailInput);
};*/

//检查数据
export const checkDataFunc = {
    //身份证号验证
    idcard(data) {
        // let pass = true;
        // let that = this;
        let idcard = data.trim();
        //身份证号合法性验证
        //支持15位和18位身份证号
        //支持地址编码、出生日期、校验位验证
        // let tip = "";
        let home = "";
        let birthday = "";
        let sex = "";
        let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        let city = City;
        if (!idcard || !idcard.match(reg)) {
            return false;
        } else if (!city[idcard.substr(0, 2)]) {
            return false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (idcard.length == 18) {
                idcard = idcard.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                let ai = 0;
                let wi = 0;
                for (let i = 0; i < 17; i++) {
                    ai = idcard[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                // let last = parity[sum % 11];
                if (parity[sum % 11] != idcard[17]) {
                    return false;
                }
            }
        }
        //省份
        home = city[data.substring(0, 2)];
        //生日
        birthday = data.substring(6, 10) + '-' + data.substring(10, 12) + '-' + data.substring(12, 14);
        //性别
        if (data.length == 15) {
            sex = data.substring(14, 15) % 2 == 0 ? '女' : '男';
        } else if (data.length == 18) {
            sex = data.substring(14, 17) % 2 == 0 ? '女' : '男';
        }
        return {
            birthday, home, sex
        };
    },
    //基础检查数据   长度length  数字isNumber  是否为空isNull
    //检查的均为object类型 data Obj
    //检查来源为数组 checkArray  Array
    //checkArray中对象格式
    // obj ={
    // 	name:"用户名",
    //	checkKey:"username"
    // 	checkType:["isNumber"],//默认检查是否为空  长度length  数字isNumber  是否为空isNull  手机号isPhone  手机号isEmail  身份证号isIdcard
    //   minLength:6
    //   maxLength:6
    // }
    checkBasics: function (data, checkArray) {
        let __that = this;
        //电话
        let regPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
        //邮箱
        let regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        //身份证
        // let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        // let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        let isReturn = true;
        checkArray.some(element => {
            let checkType = element.checkType ? element.checkType : ["isNull"];
            let checkVal = data[element.checkKey].toString();
            //先判断空
            isReturn = true;
            if (!checkVal || checkVal === null || checkVal === undefined || checkVal.trim() === "") {
                toast.show({
                    title: element.name + "不能为空"
                });
                // that.$bus.$emit('tip', {text: element.name + "不能为空", type: 'error'});
                isReturn = false
            } else {
                checkType.some(item => {
                    if (item === "isNumber") {
                        if (parseFloat(checkVal).toString() === "NaN") {
                            toast.show({title: element.name + "不正确"});
                            // that.$bus.$emit('tip', {text: element.name + "不正确", type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "length") {
                        let minLength = element.minLength ? element.minLength : 6;
                        let maxLength = element.maxLength ? element.maxLength : 20;

                        if (minLength && checkVal.length < minLength) {

                            toast.show({title: element.name + "长度不能小于" + minLength});
                            // that.$bus.$emit('tip', {text: element.name + "长度不能小于" + minLength, type: 'error'});
                            isReturn = false
                        }
                        if (maxLength && checkVal.length > maxLength) {
                            toast.show({title: element.name + "长度不能大于" + maxLength});
                            // that.$bus.$emit('tip', {text: element.name + "长度不能大于" + maxLength, type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "isPhone") {
                        if (!regPhone.test(checkVal)) {
                            toast.show({title: element.name + "格式不正确"});
                            // that.$bus.$emit('tip', {text: element.name + "格式不正确", type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "isEmail") {
                        if (!regEmail.test(checkVal)) {
                            toast.show({title: element.name + "格式不正确"});
                            // that.$bus.$emit('tip', {text: element.name + "格式不正确", type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "isIdcard") {
                        let pass = __that.idcard(checkVal);
                        if (!pass) {
                            toast.show({title: element.name + "格式不正确"});
                            // that.$bus.$emit('tip', {text: element.name + "格式不正确", type: 'error'});
                            isReturn = false
                        }
                    }
                    return !isReturn;
                })
            }
            return !isReturn;
        });
        return isReturn
    },

    //检查数组
    checkArrayData: function (data, checkArray) {
        let isReturn = false;
        if (!data || data === null || data.length === 0) {
            toast.show({title: "未选择或填写任何数据"});
            // that.$bus.$emit('tip', {text: "未选择或填写任何数据", type: 'error'});
            return isReturn;
        }
        data.some(element => {
            isReturn = this.checkBasics(element, checkArray);
            return !isReturn
        });
        return isReturn;
    }


};

//分转为元

export const moneyConversion = {
    Fen2Yuan(num) {
        if (typeof num !== "number" || isNaN(num)) return null;
        return (num / 100).toFixed(2);
    },
    Yuan2Fen(num) {
        if (typeof num !== "number" || isNaN(num)) return null;
        return (num * 100);
    }
}
//nvue vue共享数据处理
export const gloabeData = {
    set(obj) {
        for (let key in obj) {
            try {
                // eslint-disable-next-line no-undef
                getApp().globalData[key] = obj[key];
            } catch (error) {
                // console.log(error)
            }
            // getApp().globalData.NIM = "test"
        }
    },
    get(key) {
        // eslint-disable-next-line no-undef
        let result = getApp().globalData;
        if (key) {
            // eslint-disable-next-line no-undef
            result = getApp().globalData[key]
        }
        // let result = getApp().globalData[key]
        if (result && result !== undefined) {
            return result;
        }
        return false;
    },
    remove(key) {
        if (key) {
            try {
                // eslint-disable-next-line no-undef
                getApp().globalData[key] = null;
            } catch (error) {
                // console.log(error)
            }
            // getApp().globalData.NIM = "test"
        }
    },
};

//提示信息再封装
export const showMsg = {
    hint(msg) {
        let showMsg = {title: msg};
        toast.show(showMsg);
    }
};




