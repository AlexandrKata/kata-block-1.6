function showMore() {
  const link = document.querySelector('.tabs-link'),
    linkParent = document.querySelector('.tabs-text'),
    container = document.querySelector('.container-main')

  function show() {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      link.classList.add('hide')
      linkParent.classList.add('show')
      container.classList.add('show')
    })
  }

  show()
}

export default showMore
