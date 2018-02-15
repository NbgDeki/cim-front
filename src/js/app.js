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
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';



// Add the icon to the library so you can use it in your page
fontawesome.library.add(faPlus, faBars, faAngleRight, faFacebookF, faInstagram, faMapMarkerAlt, faPhone, faEnvelope, faLinkedin, faPinterestSquare, faGooglePlusG, faTwitter);

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

    // $('.js-hover').hover(function () {
    //     $(this).find('ul').addClass('open');
    // }, function () {
    //     $(this).find('ul').removeClass('open');
    // });
    

        var len = $('#double li').length;

        $('.collections').mouseover(function(){
            var len = $('#double li').length;
            for (var i = 0; i < len; i++) {
                (function(i) {
                    setTimeout(function () {
                        $('#double li').eq(i).css({'transform': 'rotateX(0)', 'backface-visibility': 'hidden', 'transition-duration': '0.8s', 'opacity':'1'});
                    }, i * 100);
                })(i);
            }
        });

        $('.collections').mouseout(function(){

            for (var i = 0; i < len; i++) {
                (function(i) {
                    setTimeout(function () {
                        $('#double li').eq(i).css({'transform': 'rotateX(180deg)', 'backface-visibility': 'hidden', 'transition-duration': '.5s'});
                    }, i * 100);
                })(i);
            }
        });



/*********************************************
  
           TRANSPARENTNA NAVIGACIJA
 
********************************************/
    if($('.slider').length > 0){
        var height = $('.bx-wrapper').height();

        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top

            if (scrollTop + 100 > height) {
                $('.fluid-nav').css({'background-color': 'rgba(24,24,24,1)' });
            } else {
                $('.fluid-nav').css({'background-color': 'rgba(24,24,24,0.5)' });
            }
        };

        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }else{
        $('.fluid-nav').css({'background-color': 'rgba(24,24,24,0.5)' });
    };

    if($('.hero-img-container').length > 0){
        var height = $('.hero-img-container').height();

        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top

            if (scrollTop + 100 > height) {
                $('.fluid-nav').css({'background-color': 'rgba(24,24,24,1)' });
            } else {
                $('.fluid-nav').css({'background-color': 'rgba(24,24,24,0.5)' });
            }
        };

        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }else{
        $('.fluid-nav').css({'background-color': 'rgba(24,24,24,0.5)' });
    };

/*********************************************
  
            KLIK DO KOLEKCIJA
 
********************************************/    
    $(".nav-collections").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#grid1").offset().top - 100
        }, 500);
    });

    var url = location.href;
    var hash = url.substring(url.indexOf('#')); // '#foo'
    console.log(hash);
    if(hash=="#collections"){
        $('html, body').animate({
            scrollTop: $("#grid1").offset().top - 100
        }, 500);
    };
/*********************************************
  
              MALA NAVIGACIJA
 
********************************************/

    $('.location-icon').mouseover(function(){
        $('.location-p').css({'background-color':'rgba(0,0,0,0.4)'});
        $('.location-p').find('p').css({'color':'#fff'});
    });
    $('.location-icon').mouseleave(function(){
        $('.location-p').css({'background-color':'transparent'});
        $('.location-p').find('p').css({'color':'transparent'});
        
    });
    $('.phone-icon').mouseover(function(){
        $('.phone-p').css({'background-color':'rgba(0,0,0,0.4)'});
        $('.phone-p').find('p').css({'color':'#fff'});
    });
    $('.phone-icon').mouseleave(function(){
        $('.phone-p').css({'background-color':'transparent'});
        $('.phone-p').find('p').css({'color':'transparent'});
    });

/*********************************************
  
           STERELICE NA SLAJDERU
 
********************************************/
    $('.bx-wrapper').mouseover(function(){
        $('.bx-controls-direction').fadeIn(500);
    });
    $('.bx-wrapper').mouseleave(function(){
        $('.bx-controls-direction').fadeOut(500);
    });
  
});
