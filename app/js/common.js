$(function(){
    $(window).scroll(function () {
         var windowPosition = $(this).scrollTop();
            topMenuTopValues = {'max-height':'165px',
                'background-color': 'rgba(255, 255, 255, .9)'},
            topMenuScrollValues = {'max-height':'60px',
             'transition':'all .5s',
                'background-color': 'rgba(255, 255, 255, 1)'};

                if(windowPosition == 0) {

             $(".header").css(topMenuTopValues);
        } else {

            $(".header").css(topMenuScrollValues);

        }
    });





        $('.arr').on('click', function () {
            var lang = $('.arr'),
                trans = $('.arr').css('transform'),
                ukr = $('.ukr'),
                rus = $('.rus'),
                eng = $('.eng');
if ($('.arr').hasClass('open')){
    $('.rus').css('transform', 'translateX(0px)')
    $('.rus').css('display', 'flex')
    $('.ukr').css('transform', 'translateX(500px)')
    $('.ukr').css('display', 'none')
    $('.eng').css('transform', 'translateX(500px)')
    $('.eng').css('display', 'none')
    $('.arr').css('transform', 'rotate(45deg)')
    $('.arr').css('margin-bottom', '7px')
    $('#arrbuttom').removeClass('open')
}else {
    $('.rus').css('transform', 'translateX(0px)')
    $('.rus').css('display', 'flex')
    $('.ukr').css('transform', 'translateX(0px)')
    $('.ukr').css('display', 'flex')
    $('.eng').css('transform', 'translateX(0px)')
    $('.eng').css('display', 'flex')
    $('.arr').css('transform', 'rotate(135deg)')
    $('.arr').css('margin-bottom', '2px')
    $('.arr').addClass('open')
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