console.log("Start");
setTimeout(() => { //macrotask
    console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise")); // microtask , a microtask is executed before other async operations which are also called macro operations in queue
console.log("End");


// output
/*
Start
End
Promise
Timeout
*/