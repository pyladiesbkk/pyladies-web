import './styles.css'

$(document).ready(function() {
  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  })

  $('.top-link').click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  //gallery slider
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  })

  // Bootstrap 4 scrollspy
  $(window).on('activate.bs.scrollspy', function(_, { relatedTarget }) {
    window.location.hash = relatedTarget
  })
})
