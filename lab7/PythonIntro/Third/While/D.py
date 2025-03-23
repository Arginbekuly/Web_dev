num = int(input())
i = 0
while i < num:
    if num == 2 ** i:
        print("YES")
        break
    i += 1
else:
    print("NO")