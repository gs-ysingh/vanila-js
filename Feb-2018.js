if(typeof Object.create !== 'function') {
	Object.create = function(param) {
		var Fun = function() {}
		Fun.prototype = param;
		return new Fun();
	}
}



