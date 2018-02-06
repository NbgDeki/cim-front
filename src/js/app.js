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
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faPinterestSquare from '@fortawesome/fontawesome-free-brands/faPinterestSquare';



// Add the icon to the library so you can use it in your page
fontawesome.library.add(faPlus, faBars, faAngleRight, faFacebookF, faInstagram, faMapMarkerAlt, faPhone, faEnvelope, faLinkedin, faPinterestSquare);

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
        var height = $('.bx-wrapper').height();
        console.log(height);

        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top
            console.log(scrollTop);

            if (scrollTop + 100 > height) {
                $('.fluid-nav').css({'background-color': 'rgba(0,0,0,1)' });
            } else {
                $('.fluid-nav').css({'background-color': 'transparent' });
            }
        };

        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }else{
        $('.fluid-nav').css({'background-color': 'rgba(0,0,0,1)' });
    }

    $("#collections").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#grid1").offset().top - 100
        }, 500);
    });

    $('.location-icon').mouseover(function(){
        $('.fixed-nav').css({'background-color':'rgba(0,0,0,0.4)'});
        $('.phone-p').find('p').css({'color':'#fff'});
        $('.location-p').find('p').css({'color':'#fff'});
        $(this).fadeIn(500);
    });
    $('.location-icon').mouseleave(function(){
        $('.fixed-nav').css({'background-color':'transparent'});
        $('.phone-p').find('p').css({'color':'transparent'});
        $('.location-p').find('p').css({'color':'transparent'});
        
    });
    $('.phone-icon').mouseover(function(){
        $('.fixed-nav').css({'background-color':'rgba(0,0,0,0.4)'});
        $('.phone-p').find('p').css({'color':'#fff'});
        $('.location-p').find('p').css({'color':'#fff'});
        $(this).fadeIn(500);
    });
    $('.phone-icon').mouseleave(function(){
        $('.fixed-nav').css({'background-color':'transparent'});
        $('.phone-p').find('p').css({'color':'transparent'});
        $('.location-p').find('p').css({'color':'transparent'});
        
    });

    $('.bx-wrapper').mouseover(function(){
        $('.bx-controls-direction').fadeIn(500);
    });
    $('.bx-wrapper').mouseleave(function(){
        $('.bx-controls-direction').fadeOut(500);
    });
  
});
