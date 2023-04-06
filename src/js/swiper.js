function swiper() {
  const brandVisible = document.querySelector('.links-brand__visible'),
    brandHide = document.querySelector('.links-brand__hide'),
    containerBrand = document.querySelector('.container-brand'),
    techVisible = document.querySelector('.links-tech__visible'),
    techHide = document.querySelector('.links-tech__hide'),
    containerTech = document.querySelector('.container-tech')

  function showBrand() {
    brandVisible.addEventListener('click', (e) => {
      e.preventDefault()
      brandVisible.classList.add('hidden')
      brandHide.classList.remove('hidden')
      containerBrand.classList.add('container-brand--show')
    })
  }

  function hideBrand() {
    brandHide.addEventListener('click', (e) => {
      e.preventDefault()
      brandHide.classList.add('hidden')
      brandVisible.classList.remove('hidden')
      containerBrand.classList.remove('container-brand--show')
    })
  }

  function showTech() {
    techVisible.addEventListener('click', (e) => {
      e.preventDefault()
      techVisible.classList.add('hidden')
      techHide.classList.remove('hidden')
      containerTech.classList.add('container-tech--show')
    })
  }

  function hideTech() {
    techHide.addEventListener('click', (e) => {
      e.preventDefault()
      techHide.classList.add('hidden')
      techVisible.classList.remove('hidden')
      containerTech.classList.remove('container-tech--show')
    })
  }

  showBrand()
  hideBrand()
  showTech()
  hideTech()

  //swiper

  const swiperBrand = new Swiper('.swiper-brand', {
    slidesPerView: 1,
    spaceBetween: 60,

    pagination: {
      el: '.swiper-brand-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  const swiperTech = new Swiper('.swiper-tech', {
    slidesPerView: 1,
    spaceBetween: 60,

    pagination: {
      el: '.swiper-tech-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  const swiperPrice = new Swiper('.swiper-price', {
    slidesPerView: 1,
    spaceBetween: 60,

    pagination: {
      el: '.swiper-price-pagination',
      type: 'bullets',
      clickable: true
    }
  })
}

export default swiper
