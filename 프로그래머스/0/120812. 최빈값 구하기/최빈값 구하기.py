def solution(array):
    answer = 0
    
    d = {}
    for i in array:
        if i in d: d[i] += 1
        else: d[i] = 1
    
    max_k = -1
    max_v = 0
    
    for i in d:
        if d[i] > max_v:
            max_v = d[i]
            max_k = i
        elif d[i] == max_v:
            max_k = -1
            
    return max_k