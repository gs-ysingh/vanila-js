Polymorphism is one of the tenets of Object Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors

function Person(age,weight){
 this.age = age;
 this.weight = weight;
}
And we will give Person the ability to share their information

Person.prototype.getInfo = function(){
 return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo.";
};
Next we wish to have a subclass of Person, Employee

function Employee(age,weight,salary){
 this.age = age;
 this.weight = weight;
 this.salary = salary;
}
Employee.prototype = new Person();
And we will override the behavior of getInfo by defining one which is more fitting to an Employee

Employee.prototype.getInfo = function(){
 return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo " +
    "and earns " + this.salary + " dollar.";  
};
These can be used similar to your original code use

var person = new Person(50,90);
var employee = new Employee(43,80,50000);

console.log(person.getInfo());
console.log(employee.getInfo());
However, there isn't much gained using inheritance here as Employee's constructor is so similar to person's, and the only function in the prototype is being overridden. The power in polymorphic design is to share behaviors.