// 入口文件
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import BScroll from "better-scroll";

axios.defaults.baseURL='http://www.2yue.cc/index.php/';
axios.defaults.timeout=8000;
axios.defaults.headers.appkey='f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM'

axios.interceptors.response.use(function (response) {
   const res=response.data
   if(res.error_code===0){
	   return res.data||''
   }else{
	   console.error("获取失败")
   }
    
  }, function (error) {
    
    return Promise.reject(error);
  });
Vue.use(VueAxios,axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


