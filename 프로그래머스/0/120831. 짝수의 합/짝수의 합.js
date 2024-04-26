function solution(n) {
    var answer = 0;
    for(i=0;i<=n;i++){
        answer = (i%2==0) ? answer+i : answer;
    }
    return answer;
}