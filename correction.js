/**
 * Created by YSingh on 13/04/17.
 */


Function.prototype.bind = function() {
    var arg = [].slice.call(arguments);
    var that = arg[0];
    var items = arg.slice(1);
    var self = this;
    return function () {
        var elements = Array.prototype.slice.call(arguments);
        return self.apply(that, items.concat(elements));
    }
}

var obj = { x: 1, y: 2 };
function sum (arg1, arg2, arg3) {
    return this.x + this.y + arg1 + arg2 + arg3;
}

var myCaller = sum.bind(obj, 4);
myCaller(5, 6); //18 is the answer

function sum () {
    var arg = Array.prototype.slice.call(arguments);
    var sum = 0;
    for(var i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

function partialFunc() {
    var arg = Array.prototype.slice.call(arguments);
    var items = arg.slice(1);

    return function () {
        var elements = Array.prototype.slice.call(arguments);
        return arg[0].apply(this, items.concat(elements));
    }
}

var caller = partialFunc(sum, 1, 2);
caller(3, 4, 5);
caller(5, 6, 7);

if(typeof Object.create != "function") {
    Object.create = function(param) {
        var Fun = function(){};
        Fun.prototype = param;
        return new Fun();
    }
}

