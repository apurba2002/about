const nav_btn = document.getElementById("nav-btn")
const nav_btn_hide = document.getElementById("nav-btn-hide")
const show = document.getElementById("show")

const view = ()=>{

    show.style.top="38px"
    show.style.transition="1.5s"
    
    nav_btn_hide.style.display="block"
    nav_btn.style.display="none"
   
}
const hide = ()=>{

    show.style.top="-500px"
    nav_btn_hide.style.display="none"
    nav_btn.style.display="block"
}
nav_btn.addEventListener("click", view)
nav_btn_hide.addEventListener("click",hide)
show.addEventListener('click',hide)