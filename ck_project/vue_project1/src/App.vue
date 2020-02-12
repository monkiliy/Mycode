<template>
  <div class="container">
    <header>
      <ljh-header></ljh-header>
      <h1>管理员： {{ myName | toUpperCase | toLowerCase }}</h1>
      <p>parentName : {{ parentName }}</p>
      <p>parentName1 : {{ parentName1 }}</p>
      <p>allPropsSex : {{ sex }}</p>
      <p v-changeColor.delay="'red'">全局自定义事件</p>
      <p v-bg = '"green"'>局部自定义事件</p>
      <input type="text" v-model = 'inputText'>
      <ul>
        <li v-for = 'fruit in fruitFilter' :key='fruit'>{{ fruit}}</li>
      </ul>
    </header>
    <section>
      <ljh-server :sex='sex'>
        <h4 slot="title" id="slot-h4">server #1</h4>
        <h5 slot="title" id="slot-h5">server #2</h5>
        <p> {{ myName }} </p>
        <P> {{ parentName }}</P>
      </ljh-server>
      <!-- 注意 使用普通的vue创建的项目 自定义标签组件的属性名不能使用驼峰式写法 不能识别 使用vue-cli可以写驼峰式写法指的是属性名 -->
      <ljh-server-detail @changeAllProps='changeAllProps' :sex='sex' :name='myName' :myAge="age" @changeParentName = 'changeParentName' :changeParentName1 = 'changeParentName1'></ljh-server-detail>
    </section>
    <footer>
      <ljh-footer></ljh-footer>
    </footer>
    <!-- 动态组件的使用 -->
    <div class="container">
      <button @click="selected='ljh-server1'">server1</button>
      <button @click="selected='ljh-server2'">server2</button>
      <button @click="selected='ljh-server3'">server3</button>
      <p>{{ selected }}</p>
      <br>
      <keep-alive>
        <component :is='selected'></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Server from './server.vue'
import ServerDetail from './serverDetail.vue'
import server1 from './server1.vue'
import server2 from './server2.vue'
import server3 from './server3.vue'
export default {
  filters : {
    toUpperCase(value){
      console.log(this)//undefined
      //不能获取vue实例 filter只能进行一些简单的筛选
      return value.toUpperCase();
    }
  },
  directives : {
    'bg' : (el,binding)=>{
      el.style.backgroundColor = binding.value;
    }
  },
  computed : {
    /* fruitFilter : ()=>{
      console.log(this);//undefined
      return this.fruitArr.filter((fruit)=>{
        return fruit.match(this.inputText);
      })
    } */
    fruitFilter(){
      return this.fruitArr.filter((fruit)=>{
        return fruit.match(this.inputText);
      })
    }
  },
  components : {
    'ljh-server': Server,
    'ljh-server-detail': ServerDetail,
    'ljh-server1' : server1,
    'ljh-server2' : server2,
    'ljh-server3' : server3
  },
  data(){
    return {
      myName : 'liujianghua liujianghua',
      age : 18,
      parentName : 'xiaohong',
      parentName1 : 'honghong',
      sex : 'male',
      selected : 'ljh-server1',
      inputText : '',
      fruitArr : ['apple','banana','mongo','orange']
    }
  },
  methods : {
    //改变父组件的值 第一方法 子组件自定义事件并传入值 父组件绑定自定义事件 后执行绑定的函数 通过父组件绑定的函数 来改变父组件的值
    changeParentName(childChangeName){
      this.parentName = childChangeName;
    },
    //改变父组件的值 第二方法 通过父组件往子组件传值 传入一个函数 在子组件调用函数 并传入值 调用函数会执行父组件的函数 通过父组件的函数来改变父组件的值
    changeParentName1(childChangeName){
      this.parentName1 = childChangeName;
    },
    // 同级组件传值
    changeAllProps(childChangeName){
      this.sex = childChangeName;
    }
  }
}
</script>

<style scoped>
  /* slot内容分发注意点 */
  /*  1.slot传入的标签 父组件 和子组件都可以设置样式 
      2.可以在slot中使用变量 以及vue语法
  */
  #slot-h4{
    color:  red;
    border: 1px solid red;
  }
  #slot-h5{
    border: 1px solid green;
    color: green;
  }
  header{
    text-align: center;
  }
  section{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container{
    width: 1226px;
    margin: 0 auto;
  }
  div{
    margin: 10px;
  }
</style>
