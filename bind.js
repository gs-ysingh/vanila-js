/**
 * Created by YSingh on 05/04/17.
 */

Function.prototype.bind = function (scope) {
    return function () {
        return this.apply(scope);
    }
}