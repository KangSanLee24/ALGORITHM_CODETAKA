function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
  sizes.forEach((whArr) => {
    let compareW = 0;
    let compareH = 0;
    if (whArr[0] < whArr[1]) {
      compareH = whArr[0];
      compareW = whArr[1];
    } else {
      compareW = whArr[0];
      compareH = whArr[1];
    }
    compareW > maxW ? (maxW = compareW) : null;
    compareH > maxH ? (maxH = compareH) : null;
  });
  return maxW * maxH;
}