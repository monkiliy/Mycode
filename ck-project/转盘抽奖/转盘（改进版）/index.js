var btn = document.getElementsByClassName("button")[0];
var pointer = document.getElementsByClassName("pointer")[0];
var Li = document.getElementsByTagName("li");
var selected = document.getElementsByClassName("selected")[0].getElementsByTagName("div");
    console.log(selected);
    console.log(Li);
    // selected[0].getElementsByTagName("p")[0].innerHTML = "a";
    // Random = parseInt(Math.random()*12);
// var P = document.createElement("p");
// var P = document.createElement("p");
// var P = document.createElement("p");
// var P = document.createElement("p");
// var P = document.createElement("p");
// selected[0].appendChild(P);
// selected[1].appendChild(P);
// selected[2].appendChild(P);
// selected[3].appendChild(P);
// selected[4].appendChild(P);
    // for(var i = 0; i < selected.length; i++){
    //     selected[i].appendChild(P);
    // }
// console.log(Random);
var B = 0;
var A = true;
var changeNum = 1;
var showColor = 0;
    // console.log(Num);
    btn.onclick = function(){
        if (A == false){
            // console.log("不好使");
            return;
        }
        B++;
        if(B-1 > 4){
            alert("无多余次数");
            return;
        }
        changeNum = 1;
        showColor = 0;
        pointer.style.transform = `rotate(30deg)`;
        Li[0].className = "active";
        // Li[1].className = "";
        // Li[2].className = "";
        // Li[3].className = "";
        // Li[4].className = "";
        // Li[5].className = "";
        // Li[6].className = "";
        // Li[7].className = "";
        // Li[8].className = "";
        // Li[9].className = "";
        // Li[10].className = "";
        // Li[11].className = "";
        for(var i = 1; i < Li.length; i++){
            Li[i].className = "";
        }
        setTimeout(function(){
            Num = 12*5 + parseInt(Math.random()*12);
            console.log(Num);
            run = setInterval(change, 100);
            console.log(Num);
            // selected[B-1].innerHTML = "a";
            // A = true;
            // console.log(A);
        }, 500);
        // Num = 12*5 + parseInt(Math.random()*12);
        // console.log(Num);
        // run = setInterval(change, 100);
        // console.log(Num);
        // console.log(Random);
        // Li[1].className = "active";
        // A = true;
        // console.log(A);
    }  
    function change(){
        A = false;
        // B++;
        Li[showColor].className = "";
        showColor = showColor + 1 > 11 ? 0 : showColor+1;
        Li[showColor].className = "active";
        // Li[List].className = "";
        // List = List + 1 > 11 ? 0 : List++;
        // Li[List].className = "active";
        changeNum++;
        pointer.style.transform = `rotate(`+ changeNum*30 + `deg)`;
        if(changeNum < 10){
            clearInterval(run);
            run = setInterval(change, 20);
        }
        if(changeNum + 10 >= Num){
            clearInterval(run);
            run = setInterval(change, 200);
        }
        if(changeNum > Num ){
            clearInterval(run);
            A = true;
            console.log(B);
            // selected[0].getElementsByTagName("p")[0].innerHTML = "a";
            selected[B-1].getElementsByTagName("p")[0].innerHTML = Num - 59;

            // selected[B-1].innerHTML = Num;
            // selected[B].getElementsByTagName("p")[0].innerHTML = "a";
        }
        // console.log(A);
    }
    // 怎么样不初始化进行连续旋转
    // 解决重复点击加速bug  解决