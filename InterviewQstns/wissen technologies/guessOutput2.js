console.log(1);
setTimeout(() => console.log(2));

new Promise((resolve, reject) => {
  resolve();
}).then(() => console.log(3));

console.log(4);
// microtasks like asynchronous task completion result or promises completion are executed before macrotask like setTimeout.