class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account = BankAccount(name, 0.15, 0)
        # In the line of code above, setting the User attribute of
        # "account" equal to the BankAccount class, allows you to
        # access BankAccount method attributes using User instances
    def make_withdrawal(self, amount):
        self.account.balance -= amount
    def make_deposit(self, amount):
        self.account.balance += amount
        print(f"You made a deposit of ${amount:.2f}.")
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account.balance}")
    def transfer_money(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        self.display_user_balance()
        other_user.display_user_balance()

class BankAccount:
    def __init__(self, name, int_rate, balance=None): 
        self.name = name
        self.int_rate = int_rate
        if balance:
            self.balance = balance
        else:
            self.balance = 0
    # # Since the User methods access Bank Attributes directly,
    # # there is no need to keep the BankAccount methods below
    # # active. I personally think that inherent purpose in
    # # utilizing the functions below make them better suited to
    # # being in the BankAccount class, but the assignment
    # # requires that they be in the User class and so it
    # # shall be followed.
    # def deposit(self, amount):
    #     self.balance += amount
    #     print(f"You made a deposit of ${amount:.2f}.")
    #     return self
    # def withdraw(self, amount):
    #     self.balance -= amount
    #     print(f"You withdrew of ${amount:.2f}.")
    #     return self
    # def display_account_info(self):
    #     # Is there a way to potentially implement the two-decimal format below in
    #     # all of the numbers in BankAccount without having to individually place the 
    #     # {foobar:.2f} format method in every single line of code that displays money? Similar
    #     # to a wildcard tag in CSS?
    #     print(f"Your account balance now is ${self.balance:.2f}.")
    #     return self
    def yield_interest(self):
        interest = (self.balance * self.int_rate)
        self.balance += interest
        print(f"Your interest for this month was ${interest:.2f}.")
        return self

# the line of code above creates an instance of the User class
michael = User("Michael Catapang", "maocatap@gmail.com")
koby = User("Koby Outama", "koutama@gmail.com")


# # the print statement below accesses a BankAccount attribute
# # by using a User instance
# print(michael.account.int_rate)

# # The block of code below checks the balance before and 
# # after making a deposit.
# print(michael.account.balance)
# michael.make_deposit(120)
# print(michael.account.balance)

# The block of code below puts money in Michael's account, then
# transfers money from Michael's account into Koby's account.
michael.make_deposit(120)
michael.transfer_money(koby, 20)