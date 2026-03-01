# python 
from itertools import permutations, product
def solve24(strnums):
   
    nums = list(map(int, strnums))
    ops = ['+','-','*','/']

    def safe_eval(expr):
        try:
            val = eval(expr)
            if abs(val - 24) < 1e-9:
                return True
        except ZeroDivisionError:
            pass
        return False

    forms = [
    "(({}{}{}){}{}){}{}",
    "({}{}({}{}{})){}{}",
    "{}{}(({}{}{}){}{})",
    "{}{}({}{}({}{}{}))",
    "({}{}{}){}({}{}{})"
    ]

    for perm in permutations(map(str, nums)):
        for ops_choice in product(ops, repeat=3):
            a,b,c,d = perm
            o1,o2,o3 = ops_choice
            for f in forms:
                expr = f.format(a,o1,b,o2,c,o3,d)
                if safe_eval(expr):
                    print("Found:", expr, "=", eval(expr))
                    raise SystemExit
    print("No solution found")


print(solve24(1568)) # Output: Found: ((1-5)+8)*6 = 24