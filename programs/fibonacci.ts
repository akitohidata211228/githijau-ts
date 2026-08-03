// fibonacci.ts
// Deret Fibonacci dengan fungsi bertipe.

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const terms: number = 15;
const sequence: number[] = [];
for (let i = 0; i < terms; i++) sequence.push(fibonacci(i));
console.log('Fibonacci: ' + sequence.join(', '));
