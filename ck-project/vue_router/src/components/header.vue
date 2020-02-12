<template>
    <div class="header">
        <!-- <ul>
            <button class="nav nav-pills"><a href="/">a : home</a></button>
            <button class="nav nav-pills"><a href="/user">a : user</a></button>
        </ul>
        <br><br> -->
        <ul class="nav nav-pills">
            <router-link exact to="/" active-class="active" tag="li"><a>home</a></router-link>
            <!-- <router-link to="/user/1" active-class="active" tag="li"><a>user1</a></router-link> -->
            <!-- <router-link to="/user/2" active-class="active" tag="li"><a>user2</a></router-link> -->
            <router-link to="/user?a=1" active-class="active" tag="li"><a>user</a></router-link>
        </ul>
        <!-- <button class="nav nav-pills"><router-link exact to="/">router-link : home</router-link></button>
        <button class="nav nav-pills"><router-link to="/user">router-link : user</router-link></button> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .router-link-active{
        color: red;
    }
</style>



