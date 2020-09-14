import Vue from 'vue'
import App from './App'
import monitorFunc from './static/js/monitorFunc.js';
import datastorage from './static/js/datastorage.js';
import toast from "./static/js/dialog.js";
import store from './store/index.js'
import './static/style/common.css';
import jumpPage from './static/js/jumpPage.js';

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$toast = toast;
Vue.prototype.$monitor = monitorFunc;
Vue.prototype.$storage = datastorage;
Vue.prototype.$jumpPage = jumpPage;

const app = new Vue({
  ...App,
  store
})
app.$mount()
