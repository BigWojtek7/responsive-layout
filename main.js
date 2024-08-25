const btnToggle = document.querySelector('.btn-toggle')
const nav = document.querySelector('.nav')

btnToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-visible')
})