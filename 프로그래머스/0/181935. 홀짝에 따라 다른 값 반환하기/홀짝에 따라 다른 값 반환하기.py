def solution(n):
    if n%2==1:
        answer = (n//2+1)**2   
    else :
        answer = 2*n//2*(n//2+1)*(n+1)/3        
    return answer