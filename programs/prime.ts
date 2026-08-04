// prime.ts
// Mencari bilangan prima 1-100.

function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const primes: number[] = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) primes.push(i);
}
console.log(primes.join(', '));
