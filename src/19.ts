function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findPrimes(n: number): number[] {
    if (n <= 1) return [];
    else n |= n - 1; // n is odd
    const primes: number[] = [2];
    for (let i = 3; i * i <= n; i += 2) { // only need to check up to the square root of n
        if (n % i === 0) {
            let j = n / i;
            primes.push(i);
            while (j !== 1 && j >= 3) { // skip prime factors greater than sqrt(n)
                primes.push(j);
                j /= i;
            }
        }
    }
    return primes;
}

function findDivisors(num: number): number[] {
    const divisors = new Set<number>();
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.add(i);
        }
    }
    return Array.from(divisors);
}

function isPerfectSquare(num: number): boolean {
    let root = Math.sqrt(num);
    return Math.floor(root) ** 2 === num;
}
