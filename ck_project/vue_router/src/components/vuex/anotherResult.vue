<template>
    <div>
        <p class="result">AnotherResult : {{ count }}</p>
        <p>value : {{ value }}</p>
        <p>{{ doubelCount }}</p>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    // computed : {
    //     count(){
    //         // return this.$store.state.count * 2; //不能直接改变 store.state的值
    //         return this.$store.getters.doubelCount;
    //     }
    // },
    // props : ['count']
    computed : {
        ...mapState(['count','value']),
        ...mapGetters(['doubelCount'])
    }
}
</script>
