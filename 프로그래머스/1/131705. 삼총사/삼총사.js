function solution(number) {
  let answer = 0;
  for (k = 0; k < number.length - 2; k++) {
    for (j = k + 1; j < number.length - 1; j++) {
      for (i = j + 1; i < number.length; i++) {
        number[k] + number[j] + number[i] === 0 ? answer++ : answer;
        //console.log(`${k}${j}${i} => ${answer}`);
      }
    }
  }
  return answer;
}