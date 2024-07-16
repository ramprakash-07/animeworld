var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("add-button")
var popupcancel=document.getElementById("popupcancel")
var popupadd=document.getElementById("popupadd")

addbutton.addEventListener("click",function(){
    event.preventDefault()
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
popupcancel.addEventListener("click",function(){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})
popupadd.addEventListener("click",function(){
    event.preventDefault()
    
})