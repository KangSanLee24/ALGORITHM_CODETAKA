function solution(n)
{
    let newArr = Array.from(String(n));
    let answer = 0;
    newArr.forEach(function(i) {
        answer += Number(i);
    });
    return answer;
}