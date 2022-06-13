import random

from character import Character

class Pirate(Character):

    def __init__( self , name ):
        super().__init__()
        # self.name = name
        # self.strength = 15
        # self.speed = 10
        # self.health = 100

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack ( self , ninja ):
        roll = random.randint(1, 20)
        if roll == 20:
            ninja.health -= (self.strength * 2)
            print(f'{self.name} uses hand cannon, critical hit! {ninja.name} left with {ninja.health} health')
        elif roll > ninja.speed:
            ninja.health -= self.strength
            print(f'{ninja.name} takes {self.strength} damage, left with {ninja.health} health.')
            return self
        elif roll < ninja.speed:
            print(f'{ninja.name} deployed a smoke bomb!')

    def heal(self):
        self.health += 20
        print(f'{self.name} eats an orange! Health is now {self.health}')

    def action(self, ninja):
        if self.health < 80:
            roll = random.randint(1, 20)
            if roll <= 5:
                self.heal()
            elif roll > 5:
                self.attack(ninja)
        else:
            self.attack(ninja)

    def surrender(self):
        print(f"{self.name} has surrendered!!!")

    @classmethod

    def intro(cls):
        print('Pirates cross their gangplank!')

    @staticmethod

    def crowd(victor):
        print(f'Pirates cheer for {victor}!')

class Swashbuckler(Pirate):

    def __init__(self, name):
        super().__init__(name)
        self.speed = 12
        self.health = 150

    @classmethod

    def intro(cls):
        print('Swashbucklers swing in off a rope!')

    @staticmethod

    def crowd(victor):
        print(f'Swashbucklers cheer for {victor}!')