function solution(s) {
  const numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let answer = "";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      word += s[i];
      if (numberMap[word] !== undefined) {
        answer += numberMap[word];
        word = "";
      }
    } else {
      answer += s[i];
    }
  }

  return Number(answer);
}