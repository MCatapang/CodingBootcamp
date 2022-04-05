# # 1. Update Values in Dictionaries and Lists
# x = [ [5,2,3], [10,8,9] ] 
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# # 1.1
# x[1][0] += x[0][0]

# # 1.2
# students[0]['last_name'] = 'Bryant'

# # 1.3
# sports_directory['soccer'][0] = 'Andres'

# # 1.4
# z[0]['y'] += z[0]['x']




# # 2. Iterate Through a List of Dictionaries
# students = [
#          {'first_name':  'Michael', 'last_name' : 'Jordan'},
#          {'first_name' : 'John', 'last_name' : 'Rosales'},
#          {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#          {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# def iterateDictionary(list):
#     for i in range(0, len(list)):
#         for key, value in list[i].items():
#             print(key, value)
# iterateDictionary(students)




# 3. Get Values From a List of Dictionaries
# students = [
#          {'first_name':  'Michael', 'last_name' : 'Jordan'},
#          {'first_name' : 'John', 'last_name' : 'Rosales'},
#          {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#          {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# def iterateDictionary2(key_name, list_of_dictionaries):
#     for i in range(0, len(list_of_dictionaries)):
#         print(list_of_dictionaries[i][key_name])
# iterateDictionary2('last_name', students)




# 4. Iterate Through a Dictionary with List Values
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dictionary):
    for key, value in dictionary.items():
        print(len(key), str(key).upper())
        for location in value:
            print(location)
        print()
printInfo(dojo)