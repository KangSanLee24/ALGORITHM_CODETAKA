function solution(n, m, section) {
  let answer = 0;
  let index = 0;
  while (index < section.length) {
    answer++;
    let endIndex = section[index] + m - 1; //여기까지 감.

    while (index < section.length && section[index] <= endIndex) {
      index++;
    }
  }

  return answer;
}