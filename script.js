let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let showimg1 = document.getElementById("showimg1")
let showimg2 = document.getElementById("showimg2")
let showimg3 = document.getElementById("showimg3")
let images = document.getElementById("images")
let body = document.getElementById("body")
let hamb = document.getElementById("hamb")
let l1 = document.getElementById("l1")
let l2 = document.getElementById("l2")
let l3= document.getElementById("l3")
let ul = document.getElementById("ul")
let down = document.getElementById("down")
let menuDown = document.getElementById("menu-down")
let sobre = document.getElementById("sobre")
let menuSobre = document.getElementById("menu-sobre")
let ctt = document.getElementById("ctt")
let menuCtt = document.getElementById("menu-ctt")
let fechar = document.getElementById("fechar")
down.addEventListener("click", ()=>{
    menuDown.style.display = "flex"
    menuSobre.style.display = "none"
    menuCtt.style.display = "none"
    fechar.style.display = "flex"

})
sobre.addEventListener("click", ()=>{
    menuSobre.style.display = "flex"
				menuDown.style.display = "none"
    menuCtt.style.display = "none"
    fechar.style.display = "flex"
})
ctt.addEventListener("click", ()=>{
    menuSobre.style.display = "none"
				menuDown.style.display = "none"
    menuCtt.style.display = "flex"
    fechar.style.display = "flex"
})


fechar.addEventListener("click", ()=>{
    menuSobre.style.display = "none"
				menuDown.style.display = "none"
    menuCtt.style.display = "none"
    fechar.style.display = "none"
})
showimg1.addEventListener("click", ()=>{
    img1.style.display = "flex"
    img2.style.display = "none"
    img3.style.display = "none"
    
    
})
showimg2.addEventListener("click", ()=>{
    img1.style.display = "none"
    img2.style.display = "flex"
    img3.style.display = "none"
    
})
showimg3.addEventListener("click", ()=>{
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "flex"
})


