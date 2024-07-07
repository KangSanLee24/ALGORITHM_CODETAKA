function solution(s) {
  // 문자열 s의 0개수를 체크하고 뺀다잉
  let totalLoopCount = 0;
  let totalZeroCount = 0;

  while (s !== "1") {
    totalLoopCount += 1;
    let zeroCount = (s.match(/0/g) || []).length;
    totalZeroCount += zeroCount;

    s = s.replace(/0/g, "");

    s = s.length.toString(2);
  }

  return [totalLoopCount, totalZeroCount];
}