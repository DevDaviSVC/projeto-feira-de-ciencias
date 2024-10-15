window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav")
    let menu = document.getElementById('menu')
    let Etim = document.getElementById('Etim')
    nav.classList.toggle('sticky', window.scrollY > 0)
    menu.classList.toggle('current', window.scrollY == 0)
    Etim.classList.toggle('current', window.scrollY > 0)
})