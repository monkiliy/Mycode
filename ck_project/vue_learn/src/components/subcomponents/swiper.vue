<template>

    <div>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
       <!--在组件中，使用v-for循环时，一定要使用key-->
       <mt-swipe-item v-for="item of lunbotuList" :key="item.id">
        <img :src="item.img" alt="">
       </mt-swipe-item>
    </mt-swipe>
    
    </div>

</template>



<script>
export default{
    props:["lunbotuList"]
};

</script>



<style lang="scss" scoped>

.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>