function solution(k, score) {
  var answer = [];
  let arrayK = [];

  for (i = 0; i < score.length; i++) {
    arrayK.push(score[i]);
    arrayK.sort((a, b) => b - a);

    if (arrayK.length > k) arrayK.pop();

    answer.push(arrayK[Math.min(arrayK.length, k) - 1]);
  }

  return answer;
}