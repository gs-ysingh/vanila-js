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

//Example of lexical scope: inner function is not closures since it's not in global space. But, it creates scope
//chain when it was defined and have access to m variable

function outer(m) {
    function inner() {
        console.log(m++);
    }
    inner();
}

outer(10);


//Closures: It's formed when function is already in global space or sent to global space

//Simple example of closure

var global = 10;

var add = function () {
    var val = 2;
    return val + global;
}
console.dir(add);

add() //It's closures, function is already in global space and have access to variable outside


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



//Problems that can be solved by closures;

//Since three closures are sharing same variable, and closures does not preserves the updated value of variable
//It's just creates a link
//If value is updated later, closure will get updated value

var a = [];
for(var i = 0; i < 3; i++) {
    a[i] = function () {
        console.log(i);
    }
}

a[0]();
a[1]();
a[2]();


//Solving by creating 3 local variables
var a = [];
for(var i = 0; i < 3; i++) {
    a[i] = function (i) {
        return function () {
            console.log(i);
        }
    }(i);
}

a[0]();
a[1]();
a[2]();