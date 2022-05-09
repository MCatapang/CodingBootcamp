# Functional Programming
---
```toc
```
---

## History of JavaScript
- When JavaScript was initially being designed, it was envisioned that the language would work like Java
	- ==Java==: an OOP language which was, and is, still popular
- The creators of JavaScript wanted it to retain a syntax that at least superficially resembles Java
- Due to these envisioned goals, JavaScript became ==Multi-Paradigm==:
	- JavaScript can be written functionally
	- JavaScript can also be written OOP-ly
	- JavaScript can be written both functionally and OOP-ly


---

# Tenets of Functional Programming
1. **Be Transparent**: a function should return the same results every time the same input is passed
2. **Be Pure**: the values of the paramter passed in are not allowed to be changed
3. **Avoid Side Effects**: the function shouldn't make API calls, write to file-systems or databases, or print to console
4. **Never Be Void**: our functions should have a return value