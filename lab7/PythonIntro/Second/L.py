def can_break_chocolate(n, m, k):
    if (k % n == 0 or k % m == 0) and k < n * m:
        return "YES"
    return "NO"


n = int(input())
m = int(input())
k = int(input())

print(can_break_chocolate(n, m, k))
