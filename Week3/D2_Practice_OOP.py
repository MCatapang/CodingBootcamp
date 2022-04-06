class User:
    bank_name = "First National Dojo"
    def __init__(self):
        # ""__init__"" is an instance *Method* that defines instance attributes; "(self)" a type of parameter that allows for instances to access instance attributes
        # Methods are just functions that belong to a class
        # Notice how "def __init__(self)" is within a Class; as such, it's called a "method"
        # Functions such as "def function_name()" that are located outside of a class is just called a "function"
        # Since methods are located inside a class, calling on methods would require for you to attach said method to an instance of the relevant class
        self.name = "Michael"
        self.email = "michael@codingdojo.com"
        self.account_balance = 0

guido = User()
guido.name = "Guido"
monty = User()
monty.name = "Monty"

print(guido.name, monty.name, guido.account_balance)
print(monty.name)
print(guido.bank_name)

guido.bank_name = "Dojo Credit Union"
print(guido.bank_name)
print(monty.bank_name)
User.bank_name = "Dojo Credit Union"
print(guido.bank_name)
print(monty.bank_name)




# MODIFIED CLASS CODE BLOCK (allows arguments to be passed upon instantation)
    # Instantation: the creation of a class *Instance*
    # In our example, Instantation would occur when a new user signs up for the bank app
class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0
guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")

print(guido.email)




# MODIFIED CLASS CODE BLOCK (with additional methods)
class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0
    # below is a method that changes the balance for a particular user
    # remember that the first parameter for all Methods inside a Class should be "self"
    def make_deposit(self, deposit_amount):
        self.account_balance += deposit_amount

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
guido.make_deposit(69.80)

print(guido.account_balance) # Terminal output would be 69.80 since Guido just added 69.80 to Guido's account_balance