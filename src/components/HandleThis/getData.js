
// 1. it has bug
// const getdata =()=>{
//     setTimeout(()=>{
//         return "Hello"
//     },2000)
// }
// ...explanation

// Certainly! Let's break down the statement in detail:

// 1. **setTimeout Function:**
//    - `setTimeout` is a JavaScript function that allows you to schedule a function to be executed after a specified amount of time.
//    - Its syntax is `setTimeout(callback, delay)`, where `callback` is the function to be executed and `delay` is the time to wait before executing the function, in milliseconds.

// 2. **Asynchronous Nature:**
//    - JavaScript is single-threaded, meaning it executes one operation at a time in a sequence.
//    - However, certain operations, like I/O operations or timers, are handled asynchronously. When an asynchronous operation is initiated, JavaScript doesn't wait for it to complete; it continues executing the next statements.

// 3. **getdata Function Execution:**
//    - In the `getdata` function, there's a `setTimeout` call with a delay of 2000 milliseconds (2 seconds).
//    - The `setTimeout` function schedules the provided callback function to be executed after the specified delay but doesn't block the execution of the rest of the code.

// 4. **Return Statement in setTimeout Callback:**
//    - The `return "Hello"` statement is inside the callback function provided to `setTimeout`.
//    - This return statement is not returning a value to the `getdata` function itself; instead, it's returning a value to the internal mechanism of `setTimeout`, which doesn't use this value in any way.

// 5. **Completion of getdata Function:**
//    - As soon as the `setTimeout` function is called, the `getdata` function continues to the next statement.
//    - Since there's no explicit return statement in the `getdata` function, it implicitly returns `undefined`.

// In summary, the `setTimeout` function initiates an asynchronous operation, and the `getdata` function completes its execution without waiting for the 2-second delay to finish. The `return "Hello"` statement is part of the asynchronous callback and doesn't affect the return value of the `getdata` function. This is why calling `getdata()` directly will result in `undefined`. To properly handle the asynchronous behavior and work with the result, callbacks, promises, or `async/await` can be used.

// correct way to handle 

const getdata = (callback) => {
    setTimeout(() => {
        callback("Hello");
    }, 2000);
}

getdata((result) => {
    console.log(result); // This will log "Hello" after 2 seconds
});

// not recomanded below one

// const getdata =()=>{
//     const value = setTimeout(()=>{
//             return "Hello"
//         },2000)
        
//         return value._onTimeout()
//     }
    
//     console.log(getdata())