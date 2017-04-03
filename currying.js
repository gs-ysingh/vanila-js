/**
 * Created by YSingh on 04/04/17.
 */

//Using closure, we can implement currying in javascript:

var curry = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

curry(1)(2)(3);

//Average function:
var avg = function (...param) {
    var sum = 0;
    for(var i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return param.length > 0 ? sum / param.length : 0;
}

var curry = function (fn, ...m) {
    return function (...n) {
        return fn.apply(this, m.concat(n));
    }
}

var temp = curry(avg, 1, 2, 3);
temp(10); //4 - stores 1, 2, 3 in closures and adds 10 for average
temp(1, 2); //1.8 - stores 1, 2, 3 in closures and add 1, 2 for average
