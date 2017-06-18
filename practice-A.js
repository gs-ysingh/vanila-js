/**
 * Created by YSingh on 19/06/17.
 */

function outer(i) {
    return function (j) {
        return i + j;
    }
}

var x = outer(10);
x(11);
x(23);
