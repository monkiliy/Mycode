<template>
    <div>
        
        
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>上映日期：{{item.date}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>






    </div>
</template>
<script>
    export default{
       data(){
           return{
               newslist:[
                   {
                    id:1,
                    title:"钢铁侠 Iron Man",
                    date:"2008-04-30",
                    img_url:require('../../images/news1.jpg')
                   },
                   {
                    id:2,
                    title:"无敌浩克 The Incredible Hulk",
                    date:"2008-08-20",
                    img_url:require('../../images/news2.jpg')
                   },
                    {
                    id:3,
                    title:"钢铁侠2 Iron Man 2",
                    date:"2010-05-07",
                    img_url:require('../../images/news3.jpg')
                   },
                    {
                    id:4,
                    title:"雷神 Thor",
                    date:"2011-05-08",
                    img_url:require('../../images/news4.jpg')
                   },
                    {
                    id:5,
                    title:"美国队长 Captain America: The First Avenger",
                    date:"2011-09-09",
                   img_url:require('../../images/news5.jpg')
                   },
                   {
                    id:6,
                    title:"复仇者联盟 The Avengers",
                    date:"2012-05-05",
                    img_url:require('../../images/news6.jpg')
                   },
                    {
                    id:7,
                    title:"钢铁侠3 Iron Man 3",
                    date:"2013-05-01",
                    img_url:require('../../images/news7.jpg')
                   },
                   {
                    id:8,
                    title:"雷神2：黑暗世界 Thor: The Dark World",
                    date:"2013-11-08",
                    img_url:require('../../images/news8.jpg')
                   },
                   {
                    id:9,
                    title:"美国队长2 Captain America: The Winter Soldier",
                    date:"2014-04-04",
                    img_url:require('../../images/news9.jpg')
                   },
                   {
                    id:10,
                    title:"银河护卫队 Guardians of the Galaxy",
                    date:"2014-10-10",
                    img_url:require('../../images/news10.jpg')
                   },
                   {
                    id:11,
                    title:"复仇者联盟2：奥创纪元 Avengers: Age of Ultron",
                    date:"2015-05-12",
                    img_url:require('../../images/news11.jpg')
                   },
                   {
                    id:12,
                    title:"蚁人 Ant-Man",
                    date:"2015-10-16",
                    img_url:require('../../images/news12.jpg')
                   },
                   {
                    id:13,
                    title:"美国队长3 Captain America: Civil War",
                    date:"2016-05-06",
                    img_url:require('../../images/news13.jpg')
                   },
                   {
                    id:14,
                    title:"奇异博士 Doctor Strange",
                    date:"2016-11-04",
                    img_url:require('../../images/news14.jpg')
                   },
                   {
                    id:15,
                    title:"银河护卫队2 Guardians of the Galaxy Vol. 2",
                    date:"2017-05-05",
                    img_url:require('../../images/news15.jpg')
                   },
                   {
                    id:16,
                    title:"蜘蛛侠：英雄归来 Spider-Man: Homecoming",
                    date:"2017-09-08",
                    img_url:require('../../images/news16.jpg')
                   },
                   {
                    id:17,
                    title:"雷神3：诸神黄昏 Thor: Ragnarok",
                    date:"2017-11-03",
                    img_url:require('../../images/news17.jpg')
                   },
                   {
                    id:18,
                    title:"黑豹 Black Panther",
                    date:"2018-03-09",
                    img_url:require('../../images/news18.jpg')
                   },
                   {
                    id:19,
                    title:"复仇者联盟3：无限战争 Avengers: Infinity War",
                    date:"2018-05-11",
                    img_url:require('../../images/news19.jpg')
                   },
                   {
                    id:20,
                    title:"蚁人2：黄蜂女现身 Ant-Man and the Wasp",
                    date:"2018-08-24",
                    img_url:require('../../images/news20.jpg')
                   },
                   {
                    id:21,
                    title:"惊奇队长 Captain Marvel",
                    date:"2019-03-08",
                    img_url:require('../../images/news21.jpg')
                   },
                   {
                    id:22,
                    title:"复仇者联盟4：终局之战 Avengers: Endgame",
                    date:" 2019-04-24",
                    img_url:require('../../images/news22.jpg')
                   },
                   {
                    id:23,
                    title:"蜘蛛侠：英雄远征 Spider-Man: Far from Home",
                    date:"2019-06-28",
                    img_url:require('../../images/news23.jpg')
                   }
               ]
           }
       }

       
    }
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h1 {
            font-size:12px;
        }
        .mui-ellipsis {
            font-size:10px;
            color:#226aff;
           
        }
    }
}
</style>