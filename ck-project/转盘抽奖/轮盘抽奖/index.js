var tdList = document.getElementsByClassName("table")[0].getElementsByTagName("td");
var DOMstart = document.getElementsByClassName("start")[0];
    console.log(tdList);
var tdAry = [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5]
    DOMstart.addEventListener("click", function(){
        runNum = 0;
        MaxNum = 16*5 + parseInt(Math.random()*16);
        run = setInterval(change, 100);
        
    })
var tdID = 0;
var runNum = 0;
    function change(){
        tdList[tdAry[tdID]].className = "";
        tdID= tdID + 1 > 15 ? 0 : tdID + 1;
        tdList[tdAry[tdID]].className = "active";
        runNum++;
        if(runNum <= 10){
            clearInterval(run);
            run = setInterval(change, 20);
        }
        if(runNum + 10 >= MaxNum){
            clearInterval(run);
            run = setInterval(change, 200);
        }
        if(runNum > MaxNum){
            clearInterval(run);
        }
    }
