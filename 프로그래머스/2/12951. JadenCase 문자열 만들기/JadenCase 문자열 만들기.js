function solution(s) {
  // 문자열 s를 " "기준으로 배열 sArray로 만든다.
  const sArray = s.split(" ");
  // sArray.map((s)=> 숫자아니니? 대문자로 바꿔줄께 / 숫자니? 그대로
  const resultArray = sArray.map((word) => {
    if (word.length > 0 && isNaN(word[0])) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else return word.toLowerCase();
  });
  // join(" ")
  return resultArray.join(" ");
}