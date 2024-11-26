// header trigger
$(document).ready(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.header').toggleClass('active')
    })
    $('.header a').click(function(){
        $('.header').removeClass('active')
        $('.trigger').toggleClass('active')
    })
});