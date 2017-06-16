/**
 * Created by YSingh on 16/06/17.
 */

//flat an array:
var arr = [[1, 2, 3], [4, 5], [[6, 7], [8, 9]], 10];

//Output of following:
var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//Output of following
for(var i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000*i);

}

//sum(5)(2)

//What is the use of new keyword and what it does

//