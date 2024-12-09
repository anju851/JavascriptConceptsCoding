/*
Understanding setTimeout and Promises with Micro-tasks and Task Queues in JavaScript

Reference: 
    https://medium.com/@shashankp250/understanding-settimeout-and-promises-with-micro-tasks-and-task-queues-in-javascript-8cf475ee026a#:~:text=setTimeout%20schedules%20callbacks%20after%20the,next%20task%20in%20the%20line */



console.log("Problem1 : ");

console.log("begins");
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});


console.log("Problem2 : ");

console.log("Start");

setTimeout(() => {
  console.log("Timeout - After 1 second");
  Promise.resolve("Promise resolved!").then((data) => {
    console.log(data); // This will be logged before "Timeout - After 2 seconds"
  });
}, 1000);

setTimeout(() => {
  console.log("Timeout - After 2 seconds");
}, 2000);

console.log("End");
