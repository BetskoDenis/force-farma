$(function(){
    $(window).scroll(function () {
         var windowPosition = $(this).scrollTop();
            topMenuTopValues = {'max-height':'165px',
                'background-color': 'rgba(255, 255, 255, .9)',
                'transition':'all .5s'},
            topMenuScrollValues = {'max-height':'60px',
             'transition':'all .5s',
                'background-color': 'rgba(255, 255, 255, 1)'};
            topLogoScroll = {'height':'50px',
                'transition':'all .5s'}
            topLogoTop = {'height':'150px',
                'transition':'all .5s'},
             windowWidth = $(window).width()

            if(windowPosition == 0) {

             $(".header").css(topMenuTopValues);
             $(".logo_top_img").css(topLogoTop);

        } else {

            $(".header").css(topMenuScrollValues);
            $(".logo_top_img").css(topLogoScroll);


        }
    });


        $('.arr').on('click', function () {
            $('#arrButton').toggleClass('open')
            $('.lang_wrapper').toggleClass('activeWrapper')

            if ($('.arr').hasClass('open')){
                $('.lang_wrapper').css('width', '150px')
                $('.rus').css('transform', 'translateX(0px)')
                $('.rus').css('display', 'flex')
                $('.ukr').css('transform', 'translateX(0px)')
                $('.ukr').css('display', 'flex')
                $('.eng').css('transform', 'translateX(0px)')
                $('.eng').css('display', 'flex')
                $('.arr').css('transform', 'rotate(135deg)')
                $('.arr').css('margin-bottom', '2px')

            }else {
                $('.lang_wrapper').css('width', '50px')
                $('.rus').css('transform', 'translateX(0px)')
                $('.rus').css('transition', 'all .5s')

                $('.ukr').css('transform', 'translateX(500px)')
                $('.ukr').css('transition', 'all .5s')
                $('.eng').css('transform', 'translateX(500px)')
                $('.eng').css('transition', 'all .7s')
                $('.arr').css('transform', 'rotate(45deg)')
                $('.arr').css('margin-bottom', '7px')

            }
                    });

        $('.slider_wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true

    });
        $('.burger_menu').on('click', function () {
            var widthSpan = $('.burger_span_two').css('width');
              if (widthSpan == '0px') {
                $('.burger_span_two').css('width', '50px')
                $('.burger_span_one').css('transform', '')
                $('.burger_span_three').css('transform', '')
                $('.top_menu_mini').css('transform', 'translateX(500px)')
        }
              else{
                $('.burger_span_two').css('width', '0')
                $('.burger_span_one').css('transform', 'rotate(45deg)')
                $('.burger_span_three').css('transform', 'rotate(-45deg)')
                $('.top_menu_mini').css('transform', 'translateX(0px)')

            }
        })



})