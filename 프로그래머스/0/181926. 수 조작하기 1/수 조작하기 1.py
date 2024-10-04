def wasd(wasd):
    if wasd == "w":
        return 1
    elif wasd == "s":
        return -1
    elif wasd == "d":
        return 10
    elif wasd == "a":
        return -10
    return 0

def solution(n, control):
    for str1 in control: 
        n += wasd(str1)
    return n
