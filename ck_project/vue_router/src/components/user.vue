<template>
    <div class="user">
        <h3>I am user</h3>
        <!-- <h4>{{ id }}</h4> -->
        <button class="btn btn-primary" @click="gotohome">go to home</button>
        <transition name="fade" mode="out-in" apper>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    // data(){
    //     return {
    //         id : this.$route.params.id
    //     }
    // },
    created(){
        console.log(this.$route)
    },
    // watch : {
    //     $route(to,from){
    //         console.log(to);
    //         console.log(from);
    //         this.id = to.params.id;
    //     }
    // },
    methods : {
        gotohome(){
            // this.$router.push('/')
            this.$router.push({
                path : '/'
            })
        }
    }
}
</script>

<style>
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