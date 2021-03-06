$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
    });

    if (width <= 1024) {
        $("#mainMenu .menu-item-has-children > a").append("<span></span>");
        $("#mainMenu .menu-item-has-children span").click(function () {
            $(this).parent().next().slideToggle(300);
            $(this).toggleClass("active");
            return false;
        });
    }

    //WPCF7
    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });

    if (!$(".woocommerce-checkout")[0]) {
        $("select").selbel();
        $("select option:first-of-type").attr('selected','true').attr('disabled','disabled').attr('value','0');
    }

    //find empty paragraphs
    /*$('p').each(function() {
        var t = $(this);
        if(t.html().replace(/\s|&nbsp;/g, '').length === 0) { t.addClass('jEmpty'); }
    });*/

});

$(window).on('load', function () {
    /*var swiper = new Swiper('.swiper-container', {
       spaceBetween: 30,
       pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: 'true',
     },
     navigation: {
       nextEl: '.custom-next',
       prevEl: '.custom-prev',
     },
   });*/
});