<template>
    <div class="vuegram-post">
        <div class="header level">
            <div class="level-left">
                <figure class="image is-32x32">
                    <img :src="post.userImage" alt="">
                </figure>
                <span class="username">{{ post.username}}</span>
            </div>
        </div>
        <div class="image-container"
            :class="post.filter"
            :style="{backgroundImage: 'url('+post.postImage+')'}"
            @dblclick="clickLike"
        >
        </div>
        <div class="content">
            <div class="heart">
                <i 
                class="far fa-heart" 
                @click="clickLike"
                :class="{fas : post.hasBeenLiked}"
                ></i>
            </div>
            <p class="likes">
                {{ post.likes }} likes
            </p>
            <p class="caption">
                <span>{{ post.username }}</span>
                {{ post.caption }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        post : Object
    },
    methods : {
        clickLike(){
            console.log(this.post)
            this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
            this.post.hasBeenLiked = !this.post.hasBeenLiked;
        }
    }
}
</script>

<style lang="scss" src='../styles/vuegram-post.scss'>

</style>