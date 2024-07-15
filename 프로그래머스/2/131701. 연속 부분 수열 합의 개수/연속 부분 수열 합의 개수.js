const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function solution(elements) {
  const arrLen = elements.length;
  const cases = new Set();

  for (let i = 1; i <= arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (i + j > arrLen) {
        cases.add(sumArr(elements.slice(j, arrLen)) + sumArr(elements.slice(0, i + j - arrLen)));
      } else {
        cases.add(sumArr(elements.slice(j, i + j)));
      }
    }
  }
  return cases.size;
}