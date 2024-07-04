function solution(s) {
  // 정수 문자열 s를 배열로 " "으로 나눠서 저장
  const sArray = s.split(" ");
  // 배열 중 최소값과 최대값 찾는다
  const min = Math.min(...sArray);
  const max = Math.max(...sArray);
  // "최솟값 최댓값" 형태로 return
  return `${min} ${max}`;
}