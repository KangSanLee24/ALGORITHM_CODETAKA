def solution(num_list):
    product = 1
    for i in num_list:
        product *= i
        
    return 1 if product < (sum(num_list))**2 else 0