<template>
    <div class="user-detail">
        <h1>user edit</h1>    
        <h3>{{ id }}</h3>
        <h1>{{ $route.query.a}}</h1>
        <h1>{{ $route.query.b}}</h1>
        <button @click="confirm = true">click me</button>
        <div style="height:1000px"></div>
        <button class="btn btn-primary" id="btn">button</button>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            confirm : false
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('edit luyou');
        // next();
        console.log(this)//undefined
        next((vm)=>{
            //可以获取当前组件vm实例
            console.log(vm);
        });
    },
    beforeRouteLeave(to,from,next){
        if(this.confirm){
            next();
        }else{
            if(confirm('你确定走')){
                next();
            }else{
                next(false)
            }
        }
        // next();
    },
    data(){
        return {
            id : this.$route.params.id
        }
    },
    created(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>