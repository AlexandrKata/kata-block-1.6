function modal() {
  const overlay = document.querySelector('.overlay'),
    modal = document.querySelectorAll('.modal'),
    modalFeedback = document.querySelectorAll('[data-modal=feedback]'),
    modalCall = document.querySelectorAll('[data-modal=call]'),
    btnModalClose = document.querySelectorAll('.modal__close'),
    menu = document.querySelector('.container-menu')

  function openModal(e) {
    e.classList.remove('hide')
    overlay.classList.remove('hide')
    menu.classList.remove('show')
  }

  function closeModal() {
    modal.forEach((item) => {
      item.classList.add('hide')
    })
    overlay.classList.add('hide')
  }

  modalFeedback.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      let data = e.target.dataset.modal
      modal.forEach((item) => {
        if (item.dataset.modal == data) {
          openModal(item)
        }
      })
    })
  })

  modalCall.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      let data = e.target.dataset.modal
      modal.forEach((item) => {
        if (item.dataset.modal == data) {
          openModal(item)
        }
      })
    })
  })

  btnModalClose.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      closeModal()
    })
  })
}

export default modal
