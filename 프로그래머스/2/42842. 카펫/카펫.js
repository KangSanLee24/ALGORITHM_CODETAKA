function solution(brown, yellow) {
  const totalGrid = brown + yellow;

  for (let height = 3; height <= totalGrid / height; height++) {
    if (totalGrid % height === 0) {
      let width = totalGrid / height;

      if (2 * width + 2 * height - 4 === brown && (width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}