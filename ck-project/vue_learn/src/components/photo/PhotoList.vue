<template>
  <div>
    <ul class="tab-title" id="tab">
      <li @click="cur=0"><a href="#">蜘蛛侠</a></li>
      <li @click="cur=1"><a href="#">钢铁侠</a></li>
      <li @click="cur=2"><a href="#">绿巨人</a></li>
      <li @click="cur=3"><a href="#">黑寡妇</a></li>
      <li @click="cur=4"><a href="#">雷神</a></li>
    </ul>

    <div class="tab-content">
      <div v-show="cur==0">
        <img src="../../images/zzx1.jpg" alt="">
        <img src="../../images/zzx2.jpg" alt="">
        <img src="../../images/zzx3.jpg" alt="">
        <img src="../../images/zzx4.jpg" alt="">
        <img src="../../images/zzx5.jpg" alt="">
      </div>
      <div v-show="cur==1">
        <img src="../../images/gtx1.jpg" alt="">
        <img src="../../images/gtx2.jpg" alt="">
        <img src="../../images/gtx3.jpg" alt="">
        <img src="../../images/gtx4.jpg" alt="">
        <img src="../../images/gtx5.jpg" alt="">
      </div>
      <div v-show="cur==2">
        <img src="../../images/hk1.jpg" alt="">
        <img src="../../images/hk2.jpg" alt="">
        <img src="../../images/hk3.jpg" alt="">
        <img src="../../images/hk4.jpg" alt="">
        <img src="../../images/hk5.jpg" alt="">
      </div>
      <div v-show="cur==3">
        <img src="../../images/hgf1.jpg" alt="">
        <img src="../../images/hgf2.jpg" alt="">
        <img src="../../images/hgf3.jpg" alt="">
        <img src="../../images/hgf4.jpg" alt="">
        <img src="../../images/hgf5.jpg" alt="">
      </div>
      <div v-show="cur==4">
        <img src="../../images/ls1.jpg" alt="">
        <img src="../../images/ls2.jpg" alt="">
        <img src="../../images/ls3.jpg" alt="">
        <img src="../../images/ls4.jpg" alt="">
        <img src="../../images/ls5.jpg" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
//导入mui的js
import mui from '../../lib/mui/js/mui.min.js'


export default{
    data(){
      return{
        cur:0
      };
    },
    methods:{}
};
</script>

<style lang="scss" scoped>
* { 
  padding:0;
  marrgin:0;
   } 
.tab-title{
    margin:0;
    list-style:none;
    height:30px;
    line-height:30px;
    li{
      margin-bottom:10px;
      width:20%;
      float:left;
      font-size:12px;
      text-align:center;
      a{
        text-decoration:none;
        color:gray;
        &:focus{
          color:blue;
        }
      }
    }
  }
  .tab-content{
    margin:0;
    padding:10px;
    margin-bottom:0;
    img{
     margin:10px 0;
     vertical-align:middle;
     box-shadow:0 0 10px #999;
     width:100%;
     display:block;
    }
  }
  

</style>