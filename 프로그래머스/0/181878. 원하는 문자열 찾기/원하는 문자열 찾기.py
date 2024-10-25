def solution(my_string, pat):
    low_my_string = my_string.lower()
    low_pat = pat.lower()
    
    return 1 if low_pat in low_my_string else 0