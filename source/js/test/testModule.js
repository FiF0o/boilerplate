/**
 * Created by jonlazarini on 12/04/16.
 */





 //testModule ES6
export default class TaMere {
    constructor(fdp, tromblon) {
        this.fdp = fdp;
        this.tromblon = tromblon;
    }
}

var taMere = new TaMere('jacky','michel');
console.log(taMere);





//testModule commonjs
module.exports = function() {


    var testNow = {
        aNumber: 4,
        aFunction: function(qwe, asd) {
            return qwe + asd
        },
        qwe: 3,
        asd: 3,
        anArray : ['1','2','3']

    }
    //console.log('scrolly is logged in: \n\n' + scrolly + '\n\n');
    return testNow

}



//iScrollYo = function() {
//    console.log('iScrollYo');
//
//};
//
//exports.iScrollYo = iScrollYo;
