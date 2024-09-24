def solution(code):
    mode = False
    ret = ""
    
    for idx in range(len(code)):
        if code[idx]=="1":
            mode = not mode
        elif mode==False and idx%2==0:
            ret +=code[idx]
        elif mode==True and idx%2==1:
            ret +=code[idx]
    
    return "EMPTY" if ret =="" else ret
