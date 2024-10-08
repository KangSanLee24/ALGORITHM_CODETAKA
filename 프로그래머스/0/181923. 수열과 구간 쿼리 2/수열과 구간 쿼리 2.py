def solution(arr, queries):
    answer = []
    
    for s, e, k in queries:
        min_val = 1000001
        
        for i in range(s, e + 1):
            if arr[i] > k and arr[i] < min_val:
                min_val = arr[i]
        
        if min_val == 1000001:
            answer.append(-1)
        else:
            answer.append(min_val)
        
    return answer