// 入口文件
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload"

axios.defaults.baseURL='http://www.2yue.cc/index.php/';
axios.defaults.timeout=8000;
axios.defaults.headers.appkey='f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM';

// 拦截
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
 
  
  
Vue.use(VueAxios,axios);
 // 懒加载
Vue.use(VueLazyload,{
	  loading:'/images/loading-svg/loading-balls.svg'
  });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


