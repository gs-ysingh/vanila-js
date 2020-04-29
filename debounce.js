function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this;
        var arg = arguments;
        var later = function() {
            timeout = null;
            func.call(context, arg);
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
};

const debounce = (fn, wait) => {
	let timer = null;
	return (...args) => {
		const later = () => {
			timer = null;
			fn.apply(this, args);
		}
		clearTimeout(timer);
		timer = setTimeout(later, wait);
	}
}

var resize = debounce(function() {
    console.log('Hello');
}, 500);

window.addEventListener('resize', resize);


//This version should also work!

function debounce(func, wait) {
  var time = null;
  return function() {
    clearInterval(time);
    time = setTimeout(func.bind(this, Array.prototype.slice.apply(arguments)), wait);
  }
};

var resize = debounce(function() {
    console.log('Hello');
}, 2000);


function debounce(fn, wait) {
	let timer = null;
	return function() {
		let later = () => {
			timer = null;

		}
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, wait);
	}
}


function debounce(fn, debounceTime, immediate) {
	let timeout = null;
	return function(...args) {
		if(timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			if(!immediate) {
				fn.apply(this, args);
			}
		}, debounceTime);
		if(immediate && !timeout) {
			fn.apply(this, args);
		}
	}
}

var handler = debounce(() => {
	console.log('Yogesh')
}, 1000, true);

handler();
handler();
handler();
handler();
handler();


function throttle(fn, limit) {
	let inThrottle;
	return function(...args) {
		if(!inThrottle) {
			fn.apply(this, args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	}
}


function throttle(fn, limit) {
	let lastRun;
	let lastFun;
	return function(...args) {
		if(!lastRun) {
			fn.apply(this, args);
			lastRun = Date.now();
		}
		else {
			clearTimeout(lastFun);
			lastFun = setTimeout(() => {
				if(Date.now() - lastRun >= limit) {
					lastFun.apply(this, args);
					lastRun = Date.now();
				}
			}, Date.now() - lastRun);
		}
	}
}