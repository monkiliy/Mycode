<template>
    <div class="user-detail">
        <h1>user detail</h1>    
        <h3>{{ id }}</h3>
        <router-link :to="`/user/${id}/edit`" class="btn btn-primary">edit</router-link>
        <router-link :to="{name : 'userEdit', params :{id : $route.params.id} , query : {a:1,b:2},hash:'#btn'}"
        class="btn btn-primary">edit</router-link>
        <button @click="fun">click me</button>
    </div>    
</template>

<script>
export default {
     data(){
        return {
            id : this.$route.params.id
        }
    },
    methods : {
        fun(){
            console.log(this.id);
        }
    }
}
</script>

<style>

</style>
