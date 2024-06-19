const gcd = (a,b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a,b) => a * b / gcd(a, b);

function solution(n) {
    return lcm(6, n) / 6
}