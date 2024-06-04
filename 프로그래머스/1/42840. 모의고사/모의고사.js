function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0]; // 1번, 2번, 3번 점수

  answers.forEach((answer, index) => {
    patterns.forEach((pattern, index2) => {
      if (answer === pattern[index % pattern.length]) {
        scores[index2]++;
      }
    });
  });

  // 가장 많이 맞춘사람
  const maxScore = Math.max(...scores);
  const answer = [];
  scores.forEach((score, index) => {
    if (score === maxScore) {
      answer.push(index + 1);
    }
  });

  return answer;
}