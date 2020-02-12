<template>
 <div class="newsinfo-container">
 <h3 class="title">漫威</h3>
  <div class="content">
    <img src="../../images/manweilogo.jpg" alt="">
 </div>
 <p class="subtitle">
    <span>漫威漫画公司（Marvel Comics）是美国与DC漫画公司（Detective Comics）齐名的漫画巨头，它创建于1939年，于1961年正式定名为Marvel，旧译为“惊奇漫画”，曾用名“时代漫画”（Timely Comics）、亚特拉斯漫画（Atlas Comics）。
1939年4月，公司在《电影连环画周刊》创刊号上创造出了世界上第一位变种人超级英雄——纳摩，这是MARVEL的第一位超级英雄，他比公司的成立还要早半年，同年10月，公司在《惊奇漫画》第1期上创造出世界上第一位生化人超级英雄——初代霹雳火，并将纳摩引入其中，这水与火的双重合作，打出了MARVEL史上的第一拳。2009年底，MARVEL被华特迪士尼公司以42.4亿美元收购，成为其子公司。2010年9月，MARVEL宣布其正式中文名称为“漫威”。旗下拥有蜘蛛侠、金刚狼、钢铁侠、美国队长、雷神托尔、绿巨人、惊奇队长、死侍、黑寡妇、蚁人、黑豹、奇异博士、惩罚者、夜魔侠、杰茜卡·琼斯、卢克·凯奇、铁拳、上气、恶灵骑士、刀锋战士、野蛮人柯南等超级英雄，和复仇者联盟、X战警、神奇四侠、银河护卫队、捍卫者联盟、异人族、光照会等超级英雄团队。</span>
 </p>
 </div>
</template>

<script>
export default{
    data(){
        return{
            id:this.$route.params.id
        };
    }
}
  
   
</script>

<style lang="scss" scoped>
    .newsinfo-container{
        padding:0 4px;

        .title{
            font-size:20px;
            text-align:center;
            margin:15px 0;
            color:red;
        }
        .subtitle{
            font-size:13px;
            color:#226aff;
            display:flex;
            justify-content:space-between;
            text-align:center;
        }
        .content{
            img{
                width:100%;
                height:200px;
            }
        }
    }
</style>