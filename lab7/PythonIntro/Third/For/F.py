num = input().strip()
rev_num = ""
for x in num[::-1]:
    rev_num += x

print(int(rev_num))
