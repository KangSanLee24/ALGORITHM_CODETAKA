function solution(s) {
  var answer = [];
  // 마지막으로 본 알파벳과 그 위치를 저장하는 객체를 만든다.
  let lastIndex = {};

  // 문자열 s을 돌아가면서 객체에 그 알파벳이 있으면 i-value하고
  for (i = 0; i < s.length; i++) {
    let alp = s[i];
    if (lastIndex[alp] !== undefined) {
      answer.push(i - lastIndex[alp]);
    } else {
      //아니면 -1넣고
      answer.push(-1);
    }
    // 지금 위치 객체에 추가 및 갱신
    lastIndex[alp] = i;
  }

  return answer;
}