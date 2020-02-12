<template lang="">
    <div>
        <ul>
            <li v-for = 'index in 5' :key='index'>server : #{{ index }}</li>
            <p> sex : {{ sex }} comSex : {{ comSex }}</p>
            <button @click = 'changeHeight'>changeHeight</button>
            <p>{{ height }}</p>
            <div class='title'>
                <slot name='title'></slot>
            </div>
            <div class='article'>
                <slot></slot>   
                <!-- 父组件没有传入命名的slot那么会显示默认的slot内容 -->
                <!-- 父组件有传入会把默认的覆盖 -->
                <slot name='default'>这是默认的200px</slot>
            </div>
        </ul>
    </div>
</template>

<script>
import {EventBus} from './main.js'
export default {
    props : {
        sex : String
    },
    data(){
        return {
            comSex : this.sex,
            height : 180
        }
    },
    methods :{
        changeHeight(){
            this.height = 185
            EventBus.$emit('changeHeight',185)
        }
    }
}
</script>

<style scoped>
    div{
        border: 1px solid red;
        width: 500px;
        height: 740px;
    }
    .title{
        height: 200px;
    }
    .article{
        height: 200px;
    }
</style>