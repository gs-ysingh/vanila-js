/**
 * Created by YSingh on 03/04/17.
 */

const PI = 3.14;

//PI cannot be changed

const obj = { "a" : 1 };

obj.a = 2;

//But now, we can update the property

//Basically, const says that variable cannot be reassigned or re-declared

//So, const obj = { "a" : 1 }; is not possible
// obj =  { "b" : 3 } is not possible

//But, we can update the property


function person() {
    if(true) {
        let val = 10;
    }
    console.log(val); //error: val is not defined
    console.log(xyz); //error: xyz is not defined
}
person();

