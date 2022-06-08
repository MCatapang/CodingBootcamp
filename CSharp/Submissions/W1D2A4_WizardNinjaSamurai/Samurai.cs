class Samurai : Human
{
    public Samurai(string name) : base(name)
    {
        Health = 200;
    }

    public override Samurai Attack(Human target)
    {
        if(IsTargetDead(target))
        {
            Console.WriteLine($"Wizards respect the dead; {target.Name} can't be attacked anymore.");
            return this;
        }
        if(target.Health < 50)
        {
            Console.WriteLine($"\"Your execution comes, {target.Name},\" says Samurai {Name}.");
            target.Health = 0;
            Console.WriteLine($"*silence* \n{target.Name} has been killed.");
            return this;
        }
        base.Attack(target);
        return this;
    }

    public Samurai FlowingBlade(Human target)
    {
        Console.WriteLine($"Samurai {Name} prepares a whirl of slashes...");
        for(int i=1; i<=7; i++)
        {
            base.Attack(target);
        }
        Console.WriteLine($"{target.Name}'s health was reduced to {target.Health}");
        return this;
    }

    public Samurai Meditate()
    {
        Health = 200;
        Console.WriteLine($"Samurai {Name} healed their self back to full health.");
        return this;
    }
}