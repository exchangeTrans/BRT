let monitorFunc={
    emit:function (eventName,data) {// 触发全局的自定事件。附加参数都会传给监听器回调。
        // eslint-disable-next-line no-undef
        uni.$emit(eventName,data)
    },
    on:function (eventName,callback) {// 监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数
        // eslint-disable-next-line no-undef
        uni.$on(eventName,function(data){
            if(callback){
                callback(data)
                // eslint-disable-next-line no-undef
            }
        })
    },
    once:function (eventName,callback) {//监听全局的自定义事件。事件可以由 uni.$emit 触发，但是只触发一次，在第一次触发之后移除监听器。
        // eslint-disable-next-line no-undef
        uni.$once(eventName,function(data){
            if(callback){
                callback(data)
                // eslint-disable-next-line no-undef
            }
        })

    },
    off:function (evenetArray) {//移除全局自定义事件监听器。
        // eslint-disable-next-line no-undef
        uni.$off(evenetArray)

    },
}
// eslint-disable-next-line no-undef
// uni.$monitor = monitorFunc;
export default monitorFunc
