<template>
  <div id="app">
    <h1>I am router</h1>
    <!-- <ljh-header></ljh-header> -->
    <router-view name="header-top"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <hr><hr>
    <br>
    <!-- 使用自定义事件调用父组件函数 自定义事件传入的参数 在定义事件的一个参数params 而$event是undefined -->
    <!-- <ljh-count @updata = 'changeCount'></ljh-count> -->

    <!-- 使用下列方法 虽然自定义事件只传入一个参数 但是$event有特殊含义 所以第一个参数存储在$event中 params是undefined -->
    <!-- <ljh-count @updata="changeCount(params,$event)"></ljh-count> -->

    <!-- 当自定义事件只传入一个参数的时候 可以使用$event代替第一个参数 -->
    <!-- <ljh-count @updata = 'count += $event'></ljh-count> -->
    <ljh-count></ljh-count>
    <br>
    <hr>
    <ljh-result></ljh-result>
    <ljh-another></ljh-another>
    <br><br>
    <hr>
    <!-- 使用分布来双向数据绑定 -->
    <!-- <input type="text" :value="valueGetters" @input="actionsValue($event.target.value)"> -->
    <!-- 通过设置计算属性来 实现b-model双向数据绑定 -->
    <input type="text" name="" id="" v-model="valueGetters">
    <p>{{ valueGetters }}</p>
  </div>
</template>

<script>
import header from './components/header.vue'
import Count from './components/vuex/couter.vue'
import result from './components/vuex/result.vue'
import Another from './components/vuex/anotherResult.vue'
import {mapGetters,mapActions} from 'vuex'
// console.log(mapActions(['actionValue']))
// const actionValue = mapActions(['actionValue']);
export default {
  name: 'app',
  computed : {
    // ...mapGetters(['valueGetters'])
    valueGetters : {
      get(){
        return this.$store.getters.valueGetters;
      },
      set(num){
        this.$store.dispatch('actionsValue',num)
      }

    }
  },
  data(){
    return {
      count : 0
    }
  },
  
  components : {
    'ljh-header' : header,
    'ljh-count'  : Count,
    'ljh-result' : result,
    'ljh-another' : Another

  },
  methods : {
    changeCount(params,$event){
      console.log($event);
      this.count += params;
    },
    ...mapActions(['actionsValue'])
  }
}
</script>

<style lang="scss">
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition : opacity 1s;
  }
  .fade-leave-to{
    opacity: 0;
  }
</style>
