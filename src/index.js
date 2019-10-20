import './styles.css'

$(document).ready(function(){
    $(".top-link").click(function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});