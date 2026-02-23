# solution of the "100 doors" chalenge from the rosetta code section of freeCodeCamp
def toggle_doors(num_doors):
    # Create a list of doors, initially all closed (False)
    doors = [False] * num_doors

    # Toggle the state of the doors according to the rules
    for i in range(1, num_doors + 1):
        for j in range(i - 1, num_doors, i):
            doors[j] = not doors[j]

    # Collect the numbers of the open doors
    open_doors = [index + 1 for index, state in enumerate(doors) if state]
    
    return open_doors
print(toggle_doors(100))
# Test