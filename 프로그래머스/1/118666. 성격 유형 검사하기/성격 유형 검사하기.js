function solution(survey, choices) {
  let types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  // survey[0]의 문자열을 읽는다. choices[0]를 읽는다.
  // survey[0]의 문자열을 쪼개서 읽고, 뒤에 choices는 switch구문으로 관리
  // 숫자에 따른 RT CF JM AN에 점수를 부여한다.
  // 배열 순회 끝나면, RT 점수 비교, CF점수 비교, JM 점수 비교, AN 점수 비교

  for (let i = 0; i < survey.length; i++) {
    let [disagree, agree] = survey[i].split(""); // disagree = "R", agree = "T"
    let choice = choices[i];

    switch (choice) {
      case 1:
        types[disagree] += 3;
        break;
      case 2:
        types[disagree] += 2;
        break;
      case 3:
        types[disagree] += 1;
        break;
      case 4:
        break;
      case 5:
        types[agree] += 1;
        break;
      case 6:
        types[agree] += 2;
        break;
      case 7:
        types[agree] += 3;
        break;
    }
  }

  let result = "";
  result += types["R"] >= types["T"] ? "R" : "T";
  result += types["C"] >= types["F"] ? "C" : "F";
  result += types["J"] >= types["M"] ? "J" : "M";
  result += types["A"] >= types["N"] ? "A" : "N";

  return result;
}