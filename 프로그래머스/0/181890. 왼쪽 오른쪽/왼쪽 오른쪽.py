def solution(str_list):
    for idx, val in enumerate(str_list):
        if val == "l":
            return str_list[:idx]
        elif val == "r":
            return str_list[idx + 1:]
        
    return []