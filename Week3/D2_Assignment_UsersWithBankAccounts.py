class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account = BankAccount(name, 0.15, 0)
        # In the line of code above, setting the User attribute of
        # "account" equal to the BankAccount class, allows you to
        # access BankAccount method attributes using User instances

class BankAccount:
    def __init__(self, name, int_rate, balance=None): 
        self.name = name
        self.int_rate = int_rate
        if balance:
            self.balance = balance
        else:
            self.balance = 0
    def deposit(self, amount):
        self.balance += amount
        print(f"You made a deposit of ${amount:.2f}.")
        return self
    def withdraw(self, amount):
        self.balance -= amount
        print(f"You withdrew of ${amount:.2f}.")
        return self
    def display_account_info(self):
        # Is there a way to potentially implement the two-decimal format below in
        # all of the numbers in BankAccount without having to individually place the 
        # {foobar:.2f} format method in every single line of code that displays money? Similar
        # to a wildcard tag in CSS?
        print(f"Your account balance now is ${self.balance:.2f}.")
        return self
    def yield_interest(self):
        interest = (self.balance * self.int_rate)
        self.balance += interest
        print(f"Your interest for this month was ${interest:.2f}.")
        return self


michael = User("Michael Catapang", "maocatap@gmail.com")
    # the line of code above creates an instance of the User class
print(michael.account.int_rate)
    # the print statement above accesses a BankAccount attribute
    # by using a User instance