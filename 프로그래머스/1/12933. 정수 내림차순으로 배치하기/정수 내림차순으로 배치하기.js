function solution(n) {
    let newArray = n.toString().split('').map(Number);
    let sortedArray = newArray.sort(function(a,b){
        return a-b;
    });
    let answer = 0;
    for(i=0; i<sortedArray.length; i++){
        answer += sortedArray[i] * Math.pow(10, i);
    }
    return answer;
}