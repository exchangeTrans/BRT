import Vue from 'vue'
import App from './App'
import monitorFunc from './static/js/monitorFunc.js';
import datastorage from './static/js/datastorage.js';
import toast from "./static/js/dialog.js";
import store from './store/index.js'
import './static/style/common.css';
import jumpPage from './static/js/jumpPage.js';
import mySocket from './static/js/webSocket/index.js';
import VueI18n from 'vue-i18n' 
import lang from './static/lang/index.js';
import request from './request/index.js';

Vue.use(VueI18n);
Vue.config.productionTip = false;

App.mpType = 'app'
Vue.prototype.$toast = toast;
Vue.prototype.$request = request;
Vue.prototype.$monitor = monitorFunc;
Vue.prototype.$storage = datastorage;
Vue.prototype.$jumpPage = jumpPage;
Vue.prototype.$mySocket = mySocket;

const i18n = new VueI18n({  
  locale: datastorage.getSync({key:'lang'}) ? datastorage.getSync({key:'lang'}) : 'zh-CN',  
  messages: {  
    'en-US': lang.en,  
    'zh-CN': lang.cn,
    "ko-KR":lang.kr
  }  
})  
Vue.prototype._i18n = i18n  

const app = new Vue({
  i18n,
  ...App,
  store
  
})
app.$mount()
