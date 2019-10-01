

function AJAX(data, out, method, url, async, cfunction){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    
    if(out === true){
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){

                cfunction(this);
            }
        };
    }

    xmlhttp.open(method, url, async);

    if(method == "post"){
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    if(data != null){
        xmlhttp.send(data);
    }
    else{
        xmlhttp.send();
    }
}

function AJAX_FILES(data, out, method, url, async, cfunction){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    
    if(out === true){
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                cfunction(this);
            }
        };
    }

    xmlhttp.open(method, url, async);

    if(data != null){
        xmlhttp.send(data);
    }
    else{
        xmlhttp.send();
    }
}

