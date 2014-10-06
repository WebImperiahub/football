$(document).ready(function(){
    $(".header").sticky({topSpacing:0, center:false});

    $(function() {
        $('#slides').slidesjs({
            navigation: false
        });
    });

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });
});/**
 * Created by pshin on 03.10.14.
 */
