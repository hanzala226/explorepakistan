var h1 = document.querySelector(".bird")
var land = document.querySelector(".land")
var text = document.querySelector(".h1")


window.addEventListener("scroll" ,()=>{
    let scroll = window.scrollY
    h1.style.left = scroll * 4 + 'px'
    land.style.marginTop = scroll * 1.2 + 'px'
    text.style.marginTop = scroll * 1 + 'px'

})
    
      
    
  