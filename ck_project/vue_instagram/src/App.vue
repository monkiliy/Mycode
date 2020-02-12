<template>
  <div id="app">
    <div class='app-phone'>
      <app-header></app-header>
      <app-body></app-body>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appBody from './components/body/body.vue'
import appFooter from './components/footer/footer.vue'
import appHeader from './components/header/header.vue'

export default {
  name: 'app',
  components : {
    appHeader,
    appBody,
    appFooter
  }
}
</script>

<style lang="scss">
  body, div, h1, h2, h3, h4, h5, h6, ul, li, ol, p{
    margin: 0;
    padding: 0;
  }
</style>
