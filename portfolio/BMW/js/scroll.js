//smooth scroll
$(document).ready(function() {
    $('.menu a, .logo a').click(function(e) {
        e.preventDefault();
        $.scrollTo(this.hash || 0, 900); 
    });
//wow scroll reveal animation
wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
})
wow.init()
});