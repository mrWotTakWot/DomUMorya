document.querySelector('#toggle').addEventListener("click", function(){
    document.querySelector('.header__nav-bar').classList.toggle('header__nav-bar__act')
})

document.querySelector('#toggle').addEventListener("click", function(){
    this.classList.toggle('toggle__hidden')
})