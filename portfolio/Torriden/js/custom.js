$(document).ready(function(){
    // slick slider - welcome
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    });
      /* TypeIt - Welcome */
    $('#typing').typeIt({
        strings: ["Truth is simple.", "No compromises.", "The answer is you."],
        speed: 100,
        autoStart: true,
        breakLines: false,
    });
    $('.trigger').click(function(){
        $('.trigger, .overlay, .menu').toggleClass('active')
    })
});