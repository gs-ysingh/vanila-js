/**
 * Created by YSingh on 08/04/17.
 */

function outer() {
    var temp1 = new Array(10000).join("x");
    var temp2 = new Array(10000).join("y");

    var res = {
        temp1: temp1,
        temp2: temp2
    };

    return function () {
        return res.temp1;
        //Since we are accessing temp1, but still in memory it's holding reference to complete res object
        //This is memory leaks, we need to handle such scenerio

        //Step 1: We should never access large object's, variables inside closures
    }
}

var obj = outer();
obj();

function outer() {
    var temp1 = new Array(10000).join("x");
    var temp2 = new Array(10000).join("y");

    var res = {
        temp1: temp1,
        temp2: temp2
    };

    //One of possible way to re-write this function:
    return function () {
        return new Array(10000).join("x");
    }
}



function Person() {
    var temp1 = new Array(10000).join("x");
    this.show = function () {
        return temp1;
    }
}

var resObj = new Person();

document.getElementById('container').addEventListener(function () {
    resObj.show();
});

//Garbage collector will never release resObj

//One of the possible way is to un-subscribe the event