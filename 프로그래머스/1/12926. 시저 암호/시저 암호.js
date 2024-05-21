function solution(s, n) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer = answer + s[i];
    } else {
      let asciiS = s.charCodeAt(i) + n;
      if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
        // 대문자
        if (asciiS > 90) {
          answer += String.fromCharCode(asciiS - 26);
        } else {
          answer += String.fromCharCode(asciiS);
        }
      } else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
        // 소문자
        if (asciiS > 122) {
          answer += String.fromCharCode(asciiS - 26);
        } else {
          answer += String.fromCharCode(asciiS);
        }
      }
    }
  }
  return answer;
}