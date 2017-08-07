// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import alert from  './plugins/alert/alert.js'

//请求的全局设置
axios.interceptors.request.use(function (config) {
  if(!_.endsWith(config.url,'/login')){
    let accessToken=VueCookie.get("access_token");
    config.headers.common['Authorization'] = accessToken;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  if(response.data.status===403){
    VueCookie.delete("access_token");
    router.push({path: '/login'});
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

//验证
// const validator={
//   events: 'blur'
// }
// Vue.use(VeeValidate,validator);
Vue.use(VeeValidate);

//Cookie
Vue.use(VueCookie);

Vue.use(alert);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
