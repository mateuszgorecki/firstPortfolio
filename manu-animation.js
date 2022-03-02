let button = document.getElementById('mobile-button')
let menu = document.getElementById('mobile-menu')
let element = document.getElementsByClassName('nav-wrapper--white')

window.addEventListener('scroll', function() {
      menu.classList.remove('active')
})

button.addEventListener('click', function () {
  if (menu.classList.contains('active'))
    menu.classList.remove('active')
  else
    menu.classList.add('active')
})

for(let i in element){
  element[i].addEventListener('click', function(){
    menu.classList.remove('active')
  })
}