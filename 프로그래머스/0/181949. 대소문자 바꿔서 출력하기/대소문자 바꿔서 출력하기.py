str = input()
for i in str:
    if i.islower() == 1:
        print(i.upper(), end="")
    else:
        print(i.lower(), end="")