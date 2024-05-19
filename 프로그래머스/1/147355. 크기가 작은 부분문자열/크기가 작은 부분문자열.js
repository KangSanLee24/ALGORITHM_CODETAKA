function solution(t, p) {
  let count = 0;
  const pNum = parseInt(p, 10); //10진법 정수로 바꿈.
  for (i = 0; i <= t.length - p.length; i++) {
    const subStringT = t.substring(i, i + p.length);
    const subNumT = parseInt(subStringT, 10);
    subNumT <= pNum ? count++ : 0;
  }
  return count;
}