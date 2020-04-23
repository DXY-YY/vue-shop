import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/index.vue";
import Classify from "../pages/classify/index.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/classify",
    name: "Classify",
    component: Classify
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass:"on"
});

export default router;
