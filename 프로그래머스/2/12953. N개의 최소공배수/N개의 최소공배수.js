// 최대 공약수
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log("🚀 ~ gcd ~ a:", a);
  console.log("🚀 ~ gcd ~ typeof a:", typeof a);
  return a;
}

// 이걸로 최소 공배수함수
function lcm(a, b) {
  let lcm = (a * b) / gcd(a, b);
  console.log("🚀 ~ lcm ~ lcm:", lcm);
  console.log("🚀 ~ lcm ~ typeof lcm:", typeof lcm);
  return lcm;
}

function solution(arr) {
  return arr.reduce((acc, cur) => {
    let totalLcm = lcm(acc, cur);
    return totalLcm;
  }, 1);
}