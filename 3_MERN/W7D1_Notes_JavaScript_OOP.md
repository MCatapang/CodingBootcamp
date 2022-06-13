# JavaScript OOP
---
```toc
```
---

## Context
- ==Object-Oriented Programming==: a way to program based on objects
- Benefits of OOP include:
	- Saving you loads of time
	- Helping you to avoid repeating code to solve the same simple program
	- Making the maintenance of your code easy and effective
- Understanding OOP is the key to making your code organized and modular


---

## JavaScript's OOP – Basics
- JavaScript utilizes a functional programming style
	- ==Functional Programming==: a way of programming that doesn't have Classes as a core part of the language
- JavaScript isn't inherently object-oriented
	- However, OOP-style code is still utilized in JavaScript (e.g., pairing JS objects and functions to create Constructors that **mimic** OOP)


---

## JavaScript's OOP – Class and Constructor
- With the introductin of ES6, JavaScript now has a `Class` keyword
	```js
	// Class
	class Vehicle {
		constructor(manufacturer, model, color) {
			this.miles = 0;
			this.manufacturer = manufacturer;
			this.model = model;
			this.color = color;
		}
		drive() {
			this.miles += 10;
		}
	}
	```
	- ==`constructor()`==: a special method of `class` used to create and initialize an object instance of that class
		- All ES6 classes have a constructor
		- Always runs whenever we create a new instance
- Creating an instance of the `Vehicle` class would look like:
	```js
	const lightningMcQueen = new Vehicle("Chevrolet", "Corvette C6", "red");
	```
- Using a new instance of the `Vehicle` class named `lightningMcQueen` would look like:
	```js
	const lightningMcQueen = new Vehicle("Chevrolet", "Corvette C6", "red");
	lightningMcQueen.drive();
	console.log(lightningMcQueen.miles);
	```
- **NOTE**: Classes are not hoisted. No matter what, the `class` keyword will stay where it was written and not move during interpretation.


---

## JavaScript's OOP – Inheritance and Super
- With the introduction of ES6, inheritance uses the `extends` keyword to define new classes that inherit from existing classes
	```js
	class Vehicle {
		constructor(manufacturer, model, color) {
			this.miles = 0;
			this.manufacturer = manufacturer;
			this.model = model;
			this.color = color;
		}
		drive() {
			this.miles += 10;
		}
	}
	
	const lightningMcQueen = new Vehicle("Chevrolet", "Corvette C6", "red");
	lightningMcQueen.drive(); // lightningMcQueen's miles is now == 10
	
	class SuperVehicle extends Vehicle {
		constructor(color) {
			super("Chevrolet", "Corvette C6", color);
			this.hp = 616;
		}
		printSpecs() {
			console.log(`This supervehicle has ${this.hp} HP!`);
		}
	} 
	```
	- ==`super()`==: a special function that allows us to call the `constructor()` of the parent class.
		- In the example above, we passed in three things as arguments (`"Chevrolet", "Corvette C6", color`)  to our `super()` 
		- This is because the `constructor()` of  the parent class, `Vehicle`,had three parameters (manufacturer, model, and color).
- `super()` can also be used to call on functions specific to the parent `class`
	```js
	class Vehicle {
		constructor(manufacturer, model, color) {
			this.miles = 0;
			this.manufacturer = manufacturer;
			this.model = model;
			this.color = color;
		}
		drive() {
			this.miles += 10;
		}
		allVehiclesVroom() {
			const message = "VROOM! VROOOOOOM! VROOOOOOOOOOOOOOM!";
			return message;
		}
	}
	
	class SuperVehicle extends Vehicle {
		constructor(color) {
			super("Chevrolet", "Corvette C6", color);
			this.hp = 616;
		}
		printSpecs() {
			console.log(`This supervehicle has ${this.hp} HP!`);
		}
		vroom() {
			const outputMessage = allVehiclesVroom();
			console.log(outputMessage);
			// "VROOM! VROOOOOOM! VROOOOOOOOOOOOOOM!"
		}
	} 
	
	const jacksonStorm = new SuperVehicle("blue");
	jacksonStorm.vroom(); // "VROOM! VROOOOOOM! VROOOOOOOOOOOOOOM!"
	```