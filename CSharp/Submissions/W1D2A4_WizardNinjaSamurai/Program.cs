Human michaelangelo = new Human("Michael Angelo");
Wizard raphael = new Wizard("Rafael");
Ninja leonardo = new Ninja("Leonardo");
Samurai donatello = new Samurai("Donatello");

// raphael.Attack(michaelangelo).Attack(michaelangelo).Heal(raphael);
// leonardo.Attack(michaelangelo).Attack(michaelangelo);
donatello.FlowingBlade(michaelangelo).Attack(michaelangelo).Attack(raphael).Attack(leonardo).Meditate();