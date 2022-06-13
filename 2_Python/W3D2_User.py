class User:
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account_balance = 0
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


michael = User("Michael Catapang", "maocatapa@gmail.com")
koby = User("Koby Outama", "koutama@gmail.com")
eunice = User("Eunice Lew", "elew@gmail.com")

michael.make_deposit(420)
michael.make_deposit(420)
michael.make_deposit(420)
michael.make_withdrawal(69)
michael.display_user_balance()

koby.make_deposit(420)
koby.make_deposit(420)
koby.make_withdrawal(69)
koby.make_withdrawal(69)
koby.display_user_balance()

eunice.make_deposit(69)
eunice.make_withdrawal(420)
eunice.make_withdrawal(420)
eunice.make_withdrawal(420)
eunice.display_user_balance()

michael.transfer_money(eunice, 1190)