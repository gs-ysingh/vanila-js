/**
 * Created by YSingh on 03/04/17.
 */

//Iterators:

let array = [1, 2, 3];

let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: undefined, done: true}


//Generators: It's paused after a yield

function *generators() {
    yield 1;
    yield 1;
    yield 1;
}

let iterators = generators();
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: undefined, done: true}

//With Generators, you will not get stack overflow error in following example because execution is paused after yield

function *infiniteLoop() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}

let iter = infiniteLoop();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


//promises and Generators


require('babel-polyfill');
var $ = require("jquery");

//Made these called synchronous

function *generators() {
    yield  $.get("https://api.github.com/users/gs-ysingh", function (data) {});

    yield  $.get("https://api.github.com/users/gs-ysingh", function (data) {});
}

var it = generators();

it.next().value.then(function (data) {
    console.log(data);
});
it.next().value.then(function (data) {
    console.log(data);
});
