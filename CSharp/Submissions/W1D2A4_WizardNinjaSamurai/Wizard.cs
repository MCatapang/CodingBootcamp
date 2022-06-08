class Wizard : Human
{
    public Wizard(string name) : base(name)
    {
        Health =  50;
        Intelligence = 25;
    }

    public override Wizard Attack(Human target)
    {
        if(IsTargetDead(target))
        {
            Console.WriteLine($"Wizards respect the dead; {target.Name} can't be attacked anymore.");
            return this;
        }
        int damage = Intelligence*5;
        target.Health -= damage;
        Health += damage;
        Console.WriteLine($"Wizard {Name} used magic to attack {target.Name}!");
        Console.WriteLine($"{target.Name}'s health is now {target.Health}");
        return this;
    }

    public Wizard Heal(Human target)
    {
        if(Health > 100)
        {
            Console.WriteLine($"Wizard {Name} already has full health!");
        }
        int heal = Intelligence*10;
        target.Health += heal;
        return this;
    }
}