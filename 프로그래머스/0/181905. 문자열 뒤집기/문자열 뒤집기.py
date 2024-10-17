def solution(my_string, s, e):
    l = list(my_string)
    l[s:e + 1] = l[s:e + 1][::-1]
    return ''.join(l)
