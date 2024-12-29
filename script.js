var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"

})

var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container")
var adduni = document.getElementById("add-uni")
var uniinput = document.getElementById("uni-title")
var locinput = document.getElementById("loc-title")
var detailinput = document.getElementById("uni-details")

adduni.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","uni-container")
    div.innerHTML = `<h2>${uniinput.value}</h2>
            <h5>${locinput.value}</h5>
            <p>${detailinput.value}</p>
            <button onclick="deleteuni(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deleteuni(event){
    event.target.parentElement.remove()
}

