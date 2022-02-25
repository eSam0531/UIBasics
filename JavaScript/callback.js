// this is single thread or synchronous
console.log("Synchronous")
console.log("Welcome");
console.log("to");
console.log("the");
console.log("world");
console.log("of");
console.log("Async Operations");

// asynchronous
console.log();
console.log("Asynchronous")
console.log("Welcome");
console.log("to");
setTimeout(()=> {
    console.log('Callback function first');
}, 3000); // timeout is set for 3 seconds
// rest of code will continue to run while the setTimeout waits
console.log("the");
console.log("world");
console.log("of");
console.log("Async Operations");