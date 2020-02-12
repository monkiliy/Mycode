import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Header from './header.vue'
import Footer from './footer.vue'
Vue.component('ljh-header',Header);
Vue.component('ljh-footer',Footer);
//filter只有2个使用场景 1 . {{ 数据绑定 }} 2. v-bind
Vue.filter('toLowerCase',(value)=>{
  return value.toLowerCase();
})

Vue.directive('changeColor',{
  bind: (el, binding)=>{
    let delay = 0;
    if(binding.modifiers.delay){
      delay = 3000;
      setTimeout(()=>{
        if(binding.value == 'red'){
          el.style.color = 'red';
        }
      },delay)
    }else{
      if(binding.value == 'red'){
        el.style.color = 'red';
      }
    }
  }
})
export const EventBus = new Vue();
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