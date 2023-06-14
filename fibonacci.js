/**
  Fibonacci Sequence 
  Problem: Given a number `n` find the first the first `n` elements of fibonacci sequence
  In maths , the fibonacci sequence is a sequence in which each number is the sum of two preceeding ones
  The first two numbers in the sequence are 0 and 1
  Eg: fibonacci(3) = [0,1,1]
       fibonacci(7) = [0,1, 1, 2, 3, 5, 8]
 */
function fibonacci(n) {
    const fibo = [0,1];
    for(let i=2; i < 2; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log(fibonacci(7));

// Big-O = O(n)