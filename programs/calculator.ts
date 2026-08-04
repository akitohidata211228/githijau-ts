// calculator.ts
// Kalkulator dua angka dengan union type hasil.

type Operator = '+' | '-' | '*' | '/';

function calculate(a: number, b: number, op: Operator): number | string {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error: pembagian nol';
    }
}

console.log('8 + 2 =', calculate(8, 2, '+'));
console.log('8 / 2 =', calculate(8, 2, '/'));
