//when something is input, pressing the enter key OR clicking button  will add the item to a list below the input field
//must be a button ellment within an li

var list = document.querySelector ('ul')
var form = document.querySelector ('form')
var input = document.querySelector('input')

form.onsubmit = function(e) {
    e.preventDefault()
    console.log (input.value)
    
    var newLi = document.createElement("LI");
    var newButton = document.createElement("button")
    var buttonContent = document.createTextNode(input.value);
    newButton.appendChild(buttonContent)
    newLi.appendChild(newButton);
    list.appendChild(newLi)
    

}


var button = document.querySelector ('button')

button.onclick = function(){
    this.textDecoration = "lineThrough"
}
//function(e) {
//    if (onclick.btn.style.linethrough) {
//        remove.btn
//    } else {
//        onclick.btn.style.linethrough
//    }
//}

//on.click the event will be striked through 
//click on striked item will remove from list