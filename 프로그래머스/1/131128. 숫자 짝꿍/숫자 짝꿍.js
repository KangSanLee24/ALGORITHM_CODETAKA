function solution(X, Y) {
  // X의 각 자리수를 문자열 배열로 저장? Y의 각 자리수를 문자열 배열로 저장?
  const arrayX = [...X];
  const arrayY = [...Y];
  // 0~9까지 정수
  const countX = {};
  const countY = {};

  let commonNumbers = [];

  arrayX.forEach((num) => {
    countX[num] = (countX[num] || 0) + 1;
  });
  arrayY.forEach((num) => {
    countY[num] = (countY[num] || 0) + 1;
  });

  // array X랑 array Y랑 같은 문자가 있다면
  for (let num = 0; num <= 9; num++) {
    const numStr = num.toString();
    if (countX[numStr] && countY[numStr]) {
      const commonCount = Math.min(countX[numStr], countY[numStr]);
      for (let i = 0; i < commonCount; i++) {
        commonNumbers.push(numStr);
      }
    }
  }

  // 없다면 return -1
  if (commonNumbers.length === 0) {
    return "-1";
  }
  // 그 문자들을 배열형태로 저장하고 sort 숫자형으로
  commonNumbers.sort((a, b) => b - a);
  return commonNumbers.join("")[0] === "0" ? "0" : commonNumbers.join("");
}