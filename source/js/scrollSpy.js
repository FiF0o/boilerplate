/**
 * Created by jonlazarini on 04/04/16.
 */
//TODO Load plugins from bower - https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-First-Steps
import $ from '../vendors/jquery/dist/jquery.js';
import TweenMax from '../vendors/gsap/src/uncompressed/TweenMax.js';

//TODO fix what to import for scrollspy
//import TweenLite from '../vendors/gsap/src/uncompressed/TweenLite.js';

import ScrollMagic from '../vendors/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';

//Can't pass pluggins when there is many dots in the filename e.g. jquery.gsap.js
//import Animation from '../vendors/scrollmagic/scrollmagic/uncompressed/plugins/gsap.js';
//import Animation from '../vendors/scrollmagic/scrollmagic/uncompressed/plugins/jquery.gsap.js';
import ScrollToPlugin from '../vendors/gsap/src/uncompressed/plugins/ScrollToPlugin.js';




// Can't pass debugger...
//import debugScroll from '../../vendors/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


//Debug modules loading
console.log('Log jquery from scrollSpy: \n\n'+ $ + '\n\n');
console.log('TweenMax: \n\n' + TweenMax + '\n\n');

//console.log('\n\n' + TweenLite + '\n\n');

console.log('scrollMagic: \n\n' + ScrollMagic + '\n\n');

//console.log('Animation: \n\n' + Animation + '\n\n');
console.log('ScrollToPlugin: \n\n' + ScrollToPlugin + '\n\n');


// test
//export default class TaMere {
//    constructor(fdp, tromblon) {
//        this.fdp = fdp;
//        this.tromblon = tromblon;
//    }
//}
//
//var taMere = new TaMere('jacky','michel');
//console.log(taMere);

// Can't pass debugger...
//console.log('\n\n' + debugScroll + '\n\n');
//TODO Require 4 js plugins from bower

//TODO Write Scroll Spy code

// Require jquery

//TODO Inject scrollspy.s file into functions.js

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











//module.exports = function() {
//
//
//    var testNow = {
//        aNumber: 4,
//        aFunction: function(qwe, asd) {
//            return qwe + asd
//        },
//        qwe: 3,
//        asd: 3,
//        anArray : ['1','2','3']
//
//    }
//    //console.log('scrolly is logged in: \n\n' + scrolly + '\n\n');
//    return testNow
//
//}



//iScrollYo = function() {
//
//
//}
//
//
//
//
//exports.iScrollYo = iScrollYo;
