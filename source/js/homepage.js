/**
 * Created by jonlazarini on 06/05/16.
 */
import $ from '../vendors/jquery/dist/jquery.js';


module.exports = function () {
    var a = $('.separator.mobile');
    var b = $('-is-shown');

    $(window).on('resize', function () {
        console.log('a')
        console.log(a)
        console.log('b')
        console.log(b)
        if ($(this).width() <= 768) {
            $('.separator.mobile').toggleClass('-is-shown');
            // 200)
            //$('.separator.dotted-gradient.-isHidden').removeClass('.-isHidden').addClass('.-isShown')
        }
        //else {
        //    $('.separator.dotted-gradient.-isHidden').removeClass('.-isShown').addClass('.-isHidden')
        // }
    });

}();
