import alert from './alert.vue'

export default {
  install(Vue){
    let func=(config)=>{
      let alertElement  = document.createElement('div');
      document.body.appendChild(alertElement);
      let vm=new Vue({
        render:(createElement)=>{
          return  createElement(alert,{props:config});
        }
      })
       vm.$mount(alertElement);
    };
    Vue.prototype.$alert = func;
    Vue.alert =func;
  }

}
