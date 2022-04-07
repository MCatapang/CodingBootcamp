import random
from character import Character

class Ninja(Character):

    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.speed = 13
        self.health = 100
    
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack( self , pirate ):
        roll = random.randint(1, 20)
        if roll == 20:
            pirate.health -= (self.strength * 2)
            print(f'{self.name} added poison to his weapon, critical hit! {pirate.name} left with {pirate.health} health')
        elif roll >= pirate.speed:
            pirate.health -= self.strength
            print(f'{pirate.name} takes {self.strength} damage, left with {pirate.health} health.')
            return self
        elif roll < pirate.speed:
            print(f'{pirate.name} blocks with his cutlass!')

    def heal(self):
        self.health += 20
        print(f'{self.name} applied Tiger Balm and feels limber! Health is now {self.health}')

    def action(self, pirate):
        if self.health < 80:
            roll = random.randint(1, 20)
            if roll <= 5:
                self.heal()
            elif roll > 5:
                self.attack(pirate)
        else:
            self.attack(pirate)

    def surrender(self):
        print(f"{self.name} has surrendered!!!")

    @classmethod

    def intro(cls):
        print('Ninjas appear in a puff of smoke!')

    @staticmethod

    def crowd(victor):
        print(f'Ninjas cheer for {victor}!')

class Assassin(Ninja):

    def __init__(self, name):
        super().__init__(name)
        self.strength = 12
        self.health = 150

    @classmethod

    def intro(cls):
        print('Assassins appear from the shadows!')
    
    @staticmethod

    def crowd(victor):
        print(f'Assassins cheer for {victor}!')
