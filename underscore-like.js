(function () {
	var root = this;

	var Ctor = function() {}

	var _ = function(obj) {
		if(obj instanceof _) {
			return obj;
		}
		else if(!(this instanceof _)) {
			return new _(obj);
		}
	}

	if(typeof exports != "undefined") {
		if(module && module.exports) {
			exports = module.exports = _;
		}
		exports._ = _;
	} else {
		root._ = _;
	}

	_.version = '1.0.0';

})();