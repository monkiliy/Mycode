function ajax(method, url, data, callbacks, flag){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    method = method.toUpperCase();
    if(method == 'GET'){
        var date = new Date();
        var timer = date.getTime();
        xhr.open(method, url+'?'+data+'&timer='+timer, flag);
        xhr.send();
    }else if(method == 'POST'){
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlcoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callbacks(xhr.responseText);
        }
    }

}
// function ajax(method, url, data, callbacks, flag){
//     var xhr = null;
//     if(window.XMLHttpRequest){
//         xhr = new XMLHttpRequest;
//     }else{
//         xhr = new ActiveXObject('Microsoft.XMLHttp');
//     }
//     method = method.toUpperCase();
//     if(method == 'GET'){
//         var date = new Date();
//         var timer = date.getTime();
//         xhr.open('GET', url + '?' + data + '&timer=' + timer, flag);
//         xhr.send();
//     }else if(method == 'POST'){
//         xhr.open('POST', url, flag);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//         xhr.send(data);
//     }
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//             callbacks(xhr.responseText);
//         }
//     }
// }