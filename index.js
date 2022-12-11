var inputE = document.querySelector("input")
var buttonE = document.querySelector("button")
var divE = document.querySelector("div")
buttonE.addEventListener("click", function (a) {
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var buttonX = document.createElement("button")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")
    p1.append(buttonX, button1, button2, p2)
    divE.append(p1)
    p2.innerText = inputE.value
    inputE.value = ""
    p1.style.cssText = 'border:2px ridge ; width:400px;background-color:aquamarine;margin:auto;height:45px;text-align:left;margin-top:10px;border-radius:5px;font:20px black;padding-bottom=2px;' 
    buttonX.style.cssText = 'height:40px;width:40px;background-color:red;margin:2px;font-size:25px; border:ridge;'
    button1.style.cssText = 'height:40px;width:40px;background-color:skyblue;margin:2px;font-size:25px; border:ridge;'
    button2.style.cssText = 'height:40px;width:40px;background-color:orange;margin:2px;font-size:25px; border:ridge;'
    p2.style.cssText = 'display:inline;width:fit-content;font-weight:bold;padding: 15px;'
    buttonX.innerText = "☓"
    button1.innerText = "🠕"
    button2.innerText = "🠗"
    buttonX.addEventListener("click", function() {
        p1.remove()
    })
    button1.addEventListener("click", function() {
        if(p1.previousElementSibling){
            p1.parentNode.insertBefore(p1,p1.previousElementSibling)
        }
        
    })
button2.addEventListener("click", function () {
        if(p1.nextElementSibling){
            p1.parentNode.insertBefore(p1.nextElementSibling,p1)
        }
        
    })


})
