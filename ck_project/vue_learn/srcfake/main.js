import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Server from './server.vue'
Vue.component('app-server',Server)
new Vue({
  // render: h => h(App),
  /* render : function(h){
    return h(App);
  } */
  render : function(createElement){
    return createElement(App)
  }
}).$mount('#app')
//模板 - 编译 -> ast树 -> 绑定数据 -> render函数 -> 虚拟dom -> 真实的html