/**
 * floor-location.js
 * https://github.com/Erichain/Floor-Location-Plugin
 *
 * Copyright 2015 Erichain.
 * Release under the MIT license
 * Created by Erichain on 2015-12-18.
 */
(function ( $ ) {
    $.fn.floor = function ( config ) {

        //add a class to user's control menu
        $(this).addClass('floor');

        var floorMenuBtns = $('.floor a'),
            floorItem = $('.floor-item'),
            currMenuID = '',

            //default scroll speed
            defaultConfig = $.extend({
                scrollSpeed: 800
            }, config);

        /**
         * if we have a user's config for scrollSpeed
         * then we use the user's scrollSpeed
         */
        if ( config.scrollSpeed ) {
            defaultConfig.scrollSpeed = config.scrollSpeed;
        }

        /**
         * scroll event function is used to control scroll event
         *
         * @function scrollEventCtrl
         */
        function scrollEventCtrl () {
            $(window).scroll(function () {
                floorItem.each(function () {
                    var scrollTop = $(document).scrollTop(),
                        that = $(this),
                        top = that.offset().top;

                    /**
                     * if the value of scrollTop is larger than the number of item's offsetTop
                     * just set the floor button active
                     *
                     * you may notice that I make the 'top' decrease 1
                     * yes, maybe it's just used to fix a bug
                     */
                    if ( scrollTop > top - 1 ) {
                        currMenuID = '#' + that.attr('class').split(' ')[1];
                        bindClassCtrl(currMenuID);
                    }
                })
            });
        }

        /**
         * click event function, used to control the menu button clicking
         *
         * @function clickEventCtrl
         */
        function clickEventCtrl () {
            floorMenuBtns.each(function () {
                $(this).on('click', function ( e ) {

                    var id = $(this).attr('id'),
                        dis = $('div.' + id).offset().top;

                    //cancel the default event of 'a' tag
                    e.preventDefault();

                    currMenuID = '#' + $(this).attr('id');

                    $('html, body').animate({
                        scrollTop: dis
                    }, defaultConfig.scrollSpeed, function () {
                        bindClassCtrl(currMenuID);
                    });
                });
            });
        }

        /**
         * bind class function is used to control the active status of menu button
         *
         * @function bindClassCtrl
         * @param itemID
         */
        function bindClassCtrl ( itemID ) {
            $('.floor').find('.active').removeClass('active');
            $(itemID).addClass('active');
        }

        scrollEventCtrl();
        clickEventCtrl();
    };


})( jQuery );