function solution(s) {
  let count = 0;
  let i = 0;

  while (i < s.length) {
    let x = s[i];
    let xCount = 0;
    let otherCount = 0;

    while (i < s.length) {
      if (s[i] === x) {
        xCount++;
      } else {
        otherCount++;
      }

      i++;

      if (xCount === otherCount) {
        break;
      }
    }

    count++;
  }

  return count;
}