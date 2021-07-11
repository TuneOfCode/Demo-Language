function isOpend(){
    var col = document.getElementById('col-left');
    if (col.style.display === "none" ){
        col.style.display = "block";
    } else {
        col.style.display = "none";
    }
}
function isClosed(){
    var nav = document.getElementById('col-left');
    nav.style.display = "none";
}
var timeOut;
function buttonTop(){
    if (document.body.scrollTop != 0 
        || document.documentElement.scrollTop != 0){
            window.scrollBy(0, -80);
            timeOut = setTimeout('buttonTop()', 10);
        }
    else{
        clearTimeout(timeOut);
    }
}
