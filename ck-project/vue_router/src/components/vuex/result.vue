<template>
    <div>
        <p class="result">result : {{ count1 }}</p>
        <p>value1 : {{ value1 }}</p>
        <p>{{ doubelCount }}</p>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
// console.log(mapState,mapGetters,mapMutations,mapActions);
const data = mapState(['count','value']);
console.log(data);
// data 是一个对象 相当于
/* {
    count(){
        return this.$store.state.count;
    },
    value(){
        return this.$store.state.value;
    }
} */
export default {
    // computed : {
    //     count(){
    //         // return this.$store.state.count * 2;
    //         return this.$store.getters.doubelCount;
    //     }
    // },
    // props : ['count']
    computed : {
        // ...mapState(['count','value']),
        ...mapState({
            count1 : (state)=>{
                return state.count;
            },
            value1 : (state)=>{
                return state.value;
            }
        }),
        ...mapGetters(['doubelCount'])
    }
}
</script>
