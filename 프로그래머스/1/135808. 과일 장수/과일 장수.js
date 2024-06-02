function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let maxProfit = 0;
  const boxCount = Math.floor(score.length / m);

  for (let i = 0; i < boxCount; i++) {
    const minScore = score[i * m + m - 1];
    maxProfit += minScore * m;
  }

  return maxProfit;
}