def solution(num_list):
    even_sum = 0
    odd_sum = 0
    
    for idx, val in enumerate(num_list):
        if idx % 2 == 0:
            even_sum += val
        else:
            odd_sum += val
    
    if even_sum >= odd_sum: 
        return even_sum
    else:
        return odd_sum
        