def solution(arr, query):
    answer = arr
    
    for idx, val in enumerate(query):
        if idx % 2 == 0:
            del answer[query[idx] + 1:]
        else:
            del answer[:query[idx]]
    
    return answer