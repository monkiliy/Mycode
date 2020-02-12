import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL = 'https://vue-axios-ab506.firebaseio.com'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.interceptors.request.use(config => {
  console.log(config);
  return config //可以继续请求
})
// axios.defaults.header.post  get
new Vue({
  render: h => h(App),
}).$mount('#app')
