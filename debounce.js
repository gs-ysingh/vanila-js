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
