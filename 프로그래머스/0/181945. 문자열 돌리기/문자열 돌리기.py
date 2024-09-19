str = input()
lines = str.splitlines()
max_len = len(lines[0])

for i in range(max_len):
    for line in lines:
        print(line[i], end="")
    print()