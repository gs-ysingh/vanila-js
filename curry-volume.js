function getVolume(l, h, w) {
	console.log('voulume: ' + (l * h * w));
}

function curryFun(fn) {
	var arrLength = fn.length;
	return (function repeat() {
		var mem = [].slice.apply(arguments);
		return function() {
			var next = mem.concat([].slice.apply(arguments));
			return next.length >= arrLength ? fn.apply(null, next) : repeat.apply(null, next);
		}
	}());
}

var curry = curryFun(getVolume);

curry(2)(3)(4);


