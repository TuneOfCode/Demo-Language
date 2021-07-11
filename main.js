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