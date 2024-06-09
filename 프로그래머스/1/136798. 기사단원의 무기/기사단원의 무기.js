function solution(number, limit, power) {
  let answer = 0;

  for (i = 1; i <= number; i++) {
    let mathDivisor = 0;
    if (i == 1) {
      answer++;
      continue;
    }

    for (j = 1; j * j <= i; j++) {
      if (j * j == i) mathDivisor++;
      else if (i % j == 0) {
        mathDivisor += 2;
      }
    }

    mathDivisor = mathDivisor > limit ? power : mathDivisor;

    answer += mathDivisor;
    // console.log(answer);
  }

  return answer;
}
