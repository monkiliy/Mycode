<template>
    <div class="user-start">
        <ul>
            <router-link tag="li" :to="'/user/'+index" class="alert alert-success" v-for='index in 5' :key="index">{{index}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>

