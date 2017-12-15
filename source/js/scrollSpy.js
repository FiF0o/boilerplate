/**
 * Created by jonlazarini on 04/04/16.
 */
import $ from '../vendors/jquery/dist/jquery.js';
import TweenMax from '../vendors/gsap/src/uncompressed/TweenMax.js';
import ScrollMagic from '../vendors/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';
//Can't pass pluggins when there is many dots in the filename e.g. jquery.gsap.js
//import Animation from '../vendors/scrollmagic/scrollmagic/uncompressed/plugins/jquery.gsap.js';
import ScrollToPlugin from './ScrollToPlugin.js';

// Init controller
var controller = new ScrollMagic.Controller();

// Change behavior of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

    TweenMax.to(window, 0.5, {
        scrollTo : {
            y : target, // scroll position of the target along y axis
            autoKill : true // allows user to kill scroll action smoothly
        },
        ease : Cubic.easeInOut
    });

});

//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
    var id = $(this).attr("href");

    if($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

        // If supported by the browser we can also update the URL
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }

});
