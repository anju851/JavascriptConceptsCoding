let config = {
    alert: setInterval(() => {
        console.log('---> Alert')
    }, 1000)
};
config = null;

/*
Let's break down what's happening in this code:

1. let config = { alert: setInterval(() => { console.log('---> Alert') }, 1000) };:
    - An object config is created with a single property alert.
    - The value of alert is set to the result of setInterval(), which returns an interval ID.
    - The setInterval() function schedules a callback function to be executed every 1000 milliseconds (1 second).
    - The callback function logs the string '---> Alert' to the console.
2. config = null;:
    - The config variable is reassigned to null.
    - This does not affect the interval ID returned by setInterval(), which is still stored in memory.
    - The interval continues to run, and the callback function will still be executed every 1 second.

So, what's happening is that the interval is not being cleared, even though the config object is being set to null. This is because the interval ID is still stored in memory, and the interval continues to run.

To clear the interval, you would need to call clearInterval() with the interval ID, like this:


let config = { alert: setInterval(() => { console.log('---> Alert') }, 1000) };
clearInterval(config.alert);
config = null;


By calling clearInterval(), you ensure that the interval is stopped, and the callback function will no longer be executed. */