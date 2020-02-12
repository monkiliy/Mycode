import axios from 'axios'
const instance = axios.create()
instance.defaults.baseURL = 'https://vue-axios-ab506.firebaseio.com'
// instance.defaults.headers
export default instance

// 可以创建多个axios实例 实现不同的继承配置