function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let matchCount = 0;
  let zeroCount = 0;

  for (let num of lottos) {
    if (num === 0) {
      zeroCount++;
    } else if (win_nums.includes(num)) {
      matchCount++;
    }
  }

  const max = rank[matchCount + zeroCount];
  const min = rank[matchCount];
  return [max, min];
}