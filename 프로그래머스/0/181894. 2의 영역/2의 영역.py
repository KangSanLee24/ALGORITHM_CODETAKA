def solution(arr):
    first = last = -1
    
    for idx, val in enumerate(arr):
        if val == 2:
            if first == -1:
                first = idx
            last = idx
        
    if first == -1:
        return [-1]
    return arr[first:last + 1]
    
