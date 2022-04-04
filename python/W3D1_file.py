from curses import ACS_DARROW


num1 = 42 # variable declaration, numbers
num2 = 2.3 # variable declaration, numbers
boolean = True # variable declaration, boolean
string = 'Hello World' # variable declaration, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration, initializing list, string, composite list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration, initializing dictionary, string, number, boolean, composite dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration, initializing tuples, string, composite tuple
print(type(fruit)) # accessing tuple value
print(pizza_toppings[1]) # accessing list value
pizza_toppings.append('Mushrooms') # add list value
print(person['name']) # accessing dictionary value
person['name'] = 'George' # change dictionary value
person['eye_color'] = 'blue' # change dictionary value
print(fruit[2]) # accesing tuple value

if num1 > 45: # if statment
    print("It's greater") 
else: # else statement
    print("It's lower")

if len(string) < 5: # if statement
    print("It's a short word!") 
elif len(string) > 15: # else if statement
    print("It's a long word!")
else: # else statement
    print("Just right!")

for x in range(5): # for loop
    print(x) 
for x in range(2,5): # for loop
    print(x)
for x in range(2,10,3): # for loop
    print(x)
x = 0
while(x < 5): # while loop
    print(x)
    x += 1

pizza_toppings.pop() # delete value
pizza_toppings.pop(1) # delete value at index 1

print(person) # access dictionary value
person.pop('eye_color')
print(person) # access dictionary value 

for topping in pizza_toppings: # for loop
    if topping == 'Pepperoni': # if statement
        continue 
    print('After 1st if statement')
    if topping == 'Olives': # if statement
        break

def print_hello_ten_times(): # function 
    for num in range(10): # for loop
        print('Hello')

print_hello_ten_times() # function call

def print_hello_x_times(x): # function parameter
    for num in range(x): # for loop
        print('Hello')

print_hello_x_times(4) # function call, argument

def print_hello_x_or_ten_times(x = 10): # function parameter
    for num in range(x): # for loop
        print('Hello')

print_hello_x_or_ten_times() # function call
print_hello_x_or_ten_times(4) # function call, argument



# Bonus section


# print(num3) # NameError
# num3 = 72
# fruit[0] = 'cranberry' # error tuples change value
# print(person['favorite_team']) # KeyError
# print(pizza_toppings[7]) # IndexError
#   print(boolean) # IndentationError
# fruit.append('raspberry') # error tuples add value, attribute error
# fruit.pop(1) # error tuples delete value, attribute error