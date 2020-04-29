

// html
/* <input type="text" id="input-ele" /> */


function MyBinding(element, value) {
  this.element = element;
  this.value = value;
  this.element.value = value;
  
  element.addEventListener('keyup', this, false);
}

MyBinding.prototype.handleEvent = function(event) {
  if(event.type === 'keyup') {
    this.change(event.target.value);
  }
}

MyBinding.prototype.change = function(value) {
  this.value = value;
  this.element.value = value;
  console.log(this.value);
}

var p = new MyBinding(document.getElementById('input-ele'), 100);
p.change(300);



//Another way
//   <input type="text" id="someID" />

function bind(base, el, varname) {
	Object.defineProperty(base, varname, {
			get: () => {
					return el.value;
			},
			set: (value) => {
					el.value = value;
			}
	})
}

function MyClass() {}

var p = new MyClass();
bind(p, document.getElementById("someID"), 'value');

p.value="This is good!"
document.getElementById("someID").addEventListener(
'keyup', () => {
	console.log(p.value);
}, false);
