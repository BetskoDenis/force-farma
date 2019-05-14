$(function(){
    $(window).scroll(function () {
         var windowPosition = $(this).scrollTop();
            topMenuTopValues = {'max-height':'165px',
                'background-color': 'rgba(255, 255, 255, .9)',
                'transition':'all .5s'},
            topMenuScrollValues = {'max-height':'60px',
             'transition':'all .5s',
                'background-color': 'rgba(255, 255, 255, 1)'};
            topLogoScroll = {'height':'50px'}
            topLogoTop = {'height':'150px'}

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
            var lang = $('.arr'),
                trans = $('.arr').css('transform'),
                ukr = $('.ukr'),
                rus = $('.rus'),
                eng = $('.eng');


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
    $('.rus').css('display', 'flex')
    $('.ukr').css('transform', 'translateX(500px)')
    $('.ukr').css('display', 'none')
    $('.eng').css('transform', 'translateX(500px)')
    $('.eng').css('display', 'none')
    $('.arr').css('transform', 'rotate(45deg)')
    $('.arr').css('margin-bottom', '7px')

}
        });




    $('.langclass').on('click', function one () {
        if ($('.ukr').on('click')) {


            $('.rus').css('transform', 'translateX(500px)')
            $('.rus').css('display', 'none')
            $('.eng').css('transform', 'translateX(500px)')
            $('.eng').css('display', 'none')

            $('.arr').css('transform', 'rotate(45deg)')
            $('.arr').css('margin-bottom', '7px')
        } else if ($('.rus').on('click')) {
            $('.ukr').css('transform', 'translateX(500px)')
            $('.ukr').css('display', 'none')
            $('.eng').css('transform', 'translateX(500px)')
            $('.eng').css('display', 'none')

            $('.arr').css('transform', 'rotate(45deg)')
            $('.arr').css('margin-bottom', '7px')
        } else if ($('.eng').on('click')) {
            $('.ukr').css('transform', 'translateX(500px)')
            $('.ukr').css('display', 'none')
            $('.rus').css('transform', 'translateX(500px)')
            $('.rus').css('display', 'none')

            $('.arr').css('transform', 'rotate(45deg)')
            $('.arr').css('margin-bottom', '7px')
        }

    });






        $('.slider_wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true

    })

})