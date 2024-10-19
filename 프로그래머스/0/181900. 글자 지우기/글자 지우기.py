def solution(my_string, indices):
    answer = list(my_string)
    indices.sort()
    temp_count = 0
    
    for i in indices:
        del answer[i - temp_count]
        temp_count += 1
    
    return ''.join(answer)