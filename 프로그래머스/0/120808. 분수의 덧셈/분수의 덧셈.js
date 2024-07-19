function solution(numer1, denom1, numer2, denom2) {
  let gcd = getGCD(numer1 * denom2 + numer2 * denom1, denom1 * denom2);

  return [(numer1 * denom2 + numer2 * denom1)/gcd, denom1 * denom2/gcd];
}

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};