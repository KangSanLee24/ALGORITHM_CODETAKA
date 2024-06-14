function solution(n, lost, reserve) {
  let realReserve = reserve.filter((r) => !lost.includes(r));
  let realLost = lost.filter((r) => !reserve.includes(r));

      realReserve.sort((a, b) => a - b);
  realLost.sort((a, b) => a - b);

  // 최대한 빌려주기
  realReserve.forEach((r) => {
    if (realLost.includes(r - 1)) {
      realLost = realLost.filter((i) => i !== r - 1);
    } else if (realLost.includes(r + 1)) {
      realLost = realLost.filter((i) => i !== r + 1);
    }
  });

  return n - realLost.length;
}