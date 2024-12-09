

function noramlFun() {
  return this.name;
}

const arrowFun = () => {
  return this.name;
};

let employee = {
  name: "alice",
  age: 21,
  arrowFun,
  noramlFun,
};

console.log(employee.arrowFun());  // undefined
console.log(employee.noramlFun());  // alice

//explanation
/*
Let's analyze the code:

The noramlFun function is a regular function, and its this context is bound to the object it's called on, which is employee. So, when employee.noramlFun() is called, this.name will refer to employee.name, which is "alice".

The arrowFun function is an arrow function, and its this context is bound to the global object (in a browser, this is usually the window object). This is because """arrow functions inherit the this context from their surrounding scope""". Since arrowFun is defined in the global scope, its this context is bound to the global object.

So, when employee.arrowFun() is called, this.name will refer to the global object's name property, which is likely undefined. */


// The issue with the code is that the this keyword in the arrowFun function is not bound to the employee object.

// To fix this, you can use one of the following approaches:

// Approach 1: Use a regular function instead of an arrow function


function normalFun() {
  return this.name;
}
let employee2 = {
  name: "alice",
  age: 21,
  normalFun,
};
console.log(employee2.normalFun()); // "alice"


// Approach 2: Use the bind() method to bind the this context


// const arrowFun3 = () => {
//   return this.name;
// };
// let employee3 = {
//   name: "alice",
//   age: 21,
//   arrowFun: arrowFun3.bind(employee3),
// };
// console.log(employee3.arrowFun()); // "alice"


// Approach 3: Use an arrow function with a wrapper function


const arrowFun4 = () => {
  return this.name;
};
let employee4 = {
  name: "alice",
  age: 21,
  arrowFun: () => arrowFun4.call(employee),
};
console.log(employee4.arrowFun()); // "alice"

const arrowFun5 = () => {
  return employee.name;
};
let employee5 = {
  name: "alice",
  age: 21,
  arrowFun5,
};
console.log(employee5.arrowFun5());