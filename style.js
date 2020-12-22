var circle = document.querySelector("#circ");

window.addEventListener("mousemove",function(details){
    circle.style.left = details.pageX + "px" ;
    circle.style.top = details.pageY + "px" ;
})

