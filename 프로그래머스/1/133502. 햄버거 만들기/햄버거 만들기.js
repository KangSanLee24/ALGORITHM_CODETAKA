function solution(ingredient) {
  const hamburger = [1, 2, 3, 1];
  let stack = [];
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      stack.splice(stack.length - 4, 4);
      answer++;
    }
  }

  return answer;
}