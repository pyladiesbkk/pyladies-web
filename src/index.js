import './styles.css'

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

$(document).ready(function(){
    $(".top-link").click(function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
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
});