def is_odd(num):
    return num % 2 != 0

def solution(num_list):
    odd_str=""
    even_str=""
    
    for i in num_list:
        if is_odd(i):
            odd_str += str(i)
        else : 
            even_str += str(i)
    
    return int(odd_str)+int(even_str)