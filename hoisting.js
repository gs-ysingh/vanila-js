/**
 * Created by YSingh on 03/04/17.
 */


//Example 1:

var person = function () {
    console.log(x); //undefined

    var x = 1; // variable is hoisted at the top of function
}

person();


//Example 2: Local variable takes more preference
var x = 2;
var person = function () {
    console.log(x); //undefined
    var x = 1;
}

person();


//Example 3: Global variables is applied when there is no local variable
var x = 2;
var person = function () {
    console.log(x); //2
}

person();

