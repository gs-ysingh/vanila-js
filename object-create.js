/**
 * Created by YSingh on 06/04/17.
 */

function Person(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

Person.prototype.show = function () {
    return "show me";
}

var obj = new Person();
// sets __proto__ link from obj to Person's prototype
// since obj does not have prototype property

function Man(name) {
    Person.call(this, arguments); //This is copying all the method in Person constructor
}

Man.prototype = Person.prototype;
//This is also correct, now whenever a variable of function accessed
//from Man's instance it will check in Man's prototype and if not found then Person prototype
//But this will not get access to Person's constructor methods e.g. get method will not be accessed.

//However, since we called Person.call(this.arguments),
//now we will have access to constructor's property of Person

Man.prototype = new Person(); //new basically points prototype of Man to Person's prototype
Man.prototype.constructor = Man; //since Man's prototype.constructor was also pointed to Person.prototype


Man.prototype = Object.create(Person.prototype);

if(Object.create != "function") {
    Object.create = function (proto, props) {
        var fn = function () {}
        fn.prototype = proto;

        if(typeof props == "object") {
            for(var prop in props) {
                if(props.hasOwnProperty(prop)) {
                    fn[prop] = props[prop];
                }
            }
        }
        new fn();
    };
}

//Syntax of actual Object.create

o = Object.create(Object.prototype, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        configurable: false,
        get: function() { return 10; },
        set: function(value) {
            console.log('Setting `o.bar` to', value);
        }
    }
});




