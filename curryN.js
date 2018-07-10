function curry(fn) {
    return function(x) {
        return function(y) {
            return function(z) {
                return fn;
            }
        }
    }
}

var sum = function (x, y, z) {
    return x + y + z;
}

function curryN(fn) {
    var args = [];
    return nest(fn, 1, args);
}

function nest(fn, level, args) {
    return function(x) {
        args.push(x);
        if(fn.length === level) {
            return fn.apply(null, args);
        }
        return nest(fn, level + 1, args);
    }
}

var result = curryN(sum);
var value = result(1)(2)(3);

//More optimization

function curry(fn) {
    if(fn.length === 0) {
        return fn.apply();
    }
    function nest(N, args) {
        return function(x) {
            if(N - 1 === 0) {
                return fn.apply(null, args.concat([x]));
            }
            args.push(x);
            return nest(N - 1, args);
        }
    }
    return nest(fn.length, []);
}

var sum = function (x, y, z) {
    return x + y + z;
}

var result = curry(sum);
var value = result(1)(2)(3);

//

function curry(fn) {debugger;
    if(fn.length === 0) {
        return fn.apply();
    }
    function nest(N, args) {
        return function() {
            var arg = [].slice.apply(arguments);
            if(N - arg.length === 0) {
                return fn.apply(null, args.concat(arg));
            }
            args = args.concat(arg);
            return nest(N - args.length, args);
        }
    }
    return nest(fn.length, []);
}

var sum = function (x, y, z) {
    return x + y + z;
}

var result = curry(sum);
var value = result(1)(2)(3);