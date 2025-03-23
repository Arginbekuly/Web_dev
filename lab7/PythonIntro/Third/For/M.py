num = int(input())
nums = ""
count = 0
for i in range(num):
    n = int(input())
    if n == 0:
        count = count + 1

print(count)