from functools import reduce

def solution(number):
    s = reduce(lambda x, y: x + int(y), number, 0)
    return s % 9