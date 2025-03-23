x = int(input())
y = int(input())
z = int(input())
w = int(input())
if x == z or y == w or abs(x - z) == abs(y - w):
    print("YES")
else:
    print("NO")