/**
 * Created by YSingh on 04/04/17.
 */

//Rest: When you are collasping multiple arguments into single argument

function person(...param) {
    console.log(param); // ["Yogesh", 10000]

    for(var i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}

person("Yogesh", 10000);


//Spread: When you expanding single argment to multiple argument

function person(array) {
    console.log(...array); //1 2 3
}

person([1, 2, 3]);