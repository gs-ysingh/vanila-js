/**
 * Created by YSingh on 21/04/17.
 */

var arr = [[1, 2, 3], [4, 5], [[6, 7], [8, 9]], 10];
var res = [];

function flatArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatArr(arr[i]);
        }
        else {
            res = res.concat(arr[i]);
        }
    }
}
flatArr(arr);
res;