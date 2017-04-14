(function () {
	var version = '1.0.0';
	var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

	var jQuery = function(selector, context) {
		return new jQuery.fn.init(selector, context);
	}

	jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		jquery: version,
		length: 0,

		init: function(selector, context) {
			var match = [];
			var element = [];

			if(!selector) {
				return this;
			}

			if(typeof selector == 'string') {
				if (selector.length >= 3 
						&& selector[0] == '<' 
						&& selector[selector.length - 1] == '>') {
					match = [ null , selector, null ];
				}
				else {
					match = rquickExpr.exec(selector);
				}

				if(match && (match[1] || !context )) {
					if(match[1]) { //handle $(html)

					}
					else { //handle $('id')	
						element = document.getElementById(match[2]);
						if(element) {
							this[0] = element;
							this.length = 1;	
						}
						return this;
					}
				}
			}
		}
	};

	return jQuery;
})();