class Human
{
    public string Name { get; set; }
    public int Strength { get; set; }
    public int Intelligence { get; set; }
    public int Dexterity { get; set; }
    public int Health { get; set; }



    public Human(string name, int str, int intel, int dex, int hp)
    {
        Name = name;
        Strength = str;
        Intelligence = intel;
        Dexterity = dex;
        Health = hp;
    }

    public Human(string name)
    {
        Name = name;
        Strength = 3;
        Intelligence = 3;
        Dexterity = 3;
        Health = 100;
    }

    // Build Attack method
    public virtual Human Attack(Human target)
    {
        if(IsTargetDead(target))
        {
            Console.WriteLine($"{Name} defeated {target.Name}!");
            return this;
        }
        int dmg = Strength * 3;
        target.Health -= dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
        return this;
    }

    public virtual Boolean IsTargetDead(Human target)
    {
        return
        (
            target.Health <= 0 ? true : false
        );
    }
}