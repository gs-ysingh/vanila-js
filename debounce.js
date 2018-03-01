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

var resize = debounce(function() {
    console.log('Hello');
}, 500);

window.addEventListener('resize', resize);