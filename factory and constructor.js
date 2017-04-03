/**
 * Created by YSingh on 04/04/17.
 */

//Factroy: When a function returns a object and function is not a constructor or class it's factory

function CarFactory() {
    var car = {
        drive: function () {

        }
    };
    return Object.create(car);
}

var car1 = CarFactory();
var car2 = CarFactory();



//Constructor:
function Car(name) {
    this.name = name;
    this.drive = function () {

    }
}


var car = new Car("BMW");

