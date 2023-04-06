function menu() {
  const menu = document.querySelector('.container-menu'),
    burger = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burgerClose')

  function showMenu() {
    burger.addEventListener('click', (e) => {
      e.preventDefault()
      menu.classList.add('show')
      burgerClose.classList.add('show')
    })
  }

  function hideMenu() {
    burgerClose.addEventListener('click', (e) => {
      e.preventDefault()
      menu.classList.remove('show')
      burgerClose.classList.remove('show')
    })
  }

  showMenu()
  hideMenu()
}

export default menu
