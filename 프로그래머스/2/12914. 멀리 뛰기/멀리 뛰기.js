
function solution(n) {
  let nBB = 1;
  let nB = 2;

  if (n === 1 || n === 2) {
    return n;
  }

  for (let i = 3; i <= n; i++) {
    [nBB, nB] = [nB, nBB];
    nB = (nB + nBB) % 1234567;
  }

  return nB;
}
