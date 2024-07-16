function solution(s) {
  let answer = 0;
  let stack = [];

  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let isCountable = true;
    const rotationStr = s.slice(i) + s.slice(0, i);

    for (let str of rotationStr) {
      if (str === "(" || str === "{" || str === "[") {
        stack.push(str);
      } else {
        let beforeStr = stack.pop();
        if (beforeStr === "(" && str === ")") continue;
        if (beforeStr === "{" && str === "}") continue;
        if (beforeStr === "[" && str === "]") continue;
        isCountable = false;
        break;
      }
    }

    if (isCountable) answer++;
  }

  return answer;
}