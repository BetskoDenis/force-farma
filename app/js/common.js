$(function(){
    var windowPosition = $(this).scrollTop(),
        topMenuTopValues = {'height':'100%'},
        topMenuScrollValues = {'max-height':'60px',
            'transition':'all .5s',
            'border-bottom':0};
        if(windowPosition == 0) {
            $(".header").css(topMenuTopValues);
            // Действие, если страница в самом верху
        } else {
            $(".header").css(topMenuScrollValues);
            // Действие, если страница прокручена вниз
        }



    var lang= $('.arr')
    lang.on('click', function () {

        $('.ukr').css('transform', 'translateX(0)')
        $('.ukr').css('display', 'block')
        $('.eng').css('transform', 'translateX(0)')
        $('.eng').css('display', 'block')

        $('.arr').css('transform', 'rotate(135deg)')
        $('.arr').css('margin-bottom', '2px')

    })
    $('.slider_wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true
    });


})