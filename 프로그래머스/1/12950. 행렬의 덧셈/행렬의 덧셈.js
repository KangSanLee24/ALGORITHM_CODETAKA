function solution(arr1, arr2) {
  return arr1.map((x, row) => x.map((y, column) => y + arr2[row][column]));
}