def solution(arr):
    answer = arr
    for i, v in enumerate(arr):
        if v >= 50 and v % 2 == 0:
            answer[i] = v / 2
        elif v < 50 and v % 2 == 1:
            answer[i] = v * 2
    return answer