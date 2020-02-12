<template>
    <div class="goods-list">
        <div class="goods-item"  v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.imgurl" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                goodslist:[
                    {
                        id:'1',
                        title:"漫威钢铁侠手办 可动模型办公桌面摆件变形玩具 钢铁侠+【发光底座】",
                        zhaiyao:"钢铁侠手办，该手办分为无底座和发光底座",
                        click:0,
                        stock_quantity:70,
                        sell_price:108,
                        market_price:128,
                        imgurl:require("../../images/gtx-sb.jpg")
                    },
                    {
                        id:'2',
                        title:"漫威美国队长手办 可动模型办公桌面摆件变形玩具 美国队长+【发光底座】",
                        zhaiyao:"美国队长手办，该手办分为无底座和发光底座",
                        click:0,
                        stock_quantity:110,
                        sell_price:108,
                        market_price:128,
                        imgurl:require("../../images/mgdz-sb.jpg")
                    },
                    {
                        id:'3',
                        title:"漫威蜘蛛侠手办 可动模型办公桌面摆件变形玩具 蜘蛛侠+【发光底座】",
                        zhaiyao:"蜘蛛侠手办，该手办分为无底座和发光底座",
                        click:0,
                        stock_quantity:9,
                        sell_price:130,
                        market_price:150,
                        imgurl:require("../../images/zzx-sb.jpg")
                    },
                    {
                        id:'4',
                        title:"生日礼物送男友钢铁侠公仔手办漫威复仇者联盟玩具美国队长蜘蛛侠钢铁侠MK46周边手办模型 七寸-复联3全套14个 ",
                        zhaiyao:"公仔手办漫威复仇者联盟周边模型",
                        click:0,
                        stock_quantity:114,
                        sell_price:1199,
                        market_price:1599,
                        imgurl:require("../../images/fl-sb.jpg")
                    },
                     {
                        id:'5',
                        title:"毒液手办漫威车载摆件汽车摆件手办反叛蜘蛛侠车载玩偶致命守护者 新款中控台摆件车载公仔汽车卡通摆件 毒液 ",
                        zhaiyao:"公仔毒液手办漫威车载摆件汽车摆件",
                        click:0,
                        stock_quantity:3,
                        sell_price:132,
                        market_price:139,
                        imgurl:require("../../images/dy-sb.jpg")
                    },
                     {
                        id:'6',
                        title:"漫威 复仇者联盟4 终局之战 复联3 SHF雷神托尔 锤哥风暴战斧 可动手办模型 摆件玩具 可动雷神手办高约14cm",
                        zhaiyao:"锤哥风暴战斧 可动手办模型 摆件玩具",
                        click:0,
                        stock_quantity:24,
                        sell_price:128,
                        market_price:138,
                        imgurl:require("../../images/ls-sb.jpg")
                    },
                     {
                        id:'7',
                        title:"漫威手办银河护卫队2花盆树人格鲁特盆栽笔筒模型摆件公仔手办玩具 经典款 ",
                        zhaiyao:"树人格鲁特可动手办模型 摆件玩具",
                        click:0,
                        stock_quantity:1,
                        sell_price:29,
                        market_price:49,
                        imgurl:require("../../images/glt-sb.jpg")
                    },
                    {
                        id:'8',
                        title:"安踏漫威联名男鞋marvel联名SEEED全掌气垫洛基彩虹桥零界跑鞋 ",
                        zhaiyao:"漫威联名款 现货发售中",
                        click:0,
                        stock_quantity:3810,
                        sell_price:639,
                        market_price:799,
                        imgurl:require("../../images/chq.jpg")
                    },
                    {
                        id:'9',
                        title:"【赠:全家福海报】漫威电影宇宙十周年纪念特刊中文版MARVEL漫画复仇者联盟4电影全揭秘灭霸钢铁侠美国队长雷神奇异博士蜘蛛侠全套  ",
                        zhaiyao:"漫威电影宇宙十周年纪念特刊中文版MARVEL漫画",
                        click:0,
                        stock_quantity:1277,
                        sell_price:80,
                        market_price:160,
                        imgurl:require("../../images/fl-mh.jpg")
                    },
                     {
                        id:'10',
                        title:"钢铁侠T恤触摸反应堆漫威复仇者联盟LED发光无线多功能学生战衣服",
                        zhaiyao:"钢铁侠T恤",
                        click:0,
                        stock_quantity:19586,
                        sell_price:56,
                        market_price:96,
                        imgurl:require("../../images/gtx-tx.jpg")
                    },
                    {
                        id:'11',
                        title:"钢铁侠模型MK46雕像复仇者联盟4 漫威动漫影视周边大摆件手办胸像 ",
                        zhaiyao:"钢铁侠胸像大摆件手办",
                        click:0,
                        stock_quantity:114,
                        sell_price:299,
                        market_price:316,
                        imgurl:require("../../images/gtx-xx.jpg")
                    }
                    
                    
                ]
            };
        },
        methods: {
            goDetail(id){
                //编程式导航
                //使用js的形式进行路由导航
                //this.$route时路由参数对象，所有路由中的参数，params和query都属于它
                //this.$router时一个路由导航对象，用它可以方便使用js代码，实现路由的前进，后退，跳转到新的url地址
                this.$router.push({ name: "goodsinfo", params: { id } });
                
            }
        }
    };
</script>

<style lang="scss" scoped>
.goods-list{
    display:flex;
    flex-wrap:wrap;
    padding:7px;
    justify-content:space-between;

    .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:293px;
        img{
            width:100%;
        }
        .title{
            font-size:14px;
        }

        .info{
            background-color:#ddd;
            p{
                margin:0;
                padding:5px;
            }

            .price{
                .now{
                    color:red;
                    font-weight:bold;
                    font-size:16px;
                }
                .old{
                    text-decoration:line-through;
                    font-size:12px;
                    margin-left:10px;
                }
            }
            .sell{
                display:flex;
                justify-content:space-between;
                font-size:14px;
            }
        }
    }
}
</style>