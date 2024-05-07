function solution(numbers) {
  let answer = 0;
  for (i = 0; i < 10; i++) {
    numbers.includes(i) ? true : (answer += i);
  }
  return answer;
}