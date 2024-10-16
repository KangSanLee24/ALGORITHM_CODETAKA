def solution(intStrs, k, s, l):
    answer = []
    for i in intStrs:
        p = int(i[s:s+l])
        if p > k:
            answer.append(p)
    return answer