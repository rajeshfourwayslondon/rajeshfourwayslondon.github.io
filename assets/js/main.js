/*!
 * pro-fed v1.0.1: advance frontend framework
 * (c) 2018 
 * MIT License
 */

"use strict";

;
(function ($) {

    /*
     * Global Varible
     */
    var $window = $(window),
        $document = $("document"),
        $body = $("body");

    /*
     * Header Fix on Scroll
     */

    var fixHeader = function fixHeader($stickyEl, $scrollToPosition) {

        if ($stickyEl.length > 0) {
            (function () {

                var scrollPostion = "";

                $window.scroll(function () {

                    scrollPostion = $window.scrollTop();

                    scrollPostion > $scrollToPosition ? $stickyEl.addClass("scrolled") : $stickyEl.removeClass("scrolled");
                });
            })();
        }
    };

    // Call fixed header function
    fixHeader($(".header"), 100);

    /*
     * Highlight Active Link
     */

    var activeLink = function activeLink($nav) {
        var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
            $navLink = $nav.find("a");

        $navLink.each(function () {

            var pageHref = $(this).attr("href");

            if (pageName == pageHref) {
                $nav.find("li").removeClass("active");
                $(this).parent("li").addClass("active");
            }
        });
    };

    //Call active link
    activeLink($(".nav"));

    /*
     * Offcanvas Menu
     */
    var $menuTrigger = $("#js-menu-trigger"),
        $menuClose = $(".overlay");

    // Trigger Menu Toggle
    $menuTrigger.on("click", function () {
        menuToggle();
    });

    // Trigger Menu Close
    $menuClose.on("click", function () {
        menuClose();
    });

    // Menu Toggle
    var menuToggle = function menuToggle() {

        if ($body.hasClass("menu-is-active")) {

            $body.removeClass("menu-is-active");
        } else {

            $body.addClass("menu-is-active");
        }
    };

    // Menu Close
    var menuClose = function menuClose() {

        $body.removeClass("menu-is-active");
    };

    var $submenuTrigger = $(".has-sub"),
        $subMenu = $(".main-nav-list-sub");

    $submenuTrigger.on("click", function () {

        if ($(this).hasClass("active")) {
            $(this).find(".main-nav-list-sub").slideUp();
            $(this).removeClass("active");
        } else {
            $submenuTrigger.removeClass("active");
            $(this).addClass("active");

            $subMenu.slideUp();
            $(this).find(".main-nav-list-sub").slideToggle();
        }
    });

    //let myvar = [1,2,3,4,5];
    //myvar.map((value,i) => console.log(value[i]));

    var $grid = $(".grid");
    if ($grid.length > 0) {
        var $masonryGrid = $grid.masonry({
            columnWidth: ".grid__sizer",
            gutter: ".grid__gutter-sizer",
            itemSelector: ".grid__item",
            percentPosition: true
        });

        $masonryGrid.imagesLoaded().progress(function () {
            $masonryGrid.masonry("layout");
        });
    }

    var $heroCarousel = $('.js-hero-carousel');
    $heroCarousel.slick({
        slidesToShow: 1,
        dots: true,
        arrows: true
    });

    var $testimonialCarousel = $(".js-testimonial-carousel");
    $testimonialCarousel.slick({
        slidesToShow: 1,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }]
    });
})(jQuery);
//# sourceMappingURL=main.js.map
