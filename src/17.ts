function calculateGCD(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return calculateGCD(b, a % b);
    }
}

function printPrimeFactors(n: number): void {
    for (let i = 2; n > 1; i++) {
        if (n % i === 0) {
            console.log(i);
            n = Math.floor(n / i);
        } else {
            i++;
        }
    }
}

function sumOfNaturalNumbersToN(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
