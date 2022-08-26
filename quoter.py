import sys

def calculate(a):
    if a > 1 and a < 4:
        x = int(a) * 250
        print(x)
    elif a >= 4:
        x = int(a) * 200
        print(x)
    elif a >= 7:
        x = int(a) * 150
        print(x)
    else:
        print(300)

calculate(sys.argv[1])
