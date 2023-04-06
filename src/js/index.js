import '../scss/style.scss'

import swiper from './swiper'
import tabActive from './tabActive'
import showMore from './showMore'
import menu from './menu'
import modal from './modal'

window.addEventListener('DOMContentLoaded', function () {
  swiper()
  tabActive()
  showMore()
  menu()
  modal()
})
