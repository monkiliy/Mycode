<template>
  <div id="app">
    <div class="app-phone">

        <div class="phone-header">
          <a href="javascript:;" class="cancel-cta"
          v-if="step === 2 || step === 3"
          @click="goToHome"
          >Cancel</a>
          <img src="./assets/vue_gram_logo_cp.png" alt="">
          <a href="javascript:;" class="next-cta"
          v-if="step === 2"
          @click="step++"
          >Next</a>
          <a href="javascript:;" class="next-cta"
          v-if="step === 3"
          @click="share"
          >Share</a>
        </div>

        <ljh-phone-body 
        :posts="posts"
        :step='step'
        :image='image'
        :filters='filters'
        v-model='caption'
        ></ljh-phone-body>

        <div class="phone-footer">
          <div class="home-cta">
            <i class="fas fa-home fa-lg" @click="goToHome"></i>
          </div>
          <div class="upload-cta">
            <input type="file" id="file" name="file" @change="uploadImage" :disabled="step !== 1">
            <label for="file">
              <i class="far fa-plus-square fa-lg"></i>
            </label>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from './components/PhoneBody.vue'
import posts from './data/posts.js'
import filters from './data/filters'
import EventBus from './event-bus'
import { filter } from 'minimatch';

export default {
  data(){
    return {
      posts,
      step : 1,
      image : '',
      filters,
      caption : ''
    }
  },
  methods : {
    uploadImage(e){
      if(!e.target.files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = event => {
        this.image = event.target.result;
        this.step = 2;
      }
    },
    goToHome(){
      image : '';
      this.step = 1;
    },
    share(){
      const post = {
        username: "liujianghua",
        userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
        postImage: this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: "perpetua"
      }
      this.posts.unshift(post);
      this.step = 1;
    }
  },
  components : {
    'ljh-phone-body' : PhoneBody
  }
}
</script>
<style lang="scss" src='./styles/app.scss'>

</style>
