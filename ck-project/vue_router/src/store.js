import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
console.log(Vuex);
export default new Vuex.Store({
    state : {
        count : 1000,
        value : 10
    },
    getters : {
        doubelCount(state){
            return state.count * 2
        },
        valueGetters(state){
            return state.value;
        }
    },
    mutations : {
        // mutations 不能进行异步改变数据 只能用actions
        increaseCount(state,num){
            // state.count++;
            state.count += num;
        },
        decreaseCount(state,num){
            // state.count--;
            state.count += num;
        },
        changeValue(state,num){
            state.value = num;
        }
    },
    actions : {
        //actions 使用异步操作
        actionIncrease(context, num/*parameter*/){
            console.log(context);
            //模拟异步  axios请求数据回来后 再进行mutations 来进行数据改变
            setTimeout(()=>{
                context.commit('increaseCount',num/*5*/);
            },1000)
        },
        actionDecrease(context,num){
            setTimeout(()=>{
                context.commit('decreaseCount',/*-5*/num);
            },1000)
        },
        actionsValue({commit},num){
            commit('changeValue',num);
        }

    },
    modules : {
        // 模块名 ：引入的模块
        // count : count
    }
    
})