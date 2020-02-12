var DOMshow = document.getElementsByClassName("show")[0];
var DOMshowInfo = document.getElementsByClassName("show-info")[0];
var DOMcome = document.getElementsByClassName("come")[0];
var DOMshowLink = document.getElementsByClassName("show-link")[0];
    DOMshow.onmouseover = function(){
        DOMshowInfo.style.display = "block";
    }
    DOMshow.onmouseout = function(){
        DOMshowInfo.style.display = "none";
    }
    DOMshowLink.addEventListener("mouseover", function(){
        DOMcome.style.display = "block";
    })
    DOMshowLink.addEventListener("mouseout", function(){
        DOMcome.style.display = "none";
    })