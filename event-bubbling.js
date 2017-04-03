/**
 * Created by YSingh on 03/04/17.
 */

document.getElementById("btn").addEventListener("click", function () {
   console.log("element is clicked");
}, false);

//By default last argument is false - Indicates event bubbling
//If we make it true - Event will be handled in capturing phase

$('p').click(function (evt) {
    evt.stopPropagation(); //Stops handler of parent to execute

    evt.stopImmediatePropagation(); //Stops any other handler to execute if it's attached to parent or any other element

});

