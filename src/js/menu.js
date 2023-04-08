function menu() {
  const menu = document.querySelector('.container-menu'),
    burger = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burgerClose'),
    overlay = document.querySelector('.overlay')

  function showMenu() {
    burger.addEventListener('click', (e) => {
      e.preventDefault()
      menu.classList.add('show')
      burgerClose.classList.add('show')
      overlay.classList.remove('hide')
    })
  }

  function deleteClass() {
    menu.classList.remove('hide')
    menu.classList.remove('show')
    burgerClose.classList.remove('show')
    overlay.classList.add('hide')
  }

  function hideMenu() {
    burgerClose.addEventListener('click', (e) => {
      e.preventDefault()
      menu.classList.add('hide')
      setTimeout(deleteClass, 1400)
    })
  }

  showMenu()
  hideMenu()
}

export default menu
