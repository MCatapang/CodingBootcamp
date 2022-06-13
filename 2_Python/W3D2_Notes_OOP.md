# Object Oriented Programming (OOP)

### Classes
- Declaring a variable is the same as creating an *instance* of a class.
    ```py
    x = [1,2,3]
    ```
    - In the example above, you declared the variable ```x``` which is an *instance* of some class
    - **Instance** = an object that follows the pattern defined by its class.
- E.g., in a banking application...
    - there would be a User class:
        ```py
        class User:
            pass #more on what "pass" is later
        ```
    - and this is how we would create a new instance of our class:
        ```py
        michael = User()
        anna = User()
        ```
    - you declared the variables ```michael``` and ```anna``` (i.e., you created an *instance* of the User class)

### Attributes
- Dunder "In It": an instance *Method* that defines Instance attributes.
    ```py
    class User:
        def __init__(self)
            self.name = "Michael"
            self.email = "michael@codingdojo.com"
            self.account_balance = 0
    ```
- The first parameter of an instance ```method``` within a class will be ```self```.
    - Instance *attributes* are also indicated by ```self```
    - ```self``` is a reference to the *Instance*, not the Class


