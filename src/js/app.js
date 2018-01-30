import 'jquery';
import 'bootstrap';
import '../css/main.scss';


import fontawesome from '@fortawesome/fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

// Add the icon to the library so you can use it in your page
fontawesome.library.add(faPlus, faBars);

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
});
