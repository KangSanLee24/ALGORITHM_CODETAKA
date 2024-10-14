from collections import deque

def solution(l, r):
    queue = deque(["5"])
    answer = []
    
    while queue:
        now = queue.popleft()
        num = int(now)
    
        if num > r:
            continue
        if num >= l:
            answer.append(num)
        
        queue.append(now + "0")
        queue.append(now + "5")
    
    return answer if answer else [-1]