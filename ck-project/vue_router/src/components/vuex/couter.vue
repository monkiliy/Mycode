<template>
    <div>
        <!-- <button class="btn btn-primary" @click="increase">count++</button> -->
        <!-- <button class="btn btn-primary" @click="decrease">count--</button> -->
        <!-- 使用mapactions辅助函数 -->
        <button class="btn btn-primary" @click="actionIncrease(5/*pamrameter*/)">count++</button>
        <button class="btn btn-primary" @click="actionDecrease(-5/*pamrameter*/)">count--</button>
    </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'

export default {
    
    methods : {
        // increase(){
        //     // this.$emit('updata',1);

        //     // this.$store.state.count++; 不能直接改变 state的值

        //     // this.$store.commit('increaseCount',5) //使用mutations改变数据

        //     this.$store.dispatch('actionIncrease',/* parameter */)//除法actions 异步请求 请求回来后 再执行mutations 改变数据
        // },
        // decrease(){
        //     // this.$emit('updata',-1);

        //     // this.$store.state.count--;

        //     // this.$store.commit('decreaseCount',-5)

        //     this.$store.dispatch('actionDecrease',/* parameter */)
        // }
        ...mapActions(['actionIncrease','actionDecrease']),
        ...mapMutations(['increaseCount','decreaseCount'])
    }
}
</script>

