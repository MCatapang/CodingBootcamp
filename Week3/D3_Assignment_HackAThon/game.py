from classes.ninja import Assassin, Ninja
from classes.pirate import Pirate, Swashbuckler



michelangelo = Assassin("Michelanglo")

jack_sparrow = Swashbuckler("Jack Sparrow")

def mortal_combat(attacker, defender):
    attacker.__class__.intro()
    defender.__class__.intro()
    while attacker.health > 0 and defender.health > 0:
        if attacker.health > 0:
            attacker.action(defender)
        if defender.health > 0:
            defender.action(attacker)
        else:
            defender.surrender()
            attacker.__class__.crowd(attacker.name)
        if attacker.health <= 0:
            attacker.surrender()
            defender.__class__.crowd(defender.name)

mortal_combat(jack_sparrow, michelangelo)
# jack_sparrow.show_stats()