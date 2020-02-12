<template lang="">
    <div>
        <h3>server detail</h3>
        <h5>{{ name }} {{ age }}</h5>‘
        <button @click = 'changeName'>changeName</button>
        <button @click = 'changeAge'>changeAge</button>
        <button @click = 'changeParentName'>changeParentName</button>
        <button @click = 'changeParentName1("huahua")'>changeParentName1</button>
        <P>sex : {{ sex }} comSex : {{ comSex }}</P>
        <button @click='changeAllProps'>changeAllProps</button>
        <p>{{ height }}</p>
    </div>
</template>

<script>
import {EventBus} from './main.js'
export default {
    //props数组字符串是 组件标签的自定义属性 的属性名 二者相匹配才能传递数据
    // 注意props里面存储的是字符串 但是实际是变量
    // props : ['name','myAge'],
    // props 验证
    props : {
        // name : String,
        name : {
            type : String,
            required : true,//表示属性是否必须传
            default : 'liujianghua'//与上面的属性 自能存一 没有值传入是 使用默认值
            //如果type是一个对象那么defaul必须是一个函数 函数返回值返回一个对象 表示默认值
        },
        myAge : [String, Number],
        changeParentName1 : {
            type : Function
        },
        sex : {
            type : String
        }
    },
    data(){
        return {
            // 不能直接改变传入的值 但是重新存储一下 可以进行改变
            age : this.myAge,
            comSex : this.sex,
            height : 180
        }
    },
    methods : {
        //可以对父组件传入的值进行改变 但是这是不太好的 会报错 不应该直接改变传入的值
        changeName(){
            this.name = 'liu  jiang  hua'
        },
        changeAge(){
            this.age = '20'
        },
        changeParentName(){
            // this.name = 'xiaoming' 不能直接改变父级传过来的值 
            this.$emit('changeParentName','xiaoming')

        },
        changeAllProps(){
            this.$emit('changeAllProps','female')
        }
    },
    created(){
        EventBus.$on('changeHeight',(height)=>{
            this.height = height;
        })
    }
}
</script>

<style scoped lang="css">
    h3,h5{
        margin: 0;
        padding: 0;
    }
    div{
        border: 1px solid green;
        width: 500px;
        height: 740px;
        text-align: center;
        line-height: 140px;
        color: blue;
    }
</style>