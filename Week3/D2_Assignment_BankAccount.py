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

credit = BankAccount("Credit", 0.20, 600)
savings = BankAccount("Savings", 0.10, 100)

# print(credit.int_rate, credit.balance)
# print(credit.int_rate)
# print(credit.display_account_info())
# print(credit.yield_interest())

# credit.deposit(69).deposit(70).deposit(71).yield_interest().display_account_info()
# savings.deposit(69).deposit(420).withdraw(20).withdraw(10).withdraw(10).withdraw(10).yield_interest().display_account_info()