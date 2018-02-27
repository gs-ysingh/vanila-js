For example, here's a simple factory() function that produces objects:
   function factory(name) {
     return {
name: name };
}
Using the factory():
>>> var o = factory('one');
>>> o.name


But now look at this scenario:
   >>> function C2() {this.a = 1; return {b: 2};}
   >>> var c2 = new C2();
   >>> typeof c2.a
"unde ned"
>>> c2.b
2
What happened here? Instead of returning the object this, which contains the property a, the constructor returned another object that contains the property b. This is possible only if the return value is an object. Otherwise, if you try to return anything that is not an object, the constructor will proceed with its usual behavior and return this.