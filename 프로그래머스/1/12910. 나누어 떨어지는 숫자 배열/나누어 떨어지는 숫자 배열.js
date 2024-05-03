function solution(arr, divisor) {
    var answer = [];
    for(i=0;i<arr.length;i++) {
        (arr[i]%divisor===0) ? answer.push(arr[i]) : false;
    }
    answer.sort(function(a,b){
        return a-b;
    });
    
    return (answer.length!==0) ? answer : [-1];
}