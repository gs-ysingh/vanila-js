//Things to handle

//Can add multiple times on page
//Exception handling
//More configuration, if configuration is not passed
//performance and scalability


var $ = (function () {
	var jQuery = function(selector) {
		return new init(selector);
	}	

	//constructor
	function init(selector) {
		var elements;
		
		if(typeof selector == "string") {
			elements = document.querySelectorAll(selector);
		}
		else if(selector.length) {
			elements = selector;
		}
		else {
			elements = [selector];
		}

		for (var i = elements.length - 1; i >= 0; i--) {
			this[i] = elements[i];
		}

		this.length = elements.length;

		return this;
	}

	//Adding method to constructor's prototype
	
	init.prototype = {
		//$('.avatar').map(function(item, index) {return item.src || ""; } )
		map: function(callback) {
			var res = [];
			for (var i = this.length - 1; i >= 0; i--) {
				res.push(callback.call(this, this[i], i));
			}
			return res; //map need to return response
		},
		forEach: function(callback) {
			this.map(callback);
			return this; 
			//forEach need to just call map but to implement chaining we can return this
		},
		text: function(text) {
			return this.forEach(function(item) {
				item.innerText = text;
			});
		},
		html: function(html) {
			return this.forEach(function(item) {
				item.innerHTML = html;
			});
		},
		addClass: function(classes) {
			var className = "";
			className += classes;

			return this.forEach(function(ele) {
				ele.className += className;
			});
		},
		attr: function(attr, val) {
			return this.forEach(function(ele) {
				ele.setAttribute(attr, val);
			});
		},
		on: (function() {
			return function(evt, handler) {
				return this.forEach(function(ele) {
					ele.addEventListener(evt, handler, false);
				});
			}
		})()
	} 

	return jQuery;	
})();