<template>
    <div class="goodsinfo-container">


    <!--商品轮播图区域-->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="getId"></swiper>
                        {{id}}
					</div>
				</div>
			</div>


    <!--商品购买区域-->
    <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
					</div>
				</div>
				
			</div>



    <!--商品参数区域-->
    <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>



    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue';
export default{
    data(){
        return{
            id: this.$route.params.id,

            goodsinfo1 : [{  
                        img:require("../../images/gtx-sb.jpg")

                        },
                        {
                        img:require("../../images/gtx-sb-1.jpg")
                        },
                        {
                        img:require("../../images/gtx-sb-2.jpg")
                        }
                ]
        };
    },
    created(){
         console.log(this.$route.params.id);
    },
    methods:{
        
        
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color:#eee;
    overflow:hidden;
}
</style>