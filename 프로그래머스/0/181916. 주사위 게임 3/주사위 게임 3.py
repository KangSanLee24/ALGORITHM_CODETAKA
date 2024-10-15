def solution(a, b, c, d):
    dice = [a, b, c, d]
    diceSet = list(set(dice))
    
    # p p p p
    if len(diceSet) == 1:
        return 1111 * diceSet[0]
    
    elif len(diceSet) == 2:
        count1 = dice.count(diceSet[0])
        count2 = dice.count(diceSet[1])
        
        # p p q q
        if count1 == 2 and count2 == 2:
            p, q = diceSet[0], diceSet[1]
            return (p + q) * abs(p - q)
        
        # p p p q
        else:
            p = diceSet[0] if count1 == 3 else diceSet[1]
            q = diceSet[0] if count1 == 1 else diceSet[1]
            return (10 * p + q) ** 2
    
    # p p q r
    elif len(diceSet) == 3:
        for i in diceSet:
            if dice.count(i) == 2:
                p = i
        
        diceSet.remove(p)
        return diceSet[0] * diceSet[1]
        
    else: # p q r s
        return min(dice)
        
        