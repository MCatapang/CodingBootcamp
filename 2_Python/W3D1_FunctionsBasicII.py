# 1. Countdown
def countdown(count):
    for count in range(count, -1, -1):
        print(count)
countdown(10)

# 2. Print and Return
def thisfunction():
    this_is_a_list = [3,4]
    print(this_is_a_list[0])
    return this_is_a_list[1]
thisfunction()

# 3. First Plus Length
def desired_function(list):
    print(list[0]+ len(list))
desired_function([8,3,4,5])

# 4. Values Greater than Second
def desired_function(this_list):
    for i in range(0,len(this_list)):
        new_number = this_list[i] + 1
        this_list[i] = new_number
    print(this_list)
desired_function([8,3,4,5])

# 5. This Length, That Value
def desired_function(size, value):
    print(str(value)*size)
desired_function(6,9)