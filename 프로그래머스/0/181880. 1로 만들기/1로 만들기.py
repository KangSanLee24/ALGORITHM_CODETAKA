def solution(num_list):
    answer = 0
    
    for num in num_list:
        bin_num = bin(num)[2:]
        digit = bin_num.find('1')
        answer += len(bin_num) - digit - 1
    
    return answer