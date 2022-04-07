class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account_balance = BankAccount(int_rate=0.15, balance=0)
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def make_deposit(self, amount):
        self.account_balance += amount
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
    def transfer_money(self, user, amount):
        self.account_balance -= amount
        user.account_balance += amount
        self.display_user_balance()
        user.display_user_balance()

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

