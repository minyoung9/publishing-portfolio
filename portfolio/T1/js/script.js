$(function(){

    var $header = $('header');
    var $subHeight;

    InEvent();

    // 메뉴 보여주는 효과
    function menuShow(){
        $(this).find('.sub_menu').stop().animate({'opacity':1},500,"easeOutCubic");
        $subHeight = $(this).find('.sub_menu').outerHeight();
        $header.stop().animate({'height':70+$subHeight+'px'},700,"easeOutCubic");
    }


    // 메뉴 글씨만 사라지는 효과
    function menuLetterHide(){
        $(this).find('.sub_menu').stop().animate({'opacity':0},500,"easeOutCubic");
    }
    
    // 메뉴 사라지는 효과
    function menuHide(){
        $header.stop().animate({'height':'70px'},700,"easeOutCubic");
    }

    // 효과 적용
    function InEvent(){
        $("#menu>ul>li").on('mouseenter',menuShow);
        $("#menu>ul>li").on('mouseleave',menuLetterHide);
        $header.on('mouseleave',menuHide);
    }
});
// 슬릭 슬라이드
$(document).ready(function() {
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        // 마우스 클릭시 화면전환 중단되는 현상 방지
        pauseOnHover: false,
        pauseOnFocus: false 
    });
});
// T1 소개 타이틀 컨텐츠 효과
$(document).ready(function() {
    $('.faq-content').eq(0).show()
    $('.faq-title').eq(0).addClass('active')
    $('.faq-title').click(function() {
        $(this).addClass('active')
        $(this).siblings('.faq-title').removeClass('active')
        $(this).next().slideDown()
        $(this).siblings('.faq-title').next().slideUp()
    });
});
// 헤더 , go to top 스크롤 체인지
$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
        $('header, .btn-top').addClass('active')
        }
    else {
        $('header, .btn-top').removeClass('active')
    }
})
// 스크롤
$(document).ready(function() {
    $('.btn-top').click(function(event) {
        event.preventDefault(); 
        // 부드럽게 상단으로 스크롤
        $('html, body').animate({
            scrollTop: 0
        }, 800); 
    });
});
$(document).ready(function() {
    $('.trigger').click(function() {
        $(this).toggleClass('active');
        $('#mobile-menu').toggleClass('active')
    });
    $('#mobile-menu li a, .mobile-sub_menu li a, section').click(function(){
        $('#mobile-menu, .trigger').removeClass('active')
    })
});