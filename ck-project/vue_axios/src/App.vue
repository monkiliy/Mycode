<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>{{name}}{{ password }}</p>
    <input type="text" v-model="name">姓名
    <input type="text" v-model="password">密码
    <button @click="axios">click me</button>
    <button @click="getData">get</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'app',
  data(){
    return {
      name : '',
      password : ''
    }
  },
  components: {
    HelloWorld
  },
  methods :{
    axios(){
      console.log(this);
      const data = {
        Name : this.name,
        Password : this.password
      }
      // axios.post('https://vue-axios-ab506.firebaseio.com/test.json'
      axios.post('/test.json',/*请求头第二个参数*/data).then((data)=>{
        console.log(data);
        console.log('done')
      },()=>{
        console.log('error')
      })
    },
    getData(){
      axios.get('https://vue-axios-ab506.firebaseio.com/test.json').then((data)=>{
        console.log(data);
      },()=>{
        console.log('error')
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
