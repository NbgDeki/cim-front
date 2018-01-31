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

    var stickyNavTop = $('.slider').offset().top;
    console.log(stickyNavTop);


    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        if (scrollTop > stickyNavTop) {
            $('#menu-toggle').css({'position': 'fixed', 'top': '0', 'z-index': '9999' });
            $('#menu-toggle').find('img').css({'opacity': '0'});
        } else {
            $('#menu-toggle').css({'position': 'static'});
            $('#menu-toggle').find('img').css({'opacity': '1'});
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});
