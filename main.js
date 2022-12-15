var bars = document.querySelector('.bars')
var user = document.querySelector('.user')
var moon = document.querySelector('.moon')
var links = document.querySelector('.links')
var form = document.querySelector('.form')
bars.addEventListener('click', ()=> {
  if (links.classList.contains('show')) {
    links.classList.remove('show')
  } else {
    links.classList.add('show')
  }
  form.classList.remove('show')
})

user.addEventListener('click', ()=> {
  if (form.classList.contains('show')) {
    form.classList.remove('show')
  } else {
    form.classList.add('show')
  }
  links.classList.remove('show')
})

document.addEventListener('click', (event)=> {
  if (!links.contains(event.target) && !bars.contains(event.target)) {
    links.classList.remove('show')
  }
  if (!form.contains(event.target) && !user.contains(event.target)) {
    form.classList.remove('show')
  }
})

moon.addEventListener('click', ()=> {
  document.body.classList.toggle('active')
  moon.classList.toggle('fa-sun')
  moon.classList.toggle('fa-moon')
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  autoplay: true,
  speed: 1000,
  delay: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

AOS.init();