function solution(absolutes, signs) {
    var answer = 0;
    
    for(i=0; i<absolutes.length; i++) {
       if(signs[i]===true){
           answer += absolutes[i];
       } else if(signs[i]===false){
           answer -= absolutes[i];
       }
    }
    return answer;
        
}