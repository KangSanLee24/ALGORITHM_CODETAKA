function solution(a, b) {
  const n = a.length;
  let result = 0;
  if (a.length !== b.length) return new Error("두 배열의 길이가 같아야합니다.");

  for (i = 0; i < n; i++) {
    result += a[i] * b[i];
  }
  return result;
}

let a = [1, 2];
let a1 = [1, 2, 3, 4];
let b1 = [-3, -1, 0, 2];
let a2 = [-1, 0, 1];
let b2 = [1, 0, -1];
console.log("1. ", solution(a, b1));
console.log("2. ", solution(a1, b1));
console.log("3. ", solution(a2, b2));