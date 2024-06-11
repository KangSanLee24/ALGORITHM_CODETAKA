function solution(babblings) {
  const pro = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babblings.forEach((babbling) => {
    let word = babbling;
    let isPronunceable = true;

    //같은 발음이 연속되면 발음 X
    for (pronunciation of pro) {
      if (word.includes(pronunciation.repeat(2))) {
        isPronunceable = false;
        break;
      }
    }

    // babbling[0]의 남은 문자열이 aya ye woo ma과 일치하는 부분 체크하고 삭제
    if (isPronunceable) {
      for (pronunciation of pro) {
        word = word.split(pronunciation).join(" ");
      }
    }

    // babbling[0]에 남은 문자열이 없고, 발음 O면 count ++
    if (word.trim().length === 0 && isPronunceable) {
      count++;
    }
  });

  return count;
}
