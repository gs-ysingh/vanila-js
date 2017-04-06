/**
 * Created by YSingh on 05/04/17.
 */

function sum() {
    var arg = Array.prototype.slice.apply(arguments);
    var sum = 0;
    for(var i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

Function.prototype.bind = function () {
    var arg = Array.prototype.slice.apply(arguments);
    var scope = arg[0];
    arg = arg.slice(1);
    var that = this;
    return function () {
        return that.apply(scope, arg);
    }
}

var caller = sum.bind(this, 1, 2, 3);
caller();

