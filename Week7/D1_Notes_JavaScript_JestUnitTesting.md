# Jest Unit Testing
---
```toc
```

## Context
- Properly tested code == crucial to smoothly-working apps
- In order to remove bugs before code gets integrated into production code, we can write tests.
- ==Test-Driven Development== is therefore a must in order to prevent problems in production code.
	- Note that tests are written before the actual code
- The general steps for Test-Driven Development are as follows:
	1. Write failing tests for the relevant functionality
	2. Build out a working implementation of the needed functionality
	3. Refactor your code as needed to ensure your tests pass
- There are different types of tests (e.g., unit, integration, end-to-end, acceptance)
- ==Jest==: a JavaScript testing framework; the focus of this chapter


## Jest: Set-Up
1. In your terminal, run `npm i --save-dev jest` to install Jest
	- The command above adds Jest to your `npm` project as a dev dependency
	- ==Dev Dependency==: a dependency used only in the app development process
2. Add a script which will watch for any file changes:
	```json
	...
		"scripts": {
			"test": "jest",
			"test:watch": "jest --watch"
		}
		...
	```
3. Run your script with `npm run test` in the terminal