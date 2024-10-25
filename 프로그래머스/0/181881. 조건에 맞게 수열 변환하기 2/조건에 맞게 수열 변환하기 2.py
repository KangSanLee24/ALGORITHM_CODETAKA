def 변환(arr):
    return [
        num / 2 if num >= 50 and num % 2 == 0 
        else num * 2 + 1 if num < 50 and num % 2 == 1 
        else num 
        for num in arr
    ]

def solution(arr):
    count = 0
    before = arr.copy()
    
    while True:
        current = 변환(before)
        if current == before:
            break
        count += 1
        before = current
    
    return count