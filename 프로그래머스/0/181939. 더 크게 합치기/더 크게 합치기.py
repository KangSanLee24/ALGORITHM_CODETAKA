def solution(a, b):
    str_a = str(a)
    str_b = str(b)
    return int(str_a+str_b) if int(str_a+str_b) >= int(str_b+str_a) else int(str_b+str_a)