import random

class Character:

    def __init__( self , name ):
        self.name = name
        self.strength = 15
        self.speed = 10
        self.health = 100

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack ( self , target ):
        roll = random.randint(1, 20)
        if roll == 20:
            target.health -= (self.strength * 2)
            print(f'{self.name} uses hand cannon, critical hit! {target.name} left with {target.health} health')
        elif roll > target.speed:
            target.health -= self.strength
            print(f'{target.name} takes {self.strength} damage, left with {target.health} health.')
            return self
        elif roll < target.speed:
            print(f'{target.name} deployed a smoke bomb!')

    def heal(self):
        self.health += 20
        print(f'{self.name} eats an orange! Health is now {self.health}')

    def action(self, target):
        if self.health < 80:
            roll = random.randint(1, 20)
            if roll <= 5:
                self.heal()
            elif roll > 5:
                self.attack(target)
        else:
            self.attack(target)

    def surrender(self):
        print(f"{self.name} has surrendered!!!")

    @classmethod

    def intro(cls):
        print('Pirates cross their gangplank!')

    @staticmethod

    def crowd(victor):
        print(f'Pirates cheer for {victor}!')