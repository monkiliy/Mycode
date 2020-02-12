<template>
  <div id="app">
    <div class='container'>
      <h1>animation</h1>
      <button class="btn btn-primary" @click = 'show = !show'>click me</button>
      <br> <br>
      <transition name='fade' appear>
        <div v-if = 'show' class="alert alert-info">我是一条提示1</div>
      </transition>
      <transition name='slide' appear>
        <div v-if = 'show' class="alert alert-info">我是一条提示2</div>
      </transition>
      <transition
       enter-class="enter"
       enter-active-class="enter-active"
       enter-to-class="to"
       leave-active-class=""
       appear>
        <div v-if = 'show' class="alert alert-info">我是一条提示3</div>
      </transition>
      <transition
       enter-active-class="animated bounce"
       leave-active-class="animated shake"
       appear>
        <div v-if = 'show' class="alert alert-info">我是一条提示4</div>
      </transition>
    </div>
    <br><br>
    <hr>
    <div class="container">
      <button class="btn btn-primary" @click='load = !load'>click me</button>
      <transition
        @before-enter = 'beforeEnter'
        @enter = 'enter'
        @after-enter = 'afterEnter'
        @enter-cancelled = 'enterCancelled'
        @before-leave = 'beforeLeave'
        @leave = 'leave'
        @after-leave = 'afterLeave'
        @leave-cancelled = 'leaveCancelled'
        :css="false"
      >
        <div v-if="load" style="width:100px;height:100px;background-color:red">
          
        </div>
      </transition>
      <hr><hr>
      <button @click='change' class="btn primary">change components</button>
      <hr><hr>
      <transition name="fade" mode="out-in">
        <component :is="selectedCom"></component>
      </transition>
      <button class="btn btn-primary" @click="addItem">click me</button>
      <transition-group name="slide" tag="ul" class="list-group">
        <li class="list-group-item" style="cursor:pointer" @click="removeItem(index)" v-for="(list,index) in lists" :key='index'>{{ list }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
import danger from './components/danger.vue'
import success from './components/success.vue'

export default {
  name: 'app',
  data(){
    return {
      show : false,
      load : false,
      divWidth : 100,
      selectedCom : 'appDanger',
      lists :[1,2,3,4,5]
    }
  },
  components : {
    appDanger : danger,
    appSuccess : success
  },
  methods : {
    addItem(){
      let random = Math.floor(Math.random()*this.lists.length);
      this.lists.splice(random,0,this.lists.length + 1)
    },
    removeItem(index){
      this.lists.splice(index,1)
    },
    change(){
      console.log('s')
      return this.selectedCom === 'appDanger' ? this.selectedCom = 'appSuccess' : this.selectedCom = 'appDanger';
    },
    beforeEnter(el){
      console.log('beforeEnter')
      this.divWidth = 100
    },
    enter(el,done){
      console.log('enter');
      let round = 0;
      const timer = setInterval(()=>{
        el.style.width = (this.divWidth + round*10) + 'px';
        round++;
        if(round == 20){
          clearInterval(timer);
          done();
        }
      },20)
    },
    afterEnter(el){
      console.log('afterEnter')
      el.style.widht = '300px';
      this.divWidth = 300;
    },
    enterCancelled(el){
      console.log('enterCancelled')
    },
    beforeLeave(el){
      console.log('beforeLeave')
      this.divWidth = 300;
    },
    leave(el,done){
      console.log('leave');
      let round = 0;
      const timer = setInterval(()=>{
        el.style.width = (this.divWidth - round*10) + 'px';
        round++;
        if(round == 20){
          clearInterval(timer);
          done();
        }
      },20)
    },
    afterLeave(el){
      this.divWidth = 100
      el.style.width = '300px';
      console.log('afterLeave')
    },
    leaveCancelled(el){
      console.log('leaveCancelled')
    }
  }
  
} 
</script>

<style lang="scss">
  .enter{
    opacity: 0;
  }
  .enter-active{
    transition: opacity 1s;
  }
  .to{
    opacity: 1;
  }
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
    transition: opacity 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter{
    opacity: 0;
    transform: translateY(20px);
  }
  .slide-enter-active{
    transition: opacity 1s;
    animation: move 1s ease-in;
  }
  .slide-enter-to{
    opacity: 1;
     transform: translateY(0);
  }
  .slide-leave{
    opacity: 1;    
    transform: translateY(0);
  }
  .slide-leave-active{
    transition: opacity 1s;
    animation: move-out 1s ease-out;
  }
  .slide-leave-to{
    opacity: 0;
    transform: translateY(20px)
  }
  @keyframes move{
    from {
      transfrom : translateY(-20px);
    }
    to {
      transfrom : translateY(0)
    }
  }
  @keyframes move-out{
    from{
      transfrom : translateY(0);
    }
    to {
      transfrom : translateY(20px)
    }
  }
</style>
