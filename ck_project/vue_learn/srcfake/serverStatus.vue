<template>
    <div>
        <p>服务器状态：{{ status }}</p>
        <button @click="changeStatus">改变服务器状态</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            status : '已启动'
        }
    },
    methods : {
        changeStatus(){
            this.status = '关闭'
        }
    }
}
</script>

<style>
    
</style>