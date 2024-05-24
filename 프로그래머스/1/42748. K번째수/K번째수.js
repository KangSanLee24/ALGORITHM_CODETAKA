function solution(array, commands) {
  let answer = [];
  commands.forEach((command) => {
    let [i, j, k] = command;
    let slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
    // console.log(slicedArray);
    answer.push(slicedArray[k - 1]);
  });

  return answer;
}