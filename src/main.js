import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from "axios"
// 引入nanoid
import { nanoid } from 'nanoid'

Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.use(ElementUI)
axios.defaults.baseURL = 'https://www.fastmock.site/mock/9dc09422c06937432d329fe5d2893ef9/hszl'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')