function solution(a, b, n) {
  let totalCola = 0;

  while (n >= a) {
    let newCola = Math.floor(n / a) * b;
    totalCola += newCola;
    n = (n % a) + newCola;
  }

  return totalCola;
}