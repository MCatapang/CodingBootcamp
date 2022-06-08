class Ninja : Human
{
    public Ninja(string name) : base(name)
    {
        Dexterity = 175;
    }

    public override Ninja Attack(Human target)
    {
        if(IsTargetDead(target))
        {
            Console.WriteLine($"Ninja {Name} has already swiftly fallen {target.Name}! No more attacks allowed.");
            return this;
        }

        Random rand = new Random();
        int randomNumber = rand.Next(0, 5);
        int damage = 5*Dexterity;

        target.Health -= damage;
        string message = $"{Name} ninja-swiped {target.Name}; {target.Name}'s health is now {target.Health}.";
        if(randomNumber <= 2)
        {
            target.Health -= 10;
            message += $"\nCritical Hit! 10 more damage was dealt to {target.Name}. \n{target.Name}'s health is now {target.Health}";
        }
        Console.WriteLine(message);
        return this;
    }

    public Ninja Steal(Human target)
    {
        if(IsTargetDead(target))
        {
            Console.WriteLine($"{target.Name} is already defeated! There's no health to steal.");
            return this;
        }
        int stolenHealth = 5;
        target.Health -= stolenHealth;
        Health += stolenHealth;
        Console.WriteLine($"Ninja {Name} stole {stolenHealth} health from {target.Name}!");
        Console.WriteLine($"Ninja {Name}'s health is now {Health}; {target.Name}'s health is now {target.Health}.");
        return this;
    }
}