def solution(my_strings, parts):
    acc_string=""
    for i in range(len(my_strings)):
        s, e = parts[i]
        acc_string += my_strings[i][s: e+1]
    return acc_string
