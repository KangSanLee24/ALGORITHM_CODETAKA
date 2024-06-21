function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipArray = skip.split("");
  const usableChars = [];

  for (char of alphabet) {
    if (!skipArray.includes(char)) {
      usableChars.push(char);
    }
  }

  const result = [];

  for (char of s) {
    let charIndex = usableChars.indexOf(char);
    let newIndex = (charIndex + index) % usableChars.length;

    result.push(usableChars[newIndex]);
  }

  return result.join("");
}