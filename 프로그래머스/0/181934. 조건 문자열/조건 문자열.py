def solution(ineq, eq, n, m):
    equality_sign = ineq + eq
    
    if equality_sign == ">=":
        return int(n >= m)
    elif equality_sign == "<=":
        return int(n <= m)
    elif equality_sign == ">!":
        return int(n > m)
    elif equality_sign == "<!":
        return int(n < m)