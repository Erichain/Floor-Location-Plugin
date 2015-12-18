/**
 * you can put your own configuration here
 *
 * such as some configuration etc.
 *
 * now I just set the speed of scrolling to 1000ms
 */
(function ( $ ) {

    return $(document).ready(function () {
        $('.floor-menu').floor({
            scrollSpeed: 1000
        });
    })

})( jQuery );