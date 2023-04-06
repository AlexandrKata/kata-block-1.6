function tabActive() {
  let tabs = document.querySelectorAll('.tabs-list__item'),
    tabsLinks = document.querySelectorAll('.tabs-list__link'),
    tabsParent = document.querySelector('.tabs-list')

  function addActiveClass(i = 0) {
    tabs[i].classList.add('tabs-list__item--active')
  }

  function removeActiveClass() {
    tabs.forEach((item) => {
      item.classList.remove('tabs-list__item--active')
    })
  }

  tabsParent.addEventListener('click', (e) => {
    const target = e.target
    e.preventDefault()

    if (target && target.classList.contains('tabs-list__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          removeActiveClass()
          addActiveClass(i)
        }
      })
    }

    if (target && target.classList.contains('tabs-list__link')) {
      tabsLinks.forEach((item, i) => {
        if (target == item) {
          removeActiveClass()
          addActiveClass(i)
        }
      })
    }
  })
}

export default tabActive
