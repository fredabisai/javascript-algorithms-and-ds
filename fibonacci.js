// Fibonacci
function fibonacci(n) {
    const fibo = [0,1];
    for(let i=2; i < 2; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log(fibonacci(7));

// Big-O = O(n)