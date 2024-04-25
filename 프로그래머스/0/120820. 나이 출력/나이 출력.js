function solution(age) {
    var now = new Date();   // 현재 날짜 및 시간
    var year = now.getFullYear(); // 연도
    var answer = year-age-1; //
    return answer;
}