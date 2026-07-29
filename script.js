var poplayer =document.querySelector(".poplayer")
var popbox =document.querySelector(".popbox")
var a=document.getElementById("addpop")

a.addEventListener("click",function(){
    poplayer.style.display = "block";
    popbox.style.display = "block";
})
var canclebutton=document.getElementById("cancle")
canclebutton.addEventListener("click",function(event){
    event.preventDefault()
    poplayer.style.display = "none";
    popbox.style.display = "none";

})
var can=document.querySelector(".continer")
var ad=document.getElementById("addbtw")
var book=document.getElementById("booktitle")
var title=document.getElementById("bookauthor")
var dis=document.getElementById("short")

ad.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontiner")
    div.innerHTML= `<h1>${book.value}</h1>
            <h5>${title.value}</h5>
            <p>${dis.value}</p>
             <button onclick="deletebook(event)">delete</button>`
    can.append(div)
    poplayer.style.display = "none";
    popbox.style.display = "none";
})
 function deletebook(event){
    event.target.parentElement.remove()
 }
