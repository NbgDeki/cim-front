import 'jquery';
import 'bootstrap';
import '../css/main.scss';


import fontawesome from '@fortawesome/fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

// Add the icon to the library so you can use it in your page
fontawesome.library.add(faPlus, faBars, faAngleRight, faFacebookF, faInstagram, faMapMarkerAlt, faPhone, faEnvelope);

$(function () {
    $('.collapse').collapse('hide');

    $('#trigger').click(function(){
        $('#side-menu').toggleClass('active');

        if($('#side-menu').hasClass('active')){
            $('#site-content').append('<div id="hover-over"></div>');

            $('#hover-over').click(function () {
                $(this).remove();
                $('#side-menu').removeClass('active');
            });
        }
    });

    $('.js-hover').hover(function () {
        $(this).find('ul').addClass('open');
    }, function () {
        $(this).find('ul').removeClass('open');
    });

    if($('.slider').length > 0){
        var height = $('.slider').height();

        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top

            if (scrollTop + 100 > height) {
                $('.fluid-nav').css({'background-color': 'rgba(0,0,0,0.5)' });
            } else {
                $('.fluid-nav').css({'background-color': 'transparent' });
            }
        };

        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }else{
        $('.fluid-nav').css({'background-color': 'rgba(0,0,0,0.5)' });
    }

    $("#collections").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".parent-flex-container").offset().top - 100
        }, 500);
    });
});
