The best way to do function overloading with parameters is not to check the argument length or the types; checking the types will just make your code slow and you have the fun of Arrays, nulls, Objects, etc.

What most developers do is tack on an object as the last argument to their methods. This object can hold anything.

function foo(a, b, opts) {

}


foo(1, 2, {"method":"add"});
foo(3, 4, {"test":"equals", "bar":"tree"});
Then you can handle it anyway you want in your method. [Switch, if-else, etc.]



There is no real function overloading in JavaScript since it allows to pass any number of parameters of any type. You have to check inside the function how many arguments have been passed and what type they are.