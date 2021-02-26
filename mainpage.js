function showarea(str){
    document.getElementById("area").style.display = str;
    document.getElementById("send").style.display = str;
}
function finish(){
    var value = document.getElementById("area").value
    // var finalvalue = "<p>" + value + "<p>"
    var box = document.getElementById("content");
    var p = document.createElement("p");
    p.innerHTML = value;
    box.appendChild(p);
    showarea('none');
}