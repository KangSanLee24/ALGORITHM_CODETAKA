function solution(arr) {
  let min = arr[0];
  if (arr.length === 1) return [-1];
  else {
    for (i = 1; i < arr.length; i++) {
      arr[i] < min ? (min = arr[i]) : min;
      console.log(min);
    }
  }
  arr.splice(arr.indexOf(min), 1);
  return arr;
}