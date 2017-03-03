/**
 * Created by jonlazarini on 12/04/16.
 */
var $ = window.jQuery = window.$ = require('../vendors/jquery/dist/jquery.js');
var velocity = require('../vendors/velocity/velocity');

//console.log('window.jQuery');
//console.log(window.jQuery);
//
//console.log('$');
//console.log($);
//
//console.log('velocity');
//console.log(velocity);


module.exports = function () {
    //TODO Modularise code snippets for nav
// ****** RWD MOBILE NAV  ****** //

    $('.nav-mobile').click(function () {
        //display in block
        $('ul.nav-list').toggleClass('nav-open').slideToggle('slow');
    });

// ****** HIDES RWD NAV  ****** //

//$(window).on.resize('resize', function() {
//    var isOpen = $('ul.nav-list.nav-open')
//       if(isOpen == !isOpen && window < 768px){
//           $('ul.nav-list').toggleClass('.nav-open');
//       }
//});

// ****** SHOW MOBILE NAV ELEMENTS WHEN NOT MOBILE VIEW AND IF MOBILE NAV
// HIDDEN ****** //

    $(window).on('resize', function () {
        if ($(this).width() >= 768) {
            $('ul.nav-list').css({"display": "inline-block"});
            //$('.nav-open').css("display", "none");

        }
    });


    //$('a').click(function() {
    //    console.log('sec-section');
    //    $('.secondary-section').velocity("slideDown", { duration: 1500 })
    //        .velocity("slideUp", { delay: 500, duration: 1500 });
    //
    //});

// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //
//TODO add animation slide effect when scrolling - manually add a class with
// animation...
    var lastScrollTop = 0;
    var dh = $('div.header');

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        //console.log('lastscroll');
        //console.log(lastScrollTop);
        //console.log('scrolltop');
        //console.log(st);

        if (st > lastScrollTop && st) {
            dh.slideUp(500)
            //dh.velocity("slideUp", {duration: 500})
        }
        else {
            dh.slideDown(500)
            //dh.velocity("reverse", {duration: 250})

        }
        lastScrollTop = st
    });

// ****** HIDES MOBILE NAV WHEN SCROLLING ****** //

//$(window).resize(function() {
//    var win = $(this);
//    var isClosed = $('ul.nav-list');
//    var isOpen = $('ul.nav-list.nav-open');
//    if (win.width() >= 768 && isClosed !== isOpen) {
//        console.log('resize');
//
//        //fugly hack that needs to be fixed
//        $('ul.nav-list').css({"display":"inline-block" });
//    }
//// else if (isOpen === isOpen) {
////        $('ul.nav-list').css({"display":"none" });
////    }
//});

//$(window).resize(function() {
//    var win = $(this);
//    var isOpen = $('ul.nav-list.nav-open');
//    if (win.width() <= 768 && isOpen != isOpen) {
//        alert('resize');
//        $('ul.nav-list').toggleClass('.nav-open');
//
//    }
//});
//    if (window > 768px) {
//        $('ul.nav-list').css({"display":"inline-block", "margin-left":"20px"
// }); } });


// ****** STICKY NAV NAV  ****** //

    var mn = $(".header"), ml = $('div.logo'), // dropshadow when scrolled
        mns = "main-nav-scrolled", //change logo size
        mnls = "main-nav-logo-scrolled", hdr = $('header').height();

    $(window).scroll(function () {
        // hides nav elements when page scroll
        $('.nav-open').css("display", "none");

        if ($(this).scrollTop() > hdr) {
            //mn.removeClass('nav-down');
            mn.addClass(mns);
            //mn.addClass('nav-up');
        } else {
            //mn.removeClass('nav-up');
            mn.removeClass(mns);
            //mn.addClass('nav-down');
        }
    });


    $(window).scroll(function () {

        $('.nav-open').css("display", "none");

        if ($(this).scrollTop() > hdr && !mnls) {
            ml.addClass(mnls)
        } else {
            ml.removeClass(mnls)
        }
    });

    var allNavLinks = $('a.link-nav');

    $(allNavLinks).click(function () {
        //TODO Refactor code - should only change style on one div and not
        // 2... Need to tagert the parent div
        //
        //hides container nav list when link is clicked
        if(window.innerWidth <= 768) {
            //console.log('window.innerWidth');
            $('ul.nav-list').css({"display": "none"});
            //hides nav list when link is clicked
            $('.nav-open').css("display", "none");
        }


        //hides nav list when link is clicked
        //$('.nav-open').css("display", "none");
    });

//TODO Add script that hides nav when scrolled down and shows it back when
// scrolled up

//var div = $( "<div>" );
//
//div.promise().done(function( arg1 ) {
//    // Will fire right away and alert "true"
//    console.log(arg1);
//    alert( this === div && arg1 === div );
//});

// Uses Self Invoking function to call the module when loaded in main.js
}();
