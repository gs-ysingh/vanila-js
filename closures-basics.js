/*

 Scope Chain: A function has access to it's own scope, plus scope of it's parent
 Lexical Scope: Function creates scope or environment when it's defined, not when it's executed.

function f1() {
    var a = 10;
    f2();
}

function f2() {
    return a;
}

f2() //a is not defined

*/

//Closures: It's formed when function is already in global space or sent to global space

//closure 1: Returning a function in global space


function outer(m) {
    return function inner() {
        console.log(m++);
    }
}

var resObj = outer(10);
resObj();
resObj();
resObj();

//closure 2: Assigning a function to global variable
var global;
function outer(m) {
    global = function () {
        console.log(m++);
    }
}

var resObj = outer(10);
global();
global();
global();

//closure 3:
function outer(m) {
    var global = function () {
        console.log(m++);
    }
    return global;
}
var resObj = outer(10);
resObj();
resObj();
resObj();
