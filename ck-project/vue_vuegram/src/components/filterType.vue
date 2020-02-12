<template>
    <div class="filter-type">
        <p>{{ filter.name}}</p>
        <div class="img"
        :class="filter.name"
        :style="{backgroundImage: 'url('+image+')'}"
        @click="selectedFilter"
        ></div>
    </div>
</template>

<script>
import EventBus from '../event-bus';
export default {
    props : {
        filter : Object,
        image : String
    },
    methods : {
        selectedFilter(){
            // this.$emit('selectFilter',this.filter.name)
            EventBus.$emit('selectFilter',this.filter.name)
        }
    }
}
</script>

<style lang="scss" src='../styles/filter-type.scss'>

</style>