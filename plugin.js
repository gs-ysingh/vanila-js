/**
 * Created by YSingh on 11/04/17.
 */

var lib = (function () {
    function autoComplete(options) {
        this.config = options;
    }

    //prototype method available to all the instances
    autoComplete.prototype.show = function () {

    }

    return {
        autoComplete: autoComplete
    }

})();


var instance = new lib.autoComplete({
    "data": ["Yogesh"]
});