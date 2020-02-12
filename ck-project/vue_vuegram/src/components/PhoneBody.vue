<template>
    <div class="phone-body">
        <div class="feed" v-if="step === 1" v-dragscroll>
            <VuegramPost
            v-for="(post, index) in posts"
            :post='post'
            :key="index"
            ></VuegramPost>
        </div>
        <div v-if="step === 2">
            <div
            class="selected-image"
            :class="selectedFilter"
            :style="{backgroundImage: `url(${image})`}"
            ></div>
            <div class="filter-container" v-dragscroll>
                <filterType
                :filter='filter'
                v-for="(filter, index) in filters"
                :key="index"
                :image='image'
                ></filterType>
            </div>
        </div>
        <div v-if="step === 3">
            <div
            class="selected-image"
            :class="selectedFilter"
            :style="{backgroundImage: `url(${image})`}"
            ></div>
            <div class="caption-container">
                <textarea placeholder="Write a caption..." :value='value' @input="inputText"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import VuegramPost from './VuegramPost'
import filterType from './filterType'
import EventBus from '../event-bus'
import eventBus from '../event-bus';
export default {
    props : {
        posts : Array,
        step : Number,
        image : String,
        filters : Array,
        value : String,
    },
    created(){
        eventBus.$on('selectFilter',param => {
            this.selectedFilter = param;
        })
    },
    data(){
        return {
            selectedFilter : ''
        }
    },
    components : {
        VuegramPost,
        filterType
    },
    methods : {
        /* selectFilter(param){
            this.selectedFilter = param;
        } */
        inputText(event){
            this.$emit('input',event.target.value)
        }
    }
}
</script>

<style lang="scss" src='../styles/phone-body.scss'>

</style>

