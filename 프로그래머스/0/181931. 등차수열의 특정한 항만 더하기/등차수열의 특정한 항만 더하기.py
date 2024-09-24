def solution(a, d, included):
    n=len(included)
    arr=list(range(a,a+d*n ,d))
    answer = 0
        
    for i in range(len(included)):
        answer += arr[i]*included[i]
        
    return answer