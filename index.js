var sidenav =document.getElementById("sidenav")
var closenav =document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
    sidenav.style.right="0"
})
closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})