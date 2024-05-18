function solution(s) {
  arrayS = s.split(" ");
  let answer = arrayS.map((word) => {
    let transformedWord = "";
    for (i = 0; i < word.length; i++) {
      transformedWord +=
        i % 2 === 0
          ? word.substr(i, 1).toUpperCase()
          : word.substr(i, 1).toLowerCase();
    }
    return transformedWord;
  });
  return answer.join(" ");
}