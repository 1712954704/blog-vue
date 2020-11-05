import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n/i18n";
import "./assets/css/global.css";

import axios from 'axios';
Vue.prototype.$axios = axios;    //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false;

Vue.use(ElementUI, { size: "small", zIndex: 3000 });

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
