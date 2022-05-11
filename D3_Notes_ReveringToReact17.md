# Reverting to React 17
---
```toc
```
---

## Context
- `npx create-react-app` builds React applications to the newest stable version of React
- The **Coding Dojo** *Learning Platform* is currently written for React 17 – an older version of React as of 03/01/2022.
- We still want to use `creat-react-app` but we also still want version 17
	- Without these two things, we can't use React Router as described in the next chapters.
- As such, we need to downgrade our React from version 18 to version 17 for our subsequent projects.


---

## React Downgrading – Walkthrough
1. After running `npx create-react-app project-folder`, navigate to your **package.json**...
	![image | 600](https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1652137572__packagejson.png)
	- Replace:
		```json
		"react": "^18.1.0",
		"react-dom": "^18.1.0",
		```
	- With:
		```json
		"react": "^17.0.2",
		"react-dom": "^17.0.2",
		```
2. Update **index.js** inside your **src** folder
	- Replace: 
	```js
	import ReactDom from 'react-dom/client'
	```
	- with:
	```js
	import ReactDom from 'react-dom';
	```