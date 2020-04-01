function insert(e){
    document.querySelector(".textview").value = document.querySelector(".textview").value+e.target.value;
}

function equal(){
    let textview = document.querySelector(".textview").value;
    if(textview){
        document.querySelector(".textview").value = eval(document.querySelector(".textview").value);
        if(document.querySelector(".textview").value=="undefined"){
            document.querySelector(".textview").value = "";
        }
    }
    
}

function cleartext(){
    document.querySelector(".textview").value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}