function Counter() {
    this.count = 0;
  
    // Traditional function expression
    this.increment = function() {
      setTimeout(function() {
        this.count++; // 'this' refers to the global object, not Counter
        console.log(this.count); // NaN
      }, 1000);
    };
  
    // Arrow function with inherited 'this'
    this.incrementArrow = function() {
      setTimeout(() => {
        this.count++; // 'this' refers to Counter
        console.log(this.count); // Correctly increments count
      }, 1000);
    };
  }
  
  const counter = new Counter();
  counter.increment();
  counter.incrementArrow();
  const person = {
    name: "John",
    // Traditional method
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    },
    // Arrow function method (not recommended here)
    sayHelloArrow: () => {
      console.log(`Hello, ${this.name}!`); // 'this' is not the person object
    },
  };
  
  person.sayHello();
  person.sayHelloArrow(); // Incorrect output
  
//   When to Use Arrow Functions:
// Use arrow functions for concise, one-line expressions.
// Use them when you want to inherit the this value from the surrounding scope.
// Avoid using arrow functions for methods inside objects or as constructors.

// this Value in Functions:

// In strict mode, the this value is undefined in functions that are not methods or constructors. In non-strict mode, this would refer to the global object.


// In strict mode, if a function is used as a constructor (i.e., it is called with the new keyword to create an instance of an object), the this value inside the constructor refers to the newly created object.
// In non-strict mode, the this value would refer to the global object.