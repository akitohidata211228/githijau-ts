// palindrome.ts
// Pengecekan palindrom dengan TypeScript.

function isPalindrome(text: string): boolean {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

const samples: string[] = ['Racecar', 'Hello', 'Kasur ini rusak'];
samples.forEach((s: string) => {
    console.log('"' + s + '" -> ' + (isPalindrome(s) ? 'palindrom' : 'bukan'));
});
