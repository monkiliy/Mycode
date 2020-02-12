var DOMdownload = document.getElementById("download");
var DOMcode = document.getElementsByClassName("app-download")[0];
var DOMcart = document.getElementById("cart");
var DOMcartInfo = document.getElementsByClassName("cart-info")[0];
    DOMdownload.addEventListener("mouseover", function(){
        DOMcode.style.display = "block";
    })
    DOMdownload.addEventListener("mouseout", function(){
        DOMcode.style.display = "none";
    })
    DOMcart.addEventListener("mouseover", function(){
        DOMcartInfo.style.display = "block";
    })
    DOMcart.addEventListener("mouseout", function(){
        DOMcartInfo.style.display = "none";
    })
var DOMhome = document.getElementById("home");
var DOMlogo = document.getElementsByClassName("head-logo")[0].getElementsByTagName("a")[0];
    DOMlogo.addEventListener("mouseover", function(){
        DOMhome.setAttribute("src", "./img/mi-home.png");
    })
    DOMlogo.addEventListener("mouseout", function(){
        DOMhome.setAttribute("src", "./img/mi-logo.png");
    })
var DOMformtext = document.getElementById("text");
var DOMformsubmit = document.getElementById("submit");
var DOMhotWords = document.getElementsByClassName("seach-hot-words")[0];
    DOMformsubmit.addEventListener("mouseover", function(){
        DOMformsubmit.style.borderColor = "rgba(0, 0, 0, 0.25)";
        DOMformtext.style.borderColor = "rgba(0, 0, 0, 0.25)";
        DOMformsubmit.style.background = "#ff6700";
        DOMformsubmit.style.color = "#fff";
    })
    DOMformsubmit.addEventListener("mouseout", function(){
        DOMformsubmit.style.borderColor = "#e0e0e0";
        DOMformtext.style.borderColor = "#e0e0e0";
        DOMformsubmit.style.background = "#fff";
        DOMformsubmit.style.color = "#616161";
    })
    DOMformtext.addEventListener("mouseover", function(){
        DOMformsubmit.style.borderColor = "rgba(0, 0, 0, 0.25)";
        DOMformtext.style.borderColor = "rgba(0, 0, 0, 0.25)";
    })
    DOMformtext.addEventListener("mouseout", function(){
        DOMformsubmit.style.borderColor = "#e0e0e0";
        DOMformtext.style.borderColor = "#e0e0e0";
    })
    DOMformtext.addEventListener("focus", function(){
        DOMformsubmit.style.borderColor = "#ff6700";
        DOMformtext.style.borderColor = "#ff6700";
        DOMhotWords.style.display = "none";
        DOMformtext.style.outline = "none";
        DOMformtext.setAttribute("placeholder", "请输入查询信息");
    })
    DOMformtext.addEventListener("click", function(){
        DOMformsubmit.style.borderColor = "#ff6700";
        DOMformtext.style.borderColor = "#ff6700";
        DOMhotWords.style.display = "none";
        DOMformtext.style.outline = "none";
    })
    DOMformtext.addEventListener("blur", function(){
        DOMformsubmit.style.borderColor = "#e0e0e0";
        DOMformtext.style.borderColor = "#e0e0e0";
        DOMhotWords.style.display = "block";
        DOMformtext.setAttribute("placeholder", "");
    })
    // 能否用条件语句来控制执行事件函数 设置了mouseover mouseout后但是当我执行了点击文本框之后
    // 我鼠标移开我不希望执行mouseover 当失去焦点blur后 回复原样
var DOMactive = document.getElementsByClassName("seckill-banner")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
var DOMshowGoods = document.getElementsByClassName("show-goods")[0];
var DOMgoodsBox = DOMshowGoods.getElementsByTagName("ul");
    for(var i = 0; i < DOMactive.length; i++){
        DOMactive[i].onclick = showlist;
    }
    function showlist(){
        for(var i = 0; i < DOMactive.length; i++){
            if(DOMactive[i] === this){
                DOMgoodsBox[i].className = "active";
                DOMactive[i].className = "active";
            }else{
                DOMactive[i].className = "";
                DOMgoodsBox[i].className = "";
            }
        }
    }
var DOMfixed = document.getElementById("fixed");
    window.onscroll = function(){
        var scrollHeight = document.documentElement.scrollTop;
        // console.log(scrollHeight);
        if(scrollHeight >= 258){
            DOMfixed.className = "seckill-banner seckill-fixed";
        }else{
            DOMfixed.className = "seckill-banner";
        }
    }