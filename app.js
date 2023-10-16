let liensMenu=document.querySelectorAll(".menu a");

liensMenu.forEach(el=>{
    el.addEventListener("click",e=>{

        e.preventDefault()
document.querySelectorAll(".current").forEach(el=>el.classList.remove("current"))
        el.classList.add("current");
    })
})