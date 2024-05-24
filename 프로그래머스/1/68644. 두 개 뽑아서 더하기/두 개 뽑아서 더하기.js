function solution(array) {
  let sums = new Set();
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      sums.add(array[i] + array[j]);
    }
  }
  // set말고 array로 바꾸고 정렬
  return Array.from(sums).sort((a, b) => a - b);
}