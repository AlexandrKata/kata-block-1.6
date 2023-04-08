function showMore() {
  const linkMore = document.querySelector('.tabs-links__more'),
    linkHide = document.querySelector('.tabs-links__hide'),
    linksParent = document.querySelector('.tabs-text')

  function show() {
    linkMore.addEventListener('click', (e) => {
      e.preventDefault()
      linkMore.classList.add('hide')
      linkHide.classList.remove('hide')
      linksParent.classList.add('show')
    })
  }

  function hide() {
    linkHide.addEventListener('click', (e) => {
      e.preventDefault()
      linkHide.classList.add('hide')
      linkMore.classList.remove('hide')
      linksParent.classList.remove('show')
    })
  }

  show()
  hide()
}

export default showMore
