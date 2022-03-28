window.onload = function(){
var modal = document.getElementById("myModal");
var task = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

task.onclick = function() {
    modal.style.display= "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display ="none";
    }
}
}