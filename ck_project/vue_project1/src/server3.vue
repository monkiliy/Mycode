<template>
    <div>
        <h1>wo shi server3</h1>
        <p>{{ count }}</p>
        <button @click="count++">count++</button>
    </div>
</template>

<script>
export default {
    activated(){
        console.log('activated 我在server3');
    },
    deactivated(){
        console.log('deactivated 我离开server3了');
    },
    data(){
        return {
            count : 0
        }
    },
    methods : {

    },
    destroyed(){
        console.log('destroyed')
    }
}
</script>