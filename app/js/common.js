$(function() {
    $(window).scroll(function () {
        var windowPosition = $(this).scrollTop();
        topMenuTopValues = {
            'max-height': '165px',
            'background-color': 'rgba(255, 255, 255, .9)',
            'transition': 'all .5s'
        },
            topMenuScrollValues = {
                'max-height': '60px',
                'transition': 'all .5s',
                'background-color': 'rgba(255, 255, 255, 1)'
            };
        topLogoScroll = {
            'height': '50px',
            'transition': 'all .5s'
        }
        topLogoTop = {
            'height': '150px',
            'transition': 'all .5s'
        },
            windowWidth = $(window).width()

        if (windowPosition == 0) {

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

        if ($('.arr').hasClass('open')) {
            $('.lang_wrapper').css('width', '200px')
            $('.rus').css('transform', 'translateX(0px)')
            $('.rus').css('display', 'flex')
            $('.ukr').css('transform', 'translateX(0px)')
            $('.ukr').css('display', 'flex')
            $('.eng').css('transform', 'translateX(0px)')
            $('.eng').css('display', 'flex')
            $('.arr').css('transform', 'rotate(135deg)')
            $('.arr').css('margin-bottom', '2px')

        } else {
            $('.lang_wrapper').css('width', '80px')
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
        var widthWindow = $(window).width();

        if(widthWindow >= 450 && widthWindow <= 1300 && widthSpan == '0px'){

            $('.top_menu_medium').css('transform','translateY(-500px)')
            $('.burger_span_two').css('width', '50px')
            $('.burger_span_one').css('transform', '')
            $('.burger_span_three').css('transform', '')

        }else
        if(widthWindow >= 450 && widthWindow <= 1300 && widthSpan == '50px' ) {

            $('.top_menu_medium').css('transform', 'translateY(0)')
            $('.burger_span_two').css('width', '0')
            $('.burger_span_one').css('transform', 'rotate(45deg)')
            $('.burger_span_three').css('transform', 'rotate(-45deg)')
        }
        if (widthWindow < 450 && widthSpan == '0px') {
                    $('.burger_span_two').css('width', '50px')
                    $('.burger_span_one').css('transform', '')
                    $('.burger_span_three').css('transform', '')
                    $('.top_menu_mini').css('transform', 'translateX(500px)')
                } if (widthWindow <= 450 && widthSpan == '50px') {
                    $('.burger_span_two').css('width', '0')
                    $('.burger_span_one').css('transform', 'rotate(45deg)')
                    $('.burger_span_three').css('transform', 'rotate(-45deg)')
                    $('.top_menu_mini').css('transform', 'translateX(0px)')

                }
          })

            $('#catalog_block_item_two').on('click', function () {
                if($('.arrow.two').hasClass('openMenu')){
                    $('.arrow.two').css('transform', 'rotate(135deg)')
                    $('.mini_menu_two').css('transform', 'scale(0)')
                    $('.arrow.two').toggleClass('openMenu')}


                $('.arrow.one').toggleClass('openMenu')
                    if ($('.arrow.one').hasClass('openMenu')) {
                        $('.arrow.one').css('transform', 'rotate(-45deg)')
                        $('.mini_menu_one').css('transform', 'scale(1)')

                    }
                else {
                        $('.arrow.one').css('transform', 'rotate(135deg)')
                        $('.mini_menu_one').css('transform', 'scale(0)')
                    }






    })
    $('#catalog_block_item_three').on('click', function () {
        if($('.arrow.one').hasClass('openMenu')) {
            $('.arrow.one').css('transform', 'rotate(135deg)')
            $('.mini_menu_one').css('transform', 'scale(0)')
            $('.arrow.one').toggleClass('openMenu')
        }
        $('.arrow.two').toggleClass('openMenu')
        if ($('.arrow.two').hasClass('openMenu')) {
            $('.arrow.two').css('transform', 'rotate(-45deg)')
            $('.mini_menu_two').css('transform', 'scale(1)')

        } else {
            $('.arrow.two').css('transform', 'rotate(135deg)')
            $('.mini_menu_two').css('transform', 'scale(0)')
        }
    })
    // $(window).click(function () {
    //     if($('.arrow.one').hasClass('openMenu')) {
    //         $('.arrow.one').css('transform', 'rotate(135deg)')
    //         $('.mini_menu_one').css('transform', 'scale(0)')
    //     }
    //     if($('.arrow.two').hasClass('openMenu')){
    //         $('.arrow.two').css('transform', 'rotate(135deg)')
    //         $('.mini_menu_two').css('transform', 'scale(0)')}
    // })
})