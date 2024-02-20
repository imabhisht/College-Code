

# input_data = [
#     "UP 5",
#     "DOWN 3",
#     "LEFT 3",
#     "RIGHT 2",
#     ""
# ]

input_data = []
while(True):
    input_line = input()
    if(input_line == "OK"):
        break;
    input_data.append(input_line)

x , y = 0
for each_input in input_data:

    movement = each_input.split(" ")[0]
    if movement == "":
        break

    amount =  float(each_input.split(" ")[1])

    if movement == "UP":
        y += amount

    elif movement == "DOWN":
        y -= amount

    elif movement == "LEFT":
        x -= amount

    elif movement == "RIGHT":
        x += amount

    else:
        print("Invalid Input")
        break

print(f"Final POS: {x}, {y}")
print(f"Distance from Origin is: {round((x**2 + y**2)**0.5)}")