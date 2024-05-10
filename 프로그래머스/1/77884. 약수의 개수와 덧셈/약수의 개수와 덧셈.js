function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    addDivisor(i) % 2 === 0 ? (answer += i) : (answer -= i);
    //console.log(`약수의 갯수 : ${addDivisor(i)}     Answer 값 : ${answer}`);
  }
  return answer;
}

function addDivisor(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}