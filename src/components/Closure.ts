// In summary, the closure property allows the counter function to "remember" the value of n across calls, effectively preserving the state between calls.
export function createCounter(n:number) {
    let flag = 1;
    return function counter() {
        if (flag === 1) {
            flag = 0;
            return n;
        } else {
            return n = n + 1;
        }
    }
}

createCounter(10)